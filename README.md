---

# 🚀 FintechGuy – Personal Website Powered by Astro

A modern, responsive, and full-featured personal website starter built with **Astro**, **Tailwind CSS**, **Supabase**, and **Netlify**.

---

## ✨ Features

* ✅ Personal introduction (Homepage)
* ✅ Blog with MDX support
* ✅ Project showcase section
* ✅ Articles with embedded videos
* ✅ Contact form with Supabase DB backend
* ✅ Calendly integration for meeting scheduling
* ✅ SEO metadata
* ✅ Sitemap generation
* ✅ Robots.txt for crawler management
* ✅ Light/Dark theme toggle
* ✅ Mobile responsiveness
* ✅ Tailwind CSS styling
* ✅ GitHub Actions CI/CD for Netlify
* ✅ Custom domain ready setup
* ✅ Supabase backend integration (forms, auth, DB)

---

## 📁 Folder Structure

```
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
│   │   └── contact.astro         # Contact + Calendly + Supabase form
│   ├── content/
│   │   └── blog/*.mdx            # Blog posts
│   └── styles/
│       └── global.css
├── lib/
│   └── supabaseClient.ts         # Supabase client initialization
├── astro.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── .github/workflows/deploy.yml  # GitHub Actions CI
```

---

## ⚙️ GitHub Actions CI/CD – `deploy.yml`

```yaml
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
```

---

## 📩 Calendly Integration (in `contact.astro`)

```html
<iframe
  src="https://calendly.com/yourusername"
  width="100%"
  height="600"
  style="border:0;"
  allowfullscreen>
</iframe>
```

---

## 🛠️ Supabase Integration

### Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### Create `lib/supabaseClient.ts`

```ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);
```

### Use in `ContactForm.astro` (example)

```ts
const { data, error } = await supabase.from("contacts").insert([
  { name, email, message }
]);
```

---

## ✍️ MDX Blog Setup

### Install MDX Integration

```bash
npm install @astrojs/mdx
```

### In `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
});
```

### Blog Posts Location

Put your `.mdx` blog files in:

```
src/content/blog/
```

---

## 🌐 Sitemap & Robots.txt

### Sitemap

Generated automatically using:

```bash
npm install @astrojs/sitemap
```

Added to `astro.config.mjs`:

```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
});
```

### robots.txt (in `/public/robots.txt`)

```txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap-index.xml
```

---

## 🚀 Deployment Instructions

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Connect Repo to Netlify**:

   * Go to [Netlify](https://netlify.com) → New site from Git
   * Select your GitHub repo

3. **Build settings**:

   * **Build command**: `npm run build`
   * **Publish directory**: `dist`

4. **Environment Variables**:

   * On Netlify or GitHub Secrets:

     * `PUBLIC_SUPABASE_URL`
     * `PUBLIC_SUPABASE_ANON_KEY`
     * `NETLIFY_AUTH_TOKEN`
     * `NETLIFY_SITE_ID`

5. **Custom Domain**:

   * Point your domain DNS to Netlify site