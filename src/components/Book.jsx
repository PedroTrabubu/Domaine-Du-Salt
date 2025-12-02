import React from "react";
import { useTranslation } from "react-i18next";
import BookingForm from "./BookingForm.jsx";

const book = () => {
  const { t } = useTranslation();

  return (
    <section id="book">
      <BookingForm />
    </section>
  );
};

export default book;
