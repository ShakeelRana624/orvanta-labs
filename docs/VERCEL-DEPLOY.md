# Deploy Orvanta Labs to Vercel

Use a Vercel Pro team for this commercial agency website. Hobby is restricted to personal, non-commercial use: https://vercel.com/docs/plans/hobby

1. In Vercel, choose Add New Project and import `ShakeelRana624/orvanta-labs`. Grant GitHub access to this private repository if it is not listed.
2. Keep Root Directory at the repository root (`./`). Select Framework Preset **Other**.
3. The committed `vercel.json` sets Build Command to `node scripts/build-vercel.mjs`, Output Directory to `public`, and skips dependency installation. No package manager, GitHub Actions job or deployment token is required.
4. Leave Vercel's system environment variables available. The build uses `VERCEL_PROJECT_PRODUCTION_URL` (or `VERCEL_URL`) automatically. Optional: set `SITE_URL=https://your-domain.com` when attaching your own domain, then redeploy. Do not include a path.
5. Click Deploy. Verify `/`, `/services.html`, `/work.html`, `/contact.html`, project pages and video playback on the resulting URL.
6. Submit a test contact enquiry, activate FormSubmit from the email it sends if requested, and verify an enquiry arrives at `shakeelrana6240@gmail.com`. Email delivery has not yet been verified. Check spam too.

The build copies authored `dist/` into generated `public/` and updates canonical URLs, Open Graph URLs, sitemap, robots and form return/source URLs. It does not modify source files. Security response headers are configured in `vercel.json`; the existing `.html` navigation remains intact.

Once imported, Vercel's Git integration deploys future pushes to the production branch (`main`). No separate workflow file is needed. Sites hosting metadata under `.openai/` is not deployed because only `public/` is served. Vercel access settings are separate from the old Sites project's private audience settings.

Local build check: `SITE_URL=https://example.com node scripts/build-vercel.mjs`, followed by `python3 -m http.server 3000 --directory public`. The example hostname is only for verification; do not set it in Vercel.
