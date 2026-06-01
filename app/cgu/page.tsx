import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CGU — Black Memes Generator',
  description: "Conditions Générales d'Utilisation de Black Memes Generator",
}

const s = {
  container: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '4rem 2rem',
  },
  h1: {
    fontSize: '2.2rem',
    fontWeight: 900,
    letterSpacing: '-1px',
    marginBottom: '0.5rem',
  },
  meta: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '3rem',
  },
  h2: {
    fontSize: '1.2rem',
    fontWeight: 700,
    marginTop: '2.5rem',
    marginBottom: '0.75rem',
    color: '#ddd',
  },
  p: {
    color: '#999',
    lineHeight: 1.8,
    marginBottom: '1rem',
    fontSize: '0.95rem',
  },
  ul: {
    color: '#999',
    lineHeight: 2,
    fontSize: '0.95rem',
    paddingLeft: '1.5rem',
  },
}

export default function CGU() {
  return (
    <article style={s.container}>
      <h1 style={s.h1}>Conditions Générales d&apos;Utilisation</h1>
      <p style={s.meta}>Dernière mise à jour : 1er juin 2026</p>

      <h2 style={s.h2}>1. Objet</h2>
      <p style={s.p}>
        Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation de l&apos;application mobile Black Memes Generator (ci-après &quot;l&apos;Application&quot;), éditée par Black Memes Generator. En téléchargeant ou en utilisant l&apos;Application, vous acceptez sans réserve les présentes CGU.
      </p>

      <h2 style={s.h2}>2. Description du service</h2>
      <p style={s.p}>
        Black Memes Generator est une application mobile proposant un clavier personnalisé permettant aux utilisateurs de rechercher et d&apos;insérer des mèmes culturellement pertinents directement dans leurs applications tierces (messagerie, réseaux sociaux, etc.). Les contenus sont issus de sources tierces, notamment Giphy.
      </p>

      <h2 style={s.h2}>3. Conditions d&apos;accès</h2>
      <p style={s.p}>L&apos;Application est réservée aux personnes âgées d&apos;au moins 13 ans. En utilisant l&apos;Application, vous déclarez remplir cette condition. Un compte utilisateur peut être requis pour accéder à certaines fonctionnalités.</p>

      <h2 style={s.h2}>4. Propriété intellectuelle</h2>
      <p style={s.p}>
        L&apos;Application, son interface, son code source et ses éléments graphiques propres sont la propriété exclusive de Black Memes Generator. Les contenus (mèmes, GIF) affichés via l&apos;Application sont fournis par des services tiers et restent soumis à leurs propres droits. L&apos;utilisateur s&apos;engage à ne pas reproduire, modifier ou exploiter l&apos;Application à des fins commerciales sans autorisation préalable.
      </p>

      <h2 style={s.h2}>5. Comportement de l&apos;utilisateur</h2>
      <p style={s.p}>L&apos;utilisateur s&apos;engage à utiliser l&apos;Application de manière licite et à ne pas :</p>
      <ul style={s.ul}>
        <li>diffuser des contenus à caractère illicite, haineux ou discriminatoire ;</li>
        <li>tenter de contourner les mesures de sécurité de l&apos;Application ;</li>
        <li>utiliser l&apos;Application à des fins de harcèlement ou d&apos;atteinte à la vie privée d&apos;autrui ;</li>
        <li>reproduire ou extraire automatiquement les contenus de l&apos;Application.</li>
      </ul>

      <h2 style={s.h2}>6. Données personnelles</h2>
      <p style={s.p}>
        Nous collectons uniquement les données nécessaires au fonctionnement de l&apos;Application (identifiant de compte, historique de recherche). Ces données sont traitées conformément à notre politique de confidentialité et à la réglementation applicable (RGPD). Elles ne sont pas vendues à des tiers.
      </p>

      <h2 style={s.h2}>7. Limitation de responsabilité</h2>
      <p style={s.p}>
        L&apos;Application est fournie &quot;en l&apos;état&quot;. Nous ne saurions être tenus responsables des contenus tiers affichés, des interruptions de service, ni des dommages indirects résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser l&apos;Application.
      </p>

      <h2 style={s.h2}>8. Modification des CGU</h2>
      <p style={s.p}>
        Nous nous réservons le droit de modifier les présentes CGU à tout moment. Toute modification sera notifiée via l&apos;Application ou par email. La poursuite de l&apos;utilisation après notification vaut acceptation des nouvelles CGU.
      </p>

      <h2 style={s.h2}>9. Droit applicable</h2>
      <p style={s.p}>
        Les présentes CGU sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront compétents.
      </p>

      <h2 style={s.h2}>10. Contact</h2>
      <p style={s.p}>
        Pour toute question relative aux présentes CGU, vous pouvez nous contacter via la <a href="/contact" style={{ color: '#fff' }}>page contact</a>.
      </p>
    </article>
  )
}