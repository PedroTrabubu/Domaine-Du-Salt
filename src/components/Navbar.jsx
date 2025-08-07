import React from 'react';
import { useTranslation } from 'react-i18next';

const flags = {
  fr: '/flags/fr.svg',
  en: '/flags/gb.svg',
  es: '/flags/es.svg',
  de: '/flags/de.svg',
};

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">{t('Bienvenue')}</a></li>
        <li><a href="#lodging">{t('Les chambres')}</a></li>
        <li><a href="#activities">{t('Tarifs')}</a></li>
        <li><a href="#contact">{t('Contact')}</a></li>
      </ul>

      <div className="language-switcher">
        {Object.entries(flags).map(([lng, src]) => (
          <button
            key={lng}
            onClick={() => changeLanguage(lng)}
            className={i18n.language === lng ? 'active-lang' : ''}
          >
            <img src={src} alt={lng} width="32" height="20" />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
