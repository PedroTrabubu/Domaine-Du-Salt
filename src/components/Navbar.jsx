import React, { useState } from 'react';
// Importamos React y el hook useState para manejar el estado dentro del componente.

import { useTranslation } from 'react-i18next';
// Importamos useTranslation para poder traducir los textos según el idioma activo.

import './Navbar.css';
// Importamos la hoja de estilos correspondiente a la barra de navegación.

const flags = {
  fr: '/flags/fr.svg',
  en: '/flags/gb.svg',
  es: '/flags/es.svg',
  de: '/flags/de.svg',
};
// Definimos un objeto con las rutas de las banderas que usaremos para cambiar de idioma.

const Navbar = () => {
  // Definimos el componente funcional Navbar.

  const { t, i18n } = useTranslation();
  // Usamos el hook useTranslation para obtener la función t (para traducir)
  // y el objeto i18n (para cambiar o consultar el idioma actual).

  const [menuOpen, setMenuOpen] = useState(false);
  // Creamos un estado para controlar si el menú principal está abierto o cerrado.

  const [submenuOpen, setSubmenuOpen] = useState(false);
  // Creamos otro estado para controlar la apertura del submenú de habitaciones.

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  //Comprobamos si es la version movil

  const rooms = [
    { key: 'gite', name: t('rooms.list.gite.name', 'Gîte Valentin') },
    { key: 'autrefois', name: t('rooms.list.autrefois.name', 'Autrefois') },
    { key: 'hubert', name: t('rooms.list.hubert.name', "Le Grenier d'Hubert") },
    { key: 'salome', name: t('rooms.list.salome.name', 'Salomé') },
    { key: 'adelaide', name: t('rooms.list.adelaide.name', 'Adélaïde') },
    { key: 'oiseaux', name: t('rooms.list.oiseaux.name', 'Maison des Oiseaux') },
  ];
  // Definimos un arreglo con los nombres de las habitaciones, traducidos mediante la función t.
  // También asignamos una clave única a cada una para generar los enlaces dinámicamente.

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Cambiamos el idioma activo con la función de i18next.

    localStorage.setItem('i18nextLng', lng);
    // Guardamos la elección del usuario en el almacenamiento local para recordarla en futuras visitas.

    setMenuOpen(false);
    // Cerramos el menú al cambiar de idioma para mejorar la experiencia de usuario.
  };

  return (
    <nav className="navbar">
      {/* Estructura principal de la barra de navegación */}

      <div className="logo">
        {/* Contenedor del logotipo */}
        <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Hacemos que al pulsar el logotipo se vuelva suavemente al inicio de la página */}
          <img
            src="/logo/logo domaine de salt transparente.png"
            alt="Logo Domaine du Salt"
            height="40"
          />
        </a>
      </div>

      {/* Botón hamburguesa para dispositivos móviles */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Lista principal del menú */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="/#book" onClick={() => setMenuOpen(false)}>
            {t('nav.book')}
          </a>
        </li>

        {/* Elemento con submenú (dropdown) */}
        {/* <li
          className="dropdown"
          onMouseEnter={() => setSubmenuOpen(true)}
          onMouseLeave={() => setSubmenuOpen(false)}
        > */}
        <li
          className={`dropdown ${submenuOpen ? 'open' : ''}`}
          onMouseEnter={() => !isMobile && setSubmenuOpen(true)}
          onMouseLeave={() => !isMobile && setSubmenuOpen(false)}
        >
          <a href="/#lodging" onClick={() => setMenuOpen(false)}>
            {t('nav.lodging')}
          </a>

          {/* <button
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
          </button> */}
          
          <a
            className="dropdown-toggle"
            aria-label="Mostrar habitaciones"
            aria-expanded={submenuOpen}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (isMobile) setSubmenuOpen(!submenuOpen);
            }}
          >
            <span className="arrow"> &#9662;</span>
          </a>

          {/* Mostramos el submenú solo si submenuOpen es verdadero */}
          {submenuOpen && (
            <ul className={`dropdown-menu ${submenuOpen ? "open" : ""}`}>
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

        {/* Enlaces restantes del menú */}
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

      {/* Selector de idioma (language switcher) */}
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
// Exportamos el componente para poder usarlo en otras partes de la aplicación.
