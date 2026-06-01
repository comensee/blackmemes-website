export type Lang = 'en' | 'fr'

export const t = {
  nav: {
    home:    { en: 'Home',    fr: 'Accueil' },
    tos:     { en: 'Terms',   fr: 'CGU' },
    privacy: { en: 'Privacy', fr: 'Confidentialité' },
    contact: { en: 'Contact', fr: 'Contact' },
  },
  footer: {
    copy: { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
  },
  home: {
    badge:   { en: 'iOS & Android', fr: 'iOS & Android' },
    h1:      { en: 'The meme keyboard for Black culture', fr: 'Le clavier mème pour la culture Black' },
    sub:     {
      en: "Black Memes Generator is a mobile keyboard that gives you access to thousands of culturally relevant memes — right from your keyboard, in any app. No more switching tabs. Just vibe.",
      fr: "Black Memes Generator est un clavier mobile qui te donne accès à des milliers de mèmes culturellement pertinents — directement depuis ton clavier, dans n'importe quelle app. Fini les onglets. Just vibe.",
    },
    cta:     { en: 'Get the app', fr: 'Télécharger l\'app' },
    whyH2:   { en: 'Why Black Memes Generator?', fr: 'Pourquoi Black Memes Generator ?' },
    downloadH2:   { en: 'Download the app', fr: 'Télécharger l\'app' },
    downloadSub:  { en: 'Free · iOS & Android', fr: 'Gratuit · iOS & Android' },
    features: [
      {
        icon: '⌨️',
        title: { en: 'Built into your keyboard', fr: 'Intégré au clavier' },
        text:  { en: 'Access thousands of memes without leaving whatever app you\'re in. It just works.', fr: 'Accède à des milliers de mèmes sans quitter ton app. Ça marche, c\'est tout.' },
      },
      {
        icon: '🖤',
        title: { en: 'Actually culturally relevant', fr: 'Vraiment culturellement pertinent' },
        text:  { en: 'We\'re not talking stock photos with captions. This is the real stuff — memes that actually hit.', fr: 'On parle pas de photos de stock avec des sous-titres. C\'est les vrais mèmes — ceux qui font mouche.' },
      },
      {
        icon: '🔍',
        title: { en: 'Smart search', fr: 'Recherche intelligente' },
        text:  { en: 'Type a vibe, get the meme. The search actually understands what you\'re going for.', fr: 'Tape une ambiance, obtiens le mème. La recherche comprend vraiment ce que tu cherches.' },
      },
      {
        icon: '⚡',
        title: { en: 'Fast as your thoughts', fr: 'Aussi rapide que tes pensées' },
        text:  { en: 'Optimized for iOS and Android. No lag, no loading screens, just memes.', fr: 'Optimisé pour iOS et Android. Pas de lag, pas d\'écrans de chargement, juste des mèmes.' },
      },
      {
        icon: '🔒',
        title: { en: 'Your data stays yours', fr: 'Tes données restent les tiennes' },
        text:  { en: 'We don\'t sell your data or spy on what you search. We\'re not that company.', fr: 'On ne vend pas tes données ni on espionne tes recherches. On est pas cette boîte-là.' },
      },
      {
        icon: '✨',
        title: { en: 'Always fresh', fr: 'Toujours à jour' },
        text:  { en: 'The catalog gets updated constantly so you\'re never stuck sending a 2019 meme in 2026.', fr: 'Le catalogue est mis à jour en continu pour que tu envoies jamais un mème de 2019 en 2026.' },
      },
    ],
  },
  privacy: {
    title:   { en: 'Privacy Policy', fr: 'Politique de Confidentialité' },
    updated: { en: 'Last updated: June 1, 2026', fr: 'Dernière mise à jour : 1er juin 2026' },
    sections: [
      {
        heading: { en: '1. Who we are', fr: '1. Qui sommes-nous ?' },
        body:    { en: 'Black Memes Generator is operated by The Bang Corp. If you have any questions about this policy, reach out via the contact page.', fr: 'Black Memes Generator est opéré par The Bang Corp. Pour toute question sur cette politique, contacte-nous via la page contact.' },
      },
      {
        heading: { en: '2. What data we collect', fr: '2. Quelles données on collecte' },
        body:    { en: 'We only collect what is necessary to run the app:', fr: 'On collecte uniquement ce qui est nécessaire pour faire fonctionner l\'app :' },
        list:    {
          en: ['Email address (when you create an account)', 'Saved meme IDs (to power your personal collection)', 'Search queries (to return relevant results)'],
          fr: ['Adresse email (lors de la création d\'un compte)', 'IDs des mèmes sauvegardés (pour ta collection personnelle)', 'Requêtes de recherche (pour retourner des résultats pertinents)'],
        },
      },
      {
        heading: { en: '3. What we do not collect', fr: '3. Ce qu\'on ne collecte pas' },
        body:    { en: 'We do not collect:', fr: 'On ne collecte pas :' },
        list:    {
          en: ['Your location', 'Your contacts or address book', 'What you type in other apps', 'Any data from the keyboard beyond your meme search query'],
          fr: ['Ta localisation', 'Tes contacts ou carnet d\'adresses', 'Ce que tu tapes dans d\'autres apps', 'Aucune donnée du clavier au-delà de ta requête de recherche de mèmes'],
        },
      },
      {
        heading: { en: '4. How we use your data', fr: '4. Comment on utilise tes données' },
        body:    { en: 'Your data is used exclusively to provide the app\'s features: authenticating your account, syncing your saved collection, and returning search results. We do not sell, rent, or share your data with third parties for marketing purposes.', fr: 'Tes données sont utilisées exclusivement pour fournir les fonctionnalités de l\'app : authentifier ton compte, synchroniser ta collection sauvegardée, et retourner des résultats de recherche. On ne vend, loue ni partage tes données avec des tiers à des fins marketing.' },
      },
      {
        heading: { en: '5. Third-party services', fr: '5. Services tiers' },
        body:    { en: 'We use the following third-party services:', fr: 'On utilise les services tiers suivants :' },
        list:    {
          en: ['Clerk (authentication) — clerk.com/privacy', 'Giphy (meme content) — giphy.com/privacy', 'Vercel (hosting) — vercel.com/legal/privacy-policy'],
          fr: ['Clerk (authentification) — clerk.com/privacy', 'Giphy (contenu mème) — giphy.com/privacy', 'Vercel (hébergement) — vercel.com/legal/privacy-policy'],
        },
      },
      {
        heading: { en: '6. Data retention', fr: '6. Conservation des données' },
        body:    { en: 'Your data is kept for as long as your account is active. You can delete your account at any time from the Settings screen in the app. Upon deletion, all your data is permanently removed from our systems.', fr: 'Tes données sont conservées tant que ton compte est actif. Tu peux supprimer ton compte à tout moment depuis l\'écran Paramètres de l\'app. Lors de la suppression, toutes tes données sont définitivement effacées de nos systèmes.' },
      },
      {
        heading: { en: '7. Your rights (GDPR)', fr: '7. Tes droits (RGPD)' },
        body:    { en: 'If you are in the EU or UK, you have the right to access, correct, or delete your personal data. You can exercise these rights by deleting your account in-app or by contacting us directly.', fr: 'Si tu es dans l\'UE ou au Royaume-Uni, tu as le droit d\'accéder, de corriger ou de supprimer tes données personnelles. Tu peux exercer ces droits en supprimant ton compte dans l\'app ou en nous contactant directement.' },
      },
      {
        heading: { en: '8. Keyboard & Full Access', fr: '8. Clavier & Accès complet' },
        body:    { en: '"Allow Full Access" is required by iOS to load GIF content from our API. We do not log, store, or transmit anything you type in other apps. The keyboard only sends the search query you type in the meme search bar.', fr: 'L\'\'Accès complet\' est requis par iOS pour charger le contenu GIF depuis notre API. On ne journalise, ne stocke ni ne transmet ce que tu tapes dans d\'autres apps. Le clavier envoie uniquement la requête que tu tapes dans la barre de recherche de mèmes.' },
      },
      {
        heading: { en: '9. Children\'s privacy', fr: '9. Vie privée des enfants' },
        body:    { en: 'The app is not directed at children under 13. We do not knowingly collect personal data from anyone under 13. If you believe a child has provided us with data, please contact us and we will delete it promptly.', fr: 'L\'app ne s\'adresse pas aux enfants de moins de 13 ans. On ne collecte pas sciemment de données personnelles de personnes de moins de 13 ans. Si tu penses qu\'un enfant nous a fourni des données, contacte-nous et on les supprimera rapidement.' },
      },
      {
        heading: { en: '10. Changes to this policy', fr: '10. Modifications de cette politique' },
        body:    { en: 'We may update this policy from time to time. We will notify you via the app or email. Continued use of the app after changes means you accept the updated policy.', fr: 'On peut mettre à jour cette politique de temps en temps. On te le fera savoir via l\'app ou par email. Continuer à utiliser l\'app après les modifications signifie que tu acceptes la politique mise à jour.' },
      },
      {
        heading: { en: '11. Contact', fr: '11. Contact' },
        body:    { en: 'Questions about your privacy? Reach us on the contact page.', fr: 'Des questions sur ta vie privée ? Contacte-nous sur la page contact.' },
        link:    { en: 'contact page', fr: 'page contact' },
      },
    ],
  },
  tos: {
    title:    { en: 'Terms of Service', fr: "Conditions Générales d'Utilisation" },
    updated:  { en: 'Last updated: June 1, 2026', fr: 'Dernière mise à jour : 1er juin 2026' },
    sections: [
      {
        heading: { en: '1. What is this?', fr: '1. C\'est quoi ?' },
        body:    { en: 'These Terms of Service govern your use of the Black Memes Generator mobile app. By downloading or using the app, you agree to these terms. It\'s pretty standard stuff.', fr: 'Ces CGU régissent l\'utilisation de l\'application mobile Black Memes Generator. En téléchargeant ou en utilisant l\'application, tu acceptes ces conditions. C\'est du classique.' },
      },
      {
        heading: { en: '2. What the app does', fr: '2. Ce que fait l\'app' },
        body:    { en: 'Black Memes Generator is a custom keyboard app that lets you search and share culturally relevant memes directly from your keyboard — in any app. Content comes from third-party sources including Giphy.', fr: 'Black Memes Generator est une application clavier personnalisé qui te permet de rechercher et partager des mèmes culturellement pertinents directement depuis ton clavier — dans n\'importe quelle app. Le contenu vient de sources tierces, notamment Giphy.' },
      },
      {
        heading: { en: '3. Age requirement', fr: '3. Âge requis' },
        body:    { en: 'You need to be at least 13 years old to use this app. If you\'re under 13, this isn\'t the app for you. An account may be required for some features.', fr: 'Tu dois avoir au moins 13 ans pour utiliser cette app. Si t\'as moins de 13 ans, cette app n\'est pas pour toi. Un compte peut être requis pour certaines fonctionnalités.' },
      },
      {
        heading: { en: '4. Intellectual property', fr: '4. Propriété intellectuelle' },
        body:    { en: "The app's interface, source code, and original graphics are owned by Black Memes Generator. Memes and GIFs displayed through the app belong to their respective owners. Don't copy or resell the app without permission.", fr: "L'interface de l'app, le code source et les graphiques originaux appartiennent à Black Memes Generator. Les mèmes et GIFs affichés appartiennent à leurs propriétaires respectifs. Ne copie pas ou revends pas l'app sans permission." },
      },
      {
        heading: { en: "5. Don't be that person", fr: '5. Sois pas ce mec-là' },
        body:    { en: "You agree not to:", fr: "Tu t'engages à ne pas :" },
        list:    {
          en: ['post illegal, hateful, or discriminatory content', 'try to hack or bypass the app\'s security', 'use the app to harass or invade anyone\'s privacy', 'scrape or auto-extract content from the app'],
          fr: ['publier du contenu illégal, haineux ou discriminatoire', 'tenter de pirater ou contourner la sécurité de l\'app', 'utiliser l\'app pour harceler ou violer la vie privée de quelqu\'un', 'scraper ou extraire automatiquement le contenu de l\'app'],
        },
      },
      {
        heading: { en: '6. Your data', fr: '6. Tes données' },
        body:    { en: "We only collect what we need to run the app (account ID, search history). We don't sell it. We comply with GDPR. That's it.", fr: "On collecte uniquement ce dont on a besoin pour faire fonctionner l'app (identifiant de compte, historique de recherche). On ne le vend pas. On respecte le RGPD. C'est tout." },
      },
      {
        heading: { en: '7. Liability', fr: '7. Responsabilité' },
        body:    { en: "The app is provided as-is. We're not responsible for third-party content, outages, or any indirect damages from using (or not being able to use) the app.", fr: "L'app est fournie en l'état. On n'est pas responsable du contenu tiers, des pannes, ou des dommages indirects résultant de l'utilisation (ou de l'impossibilité d'utiliser) l'app." },
      },
      {
        heading: { en: '8. Changes to these terms', fr: '8. Modifications des CGU' },
        body:    { en: "We might update these terms from time to time. We'll let you know through the app or by email. Continuing to use the app after that means you're cool with the new terms.", fr: "On peut mettre à jour ces CGU de temps en temps. On te le fera savoir via l'app ou par email. Continuer à utiliser l'app après ça signifie que tu acceptes les nouvelles conditions." },
      },
      {
        heading: { en: '9. Governing law', fr: '9. Droit applicable' },
        body:    { en: 'These terms are governed by French law. Disputes go to French courts if we can\'t work it out between us.', fr: "Ces CGU sont soumises au droit français. Les litiges vont devant les tribunaux français si on ne peut pas régler ça entre nous." },
      },
      {
        heading: { en: '10. Questions?', fr: '10. Des questions ?' },
        body:    { en: 'Hit us up on the contact page.', fr: 'Contacte-nous sur la page contact.' },
        link:    { en: 'contact page', fr: 'page contact' },
      },
    ],
  },
  contact: {
    h1:          { en: 'Say hey', fr: 'Nous contacter' },
    sub:         { en: "Got a question, a bug, or just want to say what's up? We usually get back within 48 hours.", fr: 'Une question, un bug, ou juste envie de dire bonjour ? On répond généralement sous 48h.' },
    labelName:   { en: 'Name', fr: 'Nom' },
    placeName:   { en: 'Your name', fr: 'Votre nom' },
    labelEmail:  { en: 'Email', fr: 'Email' },
    placeEmail:  { en: 'you@example.com', fr: 'vous@exemple.com' },
    labelSubject:{ en: 'Subject', fr: 'Sujet' },
    pickSubject: { en: 'Pick a topic…', fr: 'Choisir un sujet…' },
    subjects:    {
      en: ['General question', 'Bug report', 'Flag content', 'Partnership', 'Press', 'Other'],
      fr: ['Question générale', 'Problème technique', 'Signaler un contenu', 'Partenariat', 'Presse', 'Autre'],
    },
    labelMsg:    { en: 'Message', fr: 'Message' },
    placeMsg:    { en: "What's on your mind?", fr: 'Décrivez votre demande…' },
    send:        { en: 'Send it', fr: 'Envoyer' },
    directTitle: { en: 'Or just email us directly', fr: 'Contact direct' },
    directText:  { en: 'Shoot us an email at', fr: 'Écrivez-nous directement à' },
  },
} as const