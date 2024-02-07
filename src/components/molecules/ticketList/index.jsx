import React from "react";
import styled from "styled-components";
import Filter from "./filter";
import Tickets from "./tickets";

const ListSection = styled.section`
  justify-content: space-between;
  display: flex;
  width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: 20px;
`;

export default function TicketList() {
  return (
    <ListSection>
      <Filter />
      <Tickets />
    </ListSection>
  );
}
