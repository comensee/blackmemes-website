import Link from 'next/link'

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
    marginBottom: '2.5rem',
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
  cardIcon: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  cardText: {
    color: '#888',
    lineHeight: 1.6,
    fontSize: '0.95rem',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #1a1a1a',
    margin: 0,
  },
  storeSection: {
    textAlign: 'center' as const,
    padding: '5rem 2rem',
  },
  storeTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
  },
  storeText: {
    color: '#888',
    marginBottom: '2rem',
  },
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

const features = [
  {
    icon: '⌨️',
    title: 'Clavier intégré',
    text: 'Accédez à des milliers de mèmes directement depuis votre clavier, sans quitter aucune application.',
  },
  {
    icon: '🖤',
    title: 'Contenu culturellement pertinent',
    text: 'Des mèmes soigneusement sélectionnés et adaptés à la culture Black, pour des échanges authentiques.',
  },
  {
    icon: '🔍',
    title: 'Recherche intelligente',
    text: "Trouvez le mème parfait en quelques mots grâce à une recherche alimentée par l'IA.",
  },
  {
    icon: '⚡',
    title: 'Rapide et fluide',
    text: 'Une expérience optimisée pour iOS et Android, conçue pour être aussi rapide que la pensée.',
  },
  {
    icon: '🔒',
    title: 'Respect de la vie privée',
    text: 'Votre historique reste sur votre appareil. Nous ne collectons que le strict nécessaire.',
  },
  {
    icon: '✨',
    title: 'Toujours à jour',
    text: 'Notre catalogue de mèmes est mis à jour en continu pour rester dans la tendance.',
  },
]

export default function Home() {
  return (
    <>
      <section style={s.hero}>
        <span style={s.badge}>Disponible sur iOS &amp; Android</span>
        <h1 style={s.h1}>Le clavier mème pour la culture Black</h1>
        <p style={s.sub}>
          Black Memes Generator est un clavier mobile qui vous donne accès à des milliers de mèmes culturellement pertinents, directement depuis votre clavier — dans n&apos;importe quelle application.
        </p>
        <Link href="#telecharger" style={s.cta}>Télécharger l&apos;app</Link>
      </section>

      <hr style={s.divider} />

      <section style={s.section}>
        <h2 style={s.sectionTitle}>Pourquoi Black Memes Generator ?</h2>
        <div style={s.grid}>
          {features.map((f) => (
            <div key={f.title} style={s.card}>
              <div style={s.cardIcon}>{f.icon}</div>
              <div style={s.cardTitle}>{f.title}</div>
              <p style={s.cardText}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      <section id="telecharger" style={s.storeSection}>
        <h2 style={s.storeTitle}>Téléchargez l&apos;application</h2>
        <p style={s.storeText}>Gratuit · iOS &amp; Android</p>
        <div style={s.storeBadges}>
          <a href="#" style={s.storeBadge}>
            <span>🍎</span> App Store
          </a>
          <a href="#" style={s.storeBadge}>
            <span>🤖</span> Google Play
          </a>
        </div>
      </section>
    </>
  )
}
