import React from "react";
import BookingSection from "../../molecules/booking/bookingSection";
import TicketList from "../../molecules/ticketList";
import { TicketBookingProvider } from "./ticketBookingContext";

export default function TicketBooking() {
  return (
    <>
    <TicketBookingProvider>
      <BookingSection />
      <TicketList />
    </TicketBookingProvider>
    </>
  );
}
