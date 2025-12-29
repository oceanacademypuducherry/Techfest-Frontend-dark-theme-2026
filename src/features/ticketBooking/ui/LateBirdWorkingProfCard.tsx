import { professionalImage, professionalImage2 } from "../../../assets/images/social";
import { format } from "date-fns";
import { FaCheckCircle } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

interface LateBirdWorkingProfCardProps {
  data: {
    price: string;
    isActive: boolean;
    type: string;
    availableUntil: string | null;
  }[];
}

export default function LateBirdWorkingProfCard({ data }: LateBirdWorkingProfCardProps) {
  if (!data[1]) {
    return (
      <div className="flex-1 text-center">
        <p>No data available to display.</p>
      </div>
    );
  }

  const lateBirdData = data[1];

  return (
    <main className="flex-1">
      <section
        className={`relative rounded-2xl p-5 max-sm:p-3 transition-all duration-300 w-full h-[210px] max-sm:h-[150px]

          ${lateBirdData.isActive ? "bg-gradient-to-br from-[#EE4C9C] via-[#EE4C9C]/80 to-[#EE4C9C]/40 border-[1.7px] border-[#EE4C9C] shadow-[0_0_10px_3px_rgba(238,76,156,0.35)]"
            : "bg-[#b3b3b3] border border-transparent shadow-inner"}`} 
      >
        <div className="flex items-center justify-between">
          <button
            className={`rounded-md px-3 py-1 text-[12px] sm:text-sm font-semibold

              ${lateBirdData.isActive ? "bg-[#C92F78]/100 text-[#A8FFE0]" : "bg-[#f7f7f7] text-[#777777]"}`}
          >
            {lateBirdData.type?.[0]?.toLocaleUpperCase() + lateBirdData.type?.slice(1) || ""}                                                                                                                         
          </button>

          {lateBirdData.isActive ? (

            <FaCheckCircle className="text-[#EE4C9C]/100 text-2xl sm:text-3xl drop-shadow" />
          ) : (
            <div className="p-2 rounded-full bg-[#cfcfcf]">
              <FiLock size={18} className="text-[#6b6b6b]" />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <p className={`font-extrabold text-4xl max-sm:text-3xl ${lateBirdData.isActive ? "text-white" : "text-[#d1d5db]"}`}>
              ₹{lateBirdData.price || 0}
            </p>
            <p className={`text-sm mt-2 font-medium ${lateBirdData.isActive ? "text-[#f20c2e]" : "text-[#9aa0a6]"}`}>
              Inclusive GST*
            </p>
          </div>

          <img
            src={lateBirdData.isActive ? professionalImage : professionalImage2}
            className="w-20 sm:w-[120px] h-auto opacity-95 max-sm:hidden"
            alt="professional"
          />
        </div>

        {lateBirdData.availableUntil && (
          <p className="text-xs text-[#9aa0a6] mt-3">
            Available until: {format(new Date(lateBirdData.availableUntil), "dd MMM yyyy")}
          </p>
        )}
      </section>
    </main>
  );
}
