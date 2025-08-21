import React from "react";
import { useTranslation } from "react-i18next";
import "./RoomsSection.css";

const RoomsSection = () => {
  const { t } = useTranslation();

  const roomsObj = t("rooms.list", { returnObjects: true }) || {};
  const roomKeys = Object.keys(roomsObj);

  if (roomKeys.length === 0) {
    return <p>No hay habitaciones disponibles.</p>;
  }

  return (
    <section id="lodging" className="rooms-section">
      <h2 className="rooms-title">{t("rooms.title")}</h2>
      <div className="rooms-grid">
        {roomKeys.map((key) => {
          const room = roomsObj[key];
          const features = room.features || [];

          return (
            <div key={key} className="room-card">
              <img
                src={room.image || "/photos/placeholder.png"}
                alt={`Imagen de la habitación ${room.name || key}`}
                className="room-img"
                onError={(e) => (e.target.src = "/photos/placeholder.png")}
              />
              <div className="room-content">
                <h3 className="room-name">{room.name || key}</h3>
                <p className="room-description">{room.description || ""}</p>
                {features.length > 0 && (
                  <ul className="room-features">
                    {features.map((feat, idx) => (
                      <li key={idx}>✅ {feat}</li>
                    ))}
                  </ul>
                )}
                {room.price && <p className="room-price">{room.price}</p>}
                <button
                  className="room-btn"
                  onClick={() => {
                    const bookingForm = document.getElementById("booking-form");
                    if (bookingForm) {
                      bookingForm.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {t("rooms.button", "Reservar ahora")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoomsSection;
