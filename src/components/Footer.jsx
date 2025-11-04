// Importamos React, necesario para crear componentes
import React from "react";
// Importamos la función de traducción del paquete i18next
import { useTranslation } from "react-i18next";
// Importamos los estilos del footer
import "./Footer.css";

// Definimos el componente funcional Footer
const Footer = () => {
  // Obtenemos la función de traducción "t"
  const { t } = useTranslation();

  // Retornamos la estructura del pie de página
  return (
    <footer className="footer"> {/* Contenedor principal del footer */}
      <div className="footer-container"> {/* Contenedor de columnas del footer */}

        {/* === Columna de navegación === */}
        <div className="footer-column">
          <h6>{t("footer.navigation")}</h6> {/* Título traducido */}
          <ul>
            {/* Enlaces de navegación interna */}
            <li><a href="#book">{t("nav.book")}</a></li>
            <li><a href="#lodging">{t("nav.lodging")}</a></li>
            <li><a href="#reviews">{t("nav.review")}</a></li>
            <li><a href="#location">{t("nav.location")}</a></li>
            <li><a href="#contact">{t("nav.contact")}</a></li>
          </ul>
        </div>

        {/* === Columna de contacto rápido === */}
        <div className="footer-column">
          <h6>{t("footer.contact")}</h6> {/* Título traducido */}
          {/* Datos de contacto del alojamiento */}
          <p>📞 +33 4 73 95 08 21</p>
          <p>📱 +33 6 83 33 59 14</p>
          <p>✉️ lesault@wanadoo.fr</p>
        </div>

        {/* === Columna de socios / partners === */}
        <div className="footer-column">
          <h6>{t("footer.partners")}</h6> {/* Título traducido */}
          <div className="partners-logos">
            {/* Cada enlace lleva a una página asociada y muestra su logo */}
            <a href="https://www.auvergne-livradois-forez.com/" target="_blank" rel="noreferrer">
              <img src="/brands/livradois.svg" alt="Maison du tourisme du Livradois-Forez" />
            </a>
            <a href="https://https://www.craponnesurarzon.fr/" target="_blank" rel="noreferrer">
              <img src="/brands/craponne.png" alt="Office de tourisme Craponne-sur-Arzon" />
            </a>
            <a href="https://www.ambertlivradoisforez.fr/" target="_blank" rel="noreferrer">
              <img src="/brands/Logo_Ambert_Livradois_Forez-RVB.jpg" alt="Communauté de commune du Pays d'Arlanc" />
            </a>
            <a href="https://wwww.lepuyenvelay-tourisme.fr/" target="_blank" rel="noreferrer">
              <img src="/brands/lepuylogo.jpg" alt="Office de tourisme du Puy-en-Velay" />
            </a>
            <a href="https://www.chaisedieu.fr/" target="_blank" rel="noreferrer">
              <img src="/brands/chaisedieu.svg" alt="Office de tourisme de La Chaise-Dieu" />
            </a>
            <a href="https://www.wwf.fr/qui-sommes-nous/entreprises-partenaires/gites-de-france" target="_blank" rel="noreferrer">
              <img src="/brands/WWF_Logo.jpg" alt="WWF France" />
            </a>
            <a href="https://www.gites-de-france.com/" target="_blank" rel="noreferrer">
              <img src="/brands/Gîtes_de_France_(logo).svg.png" alt="Gîtes de France" />
            </a>
          </div>
        </div>

        {/* === Columna de redes sociales y enlaces adicionales === */}
        <div className="footer-column">
          <h6>{t("footer.more")}</h6> {/* Título traducido */}
          <div className="social-icons">
            {/* Enlace a Facebook */}
            <a href="https://www.facebook.com/p/Chambres-dH%C3%B4tes-Domaine-de-Sault-100063718922969/?locale=fr_FR&_rdr" 
               target="_blank" 
               rel="noopener noreferrer">
              <img src="/brands/facebook.svg" alt="Facebook" />
            </a>
            {/* Enlace a Instagram */}
            <a href="https://www.instagram.com/domainedesault/" 
               target="_blank" 
               rel="noopener noreferrer">
              <img src="/brands/logo_ig_color.webp" alt="Instagram" />
            </a>
          </div>
        </div>

      </div>

      {/* Pie final con derechos de autor */}
      <div className="footer-bottom">
        <p>© 2025 Domaine de Sault — All rights reserved.</p>
      </div>
    </footer>
  );
};

// Exportamos el componente para usarlo en la aplicación
export default Footer;
