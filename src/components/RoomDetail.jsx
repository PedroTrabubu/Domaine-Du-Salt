import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./RoomDetail.css";

const RoomDetail = () => {
  const { t } = useTranslation();
  const { roomId } = useParams();
  const navigate = useNavigate();

  // 🔹 Obtener lista de habitaciones traducida
  const roomsObj = t("rooms.list", { returnObjects: true }) || {};
  const room = roomsObj[roomId];

  if (!room) return <p className="not-found">{t("roomDetail.notFound")}</p>;

  return (
    <div className="room-detail-container">
      {/* 🔙 Botón atrás */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← {t("roomDetail.back")}
      </button>

      {/* 🏷️ Título */}
      <h1 className="room-title">{room.name}</h1>

      {/* 🖼️ Galería */}
      <div className="room-gallery">
        {room.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${room.name} ${idx + 1}`}
            className="room-gallery-img"
            onError={(e) => (e.currentTarget.src = "/photos/placeholder.png")}
          />
        ))}
      </div>

      {/* ℹ️ Información */}
      <div className="room-info">
        {room.size && <p>{t("roomDetail.size", { size: room.size })}</p>}
        {room.rating && (
          <p>
            {t("roomDetail.rating", {
              rating: room.rating,
              reviewsCount: room.reviewsCount,
            })}
          </p>
        )}
        <p className="room-summary">{room.summary || room.description}</p>
        {room.price && (
          <p className="room-price">
            <strong>{t("roomDetail.priceLabel")}:</strong> {room.price}
          </p>
        )}
      </div>

      {/* 🔹 Secciones extra */}
      <div className="room-sections">
        {room.bathroom?.length > 0 && (
          <div className="room-section">
            <h3>{t("roomDetail.bathroom")}</h3>
            <ul>
              {room.bathroom.map((item, i) => (
                <li key={i}>🛁 {item}</li>
              ))}
            </ul>
          </div>
        )}

        {room.views?.length > 0 && (
          <div className="room-section">
            <h3>{t("roomDetail.views")}</h3>
            <ul>
              {room.views.map((v, i) => (
                <li key={i}>🌄 {v}</li>
              ))}
            </ul>
          </div>
        )}

        {room.amenities?.length > 0 && (
          <div className="room-section">
            <h3>{t("roomDetail.amenities")}</h3>
            <ul>
              {room.amenities.map((a, i) => (
                <li key={i}>✔️ {a}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Datos adicionales */}
      <div className="room-extra">
        {room.capacity && (
          <p>
            <strong>{t("roomDetail.capacity")}:</strong> {room.capacity}
          </p>
        )}
        {room.bed && (
          <p>
            <strong>{t("roomDetail.bed")}:</strong> {room.bed}
          </p>
        )}
        {room.cancellation && <p>❌ {room.cancellation}</p>}
        {room.payment && <p>💳 {room.payment}</p>}
        {room.breakfast && <p>🥐 {room.breakfast}</p>}
        {room.availability && <p>📌 {room.availability}</p>}
        {room.nights && <p>🛌 {room.nights}</p>}
        {room.priceDetail && <p>💰 {room.priceDetail}</p>}
      </div>

      {/* 🔘 Botón reserva */}
      <button
        className="reserve-btn"
        onClick={() => {
          navigate("/");
          setTimeout(() => {
            const bookingForm = document.getElementById("booking-form");
            if (bookingForm)
              bookingForm.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
      >
        {t("rooms.button")}
      </button>
    </div>
  );
};

export default RoomDetail;
