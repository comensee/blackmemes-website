'use client'

import Link from 'next/link'
import { useLang } from './language-provider'
import { t } from './translations'

const s = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    height: '64px',
    borderBottom: '1px solid #222',
    position: 'sticky' as const,
    top: 0,
    background: 'rgba(10,10,10,0.9)',
    backdropFilter: 'blur(8px)',
    zIndex: 100,
  },
  logo: {
    fontWeight: 800,
    fontSize: '1.2rem',
    color: '#fff',
    textDecoration: 'none',
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
    background: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '6px',
    color: '#aaa',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    padding: '0.3rem 0.65rem',
  },
}

export function Nav() {
  const { lang, toggle } = useLang()
  return (
    <nav style={s.nav}>
      <Link href="/" style={s.logo}>Black Memes Generator</Link>
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
  const footerLink = { color: '#555', textDecoration: 'none' }
  return (
    <footer style={{ borderTop: '1px solid #222', padding: '2rem', textAlign: 'center', color: '#555', fontSize: '0.85rem' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', listStyle: 'none', padding: 0, margin: '0 0 0.75rem 0' }}>
        <li><Link href="/" style={footerLink}>{t.nav.home[lang]}</Link></li>
        <li><Link href="/tos" style={footerLink}>{t.nav.tos[lang]}</Link></li>
        <li><Link href="/contact" style={footerLink}>{t.nav.contact[lang]}</Link></li>
      </ul>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Black Memes Generator. {t.footer.copy[lang]}</p>
    </footer>
  )
}