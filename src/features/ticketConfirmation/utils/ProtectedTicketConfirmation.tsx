import { Navigate } from "react-router-dom";
import TicketConfirmation from "../components/Confirmation";

const ProtectedTicketConfirmation = () => {
  const studentsTicketCount = Number(sessionStorage.getItem("studentsTicketCount")) || 0;
  const workingProfTicketCount = Number(sessionStorage.getItem("workingProfTicketCount")) || 0;

  return studentsTicketCount > 0 || workingProfTicketCount > 0 ? (
    <TicketConfirmation />
  ) : (
    
    <Navigate to="/ticket-summary" replace />
  );
};

export default ProtectedTicketConfirmation;
