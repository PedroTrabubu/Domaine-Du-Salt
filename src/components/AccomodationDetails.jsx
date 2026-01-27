import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AccommodationDetails.css";

const AccommodationDetails = () => {
  const { section } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = t("accommodation.sections", { returnObjects: true }) || [];

  const currentSection = sections.find((item) => item.slug === section);

  if (!currentSection) {
    return (
      <section className="accommodation-detail">
        <p>Sección no encontrada</p>
        <button onClick={() => navigate("/")}>Volver</button>
      </section>
    );
  }

  return (
    <section className="accommodation-detail">
      <button onClick={() => navigate(-1)}>← Volver</button>

      <h1>{currentSection.title}</h1>
      <p>{currentSection.description}</p>

      <div className="accommodation-detail-gallery">
        {currentSection.images.map((img, idx) => (
          <img key={idx} src={img} alt="" />
        ))}
      </div>
    </section>
  );
};

export default AccommodationDetails;
