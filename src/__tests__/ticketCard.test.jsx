import React from "react";
import { render } from "@testing-library/react";
import TicketCard from "../components/molecules/ticketList/ticketCard";
import "@testing-library/jest-dom";

describe("TicketCard component", () => {
  const testData = {
    id: "1",
    fare: 3840,
    displayData: {
      source: {
        airport: {
          cityCode: "DEL",
          cityName: "Delhi",
          terminal: "3",
          airportCode: "DEL",
          airportName: "Indira Gandhi Airport",
          countryCode: "IN",
          countryName: "India",
        },
        depTime: "2023-03-31T06:20",
      },
      airlines: [
        {
          airlineCode: "AB",
          airlineName: "JetSpice",
          flightNumber: "1234",
        },
      ],
      stopInfo: "Non stop",
      destination: {
        airport: {
          cityCode: "BOM",
          cityName: "Mumbai",
          terminal: "2",
          airportCode: "BOM",
          airportName: "Mumbai",
          countryCode: "IN",
          countryName: "India",
        },
        arrTime: "2023-03-31T08:40",
      },
      totalDuration: "2h 20m",
    },
  };

  it("renders airline name", () => {
    const { getByText } = render(<TicketCard data={testData} />);
    expect(getByText("JetSpice")).toBeInTheDocument();
    expect(getByText("JetSpice")).toBeInTheDocument();
  });

  it("renders class", () => {
    const { getByText } = render(<TicketCard data={testData} />);
    expect(getByText("Class")).toBeInTheDocument();
    expect(getByText("Economy")).toBeInTheDocument();
  });
});
