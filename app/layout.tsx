import type { Metadata } from 'next'
import { LanguageProvider } from './language-provider'
import { Nav, Footer } from './nav'

export const metadata: Metadata = {
  title: 'Black Memes Generator',
  description: 'The meme keyboard built for Black culture',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: '#1a1a1a',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <LanguageProvider>
          <Nav />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
