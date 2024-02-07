import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/typography";
import TicketCard from "./ticketCard";
import { useTicketBooking } from "../../pages/home/useTicketBooking";

const TicketSection = styled.section`
  width: 880px;
`;

const ListingCard = styled.section`
  margin-bottom: 5px;
  padding: 10px 14px;
  margin-top: 8px;
  background: #fff;
  border-radius: 2px;
  position: relative;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
`;

export default function Tickets() {
  const { data } = useTicketBooking();
  return (
    <TicketSection>
      <Typography fontSize="24px" fontWeight="900">
        Flights from New Delhi to Mumbai
      </Typography>
      {data.map((ticket, index) => (
        <ListingCard key={index}>
          <TicketCard data={ticket} />
        </ListingCard>
      ))}
    </TicketSection>
  );
}
