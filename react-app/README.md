# GonzUp React migration (Option A)

This is an isolated React/Vite implementation. The original root HTML website remains untouched until launch approval.

## Development

1. Install Node.js 20.19+ or 22.12+.
2. Run `cd react-app && npm install && npm run dev`.
3. To create a production build, run `npm run build`. The script copies the EXISTING repository `trailerpics` into `react-app/public/trailerpics` before building into root `dist/`. No new private photos are used.

## Supabase setup

1. Create a Supabase project, run `supabase/schema.sql` in SQL Editor.
2. Enable email magic-link authentication and configure allowed redirect URLs for the deployed site (including the #admin fragment if applicable).
3. Copy `.env.example` to `.env.local`, add the **public** project URL and publishable/anon key. Never add a service-role key to the frontend.
4. Sign in via the Owner page. Find your user UUID in Supabase Authentication > Users. Add only your UUID to `owner_accounts` using SQL Editor. Row-level security enforces updates.
5. Deploy the generated `dist/` folder to a static host with HTTPS. The React application uses hash navigation for the owner view; no server rewrite required.

## Scope and precautions

- Nine existing listings, photos, pricing and initial statuses are retained. These are **unverified physical identity matches** pending VIN/photo reconciliation.
- Database stores only public trailer IDs and statuses. No registration documents, plates, VINs or customer details.
- If Supabase is not configured, the catalog shows initial fallback statuses, **not live availability**. Configure Supabase before production deployment.
- Public status refreshes every 30 seconds while the page is open; no site rebuild is required when the owner updates status.
- This PR is independent of the previous GitHub Actions status-management PR. Choose ONE system for production; do not merge both implementations without reconciliation.
- The frontend owner route is publicly reachable but protected server-side by Supabase authentication and row-level security. Merely hiding a route is not security.
- Before deployment, verify hosting path, asset URLs, auth redirect URL, email sign-in, row-level security, and the status-change workflow in a staging environment.

## Current GonzUp Supabase project

- Project URL: `https://hfxjrrldqjjuvnrrilaz.supabase.co`
- The public publishable key is set in `.env.production`. **Never put secret/service-role keys in this file.**
- The production SQL migration adds a self-read policy for `owner_accounts`; the schema file includes the same policy for new environments.
- One existing authenticated owner has been added to `owner_accounts` in the live project.
- Email sign-in redirects to `?owner=1`; add the eventual deployed URL with `?owner=1` to Supabase Auth > URL Configuration > Redirect URLs, and set the Site URL to the deployed origin.

## Suggested hosting: Cloudflare Pages

For a new deployment, connect this GitHub repository to Cloudflare Pages, select the React migration branch for a preview, and configure:

- Root directory: `react-app`
- Build command: `npm run build`
- Build output directory: `dist` **relative to the repository root** (the Vite config outputs `../dist` from `react-app`). Cloudflare's build-output field may be relative to the root directory; if so enter `../dist` instead. Verify with the first build logs.
- Framework preset: Vite (or None if specifying commands manually).

**Do not publish to the business domain until a preview passes:** image checks, login, owner-only updates, and public status refresh. Existing root HTML is intentionally unchanged.
