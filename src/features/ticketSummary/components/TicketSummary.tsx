import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer, Navigation } from "../../../common/ui";
import { scrollToTop } from "../../../utils/scrollTo";
import { useConfirmationFormContext } from "../contexts/ConfirmationFormContext";
import { AppDispatch, RootState } from "../../../app/store";
import { quantityCheck } from "../services";
import { StudentTicketQuantity, WorkingProffTicket } from "../ui";
import {
  TicketSummaryCard,
  ViewSummaryBottomsheet,
  TicketSummaryMobile,
} from "../../../common/ui";

export default function TicketSummary() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { reset } = useConfirmationFormContext();

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSummaryVisible, setIsSummaryVisible] = useState(true);
  const [isCloseButtonDisabled, setIsCloseButtonDisabled] = useState(false);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const studentTicCount = useSelector(
    (state: RootState) => state.ticketReducer.studentTicketCount
  );
  const workingTicProfCount = useSelector(
    (state: RootState) => state.ticketReducer.workingProfTicketCount
  );
  const isPrimaryUserStudent = useSelector(
    (state: RootState) => state.primaryUser.isPrimaryUserStudent
  );
  const { data } = useSelector((state: RootState) => state.plans);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    sessionStorage.removeItem("formData");
    sessionStorage.removeItem("studentsTicketCount");
    sessionStorage.removeItem("workingProfTicketCount");
    sessionStorage.removeItem("isPrimaryUserStudent");
    reset({ items: [] });
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleViewSummaryClick = () => {
    setIsSummaryVisible(false);
    setIsBottomSheetOpen(true);
  };

  const handleCloseSummary = () => {
    setIsBottomSheetOpen(false);
    setIsSummaryVisible(true);
    setIsCloseButtonDisabled(false);
  };

  const handleContinueClick = async () => {
    setIsLoading(true);
    const totalCount = studentTicCount + workingTicProfCount;

    try {
      const response = await dispatch(quantityCheck({ count: totalCount }));
      const payload = response.payload;

      if (payload.isSuccess) {
        setIsLoading(false);
        sessionStorage.setItem(
          "studentsTicketCount",
          studentTicCount.toString()
        );
        sessionStorage.setItem(
          "workingProfTicketCount",
          workingTicProfCount.toString()
        );
        sessionStorage.setItem(
          "isPrimaryUserStudent",
          JSON.stringify(isPrimaryUserStudent)
        );
        navigate("/ticket-confirmation");
      } else {
        setMsg(payload.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredPlans = [
    ...(data.studentPlans?.filter((plan: any) => plan.isActive) || []),
    ...(data.employeePlans?.filter((plan: any) => plan.isActive) || []),
  ];

  return (
    <>
      <Navigation />

      {/* PAGE BACKGROUND */}
      <div className="min-h-screen  bg-[#0A0C12]">
 
        <main
          className="w-[100%] md:w-[95%] mx-auto sm:pt-[60px] pt-[30px]
                     flex flex-col gap-5 justify-center sm:flex-row
                     overflow-y-auto max-w-screen-xl py-6"
        >
          {isBottomSheetOpen && (
            <div
              className="fixed inset-0 bg-black/20  z-10"
              onClick={handleCloseSummary}
            />
          )}

          {/* LEFT SECTION */}
          <section className="w-[95%] sm:w-[90%] md:w-[50%] lg:w-[40%] mx-auto">
                   {/* ---------- BACK BUTTON ---------- */}
<div
  className="
    hidden sm:inline-flex items-center cursor-pointer
    border border-white/30 rounded-md
     top-36 left-56 z-50
    px-3 py-1 mb-4
    hover:bg-white/10 transition
  "
  onClick={() => navigate(-1)}
>
  <span className="text-white text-2xl mr-2">←</span>
  <span className="text-white font-semibold text-lg">Back</span>
</div>
            <h2
              className="mt-0 mb-4 text-[30px] text-transparent bg-clip-text
                         bg-gradient-to-r from-[#E5E7EB] to-[#9CA3AF]
                         sm:text-[36px] font-semibold"
            >
              Ticket{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
                Booking
              </span>
            </h2>

            <p className="mt-3 text-gray-300 font-semibold max-sm:text-[14px]">
              Get 10% off when purchasing 5 or more tickets!
            </p>

            <div className="mt-5 flex flex-col gap-7">
              <StudentTicketQuantity data={filteredPlans[0]} />
              <WorkingProffTicket data={filteredPlans[1]} />
            </div>
          </section>

          {/* RIGHT SECTION */}
          {isMobile ? (
            <div
              className={`fixed bottom-0 z-10 bg-[#111827]
                transition-all duration-500 ease-in-out
                ${
                  isBottomSheetOpen
                    ? "translate-y-0 border border-white/10 shadow-xl left-3 right-3"
                    : "translate-y-[85%] shadow-lg left-0 right-0"
                } rounded-t-xl`}
            >
              {isSummaryVisible && (
                <ViewSummaryBottomsheet
                  summaryText="View Summary"
                  buttonText="Continue"
                  onViewSummaryClick={handleViewSummaryClick}
                  onContinueClick={handleContinueClick}
                />
              )}

              <div className="p-4 overflow-y-auto pb-6">
                <TicketSummaryMobile
                  setIsBottomSheetOpen={handleCloseSummary}
                  onButtonClick={handleContinueClick}
                  buttonText="Continue"
                  isBottomSheetOpen={isBottomSheetOpen}
                />
              </div>
            </div>
          ) : (
            <section className="w-full sm:w-[50%] lg:w-[50%]">
              <TicketSummaryCard />                                 
            </section>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}
