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

  const score = "3";
  const date = "2023-04-07";
  const handleSubmit = jest.fn();

  render(<Main onSubmit={handleSubmit} />);
  const submitButton = screen.getByTestId("SubmitButton");

  const dateInput = screen.getByLabelText(/Choose date/);

  fireEvent.change(dateInput, { target: { value: date } });

  const rangeInput = screen.getByLabelText(/Score:/);
  fireEvent.change(rangeInput, { target: { value: score } });

  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    date,
  });
});
