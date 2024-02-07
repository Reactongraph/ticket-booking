import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Checkbox from "../components/atoms/checkbox";
import "@testing-library/jest-dom";

describe("Checkbox Component", () => {
  test("renders checkbox with label", () => {
    const { getByLabelText } = render(<Checkbox label="Test Checkbox" />);
    const checkbox = getByLabelText("Test Checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  test("checkbox can be unchecked", () => {
    const { getByLabelText } = render(<Checkbox label="Test Checkbox" />);
    const checkbox = getByLabelText("Test Checkbox");
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test("onChange function is called when checkbox state changes", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox label="Test Checkbox" onChange={handleChange} />
    );
    const checkbox = getByLabelText("Test Checkbox");
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });

  test("checkbox has correct value attribute", () => {
    const { getByLabelText } = render(
      <Checkbox label="Test Checkbox" value="test-value" />
    );
    const checkbox = getByLabelText("Test Checkbox");
    expect(checkbox).toHaveAttribute("value", "test-value");
  });
});
