// Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Navegación */}
        <div className="footer-column">
          <h6>{t("footer.navigation")}</h6>
          <ul>
            <li><a href="#book">{t("nav.book")}</a></li>
            <li><a href="#lodging">{t("nav.lodging")}</a></li>
            <li><a href="#reviews">{t("nav.review")}</a></li>
            <li><a href="#location">{t("nav.location")}</a></li>
            <li><a href="#contact">{t("nav.contact")}</a></li>
          </ul>
        </div>

        {/* Contacto rápido */}
        <div className="footer-column">
          <h6>{t("footer.contact")}</h6>
          <p>📞 +33 4 73 95 08 21</p>
          <p>📱 +33 6 83 33 59 14</p>
          <p>✉️ lesault@wanadoo.fr</p>
        </div>

        {/* Partenaires */}
        <div className="footer-column">
          <h6>{t("footer.partners")}</h6>
          <div className="partners-logos">
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

        {/* Admin + redes */}
        <div className="footer-column">
          <h6>{t("footer.more")}</h6>
          <div className="social-icons">
            <a href="https://www.facebook.com/p/Chambres-dH%C3%B4tes-Domaine-de-Sault-100063718922969/?locale=fr_FR&_rdr" 
               target="_blank" 
               rel="noopener noreferrer">
              <img src="/brands/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/domainedesault/" 
               target="_blank" 
               rel="noopener noreferrer">
              <img src="/brands/logo_ig_color.webp" alt="Instagram" />
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2025 Domaine de Sault — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
