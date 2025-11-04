import React from "react";
// Importamos React para poder crear componentes funcionales.

import { useTranslation } from "react-i18next";
// Importamos la función useTranslation para gestionar los textos traducibles.

import "./LocationSection.css";
// Importamos la hoja de estilos que aplicaremos a este componente.

const LocationSection = () => {
  // Definimos el componente funcional LocationSection.

  const { t, i18n } = useTranslation();
  // Usamos el hook useTranslation y obtenemos la función t para traducir textos
  // y el objeto i18n para acceder a la configuración de idioma actual.

  const currentLang = i18n.language || 'fr';
  // Guardamos el idioma actual o, si no existe, usamos francés por defecto.

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.661530866705!2d3.737259076602665!3d45.373268739500816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f677d49d7a483d%3A0xba8dea8d38dfa2e4!2sDomaine%20de%20Sault!5e1!3m2!1s${currentLang}!2sfr!4v1755963387150!5m2!1s${currentLang}!2sfr`;
  // Construimos la URL del mapa de Google Maps con el idioma actual integrado dinámicamente.

  return (
    <>
      {/* Sección de ubicación */}
      <section id="location" className="location-section">
        <h5 className="location-title">{t("location.title")}</h5>
        {/* Mostramos el título traducido de la sección de ubicación. */}

        <p className="location-description">{t("location.description")}</p>
        {/* Mostramos la descripción traducida de la sección de ubicación. */}

        <div className="map-container">
          {/* Contenedor del mapa de Google Maps */}
          <iframe
            src={mapUrl}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Domaine du Sault"
          ></iframe>
          {/* Insertamos un iframe con el mapa, configurado con la URL dinámica. */}
        </div>
      </section>

      {/* Sección de contacto */}
      <section id="contact" className="contact-section">
        <div className="contact-info">
          <h6>{t("contact.title")}</h6>
          {/* Mostramos el título traducido de la sección de contacto. */}

          <p><strong>Chambres d'Hôtes Domaine de Sault</strong></p>
          {/* Mostramos el nombre del alojamiento. */}

          <p>Philippe et Sylvie Roussel</p>
          {/* Mostramos los nombres de los propietarios. */}

          <p>Le Sault</p>
          {/* Mostramos la dirección. */}

          <p>63220 Dore l'Eglise</p>
          {/* Mostramos el código postal y la ciudad. */}

          <p>Tél. <a href="tel:+33473950821">+33 473950821</a> - <a href="tel:+33683335914">+33 683335914</a></p>
          {/* Mostramos los números de teléfono con enlaces para llamar directamente. */}

          <p>Email: <a href="mailto:lesault@wanadoo.fr">lesault@wanadoo.fr</a></p>
          {/* Mostramos la dirección de correo electrónico con enlace de envío. */}

          <p>
            <a href="https://www.facebook.com/p/Chambres-dH%C3%B4tes-Domaine-de-Sault-100063718922969/?locale=fr_FR&_rdr" target="_blank" rel="noopener noreferrer">
              <img src="/brands/logofbpng.png" alt="Facebook" style={{ width: "18px", height: "18px", verticalAlign: "middle", marginRight: "4px" }} />
              Facebook
            </a>
            {" | "}
            <a href="https://www.instagram.com/domainedesault/" target="_blank" rel="noopener noreferrer">
              <img src="/brands/instagram.svg" alt="Instagram" style={{ width: "18px", height: "18px", verticalAlign: "middle", marginRight: "4px" }} />
              Instagram
            </a>
          </p>
          {/* Añadimos enlaces a las redes sociales con sus respectivos logotipos. */}
        </div>
      </section>
    </>
  );
};

export default LocationSection;
// Exportamos el componente para poder usarlo en otras partes de la aplicación.
