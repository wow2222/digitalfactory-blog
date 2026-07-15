# Cloudflare Pages Deployment

## 1. Push to GitHub

Create a new GitHub repository and push this project:

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## 2. Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub repository
4. Configure the build settings:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (leave blank) |

## 3. Environment variables

In Cloudflare Pages → Settings → Environment variables, add:

| Variable | Value |
|---|---|
| `NODE_VERSION` | `20` |

## 4. Custom domain

1. Pages → your project → **Custom domains** → **Set up a custom domain**
2. Enter your domain (e.g. `yourdomain.com`)
3. Update DNS as instructed (CNAME or Cloudflare nameservers)

## 5. Update site URL

In `astro.config.mjs`, change:

```js
site: 'https://yourdomain.com',
```

to your actual domain. Also update the same URL in:

- `public/robots.txt` → Sitemap line
- `src/components/SEO.astro` → `SITE_URL` constant
- `src/pages/rss.xml.ts` → fallback URL

## 6. Auto-deploy

Every `git push` to `main` triggers a Cloudflare Pages build automatically. The Python backend should commit new posts to `src/content/blog/` and push to trigger a rebuild.

## 7. Verify

After deploy, check:
- `https://yourdomain.com/sitemap-index.xml` — sitemap exists
- `https://yourdomain.com/rss.xml` — RSS feed exists
- `https://yourdomain.com/blog` — listing page works
- `https://yourdomain.com/robots.txt` — robots file is served

## Notes

- Cloudflare Pages serves `_headers` and `_redirects` files automatically from `public/`
- Build time scales with number of posts; Cloudflare Pages allows up to 500 builds/month on the free plan
- Use Cloudflare's Cache Rules to fine-tune caching beyond what `_headers` sets
