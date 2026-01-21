import { professionalImage, professionalImage2 } from "../../../assets/images/social";
import { FaCheckCircle } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

interface EarlyBirdWorkingProfCardProps {
  data: {
    price: string;
    isActive: boolean;
    type: string;
    availableUntil: string | null;
  }[];
}

export default function EarlyBirdWorkingProfCard({ data }: EarlyBirdWorkingProfCardProps) {
  if (!data[0]) {
    return (
      <div className="flex-1 text-center">
        <p>No data available to display.</p>
      </div>
    );
  }

  const earlyBirdData = data[0];

  return (
    <main className="flex-1">
      <section
        className={`relative rounded-2xl p-5 max-sm:p-3 transition-all duration-300 w-full h-[210px] max-sm:h-[150px]
          ${earlyBirdData.isActive ? "bg-gradient-to-br from-[#EE4C9C] via-[#EE4C9C]/80 to-[#EE4C9C]/40 border-[1.7px] border-[#EE4C9C] shadow-[0_0_10px_3px_rgba(238,76,156,0.35)]"
            : "bg-[#777777] border border-transparent shadow-inner"}`}
      >
        {earlyBirdData.isActive && (
          <div className="pointer-events-none absolute -inset-0.5 rounded-2xl blur-[8px] opacity-60"
               style={{ boxShadow: "0 10px 40px rgba(255,80,80,0.10), inset 0 0 18px rgba(255,120,100,0.04)" }} />
        )}

        <div className="flex items-center justify-between">
          <button
            className={`rounded-md px-3 py-1 text-[12px] sm:text-sm font-semibold
              ${earlyBirdData.isActive ? "bg-white  text-[#5F5F5F]" : "bg-[#545454] text-[#bdbdbd]"}`}
          >
            {earlyBirdData.type?.[0]?.toLocaleUpperCase() + earlyBirdData.type?.slice(1) || ""}
          </button> 

          {earlyBirdData.isActive ? (
            <FaCheckCircle className="text-white text-2xl sm:text-3xl drop-shadow" />
          ) : (
            <div className="p-2 rounded-full bg-[#545454]">
              <FiLock size={18} className="text-[#9aa0a6]" />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <p className={`font-extrabold text-4xl max-sm:text-3xl ${earlyBirdData.isActive ? "text-white" : "text-[#9e9e9e]"}`}>
              ₹{earlyBirdData.price || 0}
            </p>
            <p className={`text-sm mt-2 font-medium ${earlyBirdData.isActive ? "text-white" : "text-[#9aa0a6]"}`}>
              Inclusive GST*
            </p>
          </div>

          <img
            src={earlyBirdData.isActive ? professionalImage : professionalImage2}
            className="w-20 sm:w-[120px] h-auto opacity-95 max-sm:hidden"
            alt="professional"
          />
        </div>
      </section>
    </main>
  );
}
