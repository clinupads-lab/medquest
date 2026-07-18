# Ativar o Dr. Quest IA (explicações automáticas) — passo a passo

O código já está pronto: quando uma questão não tem explicação, o app chama a
Cloud Function `explainQuestion`, que gera o comentário com o Claude
(`claude-opus-4-8`) e salva no Firestore — **cada questão é explicada uma vez
na vida**; depois todo mundo lê do cache e o custo daquela questão é zero.

Falta só a chave da API (fica no Secret Manager, nunca no Git nem no app).

## 1. Pegar a chave da Anthropic

1. Acesse https://platform.claude.com/ e entre (ou crie conta)
2. **API Keys** → *Create key* → copie a chave (começa com `sk-ant-`)
3. Adicione créditos em *Billing* se ainda não tiver

## 2. Guardar no Firebase

```bash
npx firebase-tools functions:secrets:set ANTHROPIC_API_KEY
# cola a chave quando pedir
```

## 3. Deploy

```bash
npx firebase-tools deploy --only functions
```

> O deploy exige que os três secrets existam (MP_ACCESS_TOKEN,
> MP_WEBHOOK_SECRET, ANTHROPIC_API_KEY) — ver SETUP_PAGAMENTOS.md pros dois
> do Mercado Pago.

## Como testar

Responda uma questão que mostre "Sem explicação disponível" — vai aparecer
"🩺 Dr. Quest está analisando a questão…" e em segundos a explicação com o
selo "Dr. Quest IA". Na segunda vez (qualquer usuário), vem instantâneo do cache.

## Proteções embutidas

- **Custo**: cache global por questão no Firestore (`explanations/{id}`) —
  gera uma vez, serve pra sempre.
- **Abuso**: só usuários autenticados; payload validado de forma estrita
  (não dá pra usar como LLM genérico); limite de 30 gerações/dia por usuário
  (leituras do cache não contam).
- **Falha**: se a IA estiver indisponível, o app volta pro texto antigo
  ("Sem explicação disponível") sem quebrar nada.
