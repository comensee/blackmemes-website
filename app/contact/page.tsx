import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Black Memes Generator',
  description: 'Contactez l\'équipe Black Memes Generator',
}

const s = {
  container: {
    maxWidth: '680px',
    margin: '0 auto',
    padding: '4rem 2rem',
  },
  h1: {
    fontSize: '2.2rem',
    fontWeight: 900,
    letterSpacing: '-1px',
    marginBottom: '0.75rem',
  },
  sub: {
    color: '#888',
    lineHeight: 1.7,
    marginBottom: '3rem',
    fontSize: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.25rem',
  },
  label: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.4rem',
    fontSize: '0.9rem',
    color: '#ccc',
    fontWeight: 500,
  },
  input: {
    background: '#111',
    border: '1px solid #2a2a2a',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    color: '#fff',
    fontSize: '0.95rem',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.2s',
  },
  textarea: {
    background: '#111',
    border: '1px solid #2a2a2a',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    color: '#fff',
    fontSize: '0.95rem',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
    minHeight: '150px',
    resize: 'vertical' as const,
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  },
  submit: {
    background: '#fff',
    color: '#000',
    fontWeight: 700,
    padding: '0.85rem 2rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    alignSelf: 'flex-start' as const,
    transition: 'opacity 0.2s',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #1a1a1a',
    margin: '3rem 0',
  },
  altTitle: {
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  altText: {
    color: '#888',
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
  emailLink: {
    color: '#fff',
    textDecoration: 'none',
    borderBottom: '1px solid #444',
  },
}

const subjects = [
  'Question générale',
  'Problème technique',
  'Signaler un contenu',
  'Partenariat',
  'Presse',
  'Autre',
]

export default function Contact() {
  return (
    <div style={s.container}>
      <h1 style={s.h1}>Nous contacter</h1>
      <p style={s.sub}>
        Une question, un bug, une suggestion ? L&apos;équipe Black Memes Generator vous répond généralement sous 48h.
      </p>

      <form style={s.form} action="mailto:alain.bangoula@gmail.com" method="get">
        <label style={s.label}>
          Nom
          <input style={s.input} type="text" name="name" placeholder="Votre nom" required />
        </label>

        <label style={s.label}>
          Email
          <input style={s.input} type="email" name="email" placeholder="vous@exemple.com" required />
        </label>

        <label style={s.label}>
          Sujet
          <select
            name="subject"
            style={{ ...s.input, appearance: 'none' as const }}
            required
          >
            <option value="" disabled>Choisir un sujet…</option>
            {subjects.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </label>

        <label style={s.label}>
          Message
          <textarea style={s.textarea} name="body" placeholder="Décrivez votre demande…" required />
        </label>

        <button type="submit" style={s.submit}>Envoyer</button>
      </form>

      <hr style={s.divider} />

      <div>
        <p style={s.altTitle}>Contact direct</p>
        <p style={s.altText}>
          Vous pouvez également nous écrire directement à{' '}
          <a href="mailto:alain.bangoula@gmail.com" style={s.emailLink}>
            alain.bangoula@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}
