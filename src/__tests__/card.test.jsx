import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/atoms/Card";
import "@testing-library/jest-dom";

describe("Card component", () => {
  test("renders children correctly", () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    const contentElement = screen.getByText(/Test Content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
