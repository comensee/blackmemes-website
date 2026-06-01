'use client'

import Link from 'next/link'
import { useLang } from '../language-provider'
import { t } from '../translations'

const s = {
  container: { maxWidth: '760px', margin: '0 auto', padding: '4rem 2rem' },
  h1: { fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-1px', marginBottom: '0.5rem' },
  meta: { color: '#666', fontSize: '0.9rem', marginBottom: '3rem' },
  h2: { fontSize: '1.2rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '0.75rem', color: '#ddd' },
  p: { color: '#999', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' },
  ul: { color: '#999', lineHeight: 2, fontSize: '0.95rem', paddingLeft: '1.5rem' },
}

export default function TOS() {
  const { lang } = useLang()

  return (
    <article style={s.container}>
      <h1 style={s.h1}>{t.tos.title[lang]}</h1>
      <p style={s.meta}>{t.tos.updated[lang]}</p>

      {t.tos.sections.map((sec, i) => (
        <div key={i}>
          <h2 style={s.h2}>{sec.heading[lang]}</h2>
          <p style={s.p}>
            {sec.body[lang]}
            {'link' in sec && (
              <> <Link href="/contact" style={{ color: '#fff' }}>{(sec as { link: { en: string; fr: string } }).link[lang]}</Link>.</>
            )}
          </p>
          {'list' in sec && (
            <ul style={s.ul}>
              {(sec as { list: { en: readonly string[]; fr: readonly string[] } }).list[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </article>
  )
}