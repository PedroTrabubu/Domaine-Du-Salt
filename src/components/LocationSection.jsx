// LocationSection.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./LocationSection.css";

const LocationSection = () => {
  const { t } = useTranslation();

return (
    <section id="location" className="location-section">
        <h5 className="location-title">{t("location.title")}</h5>

        <p className="location-description">{t("location.description")}</p>

        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.661530866705!2d3.737259076602665!3d45.373268739500816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f677d49d7a483d%3A0xba8dea8d38dfa2e4!2sDomaine%20de%20Sault!5e1!3m2!1ses!2sfr!4v1755963387150!5m2!1ses!2sfr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Domaine du Sault"
            ></iframe>
        </div>

        <div className="contact-info">
            <h6>Nous contacter</h6>
            <p><strong>Chambres d'Hôtes Domaine de Sault</strong></p>
            <p>Philippe et Sylvie Roussel</p>
            <p>Le Sault</p>
            <p>63220 Dore l'Eglise</p>
            <p>Tél. <a href="tel:+33473950821">04 73 95 08 21</a> - <a href="tel:+33683335914">06 83 33 59 14</a></p>
            <p>✉️ <a href="mailto:lesault@wanadoo.fr">lesault@wanadoo.fr</a></p>
            <p>
                <a href="https://www.facebook.com/p/Chambres-dH%C3%B4tes-Domaine-de-Sault-100063718922969/?locale=fr_FR&_rdr" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" style={{ width: "18px", height: "18px", verticalAlign: "middle", marginRight: "4px" }} />
                    Facebook
                </a>
                {" | "}
                <a href="https://www.instagram.com/domainedesault/" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" style={{ width: "18px", height: "18px", verticalAlign: "middle", marginRight: "4px" }} />
                    Instagram
                </a>
            </p>
        </div>
    </section>
);
};

export default LocationSection;
