import React from "react";
import MainBanner from "../../atoms/MainBanner";
import Header from "../../organisms/header";
import TicketBooking from "./ticketBooking";

export default function Home() {
  return (
    <>
      <MainBanner />
      <Header />
      <TicketBooking />
    </>
  );
}
