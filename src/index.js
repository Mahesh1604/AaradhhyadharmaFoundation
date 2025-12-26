import React, { createContext, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './lib/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });
export const LanguageContext = createContext({ lang: 'EN', setLang: () => {} });
export const translations = {
  EN: {
    sections: {
      animalWelfare: 'Animal Welfare',
      orphanageSupport: 'Orphanage Support',
      needyAssistance: 'Needy People Assistance',
      childAdoption: 'Child Adoption',
      animalRescue: 'Animal Rescue',
      features: {
        medicalCare: 'Medical Care',
        shelterSupport: 'Shelter Support',
        rehabilitation: 'Rehabilitation',
        educationSupport: 'Education Support',
        basicNecessities: 'Basic Necessities',
        healthcare: 'Healthcare',
        foodDistribution: 'Food Distribution',
        medicalAid: 'Medical Aid',
        essentialSupport: 'Essential Support',
        legalProcess: 'Legal Process',
        familyMatching: 'Family Matching',
        postSupport: 'Post-Adoption Support',
        emergencyResponse: 'Emergency Response',
        support247: '24/7 Support',
      },
      learnMore: 'Learn More'
    },
    footer: {
      explore: 'Explore',
      programs: 'Programs',
      newsletter: 'Newsletter',
      subscribe: 'Subscribe',
      newsletterBlurb: 'Get updates on rescues, programs, and events.',
      emailPlaceholder: 'Your email',
      links: { home: 'Home', adopt: 'Adopt', donate: 'Donate', contact: 'Contact' },
      phone: '+91-12345-67890',
      email: 'AaradhyadharmaFoundation@gmail.com',
      location: 'Delhi, India',
      privacy: 'Privacy',
      terms: 'Terms'
    }
  },
  HI: {
    sections: {
      animalWelfare: 'पशु कल्याण',
      orphanageSupport: 'अनाथालय सहायता',
      needyAssistance: 'जरूरतमंदों की सहायता',
      childAdoption: 'बाल गोद लेना',
      animalRescue: 'पशु बचाव',
      features: {
        medicalCare: 'चिकित्सा देखभाल',
        shelterSupport: 'आश्रय सहायता',
        rehabilitation: 'पुनर्वास',
        educationSupport: 'शिक्षा सहायता',
        basicNecessities: 'मूलभूत आवश्यकताएँ',
        healthcare: 'स्वास्थ्य सेवा',
        foodDistribution: 'भोजन वितरण',
        medicalAid: 'चिकित्सा सहायता',
        essentialSupport: 'आवश्यक सहयोग',
        legalProcess: 'कानूनी प्रक्रिया',
        familyMatching: 'परिवार मिलान',
        postSupport: 'गोद लेने के बाद सहायता',
        emergencyResponse: 'आपातकालीन प्रतिक्रिया',
        support247: '24/7 सहायता',
      },
      learnMore: 'और जानें'
    },
    footer: {
      explore: 'खोजें',
      programs: 'कार्यक्रम',
      newsletter: 'समाचार पत्र',
      subscribe: 'सदस्यता लें',
      newsletterBlurb: 'रेस्क्यू, कार्यक्रमों और आयोजनों पर अपडेट पाएं।',
      emailPlaceholder: 'आपका ईमेल',
      links: { home: 'होम', adopt: 'गोद लें', donate: 'दान करें', contact: 'संपर्क' },
      phone: '+91-12345-67890',
      email: 'AaradhyadharmaFoundation@gmail.com',
      location: 'दिल्ली, भारत',
      privacy: 'गोपनीयता',
      terms: 'नियम'
    }
  }
};
export const t = (lang, path) => {
  const parts = path.split('.');
  let cur = translations[lang] || translations.EN;
  for (const p of parts) {
    if (cur && p in cur) cur = cur[p]; else return path;
  }
  return cur;
};

const Providers = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'EN');

  useEffect(() => {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  const themeValue = useMemo(() => ({ theme, toggleTheme }), [theme]);
  const langValue = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <LanguageContext.Provider value={langValue}>{children}</LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
