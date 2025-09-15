import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./RoomsSection.css";

const RoomsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const roomsObj = t("rooms.list", { returnObjects: true }) || {};
  const roomKeys = Object.keys(roomsObj);

  if (roomKeys.length === 0) return <p>No hay habitaciones disponibles.</p>;

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
                alt={room.name || key}
                className="room-img"
                onClick={() => navigate(`/room/${key}`)}
                onError={(e) => (e.target.src = "/photos/placeholder.png")}
              />
              <div className="room-content">
                <h3 className="room-name" onClick={() => navigate(`/room/${key}`)}>
                  {room.name || key}
                </h3>
                <p className="room-description">{room.description || ""}</p>
                {features.length > 0 && (
                  <ul className="room-features">
                    {features.map((feat, idx) => (
                      <li key={idx}>✅ {feat}</li>
                    ))}
                  </ul>
                )}
                {room.price && <p className="room-price">{room.price}</p>}
                <button className="room-btn" onClick={() => navigate(`/room/${key}`)}>
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
