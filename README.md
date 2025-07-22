Features:
✅ Personal introduction (homepage)
✅ Blog with MDX support
✅ Project showcase section
✅ Articles with embedded videos
✅ Contact form + Calendly integration
✅ Contact form backed by Supabase DB (form submissions)
✅ SEO metadata
✅ Sitemap generation
✅ Robots.txt for crawler management
✅ Light/Dark theme toggle
✅ Mobile responsiveness
✅ Tailwind CSS styling
✅ GitHub Actions CI/CD for Netlify
✅ Custom domain ready setup
✅ Supabase integration for backend capabilities (form handling, auth, DB, etc.)

---
📁 Folder Structure (overview)

fintechguy/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   └── ContactForm.astro     # Supabase form integration
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro           # Personal intro
│   │   ├── blog/
│   │   │   └── [slug].astro      # MDX blog post page
│   │   ├── projects.astro        # Showcase projects
│   │   └── contact.astro         # Contact page with Calendly + Supabase form
│   ├── content/
│   │   └── blog/*.mdx            # Blog posts
│   └── styles/
│       └── global.css
├── lib/
│   └── supabaseClient.ts        # Supabase client initialization
├── astro.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── .github/workflows/deploy.yml

---
✅ GitHub Actions: .github/workflows/deploy.yml

name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2
        with:
          publish-dir: "./dist"
          production-deploy: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}

---
📩 Calendly Integration (in contact.astro)

<iframe src="https://calendly.com/yourusername" width="100%" height="600" style="border:0;" allowfullscreen></iframe>

---
📥 Supabase Integration

Install Supabase client:
```bash
npm install @supabase/supabase-js
```
Create `lib/supabaseClient.ts`:
```ts
import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_SUPABASE_ANON_KEY);
```
Use it in `ContactForm.astro` to submit to a table (e.g., "contacts").

---
📖 MD Post Setup

Install dependencies:
```bash
npm install @astrojs/mdx
```
In `astro.config.mjs`:
```js
import mdx from '@astrojs/mdx';
export default defineConfig({
  integrations: [mdx()],
});
```
Then place your `.mdx` blog posts in `src/content/blog/`

---
🚀 Deployment Instructions
1. Push project to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Publish directory: `dist`
5. Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` to GitHub secrets
6. Add `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` to GitHub/Netlify env vars
7. Point your custom domain to Netlify
