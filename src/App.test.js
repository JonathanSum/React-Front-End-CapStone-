import { render, screen } from "@testing-library/react";
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
