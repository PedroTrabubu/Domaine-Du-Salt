import { useTranslation } from 'react-i18next';
import './App.css';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider'; // ✅ Añadido
import Home from './components/Home';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Navbar />
      <HeroSlider /> {/* ✅ Sustituye los h1 y h2 */}
      <Home />
    </div>
  );
}

export default App;
