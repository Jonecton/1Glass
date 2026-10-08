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

## Quote emails

Set the encrypted Worker secret `RESEND_API_KEY` in the Cloudflare dashboard.
The form sends from `quotes@notifications.the1glassshop.com` to
`support@the1glassshop.com`. Verify `notifications.the1glassshop.com` in Resend.
The customer's optional email is used as Reply-To. No mailbox password is needed.

The quote route uses the configured `QUOTE_RATE_LIMITER` binding (three attempts
per minute per client IP per Cloudflare location), same-origin checks, a honeypot,
input validation, and Resend idempotency keys. This is basic spam protection,
not a CAPTCHA. Customer messages and credentials are not written to application logs.

Test the endpoint without sending email: `node --test tests/quote.test.cjs`.
After deploying, submit one real test request and confirm receipt in the inbox.

After deploying, add `the1glassshop.com` under the Worker's Settings → Domains &
Routes → Add → Custom Domain. The domain must be active in Cloudflare DNS first.

Local `.dev.vars` files are ignored by Git. Set production secrets in Cloudflare;
do not commit them. This site does not currently need any application secrets.
