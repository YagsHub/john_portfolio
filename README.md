# Personal Portfolio

A modern, full-stack personal portfolio web application built with React (Vite), Tailwind CSS, Node.js (Express), and PostgreSQL.

## Features

- Modern 2026 UI/UX with glassmorphism, gradients, and smooth animations
- Fully responsive (mobile, tablet, desktop)
- Dark mode toggle with system preference detection
- Scroll reveal animations (Framer Motion)
- Contact form with validation and PostgreSQL storage
- REST API backend with input validation and rate limiting
- SEO optimized with meta tags
- Lazy loading and toast notifications
- Fallback data when API is unavailable

## Tech Stack

| Layer    | Technologies                                      |
|----------|---------------------------------------------------|
| Frontend | React, Vite, Tailwind CSS, Framer Motion, React Router |
| Backend  | Node.js, Express.js                               |
| Database | PostgreSQL                                        |

## Project Structure

```
Personal_portfolio/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # UI components
│       ├── pages/          # Page components
│       ├── layouts/        # Layout wrappers
│       ├── hooks/          # Custom React hooks
│       ├── services/       # API service layer
│       ├── data/           # Fallback static data
│       └── assets/
├── server/                 # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   ├── database/
│   └── server.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+ (or Neon account)

### 1. Clone and Install

```bash
cd Personal_portfolio
npm install --prefix client
npm install --prefix server
```

### 2. Database Setup

Create a PostgreSQL database, then configure the server:

```bash
cp server/.env.example server/.env
```

Edit `server/.env`:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
CLIENT_URL=http://localhost:5173
```

Run the schema and seed:

```bash
npm run db:setup --prefix server
```

### 3. Frontend Environment

```bash
cp client/.env.example client/.env
```

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Run Development Servers

**Terminal 1 — Backend:**
```bash
npm run dev --prefix server
```

**Terminal 2 — Frontend:**
```bash
npm run dev --prefix client
```

Open [http://localhost:5173](http://localhost:5173)

## API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/health`         | Health check             |
| GET    | `/api/profile`        | Profile information      |
| GET    | `/api/skills`         | Skills by category       |
| GET    | `/api/projects`       | All projects             |
| GET    | `/api/certifications` | Certifications           |
| GET    | `/api/experience`     | Work experience timeline |
| POST   | `/api/contact`        | Submit contact message   |

### Contact Form Example

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a project with you."
  }'
```

## Customization

1. **Profile & Content** — Update seed data in `server/database/seed.sql` or edit directly in PostgreSQL
2. **Fallback Data** — Edit `client/src/data/fallbackData.js` for offline/default content
3. **Social Links** — Update `socialLinks` in `client/src/data/fallbackData.js`
4. **Colors** — Modify CSS variables in `client/src/index.css`
5. **SEO** — Update meta tags in `client/index.html`

## Deployment

### PostgreSQL — Neon

1. Create a free account at [neon.tech](https://neon.tech)
2. Create a new project and database
3. Copy the connection string (enable SSL)
4. Run schema setup locally pointing to Neon:
   ```bash
   DATABASE_URL="postgresql://user:pass@ep-xxx.neon.tech/portfolio_db?sslmode=require" npm run db:setup --prefix server
   ```

### Backend — Render

1. Push your code to GitHub
2. Create a new **Web Service** on [render.com](https://render.com)
3. Configure:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Add environment variables:
   ```
   NODE_ENV=production
   DATABASE_URL=<your-neon-connection-string>
   CLIENT_URL=https://your-portfolio.vercel.app
   PORT=5000
   ```
5. Deploy and note your API URL (e.g., `https://portfolio-api.onrender.com`)

### Frontend — Vercel

1. Push your code to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Configure:
   - **Root Directory:** `client`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add environment variable:
   ```
   VITE_API_URL=https://portfolio-api.onrender.com/api
   ```
5. Deploy

### Post-Deployment Checklist

- [ ] Verify API health: `GET /api/health`
- [ ] Test contact form submission
- [ ] Confirm CORS allows your Vercel domain
- [ ] Update `CLIENT_URL` on Render if domain changes
- [ ] Replace placeholder name, email, and social links
- [ ] Add your resume PDF to `client/public/resume.pdf`

## Security

- Helmet.js for HTTP security headers
- CORS restricted to configured client URL
- Rate limiting on contact endpoint (5 requests per 15 minutes)
- Input validation on all API endpoints
- Request body size limits (10kb)
- SQL parameterized queries (no SQL injection)

## License

MIT
