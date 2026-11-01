# Soumitra Pradhan – Cybersecurity Portfolio

React + Vite + Tailwind + Framer Motion + Lucide (frontend) and Node + Express (backend).

## 1. Folder structure

```
portfolio/
├── client/                      ← the website (what visitors see)
│   ├── index.html               SEO meta tags, fonts, page shell
│   ├── public/
│   │   ├── profile.webp         ← YOUR PHOTO (replace to change)
│   │   ├── resume/Soumitra_Pradhan_Resume.pdf   ← YOUR RESUME
│   │   └── certificates/        ← put certificate images here
│   └── src/
│       ├── data/                ← ★ EDIT THESE FILES to change content ★
│       │   ├── site.js          name, email, GitHub, LinkedIn, photo, resume path
│       │   ├── skills.js  experience.js  projects.js
│       │   ├── certifications.js  achievements.js
│       │   ├── journey.js       CTF / practical learning
│       │   └── blog.js          blog posts
│       ├── sections/            one file per page section (Hero, About, ...)
│       ├── components/          reusable pieces (Navbar, Footer, cards)
│       ├── pages/               Home, BlogIndex, BlogPost
│       └── lib/api.js           talks to the backend
└── server/                      ← the contact-form backend
    ├── .env.example             copy to .env (secrets live here, never in client)
    └── src/
        ├── index.js             starts Express (security headers, CORS)
        ├── routes/contact.js    rate limit, honeypot, validation, saving
        ├── utils/validate.js    input validation + sanitising
        ├── utils/mailer.js      optional email notification
        └── models/Message.js    optional MongoDB model
```

## 2. Install (one time)

Install Node.js LTS from nodejs.org, then in the project folder:

```bash
cd client && npm install
cd ../server && npm install
cp .env.example .env        # Windows: copy .env.example .env
```

## 3. Run locally

Open two terminals.

```bash
# Terminal 1 – backend
cd server && npm run dev        # http://localhost:5000

# Terminal 2 – website
cd client && npm run dev        # http://localhost:5173
```

Messages from the contact form are saved to `server/data/messages.json`
(or MongoDB if you set `MONGODB_URI`). To also get them by email, fill the
`SMTP_*` lines in `server/.env` (Gmail needs an App Password).

## 4. Replace your photo
Save a square image (about 700×700) as `client/public/profile.webp` (same name),
or put any file in `client/public` and change `photo` in `src/data/site.js`.

## 5. Add certificates
1. Copy the certificate image into `client/public/certificates/` (e.g. `ethical-hacker.png`).
2. In `src/data/certifications.js` set `image: "/certificates/ethical-hacker.png"`,
   `verifyUrl: "<real credential link>"` and `date`.
Entries with an empty `image` show a placeholder; empty `verifyUrl` shows "Link coming soon".

## 6. Add projects, achievements, experience, skills
Open the matching file in `src/data/`, copy one object, paste it, edit the text.
For projects keep `status` honest: `"Planned"`, `"In Progress"` or `"Completed"`.
Add `repo: "https://github.com/..."` and the button becomes active.

## 7. Add blog posts
Copy a post in `src/data/blog.js`, give it a unique `slug`, write `content` blocks.
Delete the two sample posts when ready.

## 8. Update your resume
Replace `client/public/resume/Soumitra_Pradhan_Resume.pdf` with the new file (same name).

## 9. Set your GitHub link
`src/data/site.js` → `github: "https://github.com/your-real-username"`.

## 10. Deploy online (free)

**Backend (Render.com)**
1. Push the project to GitHub (`.env` is ignored automatically).
2. Render → New Web Service → pick the repo, Root Directory `server`,
   Build `npm install`, Start `npm start`.
3. Add environment variables from `.env.example`. Set
   `CLIENT_ORIGIN` to your website URL (e.g. `https://soumitra.vercel.app`).
   Note: free hosts lose local files on restart, so use a free MongoDB Atlas
   database (`MONGODB_URI`) and/or SMTP email so messages are never lost.

**Frontend (Vercel or Netlify)**
1. New Project → same repo, Root Directory `client`.
2. Build command `npm run build`, output folder `dist`.
3. Environment variable: `VITE_API_URL=https://your-backend.onrender.com`.
4. Deploy. The site uses hash-style links (`/#/blog`) so no extra routing setup is needed.

## Security notes
- Secrets are only in `server/.env`; nothing private is in frontend code.
- Contact API: validation, HTML escaping, honeypot, minimum-fill-time check,
  rate limit (5 per 15 min per IP), body size limit, Helmet headers, CORS allow-list.
- No admin dashboard is included on purpose (content is edited in the `data` files),
  so there is no login to attack.
