import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSlider.css';

const images = [
  '/photos/slider/piscina2.png',
  '/photos/piscina.jpg',
  '/photos/paisaje.jpg',
  '/photos/fuente.jpg',
];

const HeroSlider = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="hero-image"
      />
      <div className="hero-text">
        <h1>{t('mainTitle')}</h1>
        <h2>{t('welcome')}</h2>
      </div>
    </div>
  );
};

export default HeroSlider;