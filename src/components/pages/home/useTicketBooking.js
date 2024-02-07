import { useContext } from "react";
import { TicketBookingContext } from "./ticketBookingContext";

export const useTicketBooking = () => {
  const context = useContext(TicketBookingContext);

  if (!context)
    throw new Error(
      "useTicketBooking context must be use inside TicketBookingProvider"
    );

  return context;
};
