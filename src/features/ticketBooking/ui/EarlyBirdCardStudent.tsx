import { studentImage, Student } from "../../../assets/images/social";
import { FaCheckCircle } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

interface EarlyBirdCardStudentProps {
  data: {
    price: string;
    isActive: boolean;
    type: string;
  }[];
}

export default function EarlyBirdCardStudent({ data }: EarlyBirdCardStudentProps) {
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
          ${earlyBirdData.isActive ? "bg-gradient-to-br from-[#023538] via-[#0A3B1B] to-[#123E09] border-[1.7px] border-[#0fe77f] shadow-[0_0_10px_2px_rgba(0,200,150,0.45)]"

            : "bg-[#b3b3b3] border border-transparent shadow-inner"}`}

      >
        
        {/* glow border for active */}
        {earlyBirdData.isActive && (
          <div className="pointer-events-none absolute -inset-0.5 rounded-2xl blur-[8px] opacity-60"
               style={{ boxShadow: "0 8px 30px rgba(0,255,160,0.12), inset 0 0 18px rgba(0,255,150,0.06)" }} />
        )}

        <div className="flex items-center justify-between">
          <button
            className={`rounded-md px-3 py-1 text-[12px] sm:text-sm font-semibold
              ${earlyBirdData.isActive ? "bg-[#3BA964] text-white" : "bg-[#909090] text-[#bdbdbd]"}`}
          >                               
            {earlyBirdData.type?.[0]?.toLocaleUpperCase() + earlyBirdData.type?.slice(1) || ""}
          </button>

          {earlyBirdData.isActive ? (
            <FaCheckCircle className="text-[#16a34a] text-2xl sm:text-3xl drop-shadow" />
          ) : (
            <div className="p-2 rounded-full bg-[#909090]">
              <FiLock size={18} className="text-[#9aa0a6]" />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <p className={`font-extrabold text-4xl max-sm:text-3xl ${earlyBirdData.isActive ? "text-white" : "text-[#d1d5db]"}`}>
              ₹{earlyBirdData.price || 0}
            </p>
            <p className={`text-sm mt-2 font-medium ${earlyBirdData.isActive ? "text-rose-500" : "text-[#9aa0a6]"}`}>
              Inclusive GST*
            </p>
          </div>

          <img
            src={earlyBirdData.isActive ? studentImage : Student}
            className="w-20 sm:w-[120px] h-auto opacity-95 max-sm:hidden"
            alt="student"
          />
        </div>
      </section>
    </main>
  );
}
