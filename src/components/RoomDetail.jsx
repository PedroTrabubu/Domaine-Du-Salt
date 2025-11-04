import { useParams, useNavigate } from "react-router-dom";
// Importamos useParams para obtener parámetros de la URL y useNavigate para navegar programáticamente.

import { useTranslation } from "react-i18next";
// Importamos useTranslation para poder traducir textos según el idioma activo.

import "./RoomDetail.css";
// Importamos la hoja de estilos específica para esta página de detalles de habitación.

const RoomDetail = () => {
  // Definimos el componente funcional RoomDetail.

  const { t } = useTranslation();
  // Obtenemos la función t para traducir los textos dentro del componente.

  const { roomId } = useParams();
  // Obtenemos el parámetro roomId de la URL para saber qué habitación mostrar.

  const navigate = useNavigate();
  // Creamos la función navigate para poder regresar o redirigir al usuario a otras rutas.

  // 🔹 Obtener lista de habitaciones traducida
  const roomsObj = t("rooms.list", { returnObjects: true }) || {};
  // Obtenemos la lista de habitaciones desde la traducción y la convertimos en un objeto.

  const room = roomsObj[roomId];
  // Buscamos la habitación específica según el roomId obtenido de la URL.

  if (!room) return <p className="not-found">{t("roomDetail.notFound")}</p>;
  // Si la habitación no existe, mostramos un mensaje de "No encontrada" y detenemos la renderización.

  return (
    <div className="room-detail-container">
      {/* 🔙 Botón atrás */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← {t("roomDetail.back")}
      </button>
      {/* Creamos un botón que permite al usuario volver a la página anterior. */}

      {/* 🏷️ Título */}
      <h1 className="room-title">{room.name}</h1>
      {/* Mostramos el nombre de la habitación como título principal. */}

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
      {/* Mostramos todas las imágenes de la habitación y usamos un placeholder si alguna falla. */}

      {/* ℹ️ Información */}
      <div className="room-info">
        {room.size && <p>{t("roomDetail.size", { size: room.size })}</p>}
        {/* Mostramos el tamaño de la habitación si está disponible. */}

        {room.rating && (
          <p>
            {t("roomDetail.rating", {
              rating: room.rating,
              reviewsCount: room.reviewsCount,
            })}
          </p>
        )}
        {/* Mostramos la calificación y cantidad de reseñas si existen. */}

        <p className="room-summary">{room.summary || room.description}</p>
        {/* Mostramos un resumen o la descripción de la habitación. */}

        {room.price && (
          <p className="room-price">
            <strong>{t("roomDetail.priceLabel")}:</strong> {room.price}
          </p>
        )}
        {/* Mostramos el precio si está definido. */}
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
        {/* Mostramos los elementos del baño si existen. */}

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
        {/* Mostramos las vistas o panoramas de la habitación si existen. */}

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
        {/* Mostramos los servicios o comodidades disponibles si existen. */}
      </div>

      {/* Datos adicionales */}
      <div className="room-extra">
        {room.capacity && (
          <p>
            <strong>{t("roomDetail.capacity")}:</strong> {room.capacity}
          </p>
        )}
        {/* Mostramos la capacidad máxima de la habitación. */}

        {room.bed && (
          <p>
            <strong>{t("roomDetail.bed")}:</strong> {room.bed}
          </p>
        )}
        {/* Mostramos el tipo de cama si está definido. */}

        {room.cancellation && <p>❌ {room.cancellation}</p>}
        {/* Mostramos la política de cancelación si existe. */}

        {room.payment && <p>💳 {room.payment}</p>}
        {/* Mostramos las opciones de pago si están definidas. */}

        {room.breakfast && <p>🥐 {room.breakfast}</p>}
        {/* Mostramos si se incluye desayuno. */}

        {room.availability && <p>📌 {room.availability}</p>}
        {/* Mostramos la disponibilidad de la habitación. */}

        {room.nights && <p>🛌 {room.nights}</p>}
        {/* Mostramos la cantidad mínima de noches si está definida. */}

        {room.priceDetail && <p>💰 {room.priceDetail}</p>}
        {/* Mostramos detalles adicionales del precio si existen. */}
      </div>

      {/* 🔘 Botón reserva */}
      <button
        className="reserve-btn"
        onClick={() => {
          navigate("/");
          // Redirigimos al inicio al pulsar el botón.

          setTimeout(() => {
            const bookingForm = document.getElementById("booking-form");
            if (bookingForm)
              bookingForm.scrollIntoView({ behavior: "smooth" });
          }, 100);
          // Después de redirigir, hacemos scroll al formulario de reservas si existe.
        }}
      >
        {t("rooms.button")}
      </button>
      {/* Mostramos el botón para reservar la habitación. */}
    </div>
  );
};

export default RoomDetail;
// Exportamos el componente RoomDetail para poder usarlo en otras partes de la aplicación.
