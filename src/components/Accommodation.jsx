import React from "react";
import { useNavigate } from "react-router-dom";
import "./Accommodation.css";

const accommodationData = [
  {
    slug: "common-areas",
    title: "Zonas Comunes",
    description:
      "Disfruta de las áreas compartidas del Domaine de Sault: salón acogedor, terraza y jardines perfectos para relajarse y disfrutar de la naturaleza.",
    image: "/photos/Common Areas/esperaHorizontal_2.avif",
  },
  {
    slug: "services",
    title: "Servicios",
    description:
      "Ofrecemos servicios de alta calidad: wifi, desayuno incluido, limpieza diaria y atención personalizada para una estancia perfecta.",
    image: "/photos/Breakfast/desayunoC.png",
  },
  {
    slug: "activities",
    title: "Actividades",
    description:
      "Descubre todas las actividades disponibles: senderismo, paseos en bicicleta, clases de cocina y mucho más para disfrutar de la región.",
    image: "/photos/Activities/LePuy.webp",
  },
];

const Accommodation = () => {
  const navigate = useNavigate();

  return (
    <section className="accommodation-section" id="accommodation">
      <h2 className="accommodation-title">Alojamiento</h2>

      <div className="accommodation-container">
        {accommodationData.map((section) => (
          <div key={section.slug} className="accommodation-card">
            <div className="accommodation-text">
              <h3
                className="accommodation-name"
                onClick={() => navigate(`/accommodation/${section.slug}`)}
              >
                {section.title}
              </h3>

              <p className="accommodation-description">{section.description}</p>

              <button
                className="accommodation-btn"
                onClick={() => navigate(`/accommodation/${section.slug}`)}
              >
                Saber más
              </button>
            </div>

            <div
              className="accommodation-img-wrapper"
              onClick={() => navigate(`/accommodation/${section.slug}`)}
            >
              <img
                src={section.image}
                alt={section.title}
                className="accommodation-img"
                onError={(e) => (e.target.src = "/photos/placeholder.png")}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accommodation;
