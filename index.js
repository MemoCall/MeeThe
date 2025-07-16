const translations = {
  en: {
    // Hero
    title: 'Simplify call management<br><span class="text-blue-500">of your calls</span>',
    desc: "Manage your calls seamlessly thanks to our efficient call history system.",
    cta: "Take back control of my calls",
    // Pricing
    pricing_title: "Pricing",
    pricing_sub: "Choose the plan that suits you",
    free: "Free",
    free_desc: "Try the app",
    free_price: "0€",
    free_features: [
      "Basic features",
      "Limited to 50 contacts",
      "Community support"
    ],
    free_btn: "Start for free",
    essential: "Essential",
    essential_desc: "All features",
    essential_price: "1.5€",
    essential_features: [
      "All features",
      "Unlimited contacts",
      "Priority support",
      "Data export"
    ],
    essential_btn: "Choose Essential",
    popular: "Popular",
    business: "Business",
    business_desc: "For specific needs",
    business_price: "Custom",
    business_features: [
      "All Essential features",
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
    // Pricing
    pricing_title: "Tarifs",
    pricing_sub: "Choisissez le plan qui vous convient",
    free: "Free",
    free_desc: "Testez l'application",
    free_price: "0€",
    free_features: [
      "Fonctionnalités de base",
      "Limité à 50 contacts",
      "Support communautaire"
    ],
    free_btn: "Commencer gratuitement",
    essential: "Essential",
    essential_desc: "Toutes les fonctionnalités",
    essential_price: "1,5€",
    essential_features: [
      "Toutes les fonctionnalités",
      "Contacts illimités",
      "Support prioritaire",
      "Exportation de données"
    ],
    essential_btn: "Choisir Essential",
    popular: "Populaire",
    business: "Business",
    business_desc: "Pour des besoins spécifiques",
    business_price: "Sur mesure",
    business_features: [
      "Toutes les fonctionnalités Essential",
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
