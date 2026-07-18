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
const Anthropic = require('@anthropic-ai/sdk');

initializeApp();
const db = getFirestore();

const MP_ACCESS_TOKEN = defineSecret('MP_ACCESS_TOKEN');
const MP_WEBHOOK_SECRET = defineSecret('MP_WEBHOOK_SECRET');
const ANTHROPIC_API_KEY = defineSecret('ANTHROPIC_API_KEY');

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

// ── mercadoPagoWebhook ───────────────────────────────────────────────
// Endpoint público que o MP chama quando a assinatura muda de estado.
// Nunca confia no payload: busca o preapproval na API do MP (com o nosso
// access token) e usa ESSA resposta como fonte da verdade.
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

    // Fonte da verdade: o preapproval buscado com o NOSSO token. Um id de
    // outra conta de vendedor não resolve aqui (404) — impossível forjar.
    const resp = await fetch(`https://api.mercadopago.com/preapproval/${dataId}`, {
      headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN.value()}` },
    });
    if (!resp.ok) {
      console.warn('[webhook] preapproval não encontrado:', dataId, resp.status);
      // 200 mesmo assim: não é um erro nosso que o retry do MP resolveria.
      res.status(200).send('not found');
      return;
    }
    const sub = await resp.json();

    const [uid, planId] = String(sub.external_reference || '').split('|');
    const plan = PLANS[planId];
    if (!uid || !plan) {
      console.warn('[webhook] external_reference inesperado:', sub.external_reference);
      res.status(200).send('bad reference');
      return;
    }

    // Cinto de segurança: o valor cobrado tem que ser o do plano.
    const amount = sub.auto_recurring?.transaction_amount;
    if (typeof amount === 'number' && amount < plan.amount) {
      console.error('[webhook] valor abaixo do plano — ignorando:', dataId, amount);
      res.status(200).send('amount mismatch');
      return;
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
        lastEvent: { type: String(type), at: FieldValue.serverTimestamp() },
      },
      { merge: true }
    );

    console.log(`[webhook] ${uid} → ${grant.plan}/${grant.planTier} (sub ${sub.id}, status ${status})`);
    res.status(200).send('ok');
  }
);

// ── explainQuestion — Dr. Quest IA ───────────────────────────────────
// Gera a explicação de uma questão que não tem gabarito comentado.
// Cache agressivo no Firestore: cada questão é explicada UMA vez na vida
// (explanations/{questionId}); depois disso todo mundo lê do cache e o
// custo de IA daquela questão é zero para sempre.

// Limite diário de GERAÇÕES por usuário (leituras do cache não contam).
// Protege contra abuso do endpoint como "LLM grátis".
const AI_DAILY_LIMIT = 30;

const EXPLAIN_SYSTEM = `Você é o Dr. Quest, tutor de medicina do app MedQuest (questões de provas de residência médica brasileiras).
Sua tarefa: explicar o gabarito da questão em português do Brasil, em até 120 palavras, texto corrido (sem markdown, sem cabeçalhos), em 1 ou 2 parágrafos:
1) Por que a alternativa correta está correta — o raciocínio clínico central.
2) Brevemente por que as demais estão erradas (agrupe quando fizer sentido).
Tom didático, nível de prova de residência. Baseie-se apenas no enunciado; não invente dados clínicos. Se a questão for ambígua, explique a interpretação mais aceita em prova.`;

exports.explainQuestion = onCall(
  { region: REGION, secrets: [ANTHROPIC_API_KEY], timeoutSeconds: 120 },
  async (request) => {
    const auth = request.auth;
    if (!auth) {
      throw new HttpsError('unauthenticated', 'Faça login para pedir explicações.');
    }

    // Validação estrita do payload — este endpoint nunca pode virar um
    // proxy de LLM genérico.
    const { questionId, text, options, correctIndex } = request.data || {};
    if (
      typeof questionId !== 'string' || !/^[\w-]{1,80}$/.test(questionId) ||
      typeof text !== 'string' || text.length < 10 || text.length > 4000 ||
      !Array.isArray(options) || options.length < 2 || options.length > 6 ||
      options.some((o) => typeof o !== 'string' || o.length === 0 || o.length > 600) ||
      !Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex >= options.length
    ) {
      throw new HttpsError('invalid-argument', 'Questão inválida.');
    }

    // 1. Cache: já explicada? Devolve sem gastar IA.
    const cacheRef = db.collection('explanations').doc(questionId);
    const cached = await cacheRef.get();
    if (cached.exists) {
      return { explanation: cached.data().text, cached: true };
    }

    // 2. Limite diário de gerações por usuário.
    const today = new Date().toISOString().slice(0, 10);
    const usageRef = db.collection('aiUsage').doc(auth.uid);
    const usage = await usageRef.get();
    const usageData = usage.exists ? usage.data() : {};
    const usedToday = usageData.date === today ? usageData.count || 0 : 0;
    if (usedToday >= AI_DAILY_LIMIT) {
      throw new HttpsError('resource-exhausted', 'Limite diário de explicações atingido. Volta amanhã!');
    }

    // 3. Gera com o Claude.
    const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY.value() });
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const userPrompt = [
      `Questão: ${text}`,
      '',
      ...options.map((o, i) => `${letters[i]}) ${o}`),
      '',
      `Gabarito oficial: ${letters[correctIndex]}`,
    ].join('\n');

    let explanation;
    try {
      const response = await anthropic.messages.create({
        model: 'claude-opus-4-8',
        max_tokens: 16000,
        thinking: { type: 'adaptive' },
        system: EXPLAIN_SYSTEM,
        messages: [{ role: 'user', content: userPrompt }],
      });
      const textBlock = response.content.find((b) => b.type === 'text');
      explanation = textBlock?.text?.trim();
    } catch (e) {
      console.error('[explainQuestion] falha na API:', e?.status, e?.message);
      throw new HttpsError('internal', 'O Dr. Quest não conseguiu analisar agora. Tenta de novo.');
    }
    if (!explanation) {
      throw new HttpsError('internal', 'O Dr. Quest não conseguiu analisar agora. Tenta de novo.');
    }

    // 4. Salva no cache global + contabiliza o uso.
    await cacheRef.set({
      text: explanation,
      questionId,
      model: 'claude-opus-4-8',
      generatedBy: auth.uid,
      createdAt: FieldValue.serverTimestamp(),
    });
    await usageRef.set({ date: today, count: usedToday + 1 }, { merge: true });

    return { explanation, cached: false };
  }
);
