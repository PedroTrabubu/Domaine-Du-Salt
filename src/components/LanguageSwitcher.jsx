import React from 'react';
import { useTranslation } from 'react-i18next';

const flags = {
  fr: '/flags/fr.png',
  es: '/flags/es.png',
  en: '/flags/en.png',
  de: '/flags/de.png',
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className="language-switcher">
      {Object.entries(flags).map(([lng, src]) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={i18n.language === lng ? 'active' : ''}
        >
          <img src={src} alt={lng} width="32" height="24" />
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
