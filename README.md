# Site institucional — Smilo CRM

Site em **Next.js 16 (App Router) + React + Tailwind CSS v4**, criado para divulgar o Smilo
(sistema de gestão para clínicas odontológicas), com foco em **SEO** e em um visual **preto e
branco**, moderno, alinhado à identidade da marca.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Home — hero, funcionalidades, destaques, segurança, preços resumidos, FAQ |
| `/funcionalidades` | Todos os 9 módulos do sistema, com telas reais do manual |
| `/precos` | Planos Solo (R$89/mês), Clínica (R$169/mês) e Pro (R$249/mês) + comparativo |
| `/sobre` | Missão, princípios e a empresa por trás do produto |
| `/contato` | E-mail, WhatsApp, horário de atendimento e formulário de contato |

Todo o conteúdo (textos de funcionalidades, planos, FAQ) foi escrito a partir do **Manual do
Usuário do Smilo CRM v1.0**. As telas usadas nas páginas são capturas reais extraídas desse
manual (pasta `public/images/screens`).

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para gerar a build de produção e testar localmente:

```bash
npm run build
npm run start
```

## Publicando o site (deploy)

O jeito mais simples é a [Vercel](https://vercel.com) (criadora do Next.js):

1. Suba este projeto para um repositório no GitHub/GitLab.
2. Importe o repositório na Vercel.
3. A Vercel detecta o Next.js automaticamente — não é preciso configurar nada.
4. Aponte o domínio `smilocrm.com.br` para o projeto na aba
   **Domains** da Vercel.

O projeto também funciona em qualquer host que suporte Next.js (Node.js 18+): Railway, Render,
servidor próprio com `next start`, etc.

## O que ajustar antes de publicar

1. **Domínio real** — em `src/lib/site.js`, confira `url` e `domain`. Hoje está configurado como
   `https://www.smilocrm.com.br`.
2. **WhatsApp / e-mail / telefone** — também em `src/lib/site.js` (`whatsappNumber`, `email`,
   `phone`, `supportHours`).
3. **Preços** — em `src/lib/content.js`, no array `pricingPlans` (e `comparisonFeatures` para o
   comparativo de recursos). Os valores atuais são: Solo R$89/mês, Clínica R$169/mês e Pro
   R$249/mês.
4. **Textos de funcionalidades** — também em `src/lib/content.js`, no array `modules`. Cada
   módulo tem `name`, `short` (usado nos cards), `description` e `bullets`.
5. **Formulário de contato** (`src/components/ContactForm.js`) — hoje ele abre o app de e-mail do
   visitante com a mensagem pronta (`mailto:`), sem depender de backend. Se preferir receber os
   envios direto em um painel, é só trocar o `handleSubmit` por uma chamada a um serviço como
   Formspree, Resend ou uma API Route própria do Next.js.
6. **Favicon / ícones** — gerados a partir da logo enviada, em `public/images/brand/`. Para
   trocar a logo, substitua os arquivos dessa pasta e os ícones em `src/app/icon.png`,
   `src/app/apple-icon.png` e `src/app/favicon.ico`.

## SEO — o que já está implementado

- **Metadados por página** (`title`, `description`, Open Graph, Twitter Card) via a Metadata API
  do Next.js, com `title.template` para manter o padrão "Página · Smilo".
- **URLs canônicas** em cada página (`alternates.canonical`).
- **Sitemap automático** em `/sitemap.xml` (`src/app/sitemap.js`) e **robots.txt** em `/robots.txt`
  (`src/app/robots.js`), apontando para o domínio configurado em `site.js`.
- **Dados estruturados (JSON-LD)**: `Organization` e `WebSite` no layout raiz,
  `SoftwareApplication` com as três ofertas de preço, `Product`/`Offer` na página de preços,
  `FAQPage` na página de preços e `BreadcrumbList` na página de funcionalidades. Isso ajuda o
  Google a exibir rich snippets (preço, FAQ, etc.) diretamente no resultado de busca.
- **HTML semântico** — hierarquia de `h1`/`h2`/`h3` correta em cada página, um único `<h1>` por
  página, texto alternativo (`alt`) descritivo em todas as imagens/telas do sistema.
- **Performance**: imagens otimizadas automaticamente pelo `next/image` (lazy loading,
  `sizes` responsivos), fonte (Geist) auto-hospedada sem depender do Google Fonts, todas as
  páginas pré-renderizadas como HTML estático (`○ Static` no build), o que favorece velocidade de
  carregamento — um dos fatores de ranqueamento do Google.
- **Mobile-first / responsivo** — testado em telas de smartphone, tablet e desktop.

### Depois de publicar, para ajudar a "ser o primeiro no Google"

Nenhum site fica em 1º lugar só por causa do código — isso depende de fatores fora do site
também. Depois de publicar:

1. Cadastre o domínio no **Google Search Console** e envie o `sitemap.xml`.
2. Preencha a ficha da clínica/empresa no **Google Meu Negócio**, se fizer sentido para o seu
   modelo de vendas.
3. Gere conteúdo novo com frequência (blog, comparativos, casos de uso) — isso é o que mais move
   ranqueamento a médio prazo.
4. Consiga backlinks de sites relevantes do setor odontológico/saúde.
5. Acompanhe as métricas de Core Web Vitals no PageSpeed Insights.

## Estrutura do projeto

```
src/
  app/            → páginas (App Router), layout raiz, sitemap, robots, manifest
  components/      → componentes de UI reutilizáveis
  lib/
    site.js        → dados da marca, contato, links de navegação
    content.js      → funcionalidades, planos, comparativo e FAQ
public/
  images/
    brand/          → logo, ícones, imagem de compartilhamento (Open Graph)
    screens/        → capturas de tela reais do Smilo CRM (extraídas do manual)
```

## Créditos das imagens

As capturas de tela usadas em `public/images/screens` foram extraídas diretamente do
*Manual do Usuário — Smilo CRM v1.0* enviado para a criação deste site.
