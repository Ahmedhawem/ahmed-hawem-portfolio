# Ahmed Hawem — Portfolio

Personal portfolio website of **Ahmed Hawem**, Fullstack Developer based in Sousse, Tunisia.

Built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **next-intl** (English, German, French).

## Live features

- Multilingual UI: English (default), German, French
- About, experience, skills, education, projects, contact
- Project showcases with live demos
- Resume download
- Contact form (optional email / Telegram setup)

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- next-intl
- Sass
- Nodemailer / Telegram (contact API)

## Getting started

### Prerequisites

- Node.js 18.17+ (20+ recommended)
- npm

### Install & run

```bash
git clone https://github.com/Ahmedhawem/<your-repo-name>.git
cd <your-repo-name>
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env` and fill in as needed:

```env
NEXT_PUBLIC_GTM=
NEXT_PUBLIC_APP_URL=http://localhost:3000
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
GMAIL_PASSKEY=
EMAIL_ADDRESS=
```

- `NEXT_PUBLIC_APP_URL` — required for the contact form
- Email / Telegram — optional; needed only if you want the contact form to send messages

## Customize content

Main content lives in:

| File | Purpose |
|------|---------|
| `utils/data/localized-content.js` | Bio, experience, education, projects (EN/DE/FR) |
| `messages/en.json` / `de.json` / `fr.json` | UI translations |
| `public/ahmed-hawem.png` | Profile photo |
| `public/Ahmed_Hawem_CV.pdf` | Resume |
| `public/projects/` | Project screenshots |

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # start production server
npm run lint     # eslint
```

## Deploy

Works well on Vercel or Netlify. Set the same environment variables in your hosting dashboard, and point `NEXT_PUBLIC_APP_URL` to your production URL.

## License

This project is based on an open-source Next.js portfolio template and customized for personal use by Ahmed Hawem.

## Contact

- Email: hawemahmed4@gmail.com
- GitHub: [Ahmedhawem](https://github.com/Ahmedhawem)
- LinkedIn: [ahmed-hawem](https://www.linkedin.com/in/ahmed-hawem-11a3a8242)
