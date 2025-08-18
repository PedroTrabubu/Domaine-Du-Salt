import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';
import { useTranslation } from 'react-i18next';

const BookingForm = () => {
  const { t } = useTranslation();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [hoveredDate, setHoveredDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [promoCode, setPromoCode] = useState('');

  const formRef = useRef();

  // --- Cerrar calendario al hacer clic fuera ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    alert(`Buscando: ${startDate?.toLocaleDateString()} - ${endDate?.toLocaleDateString()}, ${rooms} habitaciones, ${adults} adultos, ${children} niños, código: ${promoCode}`);
  };

  const isDateAvailable = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (date < yesterday) return false;

    const unavailableDates = [new Date(2025, 7, 21), new Date(2025, 7, 22)];
    return !unavailableDates.some((d) => d.toDateString() === date.toDateString());
  };

  const calculateNights = (start, end) => {
    if (!start || !end) return 0;
    const diffTime = end - start;
    return diffTime > 0 ? Math.ceil(diffTime / (1000 * 60 * 60 * 24)) : 0;
  };

  return (
    <div className="booking-form" ref={formRef}>
      {/* Barra azul con Entrada / Salida */}
      <div className="booking-bar-label" onClick={() => setShowCalendar(true)}>
        <span>
          {t('home.checkInLabel')}: {startDate ? startDate.toLocaleDateString() : t('home.checkIn')}
        </span>
        {' | '}
        <span>
          {t('home.checkOutLabel')}: {endDate ? endDate.toLocaleDateString() : t('home.checkOut')}
        </span>
      </div>

      {/* Resumen de habitaciones, adultos y niños */}
      <div className="summary">
        <span>{rooms} {t('home.rooms')}</span> 
        <span>{adults} {t('home.adults')}</span> 
        <span>{children} {t('home.children')}</span>
      </div>

      {/* Calendario */}
      {showCalendar && (
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
            if (update[1]) setShowCalendar(false); 
          }}
          filterDate={isDateAvailable}
          inline
          onDayMouseEnter={(date) => setHoveredDate(date)}
          onDayMouseLeave={() => setHoveredDate(null)}
          renderDayContents={(day, date) => {
            const nights =
              startDate && !endDate && hoveredDate
                ? calculateNights(startDate, date)
                : 0;
            return (
              <div
                className="day-with-tooltip"
                data-tooltip={nights > 0 ? t('nights', { count: nights }) : ''}
              >
                {day}
              </div>
            );
          }}
        />
      )}

      {/* Controles adicionales */}
      <div className="booking-controls">
        <label>
          {t('home.rooms')}:
          <select value={rooms} onChange={(e) => setRooms(Number(e.target.value))}>
            {[...Array(5)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </label>

        <label>
          {t('home.adults')}:
          <select value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
            {[...Array(5)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </label>

        <label>
          {t('home.children')}:
          <select value={children} onChange={(e) => setChildren(Number(e.target.value))}>
            {[...Array(5)].map((_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </label>

        <label>
          {t('home.promoCode')}:
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder={t('home.promoCode')}
          />
        </label>

        <button className="booking-search-btn" onClick={handleSearch}>
          {t('home.search')}
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
