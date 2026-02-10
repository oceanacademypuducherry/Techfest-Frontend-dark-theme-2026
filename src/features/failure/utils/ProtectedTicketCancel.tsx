import { Navigate } from "react-router-dom";
import TicketCancel from "../components/TicketCancel";


const ProtectedTicketCancel = () => {
  const paymentCancelled =
    sessionStorage.getItem("paymentCancelled") === "true";

  return paymentCancelled ? (
    <TicketCancel />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedTicketCancel;
