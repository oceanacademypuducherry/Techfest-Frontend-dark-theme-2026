import { Navigate } from "react-router-dom";
import TicketSuccess from "../components/TicketSuccess";


const ProtectedTicketSuccess = () => {
  const paymentHistoryId = sessionStorage.getItem("paymentHistoryId")

  // return paymentHistoryId ? <TicketSuccess /> : <Navigate to="/" replace />;
  return <TicketSuccess />;

};

export default ProtectedTicketSuccess;
