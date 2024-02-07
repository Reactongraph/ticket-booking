import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookingOptions from "../components/molecules/booking/bookingOptions";
import "@testing-library/jest-dom";

describe("BookingOptions", () => {
  test("renders correctly", () => {
    const { getByText } = render(<BookingOptions />);

    const oneWayOption = getByText("One Way");
    const roundTripOption = getByText("Round Trip");

    expect(oneWayOption).toBeInTheDocument();
    expect(roundTripOption).toBeInTheDocument();
  });

  test("selects option correctly", () => {
    const { getByLabelText } = render(<BookingOptions />);

    const roundTripRadio = getByLabelText("Round Trip");
    fireEvent.click(roundTripRadio);

    expect(roundTripRadio.checked).toBe(true);
  });
});
