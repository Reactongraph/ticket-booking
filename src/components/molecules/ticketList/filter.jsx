import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";
import Checkbox from "../../atoms/checkbox";
import RangeComponent from "../../atoms/range";
import { useTicketBooking } from "../../pages/home/useTicketBooking";

const FilterSection = styled.div`
  width: 295px;
  align-self: flex-start;
  position: unset;
  bottom: auto;
  border-radius: 2px;
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const FiltersBox = styled.div`
  width: 100%;
  padding: 12px 15px;
`;

const FiltersItems = styled.div`
  margin-top: 12px;
`;

const FilterCard = ({ children, title }) => {
  return (
    <FiltersBox>
      <Typography fontWeight="900" fontSize="16px">
        {title}
      </Typography>
      <FiltersItems>{children}</FiltersItems>
    </FiltersBox>
  );
};

const airlinesList = [
  { label: "JetSpice", value: "JetSpice" },
  { label: "Air India", value: "Air India" },
  { label: "IndiGo", value: "IndiGo" },
];

const departureTime = [
  { label: "Before 6 AM", value: "Before 6 AM" },
  { label: "6 AM - 12 PM", value: "6 AM - 12 PM" },
  { label: "12 PM - 6 AM", value: "12 PM - 6 AM" },
  { label: "After 6 AM", value: "After 6 AM" },
];

const arrivalTime = [
  { label: "Before 6 AM", value: "Before 6 AM" },
  { label: "6 AM - 12 PM", value: "6 AM - 12 PM" },
  { label: "12 PM - 6 AM", value: "12 PM - 6 AM" },
  { label: "After 6 AM", value: "After 6 AM" },
];

export default function Filter() {
  const {
    setByAirlineFilter,
    setByDepartureAtFilter,
    setByArrivalAtFilter,
    setByPriceRangeFilter,
  } = useTicketBooking();
  return (
    <FilterSection>
      <FilterCard title="Airlines">
        {airlinesList.map(({ label, value }, index) => (
          <Checkbox
            label={label}
            value={value}
            key={index}
            onChange={setByAirlineFilter}
          />
        ))}
      </FilterCard>
      <FilterCard title="Price">
        <RangeComponent onChange={setByPriceRangeFilter}/>
      </FilterCard>
      <FilterCard title="Departure At">
        {departureTime.map(({ label, value }, index) => (
          <Checkbox
            label={label}
            value={value}
            key={index}
            onChange={setByDepartureAtFilter}
          />
        ))}
      </FilterCard>
      <FilterCard title="Arrival at">
        {arrivalTime.map(({ label, value }, index) => (
          <Checkbox
            label={label}
            value={value}
            key={index}
            onChange={setByArrivalAtFilter}
          />
        ))}
      </FilterCard>
    </FilterSection>
  );
}
