import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next';

const BookingCalendar = () => {
  const { t } = useTranslation();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const isDateAvailable = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date < yesterday) return false;

    const unavailableDates = [
      new Date(2025, 7, 21), // 21 de agosto
      new Date(2025, 7, 22), // 22 de agosto
    ];

    return !unavailableDates.some(
      (d) => d.toDateString() === date.toDateString()
    );
  };

  return (
    <div className="booking-calendar">
      <h3>{t('home.checkAvailability')}</h3>
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
        filterDate={isDateAvailable}
        placeholderText={t('home.selectDateRange')}
        inline // Esto muestra el calendario directamente como en las webs de reservas
      />
    </div>
  );
};

export default BookingCalendar;
