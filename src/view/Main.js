import React from "react";
import { useState } from "react";
import BookingForm from "./BookingForm";

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([]);

  return (
    <div>
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
};

export default Main;
