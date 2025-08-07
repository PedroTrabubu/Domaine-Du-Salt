import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home">
      <h2>{t('home.title')}</h2>
      <p>{t('home.description')}</p>
    </section>
  );
};

export default Home;
