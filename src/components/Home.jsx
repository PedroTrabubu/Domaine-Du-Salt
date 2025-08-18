import React from 'react';
import { useTranslation } from 'react-i18next';
import BookingCalendar from './BookingClendar.jsx';
import BookingForm from './BookingForm.jsx';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home">
      <BookingForm />
      <h2>{t('h2')}</h2>
      
    </section>
  );
};

export default Home;