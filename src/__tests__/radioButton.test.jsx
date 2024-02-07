import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RadioButton from "../components/atoms/radioButton";
import "@testing-library/jest-dom";

describe("RadioButton component", () => {
  const testData = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  test("renders radio buttons with correct labels", () => {
    const { getByLabelText } = render(<RadioButton data={testData} />);
    testData.forEach(({ label }) => {
      const radioElement = getByLabelText(label);
      expect(radioElement).toBeInTheDocument();
    });
  });
});
