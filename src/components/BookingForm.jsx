import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';
import { useTranslation } from 'react-i18next';
import { es, fr, enGB, de } from "date-fns/locale";

const BookingForm = () => {
  const { t, i18n } = useTranslation();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [hoveredDate, setHoveredDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [promoCode, setPromoCode] = useState('');

  const formRef = useRef();

  const localesMap = { es, fr, en: enGB, de };
  const currentLang = i18n.language.split('-')[0];
  const currentLocale = localesMap[currentLang] || enGB;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    alert(
      `Buscando: ${startDate?.toLocaleDateString()} - ${endDate?.toLocaleDateString()}, ${rooms} habitaciones, ${adults} adultos, ${children} niños, código: ${promoCode}`
    );
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
    <div className="booking-form" id="booking-form" ref={formRef}>
      <h2 className="screen-reader-text">{t("book.titleh2")}</h2>
      <div className="booking-controls">
        {/* Entradas */}
        <label>
          {t('book.checkInLabel')}
          <input
            type="text"
            readOnly
            value={startDate ? startDate.toLocaleDateString(currentLang) : t('book.checkIn')}
            onClick={() => setShowCalendar(true)}
          />
        </label>
        <label>
          {t('book.checkOutLabel')}
          <input
            type="text"
            readOnly
            value={endDate ? endDate.toLocaleDateString(currentLang) : t('book.checkOut')}
            onClick={() => setShowCalendar(true)}
          />
        </label>

        {/* Noches */}
        <label>
          {t('book.nights')}
          <input type="text" readOnly value={calculateNights(startDate, endDate)} />
        </label>

        {/* Habitaciones */}
        <label>
          {t('book.rooms')}
          <select value={rooms} onChange={(e) => setRooms(Number(e.target.value))}>
            {[...Array(5)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </label>

        {/* Adultos */}
        <label>
          {t('book.adults')}
          <select value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
            {[...Array(5)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </label>

        {/* Niños */}
        <label>
          {t('book.children')}
          <select value={children} onChange={(e) => setChildren(Number(e.target.value))}>
            {[...Array(5)].map((_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </label>

        {/* Código Promocional */}
        <label>
          {t('book.promoCode')}
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder={t('book.promoCode')}
          />
        </label>

        {/* Botón */}
        <button className="booking-search-btn" onClick={handleSearch}>
          {t('book.search')}
        </button>
      </div>

      {/* Calendario overlay */}
      {showCalendar && (
        <div className="calendar-overlay">
          <DatePicker
            locale={currentLocale}
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
        </div>
      )}
    </div>
  );
};

export default BookingForm;
