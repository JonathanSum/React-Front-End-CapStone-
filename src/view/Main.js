import React from "react";
import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../controller/utils";
import "./Chicago.css";
import j1 from'../resource/j1.jpg';
import sc from'../resource/sc.jpg';
import open from'../resource/open.jpg';
const updateTimes = (state, action) => {
  if (action.type === "date")
    return {
      ...state,
      date: action.selDate,
      time: action.avaiTimes,
    };
  if (action.type === "time") return { ...state, time: action.value };
  if (action.type === "guests") return { ...state, guests: action.value };
  if (action.type === "occassion") return { ...state, occassion: action.value };
  return state;
};

const Main = ({ onSubmit }) => {
  //This onSubmit is for unit testing.
  const currDate = new Date();

  const initializeTimes = {
    //Date format YYYY-MM-DD
    date: `${currDate.getFullYear()}-${
      currDate.getMonth() + 1
    }-${currDate.getDate()}`,
    time: fetchAPI(currDate),
    guests: 0,
    occassion: "",
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  const submitForm = (formData) => {
    return submitAPI(formData);
  };
  console.log("testing availableTime: ", availableTimes);

  //console.log("availableTimes: " + JSON.stringify(availableTimes));
  console.log("availableTimes: " + availableTimes.date);
  console.log("typeof dispatch: " + dispatch);
  return (
    <main className="container">
    <section className="discount">
      <article>
        <h2>20% Off This Weekend</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          inventore libero, non illum reiciendis accusamus, facilis mollitia
          rem praesentium maiores quod dicta ad aliquam sit dolores saepe
          corporis. Maxime, nesciunt!
        </p>
      </article>
    </section>
    <section className="c1 c-item">
      <article>
        <h2>Our Jewelry</h2>
        <img src={j1} alt="Jewelry" width="300px" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          inventore libero, non illum reiciendis accusamus, facilis mollitia
          rem praesentium maiores quod dicta ad aliquam sit dolores saepe
          corporis. Maxime, nesciunt!
        </p>
      </article>
    </section>
    <section className="c2 c-item">
      <article>
        <h2>Make a Schedule</h2>
        <img src={sc} alt="schedule" height="200px" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          inventore libero, non illum reiciendis accusamus, facilis mollitia
          rem praesentium maiores quod dicta ad aliquam sit dolores saepe
          corporis. Maxime, nesciunt!
        </p>
      </article>
    </section>
    <section className="c3 c-item">
      <article>
        <h2>Opening Hours</h2>
        <img src={open} alt="hours" height="200px" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          inventore libero, non illum reiciendis accusamus, facilis mollitia
          rem praesentium maiores quod dicta ad aliquam sit dolores saepe
          corporis. Maxime, nesciunt!
        </p>
      </article>
    </section>
  </main>
  );
};

export default Main;
