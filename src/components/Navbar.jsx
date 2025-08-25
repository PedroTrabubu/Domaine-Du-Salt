import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';


const flags = {
  fr: '/flags/fr.svg',
  en: '/flags/gb.svg',
  es: '/flags/es.svg',
  de: '/flags/de.svg',
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setMenuOpen(false); // cierra menú al cambiar idioma (opcional)
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="/logo/logo domaine de salt transparente.png"
            alt="Logo Domaine du Salt"
            height="40"
          />
        </a>
      </div>

      {/* Botón hamburguesa móvil */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Tres barras para el icono */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Menú, clase "open" visible en móvil si menuOpen=true */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#book" onClick={() => setMenuOpen(false)}>{t('nav.book')}</a></li>
        <li><a href="#lodging" onClick={() => setMenuOpen(false)}>{t('nav.lodging')}</a></li>
        <li><a href="#reviews" onClick={() => setMenuOpen(false)}>{t('nav.review')}</a></li>
        <li><a href="#location" onClick={() => setMenuOpen(false)}>{t('nav.location')}</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a></li>
      </ul>

      <div className="language-switcher">
        {Object.entries(flags).map(([lng, src]) => (
          <button
            key={lng}
            onClick={() => changeLanguage(lng)}
            className={i18n.language === lng ? 'active-lang' : ''}
            title={t(`languages.${lng}`)}
          >
            <img src={src} alt={lng} width="32" height="20" />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
