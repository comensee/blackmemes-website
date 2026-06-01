'use client'

import { useState } from 'react'
import { useLang } from '../language-provider'
import { t } from '../translations'

const s = {
  container: { maxWidth: '680px', margin: '0 auto', padding: '4rem 2rem' },
  h1: { fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-1px', marginBottom: '0.75rem', color: '#fff' },
  sub: { color: '#888', lineHeight: 1.7, marginBottom: '3rem', fontSize: '1rem' },
  form: { display: 'flex', flexDirection: 'column' as const, gap: '1.25rem' },
  label: { display: 'flex', flexDirection: 'column' as const, gap: '0.4rem', fontSize: '0.9rem', color: '#ccc', fontWeight: 500 },
  input: {
    background: '#2a2a2a', border: '1px solid #333', borderRadius: '12px',
    padding: '0.85rem 1rem', color: '#fff', fontSize: '0.95rem',
    outline: 'none', width: '100%', boxSizing: 'border-box' as const,
  },
  textarea: {
    background: '#2a2a2a', border: '1px solid #333', borderRadius: '12px',
    padding: '0.85rem 1rem', color: '#fff', fontSize: '0.95rem',
    outline: 'none', width: '100%', boxSizing: 'border-box' as const,
    minHeight: '150px', resize: 'vertical' as const, fontFamily: 'inherit',
  },
  submit: {
    background: '#FFD700', color: '#1a1a1a', fontWeight: 700,
    padding: '0.85rem 2rem', border: 'none', borderRadius: '12px',
    fontSize: '1rem', cursor: 'pointer', alignSelf: 'flex-start' as const,
  },
  submitDisabled: {
    background: '#555', color: '#999', fontWeight: 700,
    padding: '0.85rem 2rem', border: 'none', borderRadius: '12px',
    fontSize: '1rem', cursor: 'not-allowed', alignSelf: 'flex-start' as const,
  },
  success: {
    background: '#1a2e1a', border: '1px solid #2d5a2d', borderRadius: '12px',
    padding: '1rem 1.25rem', color: '#6fcf6f', fontSize: '0.95rem',
  },
  error: {
    background: '#2e1a1a', border: '1px solid #5a2d2d', borderRadius: '12px',
    padding: '1rem 1.25rem', color: '#ff6b6b', fontSize: '0.95rem',
  },
  divider: { border: 'none', borderTop: '1px solid #333', margin: '3rem 0' },
  altTitle: { fontWeight: 700, marginBottom: '0.5rem', color: '#fff' },
  altText: { color: '#888', fontSize: '0.9rem', lineHeight: 1.6 },
  emailLink: { color: '#FFD700', textDecoration: 'none' },
}

const successMsg = {
  en: "Message sent! We'll get back to you soon.",
  fr: 'Message envoyé ! On te répond bientôt.',
}
const errorMsg = {
  en: 'Something went wrong. Please try again or email us directly.',
  fr: "Quelque chose s'est mal passé. Réessaie ou écris-nous directement.",
}
const sendingMsg = { en: 'Sending…', fr: 'Envoi…' }

export default function Contact() {
  const { lang } = useLang()
  const c = t.contact
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    setStatus(res.ok ? 'success' : 'error')
    if (res.ok) form.reset()
  }

  return (
    <div style={s.container}>
      <h1 style={s.h1}>{c.h1[lang]}</h1>
      <p style={s.sub}>{c.sub[lang]}</p>

      {status === 'success' && <div style={s.success}>{successMsg[lang]}</div>}
      {status === 'error'   && <div style={s.error}>{errorMsg[lang]}</div>}

      {status !== 'success' && (
        <form style={s.form} onSubmit={handleSubmit}>
          <label style={s.label}>
            {c.labelName[lang]}
            <input style={s.input} type="text" name="name" placeholder={c.placeName[lang]} required />
          </label>

          <label style={s.label}>
            {c.labelEmail[lang]}
            <input style={s.input} type="email" name="email" placeholder={c.placeEmail[lang]} required />
          </label>

          <label style={s.label}>
            {c.labelSubject[lang]}
            <select name="subject" style={{ ...s.input, appearance: 'none' as const }} required>
              <option value="" disabled>{c.pickSubject[lang]}</option>
              {c.subjects[lang].map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </label>

          <label style={s.label}>
            {c.labelMsg[lang]}
            <textarea style={s.textarea} name="message" placeholder={c.placeMsg[lang]} required />
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            style={status === 'sending' ? s.submitDisabled : s.submit}
          >
            {status === 'sending' ? sendingMsg[lang] : c.send[lang]}
          </button>
        </form>
      )}

      <hr style={s.divider} />

      <div>
        <p style={s.altTitle}>{c.directTitle[lang]}</p>
        <p style={s.altText}>
          {c.directText[lang]}{' '}
          <a href="mailto:contact@blackmemes.co" style={s.emailLink}>
            contact@blackmemes.co
          </a>
        </p>
      </div>
    </div>
  )
}
