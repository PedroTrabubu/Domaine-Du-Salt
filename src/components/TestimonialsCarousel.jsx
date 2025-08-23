import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./TestimonialsCarousel.css";

const ratings = [
  { site: "Booking.com", score: "⭐ 9.7/10", link: "https://www.booking.com/Share-ewAY3I" },
  { site: "LastMinute", score: "⭐ 9.8/10", link: "https://www.fr.lastminute.com/hotel/france/dore-l-eglise/domaine-de-sault_hid-10504416" },
  { site: "TripAdvisor", score: "⭐ 4.7/5", link: "https://www.tripadvisor.com/" },
  { site: "Google", score: "⭐ 4.5/5", link: "https://www.google.com/travel/search?q=Domaine%20de%20Sault&g2lb=4965990%2C4969803%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72559352%2C72560029%2C72573224%2C72616120%2C72647020%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72958624%2C72959983%2C72990341%2C73010541%2C73064764&hl=es-FR&gl=fr&ssta=1&ts=CAEaRwopEicyJTB4NDdmNjc3ZDQ5ZDdhNDgzZDoweGJhOGRlYThkMzhkZmEyZTQSGhIUCgcI6Q8QChgQEgcI6Q8QChgRGAEyAhAA&qs=CAEyFENnc0k1TVgteHRQUi1zYTZBUkFCOAJCCQnkot84jeqNug&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjQ1YzQ_aCPAxUAAAAAHQAAAAAQBA" },
];

const testimonials = [
  {
    text: "Breakfast is excellent! Everything like a dream!",
    author: "Juichun, Switzerland",
  },
  {
    text: "Fabulous old buildings in an idyllic setting with great view. The rooms are full of character and beautifully decorated. The hostess is extremely friendly and helpful. The pool is gorgeous with an idyllic view. The breakfast was wonderful",
    author: "Kathy, United Kingdom",
  },
  {
    text: "Eine wunderschöne Oase mitten in der Auvergne. Tolle individuelle Zimmer mit großem Komfort. Sehr schöner Swimmingpool und toller Außenbereich mit Open Air Gästeküche. Das Frühstück ist großartig. Sylvie und Philippe sind die besten Gastgeber, die man sich wünschen kann. Super großzügig und hilfsbereit als wir eine Autopanne hatten. Dickes Dankeschön für alles! Wir kommen gerne wieder.",
    author:"Shirin, Deutschland",
  },
  {
    text: "Sylvie et Philippe feront de votre séjour un véritable moment de détente. Entre la piscine, le confort des lieux, les prestations proposées et celles suggérées, nous avons vécu trois jours exceptionnels.",
    author: "Anne, France",
  },
  {
    text: "Très bon accueil. Site magnifique et très calme. Excellent petit dejeuner et chambre très agréable avec une vue magnifique !",
    author: "Hervé, France",
  },
  {
    text: "Tout. Une Très belle chambre dans une ancienne maison de pays en pierre. Magnifique terrasse pour petit déjeuner avec une cuisine à dispo pour dîner sur place.",
    author: "Ptilie, France",
  },
  {
    text: "Jedem zu empfehlen, der einen Urlaub in der Natur machen möchte. Aussergewöhnliche Lage in der Natur.",
    author: "Rolf, Deutschland",
  },
  {
    text: "Ambiance fantastique, très belle piscine et chambres confortables et calmes. Très bon accueil et petit déjeuner savoureux.",
    author: "Avis LastMinute, France",
  },
  {
    text:"La belleza del lugar, el trato. El desayuno un 10",
    author: "Carlota, España",
  },
];

const TestimonialsCarousel = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  // Auto slide cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="reviews-section">
      <h4 className="reviews-title">
        {t("reviews.title", "Opiniones de nuestros huéspedes")}
      </h4>

      {/* Ratings */}
      <div className="ratings-summary">
        {ratings.map((r, idx) => (
          <a
            key={idx}
            href={r.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rating-card"
          >
            <strong>{r.score}</strong>
            <span>{r.site}</span>
          </a>
        ))}
      </div>

      {/* Carrusel */}
      <div className="testimonials-carousel">
        <div className="carousel-container">
          <button className="nav-btn left" onClick={prev}>❮</button>
          <div className="testimonial-card">
            <p className="testimonial-text">“{testimonials[current].text}”</p>
            <span className="testimonial-author">— {testimonials[current].author}</span>
          </div>
          <button className="nav-btn right" onClick={next}>❯</button>
        </div>

        <div className="dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
