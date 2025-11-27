import React from "react";
import { useTranslation } from "react-i18next";
import "./ContactSection.css";

const FORM_ACTION = "https://formspree.io/f/xwpakdab";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-wrapper">
      <h2 className="contact-main-title">{t("contact.title")}</h2>

      <div className="contact-container">
        {/* LADO IZQUIERDO */}
        <div className="contact-left">
          <h3 className="contact-subtitle">
            Chambres d'Hôtes Domaine de Sault
          </h3>

          <p>Philippe et Sylvie Roussel</p>
          <p>Le Sault</p>
          <p>63220 Dore l'Eglise</p>

          <p className="contact-phone">
            Tél. <a href="tel:+33683335914">+33 683335914</a>
          </p>

          <p>
            Email: <a href="mailto:lesault@wanadoo.fr">lesault@wanadoo.fr</a>
          </p>

          <div className="contact-social">
            <a
              href="https://www.facebook.com/p/Chambres-dH%C3%B4tes-Domaine-de-Sault-100063718922969/?locale=fr_FR&_rdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/brands/logofbpng.png" alt="Facebook" />
              Facebook
            </a>

            <a
              href="https://www.instagram.com/domainedesault/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/brands/instagram.svg" alt="Instagram" />
              Instagram
            </a>
          </div>
        </div>

        {/* FORMULARIO */}
        <form className="contact-right" action={FORM_ACTION} method="POST">
          <div className="form-row">
            <div className="form-field">
              <label>{t("contactForm.name")} *</label>
              <input
                type="text"
                name="name"
                required
                placeholder={t("contactForm.namePlaceholder")}
              />
            </div>

            <div className="form-field">
              <label>Email: *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="exemple@email.com"
              />
            </div>
          </div>

          <label>{t("contactForm.message")} *</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder={t("contactForm.messagePlaceholder")}
          />

          <button type="submit">{t("contactForm.send")}</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
