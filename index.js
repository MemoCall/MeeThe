const translations = {
  en: {
    // Hero
    title: 'Simplify call management<br><span class="text-blue-500">of your calls</span>',
    desc: "Manage your calls seamlessly thanks to our efficient call history system.",
    cta: "Take back control of my calls",
    // Professions
    professions_title: "Begin your success story",
    professions_tagline: "Whatever your profession, Memocall simplifies call management.",
    professions_cards: [
      { title: "Liberal professions", desc: "Free yourself from call management" },
      { title: "Freelancers", desc: "Manage your clients, not your calls." },
      { title: "Salespeople", desc: "Focus on your sales, not your calls" },
      { title: "Entrepreneurs", desc: "Centralize your calls, boost your network." },
      { title: "Real estate agents", desc: "Track your prospects and close more deals." },
      { title: "SMEs", desc: "Optimize communication with your clients." },
      { title: "Event planners", desc: "Coordinate providers and clients effortlessly" }
    ],
    // Pricing
    pricing_title: "Pricing",
    pricing_sub: "Choose the plan that suits you",
    free: "Free",
    free_desc: "Try the app",
    free_price: "0",
    free_features: [
      "Test all features for 30 days",
      "Basic features",
      "Community support"
    ],
    free_btn: "Start for free",
    essential: "Essential",
    essential_desc: "All the essentials for your business",
    essential_price: "1",
    essential_features: [
      "Contact management",
      "Call management",
      "Lock screen notifications",
      "Smart import",
      "Call history & notes",
      "Export data",
      "Priority support"
    ],
    essential_btn: "Choose Essential",
    popular: "Popular",
    business: "Business",
    business_desc: "For advanced needs",
    business_price: "Custom",
    business_features: [
      "All Essential features",
      "Attach images or PDFs to notes",
      "Mini-CRM",
      "Smart Use consulting",
      "Custom integrations",
      "Dedicated support",
      "Training included"
    ],
    business_btn: "Contact us",
    // Section 41
    section41_title: "All-in-One Contact Management Solution with Memocall",
    section41_left: "Know who calls you and essential info in",
    section41_right: "One-Click Export of Customized Data Views",
    section41_bottom: "Call History and Notes for Seamless Management"
  },
  fr: {
    // Hero
    title: 'Simplifier la gestion<br><span class="text-blue-500">de vos appels</span>',
    desc: "Gérer vos appels sans frictions grâce à notre système d'historisation des appels performants.",
    cta: "Reprendre le pouvoir sur mes appels",
    // Professions
    professions_title: "Commencez à construire votre succès",
    professions_tagline: "Quel que soit votre métier, Memocall simplifie la gestion de vos appels.",
    professions_cards: [
      { title: "Professions libérales", desc: "Libérez-vous de la gestion des appels" },
      { title: "Libéraux", desc: "Gérez vos clients, pas vos appels." },
      { title: "Commerciaux", desc: "Focus sur vos ventes, pas sur vos appels" },
      { title: "Entrepreneurs", desc: "Centralisez vos appels, boostez votre réseau." },
      { title: "Agents immobiliers", desc: "Suivez vos prospects et concluez plus de ventes." },
      { title: "PME", desc: "Optimisez la communication avec vos clients." },
      { title: "Événementiels", desc: "Coordonnez vos prestataires et clients sans effort" }
    ],
    // Pricing
    pricing_title: "Tarifs",
    pricing_sub: "Choisissez le plan qui vous convient",
    free: "Gratuit",
    free_desc: "Testez l'application",
    free_price: "0",
    free_features: [
      "Testez toutes les fonctionnalités pendant 30 jours",
      "Fonctionnalités de base",
      "Support communautaire"
    ],
    free_btn: "Commencer gratuitement",
    essential: "Essentiel",
    essential_desc: "Toutes les fonctionnalités essentielles pour votre activité",
    essential_price: "1",
    essential_features: [
      "Gestion des contacts",
      "Gestion des appels",
      "Notifications sur l'écran de verrouillage",
      "Importation intelligente",
      "Historique d'appels & notes",
      "Exportation de données",
      "Support prioritaire"
    ],
    essential_btn: "Choisir Essentiel",
    popular: "Populaire",
    business: "Business",
    business_desc: "Pour des besoins avancés",
    business_price: "Sur mesure",
    business_features: [
      "Toutes les fonctionnalités Essentiel",
      "Intégration d'images ou de PDF dans les notes",
      "Mini-CRM",
      "Consulting Smart Use",
      "Intégrations personnalisées",
      "Support dédié",
      "Formation incluse"
    ],
    business_btn: "Nous contacter",
    // Section 41
    section41_title: "Solution de gestion de contacts tout-en-un avec Memocall",
    section41_left: "Sachez qui vous appelle et les infos essentielles",
    section41_right: "Exportation en un clic de vues de données personnalisées",
    section41_bottom: "Historique d'appels et notes pour une gestion fluide"
  }
};

function setLang(lang) {
  // Hero
  document.getElementById('mainTitle').innerHTML = translations[lang].title;
  document.getElementById('mainDesc').textContent = translations[lang].desc;
  document.getElementById('ctaBtn').textContent = translations[lang].cta;
  // Professions
  const prof = document.querySelector('section.bg-white');
  if (prof) {
    prof.querySelector('h2').textContent = translations[lang].professions_title;
    prof.querySelector('p').textContent = translations[lang].professions_tagline;
    const cards = prof.querySelectorAll('.grid > div');
    translations[lang].professions_cards.forEach((card, i) => {
      if(cards[i]) {
        cards[i].querySelector('h3').textContent = card.title;
        cards[i].querySelector('p').textContent = card.desc;
      }
    });
  }
  // Section 41
  const s41 = document.querySelector('section.bg-gradient-to-b');
  if (s41) {
    s41.querySelector('h2').textContent = translations[lang].section41_title;
    const h3s = s41.querySelectorAll('h3');
    if (h3s.length > 0) h3s[0].textContent = translations[lang].section41_left;
    if (h3s.length > 1) h3s[1].textContent = translations[lang].section41_right;
    if (h3s.length > 2) h3s[2].textContent = translations[lang].section41_bottom;
  }
  // Pricing
  const pricing = document.querySelector('section.bg-gray-50');
  if (pricing) {
    pricing.querySelector('h2').textContent = translations[lang].pricing_title;
    pricing.querySelector('p').textContent = translations[lang].pricing_sub;
    const cards = pricing.querySelectorAll('.grid > div');
    if (cards.length === 3) {
      // Free
      cards[0].querySelector('h3').textContent = translations[lang].free;
      cards[0].querySelector('p').textContent = translations[lang].free_desc;
      cards[0].querySelector('div.text-4xl').innerHTML = `${translations[lang].free_price}<span class="text-2xl align-top">€</span><span class="text-base font-normal text-gray-500">/mois</span>`;
      const freeList = cards[0].querySelectorAll('ul li');
      translations[lang].free_features.forEach((txt, i) => { if(freeList[i]) freeList[i].childNodes[1].textContent = ' ' + txt; });
      cards[0].querySelector('button').textContent = translations[lang].free_btn;
      // Essential
      cards[1].querySelector('h3').textContent = translations[lang].essential;
      cards[1].querySelector('p').textContent = translations[lang].essential_desc;
      cards[1].querySelector('div.text-4xl').innerHTML = `${translations[lang].essential_price}<span class="text-2xl align-top">€</span><span class="text-base font-normal text-gray-500">/mois</span>`;
      const essList = cards[1].querySelectorAll('ul li');
      translations[lang].essential_features.forEach((txt, i) => { if(essList[i]) essList[i].childNodes[1].textContent = ' ' + txt; });
      cards[1].querySelector('button').textContent = translations[lang].essential_btn;
      // Badge
      const badge = cards[1].querySelector('span.absolute');
      if (badge) badge.textContent = translations[lang].popular;
      // Business
      cards[2].querySelector('h3').textContent = translations[lang].business;
      cards[2].querySelector('p').textContent = translations[lang].business_desc;
      cards[2].querySelector('div.text-4xl').textContent = translations[lang].business_price;
      const busList = cards[2].querySelectorAll('ul li');
      translations[lang].business_features.forEach((txt, i) => { if(busList[i]) busList[i].childNodes[1].textContent = ' ' + txt; });
      cards[2].querySelector('button').textContent = translations[lang].business_btn;
    }
  }
}

const langSelect = document.getElementById('langSelect');
const defaultLang = 'en';
if (langSelect) {
  langSelect.value = defaultLang;
  setLang(defaultLang);
  langSelect.addEventListener('change', (e) => {
    setLang(e.target.value);
  });
} else {
  setLang(defaultLang);
}
