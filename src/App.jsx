// ..\Domaine-Du-Salt> npm run dev

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Home from "./components/Book";
import RoomsSection from "./components/RoomsSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import RoomDetail from "./components/RoomDetail"; // tu página de detalle
import ScrollToTop from "./components/ScrollToTop";
import ContactSection from "./components/ContactSection";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <Home />
              <RoomsSection />
              <LocationSection />
              <ContactSection />
              <TestimonialsCarousel />
              <Footer />
            </>
          }
        />
        <Route path="/room/:roomId" element={<RoomDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
