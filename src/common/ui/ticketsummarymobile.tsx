import React, { useState, useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

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
            className={`bg-yellow-400 text-black py-2 px-4 rounded text-[14px] font-semibold border border-yellow-500 ${
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
