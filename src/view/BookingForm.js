import { useState, useEffect } from "react";
import React from "react";

const BookingForm = ({ dispatch }) => {
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

  useEffect(() => {
    // console.log("date: " + date);
    // console.log("time: " + time);
    // console.log("guests: " + guests);
    // console.log("occassion: " + occassion);
  }, [date, time, guests, occassion]);
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          console.log("typeof: " + dispatch);
          dispatch({ type: "date", value: e.target.value });
        }}
      ></input>

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          dispatch({ type: "time", value: e.target.value });
        }}
      >
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => {
          setGuests(e.target.value);
          dispatch({ type: "guests", value: e.target.value });
        }}
      />
      <label htmlFor="occasion">Occassion</label>
      <select
        name="occasion"
        id="occasion"
        value={occassion}
        onChange={(e) => {
          setOccassion(e.target.value);
          dispatch({ type: "occasion", value: e.target.value });
        }}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
