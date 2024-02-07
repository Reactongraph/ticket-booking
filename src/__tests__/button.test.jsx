import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../components/atoms/button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  test("renders button with children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const buttonElement = getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders button with default background gradient", () => {
    const { getByRole } = render(<Button>Default Button</Button>);
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveStyle(
      "background: linear-gradient(93deg, #53b2fe, #065af3)"
    );
  });

  test("renders button with custom background", () => {
    const { getByRole } = render(
      <Button background="red">Custom Background Button</Button>
    );
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveStyle("background: red");
  });

  test("calls onClick function when button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    const buttonElement = getByRole("button");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
