import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./view/BookingForm";
import Main from "./view/Main";

test("Renders the BookingForm heading", () => {
  // render the BookingForm component
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();
});
test("initializeTimes", () => {
  // render the Main component
  render(<Main />);
  const dateData = screen.getByTestId("testDate");

  // test assumption
  expect(dateData).toBeEmptyDOMElement();

  const timeData = screen.getByTestId("testTime");

  // test assumption
  expect(timeData).toBeEmptyDOMElement();

  const guestsData = screen.getByTestId("testGuests");

  // test assumption
  expect(guestsData).toHaveTextContent(0);

  const occassionData = screen.getByTestId("testOccassion");

  // test assumption
  expect(occassionData).toHaveTextContent("");
});

test("updateTimes", () => {
  // render the Main component

  const date = "2023-04-07";
  const time = "17:00";
  const guests = "2";
  const occassion = "Anniversary";
  const handleSubmit = jest.fn();

  render(<Main onSubmit={handleSubmit} />);
  const submitButton = screen.getByTestId("SubmitButton");

  //1
  const dateInput = screen.getByLabelText(/Choose date/);

  fireEvent.change(dateInput, { target: { value: date } });

  //2
  const timeInput = screen.getByLabelText(/Choose time/);

  fireEvent.change(timeInput, { target: { value: time } });

  //3
  const guestsInput = screen.getByLabelText(/Number of guests/);

  fireEvent.change(guestsInput, { target: { value: guests } });

  //4
  const occassionInput = screen.getByLabelText(/Occassion/);

  fireEvent.change(occassionInput, { target: { value: occassion } });

  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    date,
    time,
    guests,
    occassion,
  });
});
