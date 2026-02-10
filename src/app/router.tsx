import { createBrowserRouter } from "react-router-dom";
import { HomePage, AgendaPage, Speaker, TicketBooking } from "../features";
import ProtectedTicketConfirmation from "../features/ticketConfirmation/utils/ProtectedTicketConfirmation";
import TicketSummary from "../features/ticketSummary/components/TicketSummary";
import TicketCancel from "../features/failure/components/TicketCancel";
import ProtectedTicketSuccess from "../features/success/utils/ProtectedSuccessPage";
import { FAQ } from "../common/ui/faq/FAQ";
import { CertificateDownload } from "../features/certificateDownload";
import CertificateDesign from "../features/certificateDownload/ui/CertificateDesign";
import {PrivacyPolicy} from "../features/privacyPolicy/components"
import SponsorsPage from "../features/home/components/SponsorsPage";
import ProtectedTicketBooking from "../features/ticketBooking/utils/ProtectedTicketBooking";
import ProtectedTicketSummary from "../features/ticketSummary/utils/ProtectedTicketSummary";
import ProtectedTicketCancel from "../features/failure/utils/ProtectedTicketCancel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "agenda",
    element: <AgendaPage />,
  },
  {
    path: "speakers",
    element: <Speaker />,
  },
  {
  path: "sponsors",
    element: <SponsorsPage />,
  },
  // {
  //   path: "ticket-booking",
  //   element: <TicketBooking />,
  // },
  // {
  //   path: "ticket-summary",
  //   element: <TicketSummary />,
  // },

   {
    path: "ticket-booking",
    element: <ProtectedTicketBooking />,
  },
  {
    path: "ticket-summary",
    element: <ProtectedTicketSummary />,
  },
  {
    path: "ticket-confirmation",
    element: <ProtectedTicketConfirmation />,
  },
  // {
  //   path: "ticket-cancel",
  //   element: <TicketCancel />,
  // },
   {
    path: "ticket-cancel",
    element: <ProtectedTicketCancel />,
  },
  {
    path: "ticket-success",
    element: <ProtectedTicketSuccess />,
  },
  {
    path: "faq",
    element: <FAQ />,
  },
  {
    path: "certificate",
    element: <CertificateDownload />,
  },
  {
    path:"privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "certificate-design",
    element: <CertificateDesign />,
  }
]);

export default router;
