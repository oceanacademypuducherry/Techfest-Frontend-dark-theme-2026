import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { quantityCheck } from "../../features/ticketSummary/services";
import { useConfirmationFormContext } from "../../features/ticketSummary/contexts";
import { initiateRazorpay } from "../../service";
import { setLoader } from "../../features/ticketConfirmation/services";
import Lottie from "lottie-react";
import { ALERT } from "../../assets/images";
import { toast } from "react-toastify";
import { useRef } from "react";



export default function TicketSummaryCard() {
  const prevTotalRef = useRef(0);

  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  // const [hasShownDiscountToast, setHasShownDiscountToast] = useState(false);



const [isMobile, setIsMobile] = useState(
  window.innerWidth <= 768
);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const studentTicCount = useSelector(
    (state: RootState) => state.ticketReducer.studentTicketCount
  );
  const workingTicProfCount = useSelector(
    (state: RootState) => state.ticketReducer.workingProfTicketCount
  );
  const isPrimaryUserStudent = useSelector(
    (state: RootState) => state.primaryUser.isPrimaryUserStudent
  );

  const { handleSubmit: handleCheckout } = useConfirmationFormContext();

  const [studentCount, setStudentCount] = useState(
    parseInt(sessionStorage.getItem("studentsTicketCount") || "0")
  );
  const [professionalCount, setProfessionalCount] = useState(
    parseInt(sessionStorage.getItem("workingProfTicketCount") || "0")
  );

  const [msg, setMsg] = useState("");
  const [availableCount, setAvailableCount] = useState<number | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  handleCheckout(() => {});

  const submitForm = async (data: any) => {
    setIsCheckoutLoading(true);
    const userData = Array.isArray(data?.items) ? data.items : [];

    try {
      await initiateRazorpay(
        studentCount,
        professionalCount,
        userData,
        navigate,
        userData.map((u: any) => u.email),
        setMsg,
        openModal,
        dispatch
      );
    } catch (err) {
      dispatch(setLoader(false));
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  const handleContinue = async () => {
    const totalCount = studentTicCount + workingTicProfCount;
    setIsLoading(true);

    try {
      const response: any = await dispatch(quantityCheck({ count: totalCount }));
      const payload = response.payload;

      if (payload.isSuccess) {
        sessionStorage.setItem("studentsTicketCount", studentTicCount.toString());
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
        setAvailableCount(payload.availableTickets);
        openModal();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = () => {
    (document.getElementById("success-modal") as HTMLDialogElement)?.showModal();
  };

  const closeModal = () => {
    (document.getElementById("success-modal") as HTMLDialogElement)?.close();
    setIsLoading(false);
  };

  useEffect(() => {
    const syncCounts = () => {
      setStudentCount(
        parseInt(sessionStorage.getItem("studentsTicketCount") || "0")
      );
      setProfessionalCount(
        parseInt(sessionStorage.getItem("workingProfTicketCount") || "0")
      );
    };

    const intervalId = setInterval(syncCounts, 100);
    return () => clearInterval(intervalId);
  }, []);

  const totalTickets = studentCount + professionalCount;

  const { data } = useSelector((state: RootState) => state.plans);
  const studentPrice = data.studentPlans?.[0]?.price || 0;
  const professionalPrice = data.employeePlans?.[0]?.price || 0;

  const totalAmount =
    studentCount * studentPrice + professionalCount * professionalPrice;

  const discount = totalTickets >= 10 ? totalAmount * 0.1 : 0;
  const totalAmountAfterDiscount = totalAmount - discount;

  const showDiscountToast = (amount: number) => {
 toast(({ closeToast }) => (
    <div className="flex flex-col items-center justify-center text-center gap-4 px-4 py-6">
      <h2 className="text-2xl md:text-3xl font-bold text-green-400">
        🎉 10% discount applied!
      </h2>

      <button
        onClick={closeToast}
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C] text-white  font-semibold
                    transition"
      >
        Close
      </button>
    </div>
  ));





};


  
useEffect(() => {
  // show toast when count crosses to 10
  if (prevTotalRef.current < 10 && totalTickets >= 10) {
    showDiscountToast(Math.round(discount));
  }

  prevTotalRef.current = totalTickets;
}, [totalTickets, discount]);










  return (
    <section className="flex items-center justify-around px-4 md:px-4 gap-0 relative">
      <div className="w-full xl:max-w-[600px] md:max-w-[500px] md:h-auto 
                      bg-[#1f2937] shadow-md rounded-lg 
                      sm:p-4 md:p-4 lg:p-6 flex flex-col items-center">
        <div className="w-full xl:max-w-[578px] xl:h-[555px] md:p-4 lg:p-6">
          <h2 className="text-start md:text-2xl mb-6 lg:text-4xl 
                         font-medium text-white pb-4 text-xl sm:text-lg">
            Ticket Summary
          </h2>

          <form>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pb-6 font-semibold text-[#828282] text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    Item
                  </th>
                  <th className="pb-6 font-semibold text-[#828282] text-center text-xs sm:text-sm md:text-[16px] lg:text-[16px]">
                    No.of.Unit
                  </th>
                  <th className="pb-6 font-semibold text-[#828282] text-right text-xs sm:text-sm md:text-[16px] lg:text-[16px]">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="font-bold border-t-2 border-gray-300">
                  <td className="pt-6 font-medium text-white text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    Early Bird <br /> (Student)
                  </td>
                  <td className="pt-6 font-medium text-white text-center text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    {studentCount}
                  </td>
                  <td className="pt-6 font-medium text-white text-right text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    ₹ {studentCount * studentPrice}
                  </td>
                </tr>

                <tr>
                  <td className="pt-3 font-medium text-white text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    Early Bird <br /> (Professional)
                  </td>
                  <td className="pt-3 font-medium text-white text-center text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    {professionalCount}
                  </td>
                  <td className="pt-3 font-medium text-white text-right text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    ₹ {professionalCount * professionalPrice}
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td className="pt-3 pb-8 font-medium text-white text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    10% Discount
                  </td>
                  <td></td>
                  <td className="pt-3 pb-6 font-medium text-white text-right text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    {discount > 0 && "-"} ₹ {discount.toFixed(2)}
                    {discount > 0 && (
                      <p className="text-green-600">Offer applied</p>
                    )}
                  </td>
                </tr>

                <tr className="font-bold border-t-2 border-b-2 border-gray-300">
                  <td className="pt-6 pb-6 font-medium text-white text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    Total Amount
                  </td>
                  <td className="pt-6 pb-6 font-medium text-white text-center text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    {totalTickets}
                  </td>
                  <td className="pt-6 pb-6 font-medium text-white text-right text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
                    ₹ {totalAmountAfterDiscount || 0}
                  </td>
                </tr>
              </tfoot>
            </table>
          </form>

          <div className="pt-6 pb-6">
            {location.pathname === "/ticket-confirmation" ? (
              <button
                onClick={handleCheckout(submitForm)}
                disabled={isCheckoutLoading}
                className={`mt-6 w-full ${
                  isCheckoutLoading
                    ? "bg-gray-300 border-gray-400"
                    : "bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C] text-white"
                } text-[#1a1a1a] py-3 rounded text-[16px] font-[600] border-[0px]`}
              >
                {isCheckoutLoading ? "Loading..." : "Checkout"}
              </button>
            ) : (
              <button
                onClick={handleContinue}
                disabled={totalTickets === 0 || isLoading}
                className={`mt-6 w-full py-3 rounded text-[16px] font-[600] border-[0px] 
                ${
                  totalTickets === 0 || isLoading
                    ? "bg-gray-300 text-gray-600 border-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C] text-white "
                }`}
              >
                {isLoading ? "Loading..." : "Continue"}
              </button>                                 
            )}
          </div>
        </div>
      </div>

      {/* LIGHT MODAL */}
      <dialog
        id="success-modal"
        className="fixed w-full max-w-xl max-h-full rounded-xl backdrop-blur-sm"
      >
        <div className="relative bg-white border p-4 border-gray-200">
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200 rounded-t">
            <h3 className="text-xl font-semibold text-red-600">
              Alert message
            </h3>
          </div>

          <div className="p-4 md:p-5 space-y-4 flex flex-col items-center text-center">
            <Lottie animationData={ALERT} loop className="w-24 h-24" />

            <p className="text-xl text-gray-700">
              {msg === "Not enough tickets available"
                ? availableCount === 0
                  ? "No tickets are available."
                  : `Only ${availableCount} tickets are available`
                : msg}
            </p>

            <button
              className="mt-5 px-6 py-3 rounded-lg text-sm font-medium text-white
                         bg-green-700 hover:bg-green-600 transition-all
                         w-full sm:w-auto"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
