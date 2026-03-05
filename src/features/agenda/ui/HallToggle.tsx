import React from "react";
import { MdLocationOn } from "react-icons/md";

interface HallToggleProps {
  halls: string[];
  selectedHall: string;
  setSelectedHall: (hall: string) => void;
}

const HallToggle: React.FC<HallToggleProps> = ({ halls, selectedHall, setSelectedHall }) => {
  return (
    <div
      className="
      flex items-center justify-start sm:justify-center
      bg-[#0F172A] rounded-full shadow-md
      overflow-x-auto whitespace-nowrap
      p-[10px] gap-2

      min-[451px]:p-[12px] min-[451px]:gap-2
      min-[678px]:p-5 min-[678px]:gap-3
      "
    >
      {halls.map((hall) => (
        <button
          key={hall}
          onClick={() => setSelectedHall(hall)}
          className={`
          flex-shrink-0 flex items-center
          gap-1 px-2 py-2 text-[12px]
          rounded-full font-medium transition-all

          min-[451px]:px-3 min-[451px]:text-[14px]
          min-[678px]:px-4 min-[678px]:py-3 min-[678px]:text-[16px] min-[678px]:gap-2

          ${
            selectedHall === hall
              ? "bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C] text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-600"
          }
          `}
        >
          <MdLocationOn className="hidden min-[678px]:block text-[20px]" />
          {hall}
        </button>
      ))}
    </div>
  );
};

export default HallToggle;