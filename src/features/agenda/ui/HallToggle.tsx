import React from "react";
import { MdLocationOn } from "react-icons/md";


interface HallToggleProps {
  halls: string[];
  selectedHall: string;
  setSelectedHall: (hall: string) => void;
}



const HallToggle: React.FC<HallToggleProps> = ({ halls, selectedHall, setSelectedHall }) => {
  return (
    <div className="flex justify-center items-center bg-[#0F172A] p-[12px] sm:p-5 rounded-full shadow-md gap-3">
  {halls.map(hall => (
    <button
      key={hall}
      onClick={() => setSelectedHall(hall)}
      className={`flex items-center sm:gap-2 gap-1 px-2 sm:px-4  py-2 sm:py-3 rounded-full font-medium text-[13px] sm:text-[16px] transition-all
        ${selectedHall === hall 
          ? "bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C] text-white shadow-lg scale-105" 
          : "bg-gray-200 text-gray-600 hover:bg-[#243447]"
        }`}
    >
      <MdLocationOn className="hidden sm:block text-[18px] sm:text-[20px]" />
      {hall}
    </button>
  ))}
</div>


  );
};

export default HallToggle;
