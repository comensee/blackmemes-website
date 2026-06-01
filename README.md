# Black Memes Generator — Website

Marketing website for the Black Memes Generator mobile app. Three pages (Home, Terms of Service, Contact) with EN/FR language toggle.

**Live:** https://blackmemes.co

## Stack

- Next.js 16 (App Router) — all pages statically prerendered except `/api/contact`
- Resend — transactional email for the contact form
- Deployed on Vercel

## Project structure

```
app/
  layout.tsx            # Root layout with nav + footer (wraps LanguageProvider)
  page.tsx              # Home — hero with phone mockup, features grid, download section
  tos/page.tsx          # Terms of Service
  contact/page.tsx      # Contact form (POSTs to /api/contact)
  api/contact/route.ts  # API route — sends email via Resend
  language-provider.tsx # Client-side EN/FR context (persisted in localStorage)
  nav.tsx               # Nav + Footer client components
  translations.ts       # All copy in EN and FR
public/
  icon.png              # App icon (copied from mobile repo assets)
```

## Local development

```bash
npm install
# create .env.local and add:
# RESEND_API_KEY=re_...
npm run dev
```

## Environment variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key — contact form emails won't send without this |

## Email setup (Resend)

Domain `blackmemes.co` is registered on Resend (domain ID: `1c386f52-da2b-45cb-b6d3-dbcb7fdcb6d1`). Required DNS records:

| Type | Name | Value | Priority |
|------|------|-------|----------|
| TXT | `resend._domainkey.blackmemes.co` | DKIM public key (see Resend dashboard) | — |
| MX | `send.blackmemes.co` | `feedback-smtp.us-east-1.amazonses.com` | 10 |
| TXT | `send.blackmemes.co` | `v=spf1 include:amazonses.com ~all` | — |
| TXT | `_dmarc.blackmemes.co` | `v=DMARC1; p=none; rua=mailto:contact@blackmemes.co` | — |

Contact form sends from `noreply@blackmemes.co`, delivers to `contact@blackmemes.co`.

## Deploy

```bash
vercel --prod
```