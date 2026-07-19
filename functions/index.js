// Backend de pagamentos do MedQuest (Mercado Pago Assinaturas).
//
// Duas funções:
//   createSubscription  — callable; cria a assinatura (preapproval) no MP e
//                         devolve a URL de checkout. Preço definido AQUI, no
//                         servidor — o cliente só manda o id do plano.
//   mercadoPagoWebhook  — HTTP; recebe as notificações do MP, valida a
//                         assinatura HMAC e sincroniza o plano do usuário no
//                         Firestore via Admin SDK (as regras do Firestore
//                         proíbem o cliente de escrever o próprio `plan`).
//
// Segredos (Firebase Secret Manager — nunca no código):
//   MP_ACCESS_TOKEN    — Access Token de produção do Mercado Pago
//   MP_WEBHOOK_SECRET  — "assinatura secreta" configurada no painel de
//                        webhooks do MP (usada pra validar o x-signature)

const { onRequest, onCall, HttpsError } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const crypto = require('crypto');

initializeApp();
const db = getFirestore();

const MP_ACCESS_TOKEN = defineSecret('MP_ACCESS_TOKEN');
const MP_WEBHOOK_SECRET = defineSecret('MP_WEBHOOK_SECRET');

// Mesma região do Firestore do projeto (southamerica-east1 = São Paulo).
const REGION = 'southamerica-east1';

// URL pública do app (retorno do checkout).
const APP_URL = 'https://medquest-fb341.web.app';

// Fonte da verdade dos planos. O cliente NUNCA envia valor — só o id.
const PLANS = {
  estudante: { amount: 29.9, title: 'MedQuest Premium — Trilha Estudante' },
  residencia: { amount: 79.9, title: 'MedQuest Premium — Trilha Residência' },
};

// ── createSubscription ───────────────────────────────────────────────
// Cria um preapproval (assinatura mensal) no Mercado Pago em nome do
// usuário logado e devolve a URL de checkout (init_point).
exports.createSubscription = onCall(
  { region: REGION, secrets: [MP_ACCESS_TOKEN] },
  async (request) => {
    const auth = request.auth;
    if (!auth) {
      throw new HttpsError('unauthenticated', 'Faça login para assinar.');
    }

    // Convidado (login anônimo) não tem e-mail — e o MP exige o e-mail do
    // pagador. O app orienta a criar conta antes de assinar.
    const email = auth.token.email;
    const isAnonymous = auth.token.firebase?.sign_in_provider === 'anonymous';
    if (isAnonymous || !email) {
      throw new HttpsError(
        'failed-precondition',
        'Crie uma conta com e-mail para assinar o Premium.'
      );
    }

    const planId = request.data?.planId;
    const plan = PLANS[planId];
    if (!plan) {
      throw new HttpsError('invalid-argument', 'Plano inválido.');
    }

    const body = {
      reason: plan.title,
      // external_reference é como o webhook descobre de quem é a assinatura.
      external_reference: `${auth.uid}|${planId}`,
      payer_email: email,
      back_url: `${APP_URL}/?checkout=retorno`,
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months',
        transaction_amount: plan.amount,
        currency_id: 'BRL',
      },
    };

    const resp = await fetch('https://api.mercadopago.com/preapproval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${MP_ACCESS_TOKEN.value()}`,
      },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error('[createSubscription] MP recusou:', resp.status, errText);
      throw new HttpsError('internal', 'Não foi possível iniciar o checkout. Tente de novo.');
    }

    const data = await resp.json();

    // Registro de auditoria da assinatura (o webhook atualiza o status).
    await db.collection('subscriptions').doc(String(data.id)).set({
      uid: auth.uid,
      planId,
      amount: plan.amount,
      status: data.status || 'pending',
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    return { id: data.id, initPoint: data.init_point };
  }
);

// ── Validação do x-signature do Mercado Pago ─────────────────────────
// O MP assina cada notificação com HMAC-SHA256 sobre o manifesto
// "id:<data.id>;request-id:<x-request-id>;ts:<ts>;" usando a assinatura
// secreta do painel. Notificação sem assinatura válida é descartada.
function isValidSignature(req, secret) {
  const signature = req.headers['x-signature'];
  const requestId = req.headers['x-request-id'];
  if (!signature || typeof signature !== 'string') return false;

  const parts = Object.fromEntries(
    signature.split(',').map((p) => p.trim().split('=', 2))
  );
  const ts = parts.ts;
  const v1 = parts.v1;
  if (!ts || !v1) return false;

  const dataId = req.query['data.id'] || req.body?.data?.id || '';

  let manifest = '';
  if (dataId) manifest += `id:${String(dataId).toLowerCase()};`;
  if (requestId) manifest += `request-id:${requestId};`;
  manifest += `ts:${ts};`;

  const expected = crypto.createHmac('sha256', secret).update(manifest).digest('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(v1, 'hex'));
  } catch {
    return false;
  }
}

// Status do preapproval → plano do usuário no app.
function planForStatus(status, planId) {
  if (status === 'authorized') {
    return { plan: 'premium', planTier: planId };
  }
  // cancelled / paused / expired / pending → sem premium
  return { plan: 'free', planTier: 'free' };
}

// ── Sincronização de uma assinatura (fonte única de verdade) ─────────
// Busca o preapproval na API do MP com o NOSSO token (nunca confia em
// payload externo) e grava o plano no Firestore. Usada tanto pelo webhook
// quanto pela reconciliação no retorno do checkout — o Mercado Pago pode
// atrasar ou, no sandbox, às vezes nem entregar a notificação assíncrona,
// então o app não pode depender só dela para o usuário virar Premium.
//
// `expectedUid`, quando informado, é conferido contra o external_reference
// antes de gravar nada — impede um usuário reconciliar a assinatura de outra
// pessoa forjando um preapproval_id que não é seu.
async function syncSubscription(dataId, accessToken, eventType, expectedUid) {
  const resp = await fetch(`https://api.mercadopago.com/preapproval/${dataId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!resp.ok) {
    return { ok: false, reason: 'not_found' };
  }
  const sub = await resp.json();

  const [uid, planId] = String(sub.external_reference || '').split('|');
  const plan = PLANS[planId];
  if (!uid || !plan) {
    return { ok: false, reason: 'bad_reference' };
  }
  if (expectedUid && uid !== expectedUid) {
    return { ok: false, reason: 'uid_mismatch' };
  }

  // Cinto de segurança: o valor cobrado tem que ser o do plano.
  const amount = sub.auto_recurring?.transaction_amount;
  if (typeof amount === 'number' && amount < plan.amount) {
    return { ok: false, reason: 'amount_mismatch' };
  }

  const status = sub.status;
  const grant = planForStatus(status, planId);

  await db.collection('users').doc(uid).set(
    {
      plan: grant.plan,
      planTier: grant.planTier,
      subscription: {
        id: String(sub.id),
        planId,
        status,
        updatedAt: new Date().toISOString(),
      },
    },
    { merge: true }
  );

  await db.collection('subscriptions').doc(String(sub.id)).set(
    {
      uid,
      planId,
      status,
      amount: amount ?? plan.amount,
      updatedAt: FieldValue.serverTimestamp(),
      lastEvent: { type: String(eventType), at: FieldValue.serverTimestamp() },
    },
    { merge: true }
  );

  return { ok: true, uid, plan: grant.plan, planTier: grant.planTier, status };
}

// ── mercadoPagoWebhook ───────────────────────────────────────────────
// Endpoint público que o MP chama quando a assinatura muda de estado.
exports.mercadoPagoWebhook = onRequest(
  { region: REGION, secrets: [MP_ACCESS_TOKEN, MP_WEBHOOK_SECRET] },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('method not allowed');
      return;
    }

    if (!isValidSignature(req, MP_WEBHOOK_SECRET.value())) {
      console.warn('[webhook] assinatura inválida — notificação descartada');
      res.status(401).send('invalid signature');
      return;
    }

    const type = req.query.type || req.body?.type || req.query.topic || '';
    const dataId = req.query['data.id'] || req.body?.data?.id;

    // Só assinaturas nos interessam; outros eventos (payment etc.) são
    // confirmados com 200 pra o MP não ficar reenviando.
    const isPreapproval = String(type).includes('preapproval') || String(type).includes('subscription');
    if (!isPreapproval || !dataId) {
      res.status(200).send('ignored');
      return;
    }

    const result = await syncSubscription(dataId, MP_ACCESS_TOKEN.value(), type);
    if (!result.ok) {
      console.warn('[webhook]', result.reason, dataId);
      // 200 mesmo assim: não é um erro nosso que o retry do MP resolveria.
      res.status(200).send(result.reason);
      return;
    }

    console.log(`[webhook] ${result.uid} → ${result.plan}/${result.planTier} (sub ${dataId}, status ${result.status})`);
    res.status(200).send('ok');
  }
);

// ── reconcileSubscription ────────────────────────────────────────────
// Callable chamada pelo APP assim que o usuário volta do checkout do MP
// (tela de retorno com ?preapproval_id=...). Não espera o webhook — busca
// o status na hora e libera o Premium imediatamente se já estiver
// aprovado. O webhook continua ativo por trás para eventos futuros
// (renovação mensal, cancelamento) que não têm uma "volta ao site".
exports.reconcileSubscription = onCall(
  { region: REGION, secrets: [MP_ACCESS_TOKEN] },
  async (request) => {
    const auth = request.auth;
    if (!auth) {
      throw new HttpsError('unauthenticated', 'Faça login para continuar.');
    }
    const preapprovalId = request.data?.preapprovalId;
    if (typeof preapprovalId !== 'string' || !/^[\w-]{1,64}$/.test(preapprovalId)) {
      throw new HttpsError('invalid-argument', 'ID de assinatura inválido.');
    }

    const result = await syncSubscription(preapprovalId, MP_ACCESS_TOKEN.value(), 'reconcile', auth.uid);
    if (!result.ok) {
      console.warn('[reconcile]', auth.uid, result.reason, preapprovalId);
      throw new HttpsError('not-found', 'Não encontramos essa assinatura.');
    }

    console.log(`[reconcile] ${result.uid} → ${result.plan}/${result.planTier} (sub ${preapprovalId}, status ${result.status})`);
    return { plan: result.plan, planTier: result.planTier, status: result.status };
  }
);

// ── changePlan ────────────────────────────────────────────────────────
// Callable pra trocar de trilha (Estudante ↔ Residência) sem passar pelo
// checkout de novo — o cartão já está autorizado, só atualiza o valor e a
// referência da cobrança recorrente na MESMA assinatura (PUT /preapproval).
exports.changePlan = onCall(
  { region: REGION, secrets: [MP_ACCESS_TOKEN] },
  async (request) => {
    const auth = request.auth;
    if (!auth) {
      throw new HttpsError('unauthenticated', 'Faça login para continuar.');
    }
    const newPlanId = request.data?.planId;
    const newPlan = PLANS[newPlanId];
    if (!newPlan) {
      throw new HttpsError('invalid-argument', 'Plano inválido.');
    }

    const userSnap = await db.collection('users').doc(auth.uid).get();
    const sub = userSnap.data()?.subscription;
    if (!sub?.id || sub.status !== 'authorized') {
      throw new HttpsError('failed-precondition', 'Você não tem uma assinatura ativa pra trocar.');
    }
    if (sub.planId === newPlanId) {
      throw new HttpsError('failed-precondition', 'Você já está nesse plano.');
    }

    const resp = await fetch(`https://api.mercadopago.com/preapproval/${sub.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${MP_ACCESS_TOKEN.value()}`,
      },
      body: JSON.stringify({
        reason: newPlan.title,
        external_reference: `${auth.uid}|${newPlanId}`,
        auto_recurring: { transaction_amount: newPlan.amount, currency_id: 'BRL' },
      }),
    });
    if (!resp.ok) {
      const errText = await resp.text();
      console.error('[changePlan] MP recusou:', resp.status, errText);
      throw new HttpsError('internal', 'Não foi possível trocar de plano agora. Tente de novo.');
    }

    // Relê a assinatura já atualizada no MP e sincroniza o Firestore —
    // mesma função usada pelo webhook e pela reconciliação, fonte única.
    const result = await syncSubscription(sub.id, MP_ACCESS_TOKEN.value(), 'change_plan', auth.uid);
    if (!result.ok) {
      console.error('[changePlan] sync falhou após PUT bem-sucedido:', result.reason, sub.id);
      throw new HttpsError('internal', 'Plano trocado no Mercado Pago, mas houve um erro ao atualizar aqui. Recarregue a página em instantes.');
    }

    console.log(`[changePlan] ${auth.uid}: ${sub.planId} → ${result.planTier} (sub ${sub.id})`);
    return { plan: result.plan, planTier: result.planTier, status: result.status };
  }
);
