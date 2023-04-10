import React from "react";
import { useState, useReducer } from "react";
import BookingForm from "./BookingForm";
const updateTimes = (state, action) => {
  if (action.type === "date") return { ...state, date: action.value };
  if (action.type === "time") return { ...state, time: action.value };
  if (action.type === "guests") return { ...state, guests: action.value };
  if (action.type === "occassion") return { ...state, occassion: action.value };
  return state;
};
const Main = () => {
  const initializeTimes = {
    date: "",
    time: "",
    guests: 0,
    occassion: "",
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  // const updateTimes = () => {
  //   return availableTimes;
  // };

  // const [
  console.log("availableTimes: " + JSON.stringify(availableTimes));
  console.log("typeof dispatch: " + dispatch);
  return (
    <div>
      <BookingForm dispatch={dispatch} />
    </div>
  );
};

export default Main;
