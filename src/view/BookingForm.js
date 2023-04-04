import { useState } from "react";
import React from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(0);
  const [occassion, setOccassion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
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
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date"></input>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occassion</label>
      <select name="occasion" id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
