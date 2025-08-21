// Uso el hook de i18next para poder traducir textos con t('clave')
import { useTranslation } from 'react-i18next';

// Importo los estilos principales de la aplicación
import './App.css';

// Importo los componentes que forman la página
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider'; 
import Home from './components/Book';
import RoomsSection from './components/RoomsSection';

function App() {
  // Inicializo las traducciones (ahora puedo usar t() si lo necesito)
  const { t } = useTranslation();

  return (
    <div className="App">
      {/* Menú de navegación superior */}
      <Navbar />

      {/* Hero section con slider de imágenes */}
      <HeroSlider /> 

      {/* Contenido principal de la home */}
      <Home />
      <RoomsSection />

    </div>
  );
}

export default App;
