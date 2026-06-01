# Black Memes Generator — Website

## What this is

Static marketing website for the Black Memes Generator mobile keyboard app. Built with Next.js 16 App Router, deployed on Vercel at https://blackmemes.co.

## Key files

- `app/translations.ts` — all user-facing copy in EN and FR. Edit here first when changing text.
- `app/language-provider.tsx` — client context for EN/FR toggle, persisted in `localStorage`.
- `app/nav.tsx` — Nav and Footer are client components (need language context).
- `app/api/contact/route.ts` — POST handler that sends email via Resend. Requires `RESEND_API_KEY` env var.
- `public/icon.png` — app icon sourced from `blackmemesgenerator-mobile/assets/images/icon.png`.

## Design tokens (match the mobile app)

| Token | Value |
|-------|-------|
| Background | `#1a1a1a` |
| Surface / cards / inputs | `#2a2a2a` |
| Border | `#333` |
| Accent (primary) | `#FFD700` |
| Text primary | `#fff` |
| Text secondary | `#aaa` / `#888` |
| Border radius | `12px` |

## Adding a page

1. Create `app/<route>/page.tsx` as a `'use client'` component.
2. Import `useLang` from `../language-provider` and `t` from `../translations`.
3. Add translations to `translations.ts` under a new key.
4. Add the nav link in `nav.tsx`.

## Replacing the phone mockup

The CSS phone on the homepage is in the `PhoneMockup` component in `app/page.tsx`. To swap in a real screenshot, add the image to `public/` and replace `<PhoneMockup />` with a `<Image>` tag.

## Environment variables

- `RESEND_API_KEY` — required for the contact form. Set via `vercel env add RESEND_API_KEY production`.

## Deploy

```bash
vercel --prod
```
