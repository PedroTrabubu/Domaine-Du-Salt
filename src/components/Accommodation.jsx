import React from "react";
import "./Accommodation.css";

// Datos internos para la sección
const accommodationData = [
  {
    title: "Zonas Comunes",
    description:
      "Disfruta de las áreas compartidas del Domaine de Sault: salón acogedor, terraza y jardines perfectos para relajarse y disfrutar de la naturaleza.",
    image: "/public/photos/Common Areas/esperaHorizontal_2.avif",
  },
  {
    title: "Servicios",
    description:
      "Ofrecemos servicios de alta calidad: wifi, desayuno incluido, limpieza diaria y atención personalizada para una estancia perfecta.",
    image: "/public/photos/Breakfast/desayunoC.png",
  },
  {
    title: "Actividades",
    description:
      "Descubre todas las actividades disponibles: senderismo, paseos en bicicleta, clases de cocina y mucho más para disfrutar de la región.",
    image: "/public/photos/Activities/LePuy.webp",
  },
];

const Accommodation = () => {
  return (
    <section className="accommodation-section" id="accommodation">
      <h2 className="accommodation-title">Alojamiento</h2>

      <div className="accommodation-container">
        {accommodationData.map((section, idx) => (
          <div key={idx} className="accommodation-card">
            <div className="accommodation-text">
              <h3 className="accommodation-name">{section.title}</h3>
              <p className="accommodation-description">{section.description}</p>
              <button className="accommodation-btn">Saber más</button>
            </div>
            <div className="accommodation-img-wrapper">
              <img
                src={section.image || "https://via.placeholder.com/500x400"}
                alt={section.title}
                className="accommodation-img"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accommodation;
