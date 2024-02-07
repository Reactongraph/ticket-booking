import React from "react";
import { render } from "@testing-library/react";
import Typography from "../components/atoms/typography";
import "@testing-library/jest-dom";

describe("Typography component", () => {
  test("renders with default props", () => {
    const { getByText } = render(<Typography>Hello World</Typography>);
    const typographyElement = getByText("Hello World");
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveStyle("font-size: 14px");
    expect(typographyElement).toHaveStyle("font-weight: 400");
    expect(typographyElement).toHaveStyle("text-align: left");
  });

  test("renders with custom props", () => {
    const { getByText } = render(
      <Typography fontSize="20px" fontWeight="600" textAlign="center">
        Hello World
      </Typography>
    );
    const typographyElement = getByText("Hello World");
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveStyle("font-size: 20px");
    expect(typographyElement).toHaveStyle("font-weight: 600");
    expect(typographyElement).toHaveStyle("text-align: center");
  });
});
