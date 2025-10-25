# Kipepeo Platform

A bilingual React (Vite) front‑end for the Kipepeo Tanzania initiative. It showcases immersive travel, volunteering, and community projects, pulling media from Cloudinary and routing with `react-router-dom`.

## Tech Stack
- React 19 + Vite 7
- React Router v7
- Cloudinary for all image delivery
- AOS, Framer Motion, Font Awesome for animation/iconography

## Requirements
- **Node.js ≥ 20** (Vite 7 requires `crypto.hash`). Use `.nvmrc`, `.node-version`, or `.tool-versions` to pin.
- **npm ≥ 10**

## Getting Started
```bash
nvm use 20          # or volta/asdf equivalent
npm install         # install root tooling (includes Cloudinary CLI deps)
cd frontend
npm install         # install front-end deps
npm run dev         # launches Vite with bilingual site
```
`npm run build` generates the production bundle, and `npm run preview` serves the dist build.

## Environment Variables
Create `frontend/.env` or `.env.local` (gitignored) containing:
```ini
VITE_CLOUDINARY_DEFAULT_FOLDER=site   # blank if assets are at Cloudinary root
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dctfxlyl2
```
For server‑side scripts (Audit/CLI) at the repo root create `.env.local` with:
```ini
CLOUDINARY_URL=cloudinary://<API_KEY>:<API_SECRET>@dctfxlyl2
```
Only `VITE_*` vars are available to browser code; everything else remains server-only.

## Cloudinary Assets
Every `<img>` uses `buildCloudinaryUrl`/`buildSrcSet`. Upload each of the referenced public IDs to the configured folder (`VITE_CLOUDINARY_DEFAULT_FOLDER`). Run:
```bash
npm run audit:ids         # lists all public_id references
npm run audit:images      # (requires CLOUDINARY_URL) verifies assets exist via Admin API
```
Typical IDs include `logo`, `myphoto1`, `about-hero`, `A1`, `V1`–`V7`, `it1`–`it13`, `itg1`–`itg12`, etc. Broken assets log a `[Cloudinary IMG ERROR]` warning and show a dashed red outline in the UI.

## Project Structure
```
frontend/
  src/
    components/        # Navbar, Footer, Responsive sections
    pages/             # Home, About, ImmersiveTravel, Volunteering, Projects, Contact
    utils/             # cloudinary helpers, image diagnostics, i18n config
    locales/           # en/es translation dictionaries
```
`
frontend/src/utils/cloudinary.js` centralizes transform logic, responsive `srcset`, version injection, and folder overrides.

## Internationalization
The app ships with English/Spanish content via `react-i18next`. The navbar exposes an `EN/ES` toggle that updates the `html lang` attribute and remembers the preference in localStorage.

## Helpful Scripts
- `npm run audit:ids` – list required Cloudinary public_ids.
- `npm run audit:images` – validate Cloudinary presence (needs `CLOUDINARY_URL`).
- `npm run diagnose:images` – launch dev server with diagnostics enabled.

## Deployment Notes
- Commit `.nvmrc`/`.node-version` so CI/CD (Netlify, Vercel, etc.) pick Node 20 automatically.
- Set `VITE_CLOUDINARY_DEFAULT_FOLDER` and `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` in your hosting provider’s environment dashboard.

## Contributing
1. `nvm use`
2. `cd frontend && npm install`
3. Keep PRs bilingual (update JSON locales when adding text).

Happy hacking!
