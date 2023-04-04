import { useState } from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(0);
  const [occassion, setOccassion] = useState("");

  const getIsFormValid = () => {
    return date && time && guests > 0 && occassion;
  };
  const clearForm = () => {
    setDate("");
    setTime("");
    setGuests(0);
    setOccassion("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booked!");
    clearForm();
  };
  return <BookingForm />;
};

export default BookingPage;
