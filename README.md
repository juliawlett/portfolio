# Júlia Lima · Portfolio

Portfolio pessoal construído com React e Vite.

> Requer Node.js 18 ou superior para executar o Vite.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicação na Vercel

Importe este repositório na Vercel e mantenha:

- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Os dados pessoais, links e projetos ficam centralizados em `src/data/portfolio.js`.

Os links dos quatro projetos apontam para as subpastas de `projetos` (`../projetos/clinica`, `../projetos/otica`, `../projetos/pizzaria` e `../projetos/venda`). Ao publicar somente o portfolio na Vercel, troque os campos `live` por URLs públicas dos projetos ou publique toda a árvore no mesmo repositório.
