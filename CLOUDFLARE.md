# Cloudflare Worker deployment

The Worker name and WORKER_SELF_REFERENCE service are both `1glass` in
`wrangler.jsonc`. Keep these names aligned with the Cloudflare dashboard.

For the GitHub-connected Cloudflare Worker, configure:

- Build command: `npm run build:cloudflare`
- Deploy command: `npm run deploy:cloudflare`
- Root directory: repository root (where package.json is located)
- Production branch: `main`

Build locally with `npm.cmd run build:cloudflare`. Once built, preview with
`npm.cmd run preview:cloudflare`. Deployment requires Cloudflare authentication.

The standard `npm.cmd run dev` still starts the Next.js development server.
No static export or Pages migration is required.

After deploying, add `the1glassshop.com` under the Worker's Settings → Domains &
Routes → Add → Custom Domain. The domain must be active in Cloudflare DNS first.

Local `.dev.vars` files are ignored by Git. Set production secrets in Cloudflare;
do not commit them. This site does not currently need any application secrets.
