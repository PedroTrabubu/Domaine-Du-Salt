import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./TestimonialsCarousel.css";

const ratings = [
  { site: "Booking.com", score: "⭐ 9.7/10", link: "https://www.booking.com/hotel/fr/domaine-de-sault.es.html?aid=7344163&label=metatripad-link-dmetafr-hotel-4778869_xqdz-677efa6baa8afcd76c25b17ac23e41ad_los-03_bw-010_tod-12_dom-es_curr-EUR_gst-02_nrm-01_clkid-44860ed1-063b-4942-b604-d699599ffd5c_aud-0000_mbl-M_pd-T_sc-2_defdate-0_spo-0_clksrc-0_mcid-10-Share-ewAY3I%401755858718-Share-JOr4NE%401756980510&sid=010fb7dbd67ee6544c7b7491344e0597&all_sr_blocks=477886902_151534570_2_1_0&checkin=2025-10-06&checkout=2025-10-07&dest_id=-1424316&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=477886902_151534570_2_1_0&hpos=1&matching_block_id=477886902_151534570_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=477886902_151534570_2_1_0__8348&srepoch=1756980538&srpvid=b4b947585b09024e&type=total&ucfs=1&" },
  { site: "LastMinute", score: "⭐ 9.8/10", link: "https://www.fr.lastminute.com/hotel/france/dore-l-eglise/domaine-de-sault_hid-10504416" },
  { site: "TripAdvisor", score: "⭐ 4.7/5", link: "https://www.tripadvisor.fr/Hotel_Review-g2545280-d5049482-Reviews-Domaine_De_Sault-Dore_l_Eglise_Puy_de_Dome_Auvergne_Rhone_Alpes.html?m=19905" },
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
