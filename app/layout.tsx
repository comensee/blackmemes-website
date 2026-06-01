import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Black Memes Generator',
  description: 'The meme keyboard built for Black culture',
}

const styles = {
  body: {
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    background: '#0a0a0a',
    color: '#f0f0f0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
  },
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
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  main: {
    flex: 1,
  },
  footer: {
    borderTop: '1px solid #222',
    padding: '2rem',
    textAlign: 'center' as const,
    color: '#555',
    fontSize: '0.85rem',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    listStyle: 'none',
    padding: 0,
    margin: '0 0 0.75rem 0',
  },
  footerLink: {
    color: '#555',
    textDecoration: 'none',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={styles.body}>
        <nav style={styles.nav}>
          <Link href="/" style={styles.logo}>Black Memes Generator</Link>
          <ul style={styles.navLinks}>
            <li><Link href="/" style={styles.navLink}>Accueil</Link></li>
            <li><Link href="/cgu" style={styles.navLink}>CGU</Link></li>
            <li><Link href="/contact" style={styles.navLink}>Contact</Link></li>
          </ul>
        </nav>
        <main style={styles.main}>{children}</main>
        <footer style={styles.footer}>
          <ul style={styles.footerLinks}>
            <li><Link href="/" style={styles.footerLink}>Accueil</Link></li>
            <li><Link href="/cgu" style={styles.footerLink}>CGU</Link></li>
            <li><Link href="/contact" style={styles.footerLink}>Contact</Link></li>
          </ul>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Black Memes Generator. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  )
}
