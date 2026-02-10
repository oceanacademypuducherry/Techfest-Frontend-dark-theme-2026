// ProtectedTicketSummary.tsx
import { Navigate } from "react-router-dom";
import TicketSummary from "../components/TicketSummary";


const ProtectedTicketSummary = () => {
  const studentsTicketCount =
    Number(sessionStorage.getItem("studentsTicketCount")) || 0;
  const workingProfTicketCount =
    Number(sessionStorage.getItem("workingProfTicketCount")) || 0;

  return studentsTicketCount > 0 || workingProfTicketCount > 0 ? (
    <TicketSummary />
  ) : (
    <Navigate to="/ticket-booking" replace />
  );
};

export default ProtectedTicketSummary;
