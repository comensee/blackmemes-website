'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from './language-provider'
import { t } from './translations'

const s = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4rem',
    padding: '5rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
    flexWrap: 'wrap' as const,
  },
  heroText: {
    flex: '1 1 340px',
    maxWidth: '480px',
  },
  badge: {
    display: 'inline-block',
    background: '#2a2a2a',
    border: '1px solid #333',
    borderRadius: '999px',
    padding: '0.35rem 1rem',
    fontSize: '0.8rem',
    color: '#FFD700',
    marginBottom: '1.5rem',
    letterSpacing: '0.5px',
    fontWeight: 600,
  },
  h1: {
    fontSize: 'clamp(2rem, 5vw, 3.2rem)',
    fontWeight: 900,
    lineHeight: 1.1,
    margin: '0 0 1.25rem',
    letterSpacing: '-1.5px',
    color: '#fff',
  },
  sub: {
    fontSize: '1.05rem',
    color: '#888',
    lineHeight: 1.7,
    marginBottom: '2rem',
  },
  cta: {
    display: 'inline-block',
    background: '#FFD700',
    color: '#1a1a1a',
    fontWeight: 700,
    padding: '0.85rem 2.2rem',
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  phonWrap: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  phone: {
    width: '240px',
    height: '480px',
    background: '#0d0d0d',
    borderRadius: '36px',
    border: '6px solid #333',
    boxShadow: '0 0 0 1px #222, 0 32px 64px rgba(0,0,0,0.6)',
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'hidden',
    position: 'relative' as const,
  },
  notch: {
    width: '80px',
    height: '20px',
    background: '#0d0d0d',
    borderRadius: '0 0 14px 14px',
    margin: '0 auto',
    zIndex: 2,
    flexShrink: 0,
    border: '1px solid #222',
    borderTop: 'none',
  },
  screen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'hidden',
  },
  screenTop: {
    flex: 1,
    background: '#1a1a1a',
    padding: '8px',
    overflowY: 'hidden' as const,
  },
  searchBar: {
    background: '#2a2a2a',
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '6px 10px',
    fontSize: '9px',
    color: '#666',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  memeGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4px',
  },
  memeCell: {
    borderRadius: '6px',
    background: '#2a2a2a',
    aspectRatio: '1' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
  },
  keyboard: {
    background: '#2a2a2a',
    borderTop: '1px solid #333',
    padding: '6px 4px',
    flexShrink: 0,
  },
  kbRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3px',
    marginBottom: '3px',
  },
  key: {
    background: '#3a3a3a',
    borderRadius: '4px',
    width: '20px',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '7px',
    color: '#ccc',
    flexShrink: 0,
  },
  keyGold: {
    background: '#FFD700',
    borderRadius: '4px',
    width: '44px',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '7px',
    color: '#1a1a1a',
    fontWeight: 700,
    flexShrink: 0,
  },
  keyWide: {
    background: '#3a3a3a',
    borderRadius: '4px',
    flex: 1,
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '7px',
    color: '#ccc',
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
    color: '#fff',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
  },
  card: {
    background: '#2a2a2a',
    border: '1px solid #333',
    borderRadius: '12px',
    padding: '1.5rem',
  },
  cardIcon: { fontSize: '2rem', marginBottom: '0.75rem' },
  cardTitle: { fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem', color: '#fff' },
  cardText: { color: '#888', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 },
  divider: { border: 'none', borderTop: '1px solid #333', margin: 0 },
  storeSection: {
    textAlign: 'center' as const,
    padding: '5rem 2rem',
  },
  storeTitle: { fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' },
  storeText: { color: '#888', marginBottom: '2rem' },
  storeBadges: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  },
  storeBadge: {
    background: '#FFD700',
    border: 'none',
    borderRadius: '12px',
    padding: '0.85rem 1.75rem',
    color: '#1a1a1a',
    fontSize: '0.95rem',
    fontWeight: 700,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
}

const MEME_EMOJIS = ['😂', '💀', '😤', '🔥', '😭', '🤣', '👀', '💯']
const KB_ROW1 = ['Q','W','E','R','T','Y','U','I','O','P']
const KB_ROW2 = ['A','S','D','F','G','H','J','K','L']
const KB_ROW3 = ['Z','X','C','V','B','N','M']

function PhoneMockup() {
  return (
    <div style={s.phonWrap}>
      <div style={s.phone}>
        <div style={s.notch} />
        <div style={s.screen}>
          <div style={s.screenTop}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <Image src="/icon.png" alt="logo" width={20} height={20} style={{ borderRadius: '4px' }} />
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#FFD700', letterSpacing: '0.3px' }}>Black Memes</span>
            </div>
            <div style={s.searchBar}>
              <span>🔍</span>
              <span>Search memes…</span>
            </div>
            <div style={s.memeGrid}>
              {MEME_EMOJIS.map((emoji, i) => (
                <div key={i} style={{
                  ...s.memeCell,
                  background: i % 3 === 0 ? '#2a2a2a' : i % 3 === 1 ? '#222' : '#1e1e1e',
                }}>
                  {emoji}
                </div>
              ))}
            </div>
          </div>
          <div style={s.keyboard}>
            <div style={s.kbRow}>
              {KB_ROW1.map(k => <div key={k} style={s.key}>{k}</div>)}
            </div>
            <div style={s.kbRow}>
              {KB_ROW2.map(k => <div key={k} style={s.key}>{k}</div>)}
            </div>
            <div style={s.kbRow}>
              <div style={{ ...s.key, width: '28px' }}>⇧</div>
              {KB_ROW3.map(k => <div key={k} style={s.key}>{k}</div>)}
              <div style={{ ...s.key, width: '28px' }}>⌫</div>
            </div>
            <div style={{ ...s.kbRow, marginBottom: 0 }}>
              <div style={{ ...s.key, width: '28px' }}>123</div>
              <div style={s.keyGold}>MEME</div>
              <div style={s.keyWide}>space</div>
              <div style={{ ...s.key, width: '32px' }}>return</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { lang } = useLang()
  const h = t.home

  return (
    <>
      <section style={s.hero}>
        <div style={s.heroText}>
          <span style={s.badge}>{h.badge[lang]}</span>
          <h1 style={s.h1}>{h.h1[lang]}</h1>
          <p style={s.sub}>{h.sub[lang]}</p>
          <Link href="#download" style={s.cta}>{h.cta[lang]}</Link>
        </div>
        <PhoneMockup />
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
