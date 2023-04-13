import { useState, useEffect } from "react";
import React from "react";
import { fetchAPI } from "../controller/utils";
import { useNavigate } from "react-router-dom";

//TODO I say it is better to put the avaible time
//TODO make a useEffect if the times props change
//and update the time list
const BookingForm = ({ dispatch, onSubmit, times, submitAPI }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(times);
  const [guests, setGuests] = useState(0);
  const [occassion, setOccassion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  const navigate = useNavigate();

  const clearForm = () => {
    //TODO set the date to be today's day
    setDate("");
    setTime(times);
    setGuests(0);
    setOccassion("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitAPI({ date, time, guests, occassion })) {
      // alert("Booked!");
      navigate("/confirmed-booking");
      clearForm();
    }
  };

  useEffect(() => {
    console.log("date: " + date);
    console.log("time: " + time);
    console.log("guests: " + guests);
    console.log("occassion: " + occassion);
  }, [date, time, guests, occassion]);
  return (
    <>
      <h1 data-testid="BookNow">{"Book Now"}</h1>
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
            const avaiTimesList = fetchAPI(
              new Date(
                parseInt(e.target.value.substring(0, 4)),
                parseInt(e.target.value.substring(5, 7)),
                parseInt(e.target.value.substring(8, 10))
              )
            );
            setTime(avaiTimesList);
            console.log(
              "Choose date dispatch!!!!: " +
                dispatch({
                  type: "date",
                  selDate: e.target.value,
                  avaiTimes: avaiTimesList,
                })
            );
          }}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time[0]}
          onChange={(e) => {
            setTime(e.target.value);
            dispatch({ type: "time", value: e.target.value });
          }}
        >
          {time.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
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
        <button data-testid="SubmitButton" type="submit">
          Make Your reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;
