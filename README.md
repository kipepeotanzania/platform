# Kipepeo Platform – Frontend

React 19 + Vite 7 single-page app for Kipepeo ONG. It now ships with a canonical site map, Helmet-based SEO, lazy-loaded routes, and local image assets (Cloudinary removed).

## Tech Stack
- React 19, React Router 7, Vite 7
- TypeScript-friendly JSX (*.tsx) with path aliases (`@/…`)
- react-helmet-async for meta/OG/Twitter tags
- Static assets served from `frontend/public/images`

## Requirements
- Node.js ≥ 20 (use `.nvmrc` / `.node-version`)
- npm ≥ 10

## Getting Started
```bash
cd frontend
npm install           # installs deps (React Router 7, Helmet, etc.)
npm run dev           # launches Vite dev server
```
The router is generated from `frontend/site.map.json`, so adding new pages only requires updating that file and creating the component referenced there.

## Local Images
- Store raster assets under `frontend/public/images` and reference them as `/images/<file>.jpg`.
- `LocalImg` (`src/components/media/LocalImg.tsx`) standardizes `<img>` props with `loading="lazy"` by default.
- Delete the placeholder JPGs once real photography is available.

### Cloudinary (opcional)
- Sube todas las imágenes a una carpeta en Cloudinary (p. ej. `kipepeo`) manteniendo los mismos nombres que usamos en `/images` (`travel-hero.jpg`, `gallery-1.jpg`, etc.).
- Ve a **Settings → Upload → Upload presets** y crea un preset que suba a esa carpeta.
- Establece `VITE_CLOUDINARY_BASE` en `frontend/.env` apuntando a la carpeta, por ejemplo:
  ```
  VITE_CLOUDINARY_BASE=https://res.cloudinary.com/dgfxnlp2v/image/upload/kipepeo
  ```
- No expongas tu API secret en el front. Solo necesitas el `cloud name` y la ruta pública.
- El backend no requiere Cloudinary; si algún flujo futuro sube imágenes, configura `CLOUDINARY_URL` en el entorno de server.

## SEO + Site Map
- Page metadata lives inside `site.map.json`. Each route defines title, description, canonical path, breadcrumb, etc.
- `<Helmet>` (`src/components/SEO/Helmet.tsx`) injects `<title>`, `<meta>` and JSON-LD when supplied.
- Add optional `jsonLd` objects to any `site.map` route to emit structured data snippets.
- Regenerate the sitemap whenever routes change:
  ```bash
  cd frontend
  npm run sitemap
  # writes public/sitemap.xml using site.map.json
  ```

## Scripts
- `npm run dev` – Vite dev server with lazy routes and HelmetProvider
- `npm run build` / `npm run preview` – production bundle + preview
- `npm run sitemap` – generate `/public/sitemap.xml` from `site.map.json`

## Project Structure
```
frontend/
  public/images        # local JPG placeholders
  site.map.json        # source of truth for routes + SEO
  scripts/generate-sitemap.mjs
  src/
    components/SEO     # Helmet wrapper
    components/media   # LocalImg helper
    layouts/MainLayout # header/footer + Helmet injection
    pages/             # Home + About/Projects/Legal sections
    routes.tsx         # builds router from site.map.json
```

---

# Kipepeo Platform – Backend (API)

Express + Prisma + JWT + Nodemailer lives under `server/`.

## Tech Stack
- Node.js 18 (ts-node-dev during development).
- Prisma ORM targeting PostgreSQL.
- Nodemailer for transactional emails (Mailhog in dev).
- JSON Web Tokens (JWT) for auth.

## Getting Started
```bash
cd server
npm install
cp .env.example .env   # adjust DATABASE_URL, SMTP, FRONTEND_URL
npx prisma migrate dev --name init
npm run seed:admin     # creates loreto@kipepeo.ngo (ADMIN)
npm run dev            # http://localhost:4000
```
On boot the API verifies the SMTP transport. With Mailhog:
```
SMTP_HOST=localhost
SMTP_PORT=1026
MAIL_FROM="Kipepeo <no-reply@kipepeo.ngo>"
```
Mailhog UI: http://localhost:8026

## Useful scripts
- `npm run seed:admin` – idempotent seed for the admin user (`loreto@kipepeo.ngo / Kipepeo1612`).
- `npm run prisma:migrate` – run migrations.
- `npm run prisma:generate` – regenerate Prisma client.

## API Highlights
- `POST /api/applications/member|volunteer|traveler` – formularios públicos conectados.
- `POST /api/donations` – registra donaciones puntuales.
- `POST /api/auth/login` – login con JWT.
- `POST /api/auth/register` – finaliza registro desde invitación (`?email=&role=&token=`).
- `GET /api/admin/*` – panel admin protegido (people, listas de solicitudes).
- `POST /api/admin/decide` – aprobar/denegar solicitudes. Al aprobar se envía email con enlace directo a `/registro`.

## Flujo recomendado (QA rápido)
1. Enviar solicitud de voluntariado desde `/colabora/voluntariado`.
2. Login admin (`loreto@kipepeo.ngo / Kipepeo1612`), ir a `/admin/voluntarios`, aprobar la solicitud.
3. Revisar Mailhog → email “Tu acceso a Kipepeo” con enlace a `/registro?email=…&role=…&token=…`.
4. Completar registro, iniciar sesión y comprobar RBAC (acceso a `/dashboard` y área del rol; `/admin` bloqueado).
5. Revisar `/admin/personas` → click en el nombre para ver la ficha (perfil + solicitudes + donaciones).

## SMTP en desarrollo
Si Mailhog no está disponible, deja `SMTP_HOST` vacío: el API caerá en modo log (`MAIL_DEV_MODE=TRUE`) y los emails aparecerán en consola.

## Next Steps
- Reemplazar copys e imágenes provisionales por contenido definitivo (ES/EN).
- Conectar RBAC avanzado (permisos por módulo) y exportes CSV desde el panel admin.
