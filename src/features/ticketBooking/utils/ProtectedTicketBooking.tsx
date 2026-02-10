// ProtectedTicketBooking.tsx
import { Navigate } from "react-router-dom";
import { TicketBooking } from "../components";


const ProtectedTicketBooking = () => {
  const canBookTicket =
    sessionStorage.getItem("canBookTicket") === "true";

  return canBookTicket ? (
    <TicketBooking />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedTicketBooking;
