// import React from "react";
// import { useReducer } from "react";
// import BookingForm from "./BookingForm";
// import { fetchAPI, submitAPI } from "../controller/utils";
// const updateTimes = (state, action) => {
//   if (action.type === "date")
//     return {
//       ...state,
//       date: action.selDate,
//       time: action.avaiTimes,
//     };
//   if (action.type === "time") return { ...state, time: action.value };
//   if (action.type === "guests") return { ...state, guests: action.value };
//   if (action.type === "occassion") return { ...state, occassion: action.value };
//   return state;
// };

// const Main = ({ onSubmit }) => {
//   //This onSubmit is for unit testing.
//   const currDate = new Date();

//   const initializeTimes = {
//     //Date format YYYY-MM-DD
//     date: `${currDate.getFullYear()}-${
//       currDate.getMonth() + 1
//     }-${currDate.getDate()}`,
//     time: fetchAPI(currDate),
//     guests: 0,
//     occassion: "",
//   };

//   const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

//   const submitForm = (formData) => {
//     return submitAPI(formData);
//   };
//   console.log("testing availableTime: ", availableTimes);

//   //console.log("availableTimes: " + JSON.stringify(availableTimes));
//   console.log("availableTimes: " + availableTimes.date);
//   console.log("typeof dispatch: " + dispatch);
//   return (
//     <div>
//       <div data-testid="currentNumber">{availableTimes.date}</div>
//       <div>
//         Date: <span data-testid="testDate">{availableTimes.date}</span>
//       </div>
//       <div>
//         Time: <span data-testid="testTime">{availableTimes.time}</span>
//       </div>
//       <div>
//         Guests: <span data-testid="testGuests">{availableTimes.guests}</span>
//       </div>
//       <div>
//         Occassion:
//         <span data-testid="testOccassion">{availableTimes.occassion}</span>
//       </div>
//       <BookingForm
//         dispatch={dispatch}
//         times={availableTimes.time}
//         submitAPI={submitForm}
//       />
//     </div>
//   );
// };

// export default Main;
