# Azad Sultan — AI Portfolio Website

A professional multi-page portfolio for AI chatbot, RAG, AI-agent, Shopify-assistant, and Python automation work.

## Included pages

- Home
- Services
- Portfolio
- Individual project case studies
- Contact

## Main features

- Animated hero based on Python, LangChain, LangGraph, RAG, APIs, and Shopify skills
- Responsive mobile navigation
- Direct Email, Phone, WhatsApp, LinkedIn, and GitHub buttons
- Embedded YouTube demos for DocuMind and the Slack AI agent
- Editable project data in one file
- Formspree-ready contact form
- Responsive desktop, tablet, and mobile layout
- SEO metadata, sitemap, and robots file

## 1. Install and run locally

Install Node.js, open a terminal inside this folder, and run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Create a production build before pushing:

```bash
npm run build
```

## 2. Configure the contact form

1. Create a free Formspree form.
2. Copy the form ID from its endpoint. For example, if the endpoint is `https://formspree.io/f/abcdwxyz`, the form ID is `abcdwxyz`.
3. Copy `.env.example` to `.env.local`.
4. Add your form ID:

```env
NEXT_PUBLIC_FORMSPREE_FORM_ID=abcdwxyz
```

For Vercel, add the same variable in **Project Settings → Environment Variables**.

## 3. Replace project screenshots

Project images are in:

```text
public/projects/
```

You can replace these files while keeping the same names:

- `slack-agent.png`
- `documind.png`
- `website-chatbot.png`
- `shopify-assistant.png`

Recommended image ratio: **16:9**, such as 1600 × 900 pixels.

You can also use PNG or JPG files. If you change a filename, update its `image` path inside:

```text
data/projects.ts
```

## 4. Update text, links, projects, and videos

Personal contact information and navigation:

```text
data/site.ts
```

Project titles, descriptions, technologies, features, screenshots, and YouTube video IDs:

```text
data/projects.ts
```

The current YouTube IDs are:

- DocuMind: `ubsdu7px8ho`
- Slack AI Agent: `cnqwSztGkGk`

Use **Unlisted** YouTube videos for portfolio demos. Private YouTube videos cannot be watched by normal portfolio visitors.

## 5. Push to GitHub

Create an empty repository on GitHub, then run:

```bash
git init
git add .
git commit -m "Build professional AI portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY`.

## 6. Deploy on Vercel

1. Sign in to Vercel with GitHub.
2. Choose **Add New → Project**.
3. Import your GitHub repository.
4. Vercel should detect Next.js automatically.
5. Add `NEXT_PUBLIC_FORMSPREE_FORM_ID` in Environment Variables.
6. Select **Deploy**.

Vercel will give you a free address ending in `.vercel.app`. Future GitHub pushes will create new deployments automatically.

## Important before publishing

- Replace the website-chatbot placeholder with your real screenshot.
- Decide whether the Shopify screenshot should remain as a case study and clearly keep the “Independent Concept” label.
- Test every external button.
- Test the contact form after adding the Formspree ID.
- Update the metadata URL in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` after Vercel gives you the final URL.
