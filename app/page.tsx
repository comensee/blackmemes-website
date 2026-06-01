'use client'

import Link from 'next/link'
import { useLang } from './language-provider'
import { t } from './translations'

const s = {
  hero: {
    textAlign: 'center' as const,
    padding: '6rem 2rem 4rem',
    maxWidth: '760px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    background: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '999px',
    padding: '0.35rem 1rem',
    fontSize: '0.8rem',
    color: '#aaa',
    marginBottom: '1.5rem',
    letterSpacing: '0.5px',
  },
  h1: {
    fontSize: 'clamp(2.4rem, 6vw, 4rem)',
    fontWeight: 900,
    lineHeight: 1.1,
    margin: '0 0 1.5rem',
    letterSpacing: '-1.5px',
    background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
  },
  sub: {
    fontSize: '1.15rem',
    color: '#888',
    lineHeight: 1.7,
    maxWidth: '560px',
    margin: '0 auto 2.5rem',
  },
  cta: {
    display: 'inline-block',
    background: '#fff',
    color: '#000',
    fontWeight: 700,
    padding: '0.85rem 2.2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  section: {
    padding: '5rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 800,
    textAlign: 'center' as const,
    marginBottom: '3rem',
    letterSpacing: '-0.5px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: '#111',
    border: '1px solid #222',
    borderRadius: '12px',
    padding: '2rem',
  },
  cardIcon: { fontSize: '2rem', marginBottom: '1rem' },
  cardTitle: { fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' },
  cardText: { color: '#888', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 },
  divider: { border: 'none', borderTop: '1px solid #1a1a1a', margin: 0 },
  storeSection: {
    textAlign: 'center' as const,
    padding: '5rem 2rem',
  },
  storeTitle: { fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' },
  storeText: { color: '#888', marginBottom: '2rem' },
  storeBadges: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  },
  storeBadge: {
    background: '#111',
    border: '1px solid #333',
    borderRadius: '10px',
    padding: '0.75rem 1.5rem',
    color: '#ccc',
    fontSize: '0.9rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
}

export default function Home() {
  const { lang } = useLang()
  const h = t.home

  return (
    <>
      <section style={s.hero}>
        <span style={s.badge}>{h.badge[lang]}</span>
        <h1 style={s.h1}>{h.h1[lang]}</h1>
        <p style={s.sub}>{h.sub[lang]}</p>
        <Link href="#download" style={s.cta}>{h.cta[lang]}</Link>
      </section>

      <hr style={s.divider} />

      <section style={s.section}>
        <h2 style={s.sectionTitle}>{h.whyH2[lang]}</h2>
        <div style={s.grid}>
          {h.features.map((f) => (
            <div key={f.title.en} style={s.card}>
              <div style={s.cardIcon}>{f.icon}</div>
              <div style={s.cardTitle}>{f.title[lang]}</div>
              <p style={s.cardText}>{f.text[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      <section id="download" style={s.storeSection}>
        <h2 style={s.storeTitle}>{h.downloadH2[lang]}</h2>
        <p style={s.storeText}>{h.downloadSub[lang]}</p>
        <div style={s.storeBadges}>
          <a href="#" style={s.storeBadge}><span>🍎</span> App Store</a>
          <a href="#" style={s.storeBadge}><span>🤖</span> Google Play</a>
        </div>
      </section>
    </>
  )
}