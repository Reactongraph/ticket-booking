import React from "react";
import styled from "styled-components";
import FlightWidget from "./flightWidget";
import BookingOptions from "./bookingOptions";
import Button from "../../atoms/button";

const Section = styled.section`
  width: 1200px;
  padding: 65px 20px 0px 20px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  height: 200px;
  position: absolute;
  z-index: 0;
  top: 136px;
  left: 0;
  right: 0;
`;

const SearchButton = styled.div`
  width: 216px;
  margin: 0 auto;
  opacity: 1;
`;
export default function BookingSection({ children }) {
  return (
    <Section>
      <BookingOptions />
      <FlightWidget />
      <SearchButton>
        <Button>Search</Button>
      </SearchButton>
    </Section>
  );
}
