import { render, screen } from "@testing-library/react";
import BookingForm from "./view/BookingForm";

test("Renders the BookingForm heading", () => {
  // render the App component
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();
});
