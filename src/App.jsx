import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider'; 
import Home from './components/Book';
import RoomsSection from './components/RoomsSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import LocationSection from './components/LocationSection';
import Footer from './components/footer';

function App() {
  const { i18n, t } = useTranslation();

  // Actualiza el atributo lang del HTML según el idioma detectado
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="App">
      <Navbar />
      <HeroSlider /> 
      <Home />
      <RoomsSection />
      <TestimonialsCarousel />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;
