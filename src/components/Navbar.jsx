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
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const rooms = [
    { key: 'gite', name: t('rooms.list.gite.name', 'Gîte Valentin') },
    { key: 'autrefois', name: t('rooms.list.autrefois.name', 'Autrefois') },
    { key: 'hubert', name: t('rooms.list.hubert.name', "Le Grenier d'Hubert") },
    { key: 'salome', name: t('rooms.list.salome.name', 'Salomé') },
    { key: 'adelaide', name: t('rooms.list.adelaide.name', 'Adélaïde') },
    { key: 'oiseaux', name: t('rooms.list.oiseaux.name', 'Maison des Oiseaux') },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Menú */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="/#book" onClick={() => setMenuOpen(false)}>
            {t('nav.book')}
          </a>
        </li>

        {/* Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setSubmenuOpen(true)}
          onMouseLeave={() => setSubmenuOpen(false)}
        >
          <a href="/#lodging" onClick={() => setMenuOpen(false)}>
            {t('nav.lodging')}
          </a>
          <button
            className="dropdown-toggle"
            aria-label="Mostrar habitaciones"
            aria-expanded={submenuOpen}
            type="button"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              marginLeft: '0.2em',
              cursor: 'pointer',
            }}
          >
            <span className="arrow">&#9662;</span>
          </button>

          {submenuOpen && (
            <ul className="dropdown-menu">
              {rooms.map((room) => (
                <li key={room.key}>
                  <a
                    href={`/room/${room.key}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setSubmenuOpen(false);
                    }}
                  >
                    {room.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <a href="/#location" onClick={() => setMenuOpen(false)}>
            {t('nav.location')}
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            {t('nav.contact')}
          </a>
        </li>
      </ul>

      {/* Language switcher */}
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
