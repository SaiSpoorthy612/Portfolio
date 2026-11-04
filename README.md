# Portfolio

Personal site for Sai Spoorthy Varala, built with React 19, Vite, TypeScript and Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

## Update content

All text lives in [`src/data/content.ts`](src/data/content.ts) — experience, education, skills, projects and contact details. Images go in `public/images/`, resumes in `public/resume/`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** once.

The previous hand-written site is kept in `legacy/` for reference.
