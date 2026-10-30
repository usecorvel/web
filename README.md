# usecorvel.com

The marketing site for Corvel, the text-based scheduling assistant for clinics and salons.
Live at https://usecorvel.com. The blog is a separate repo (`usecorvel/blog`) served at
https://blog.usecorvel.com.

## Stack

- Vite 6 + React 18, plain JavaScript (JSX)
- React Router 6 for client-side routing. The site is a single-page app: `index.html` is an
  empty shell and every page renders in the browser
- One global stylesheet, `src/styles.css`
- Hosted on Vercel; `main` is production

## Running it locally

Node 20 or newer (`.nvmrc` pins 22).

```bash
npm install
npm run dev       # http://localhost:5173
```

Production build:

```bash
npm run build     # outputs dist/
npm run preview   # serves dist/ on http://localhost:4173
```

## Where things live

```
index.html                 HTML shell (no page content; React mounts into #root)
src/
  main.jsx                 entry: router + styles
  App.jsx                  the route table
  components/              Layout, SiteHeader, SiteFooter
  pages/                   one component per route
  lib/usePageMeta.js       sets <title>, meta description and canonical per route
  styles.css               all styles and colour tokens
public/                    logo, favicon and hand-drawn SVG illustrations
vercel.json                build settings and the SPA rewrites
```

### Adding a page

1. Create `src/pages/MyPage.jsx` and call `usePageMeta({ title, description })` at the top of
   the component. Titles get ` | Corvel` appended.
2. Add a `<Route>` for it in `src/App.jsx`.
3. Add its path to the rewrite `source` in `vercel.json`. Vercel only serves `index.html` for
   the paths listed there, so a route that isn't listed will 404 on a hard refresh or a
   direct visit even though it works when you click to it.

## Deploying

Vercel builds every push to GitHub. Pull requests get a preview URL; merging to `main`
deploys to production at usecorvel.com (and `www.usecorvel.com`, which redirects). There are
no environment variables.

Questions: #web in Slack, or ask Marcus.
