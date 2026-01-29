import React, { useState, useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
 import { toast } from "react-toastify";
 import { useRef } from "react";
import { CONFETTI } from "../../assets/images";
import Lottie from "lottie-react";

interface TicketSummaryMobileProps {
  setIsBottomSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onButtonClick: () => void;
  buttonText: string;
  isBottomSheetOpen: boolean;
}

const TicketSummaryMobile: React.FC<TicketSummaryMobileProps> = ({
  setIsBottomSheetOpen,
  onButtonClick,
  buttonText,
  isBottomSheetOpen,
}) => {
  const [studentCount, setStudentCount] = useState(
    parseInt(sessionStorage.getItem("studentsTicketCount") || "0")
  );
  const [professionalCount, setProfessionalCount] = useState(
    parseInt(sessionStorage.getItem("workingProfTicketCount") || "0")
  );

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
  const filteredPlans = [
    ...(data.studentPlans?.filter((plan: any) => plan.isActive) || []),
    ...(data.employeePlans?.filter((plan: any) => plan.isActive) || []),
  ];

  const studentPrice = filteredPlans[0]?.price || 0;
  const professionalPrice = filteredPlans[1]?.price || 0;
  const totalAmount = studentCount * studentPrice + professionalCount * professionalPrice;
  const discount = totalTickets >= 10 ? totalAmount * 0.1 : 0;
  const totalAmountAfterDiscount = totalAmount - discount;

 

 const showDiscountToast = (amount: number) => {
  toast(({ closeToast }) => (
    <div className="flex flex-col items-center justify-center text-center gap-2 px-3 py-4">
      {/* LEFT CONFETTI */}
              <div className="absolute left-0 top-0 h-full w-1/3 pointer-events-none z-0">
                <Lottie animationData={CONFETTI} loop={true} autoplay style={{ width: "100%", height: "100%" }} />
              </div>
      
              {/* RIGHT CONFETTI */}
              <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none z-0">
                <Lottie animationData={CONFETTI} loop={true} autoplay style={{ width: "100%", height: "100%" }} />
              </div>
      <h2 className="text-lg sm:text-xl font-bold text-green-400">
        🎉 10% discount applied!
      </h2>

      <button
        onClick={closeToast}
        className="px-4 py-1 sm:px-6 sm:py-2 rounded-lg bg-yellow-500 text-white font-semibold
                   hover:bg-yellow-600 transition text-sm sm:text-base"
      >
        Close
      </button>
    </div>
  ));
};



useEffect(() => {
  const prevTotal = Number(
    sessionStorage.getItem("prevTotalTicketsMobile") || 0
  );

  // show popup ONLY when transitioning TO exactly 10
  if (prevTotal !== 10 && totalTickets === 10) {
    showDiscountToast(Math.round(discount));
  }

  // store current value for next comparison
  sessionStorage.setItem(
    "prevTotalTicketsMobile",
    totalTickets.toString()
  );
}, [totalTickets, discount]);



  return (
    <div className=" text-gray-700 p-4 rounded-lg  relative">
      {isBottomSheetOpen && (
  <button
    onClick={() => setIsBottomSheetOpen(false)}
    className="fixed bottom-[calc(100%+2px)] left-1/2 transform -translate-x-1/2 rounded-full p-2 z-50"
  >
    <RiCloseCircleLine className="text-4xl text-white" />
  </button>
)}


      <div>
        <div className="flex justify-between items-center mb-6  pb-4">
          <h2 className="text-white text-[16px] font-bold">Ticket Summary</h2>
          <button
            className={`bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C] text-white py-2 px-4 rounded text-[16px] font-semibold  ${
              totalTickets === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={onButtonClick}
            disabled={totalTickets === 0}
          >
            {buttonText}
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500">
              <th className="pb-6 font-medium text-[14px]">Item</th>
              <th className="pb-6 font-medium text-[14px] text-center">No. of Units</th>
              <th className="pb-6 font-medium text-[14px] text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-bold border-t border-gray-200 text-[14px]">
              <td className="pt-6 font-medium text-gray-100">Early Bird (Student)</td>
              <td className="pt-6 font-medium text-center text-gray-100">{studentCount}</td>
              <td className="pt-6 font-medium text-right text-gray-100">₹{studentCount * studentPrice}</td>
            </tr>
            <tr className="text-[14px]">
              <td className="pt-3 font-medium text-gray-100">Early Bird (Professional)</td>
              <td className="pt-3 font-medium text-center text-gray-100">{professionalCount}</td>
              <td className="pt-3 font-medium text-right text-gray-100">₹{professionalCount * professionalPrice}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="text-[14px]">
              <td className="pt-3 pb-8 font-medium text-gray-100">10% Discount</td>
              <td className="pt-3 pb-8 font-medium text-center text-gray-100">-</td>
              <td className="pt-3 pb-6 font-medium text-right text-gray-100">
                {discount > 0 && "-"} ₹{discount.toFixed(2)}
                {discount > 0 && <p className="text-green-700 text-sm mt-1">Offer applied</p>}
              </td>
            </tr>
            <tr className="font-bold border-t border-b border-gray-200 text-gray-100 text-[14px]">
              <td className="pt-6 pb-6 font-medium">Total Amount</td>
              <td className="pt-6 pb-6 font-medium text-center">{totalTickets}</td>
              <td className="pt-6 pb-6 font-medium text-right">₹{totalAmountAfterDiscount}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TicketSummaryMobile;
