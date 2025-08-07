import { useTranslation } from 'react-i18next';
import './App.css';
const flags = {
  fr: '/flags/fr.svg',
  en: '/flags/gb.svg',
  es: '/flags/es.svg',
  de: '/flags/de.svg',
};
function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

 return (
    <div className="App">
      <div className="language-switcher">
        {Object.entries(flags).map(([lng, src]) => (
          <button key={lng} onClick={() => changeLanguage(lng)}>
            <img src={src} alt={lng} width="40" height="24" />
          </button>
        ))}
      </div>

      <h1>{t('mainTitle')}</h1>
      <h2>{t('welcome')}</h2>
    </div>
  );
}

export default App;
