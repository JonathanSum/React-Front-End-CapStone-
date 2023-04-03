import React from "react";

const BookingPage = () => {
  return (
    <div>
      <form>
        <label>
          Date: <input type="number" name="guests" />
        </label>
        <label>
          Time: <input type="number" name="guests" />
        </label>
        <label>
          Number of guests: <input type="number" name="guests" />
        </label>
        <label>
          Occasion (Birthday, Anniversary):{" "}
          <input type="number" name="guests" />
        </label>
        <button type="Submit">Submit reservation button </button>
      </form>
      BookingPage
    </div>
  );
};

export default BookingPage;
