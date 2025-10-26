# Steven Cheng - Portfolio

A modern, animated portfolio (React + Vite + Tailwind) showcasing research on autism x social media, Safe Board patterns, Social Media Academy, and an RPS simulation.

## Local Dev

```bash
npm i
npm run dev
```

## Build

```bash
npm run build
# output: dist/
```

## Deploy to AWS Amplify (GitHub connect)

1. Push this folder to a GitHub repo (e.g., `steven-portfolio`).
2. In Amplify Console -> **Host your web app** -> **GitHub** -> select your repo and branch.
3. Build settings:
   - **Build command:** `npm ci && npm run build`
   - **Output directory:** `dist`
4. Add SPA rewrite so client-side routes work:
   - Source: `</^((?!\.).)*$/>` (or simply `/<*>`)
   - Target: `/index.html`
   - Type: `200 (Rewrite)`
5. Set your custom domain `https://www.stevenchengportfolio.com` in **Domain management**.

### Embeds (iframes)
This site embeds `https://socialmediaacademy.click/` and `/play`. Ensure those sites allow framing (no `X-Frame-Options: DENY` and CSP `frame-ancestors` permits your domain).

## Tech
- React + Vite
- Tailwind CSS
- framer-motion
- lucide-react
