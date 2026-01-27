import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface ViewSummaryBottomsheetProps {
  total?: number;
  showTotal?: boolean;
  summaryText?: string;
  buttonText?: string;
  onViewSummaryClick?: () => void;
  onContinueClick?: () => void;
  containerClassName?: string;
  totalClassName?: string;
  summaryClassName?: string;
  buttonClassName?: string;
}

const ViewSummaryBottomsheet: React.FC<ViewSummaryBottomsheetProps> = ({
  summaryText = "",
  buttonText = "",
  onViewSummaryClick = () => {},
  onContinueClick = () => {},
  containerClassName = "",
  totalClassName = "",
  summaryClassName = "",
  buttonClassName = "",
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

  const totalAmount =
    studentCount * studentPrice + professionalCount * professionalPrice;

  const discount = totalTickets >= 10 ? totalAmount * 0.1 : 0;
  const totalAmountAfterDiscount = totalAmount - discount;

  return (
    <div
      className={`flex justify-between items-center px-5 py-4 pb-10 rounded-t-lg
        bg-[#1E293B] border border-[#334155]
        ${containerClassName}`}
    >
      <div className="flex-1">
        {/* Total */}
        <p
          className={`font-semibold text-[20px] text-white ${totalClassName}`}
        >
          Total: ₹{totalAmountAfterDiscount}
        </p>

        {/* View Summary */}
        <p
          className={`font-semibold text-[15px] text-[#01C1FB] cursor-pointer ${summaryClassName}`}
          onClick={onViewSummaryClick}
        >
          {summaryText}
        </p>
      </div>

      <div className="text-right">
        {/* Continue Button */}
        <button
          className={`bg-[#FFA908] text-textBlack py-2 px-4 rounded text-[16px] font-[600]
            bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C] text-white
            ${
              totalTickets === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }
            ${buttonClassName}`}
          onClick={onContinueClick}
          disabled={totalTickets === 0}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ViewSummaryBottomsheet;
