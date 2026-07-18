# Ativar os pagamentos (Mercado Pago) — passo a passo

O código do checkout já está pronto (paywall no app + `functions/`). Falta só
plugar as credenciais — **elas nunca vão pro Git**, ficam no Secret Manager
do Firebase. São 4 passos, uns 10 minutos.

## 1. Pegar o Access Token do Mercado Pago

1. Acesse https://www.mercadopago.com.br/developers/panel/app
2. Crie uma aplicação (ou use uma existente) → **Credenciais de produção**
3. Copie o **Access Token** (começa com `APP_USR-`)

> Para testar sem cobrar de verdade, use as **credenciais de teste** primeiro
> e depois troque o secret pelo token de produção.

## 2. Guardar o token no Firebase

No terminal, na pasta do projeto:

```bash
npx firebase-tools functions:secrets:set MP_ACCESS_TOKEN
# cola o Access Token quando pedir
```

## 3. Fazer o primeiro deploy das functions

```bash
npx firebase-tools deploy --only functions,firestore:rules
```

Ao final ele mostra a URL do webhook, algo como:

```
https://southamerica-east1-medquest-fb341.cloudfunctions.net/mercadoPagoWebhook
```

## 4. Configurar o webhook no painel do Mercado Pago

1. No painel da aplicação → **Webhooks** → *Configurar notificações*
2. URL: a URL do passo 3
3. Eventos: marque **Planos e assinaturas** (`subscription_preapproval`)
4. Salve — o painel mostra a **assinatura secreta**. Copie e rode:

```bash
npx firebase-tools functions:secrets:set MP_WEBHOOK_SECRET
# cola a assinatura secreta quando pedir

# redeploy pra função passar a usar o secret novo
npx firebase-tools deploy --only functions
```

## 5. Publicar o app

```bash
npm run deploy   # build + hosting
```

## Como testar

1. Entre no app com uma conta de e-mail (convidado não pode assinar)
2. Responda 10 questões → o paywall abre (ou toque no contador azul do header)
3. Assine com um cartão de teste do MP (painel → Credenciais de teste → cartões)
4. Ao voltar pro app, o modal "Confirmando pagamento…" vira "Bem-vindo ao
   Premium!" sozinho quando o webhook confirmar (segundos)

## Como funciona por dentro (resumo de segurança)

- O preço mora em `functions/index.js` (`PLANS`) — o app só manda o id do
  plano; ninguém consegue pagar R$ 1 alterando o front.
- O webhook valida o `x-signature` (HMAC) e **ignora o payload**: busca a
  assinatura na API do MP com o nosso token e usa essa resposta como verdade.
- O cliente **não consegue** escrever `plan`/`planTier` no Firestore
  (bloqueado nas rules) — só o Admin SDK do webhook.
- Cancelou/atrasou no MP → o webhook rebaixa pra `free` automaticamente.
