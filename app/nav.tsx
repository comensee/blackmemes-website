'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from './language-provider'
import { t } from './translations'

const s = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    height: '64px',
    borderBottom: '1px solid #333',
    position: 'sticky' as const,
    top: 0,
    background: 'rgba(26,26,26,0.95)',
    backdropFilter: 'blur(8px)',
    zIndex: 100,
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    textDecoration: 'none',
  },
  logoImg: {
    borderRadius: '8px',
    flexShrink: 0,
  },
  logoText: {
    fontWeight: 800,
    fontSize: '1.1rem',
    color: '#FFD700',
    letterSpacing: '-0.5px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  toggle: {
    background: '#2a2a2a',
    border: '1px solid #333',
    borderRadius: '8px',
    color: '#FFD700',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.5px',
    padding: '0.3rem 0.65rem',
  },
}

const footerStyle = {
  footer: { borderTop: '1px solid #333', padding: '2rem', textAlign: 'center' as const, color: '#555', fontSize: '0.85rem' },
  links: { display: 'flex', justifyContent: 'center', gap: '1.5rem', listStyle: 'none', padding: 0, margin: '0 0 0.75rem 0' },
  link: { color: '#555', textDecoration: 'none' },
}

export function Nav() {
  const { lang, toggle } = useLang()
  return (
    <nav style={s.nav}>
      <Link href="/" style={s.logoWrap}>
        <Image src="/icon.png" alt="Black Memes Generator" width={32} height={32} style={s.logoImg} />
        <span style={s.logoText}>Black Memes Generator</span>
      </Link>
      <div style={s.right}>
        <ul style={s.links}>
          <li><Link href="/" style={s.link}>{t.nav.home[lang]}</Link></li>
          <li><Link href="/tos" style={s.link}>{t.nav.tos[lang]}</Link></li>
          <li><Link href="/contact" style={s.link}>{t.nav.contact[lang]}</Link></li>
        </ul>
        <button onClick={toggle} style={s.toggle}>
          {lang === 'en' ? 'FR' : 'EN'}
        </button>
      </div>
    </nav>
  )
}

export function Footer() {
  const { lang } = useLang()
  return (
    <footer style={footerStyle.footer}>
      <ul style={footerStyle.links}>
        <li><Link href="/" style={footerStyle.link}>{t.nav.home[lang]}</Link></li>
        <li><Link href="/tos" style={footerStyle.link}>{t.nav.tos[lang]}</Link></li>
        <li><Link href="/contact" style={footerStyle.link}>{t.nav.contact[lang]}</Link></li>
      </ul>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Black Memes Generator. {t.footer.copy[lang]}</p>
    </footer>
  )
}
