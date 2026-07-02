# Deployment Progress Checkpoint

**Last updated:** June 23, 2026  
**Resume from:** Part 3 — Vercel (frontend)

---

## Completed

- [x] Portfolio built (React + Express + PostgreSQL)
- [x] Code pushed to GitHub: https://github.com/YagsHub/john_portfolio
- [x] Profile customized (name, email, photo, title in browser tab)
- [x] `vite.config.js` base set to `/` for Vercel (local change, not committed yet)
- [x] **Neon database** created and connected
- [x] **Database setup** ran successfully (`npm run db:setup --prefix server`)
  - Schema + seed data inserted
- [x] **Render backend** deployed (API is running)
  - Root URL `/` shows `Route / not found` — **this is normal** (API only, not the website)
  - Test with: `https://YOUR-RENDER-URL.onrender.com/api/health`

---

## Not done yet

- [ ] Commit & push `client/vite.config.js` change (`base: '/'`)
- [ ] **Vercel** — deploy frontend (`client` folder)
- [ ] Set Vercel env: `VITE_API_URL=https://YOUR-RENDER-URL.onrender.com/api`
- [ ] Update Render env: `CLIENT_URL=https://YOUR-VERCEL-URL.vercel.app`
- [ ] Test live site + contact form
- [ ] (Optional) Compress large images in `client/public/` (~10 MB each)
- [ ] (Optional) Update `server/database/seed.sql` with your real info (currently has placeholder "Your Name" in DB)

---

## Your local setup

| File | Status |
|------|--------|
| `server/.env` | Configured with Neon `DATABASE_URL` |
| `client/.env` | `VITE_API_URL=http://localhost:5000/api` |

**Run locally tomorrow:**

```bash
# Terminal 1
npm run dev --prefix server

# Terminal 2
npm run dev --prefix client
```

Open: http://localhost:5173

---

## Tomorrow — continue with Vercel

1. Go to https://vercel.com → **Add New Project**
2. Import **YagsHub/john_portfolio**
3. **Root Directory:** `client`
4. **Environment variable:**
   - `VITE_API_URL` = `https://YOUR-RENDER-URL.onrender.com/api`
5. Click **Deploy**
6. Copy your Vercel URL (e.g. `https://john-portfolio.vercel.app`)
7. On **Render** → Environment → set `CLIENT_URL` to your Vercel URL (no trailing slash)
8. Test `/api/health` and the contact form on the live site

---

## Quick reference

| Service | URL | Purpose |
|---------|-----|---------|
| GitHub | https://github.com/YagsHub/john_portfolio | Source code |
| Neon | https://console.neon.tech | Database |
| Render | Your Render dashboard | Backend API |
| Vercel | (not deployed yet) | Live portfolio website |

---

## Notes

- **Render `/` = 404 JSON** → Open Vercel URL for the website, not Render root.
- **DB seed data** may still show "Your Name" from API until you update Neon or re-run seed with your info.
- **Fallback data** in `client/src/data/fallbackData.js` has your real details if API fails.
- **Never commit** `server/.env` or `client/.env` (already in `.gitignore`).

---

## Uncommitted local changes

```
modified: client/vite.config.js  (base: '/' for Vercel)
```

When ready:

```bash
git add client/vite.config.js
git commit -m "Set Vite base path for Vercel deployment"
git push origin main
```
