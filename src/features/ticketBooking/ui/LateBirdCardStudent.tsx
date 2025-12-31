import { Student, studentImage } from "../../../assets/images/social";
import { FaCheckCircle } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { format } from "date-fns";

interface LateBirdCardStudentProps {
  data: {
    price: string;
    isActive: boolean;
    type: string;
    availableUntil: string | null;
  }[];
}

export default function LateBirdCardStudent({ data }: LateBirdCardStudentProps) {
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

          ${lateBirdData.isActive ? "bg-gradient-to-br from-[#00C2FF]/90 via-[#01C1FB]/70 to-[#01C1FB]/50 border-[2.5px] border-[#00C2FF]/100 shadow-[0_0_10px_2px_rgba(0,194,255,0.25)]"
            : "bg-[#3b3f44] border border-[#4b4f55]"}`}
      >
        {/* glow border for active */}
        {lateBirdData.isActive && (
          <div className="pointer-events-none absolute -inset-0.5 rounded-2xl blur-[8px] opacity-60"
               style={{ boxShadow: "0 8px 30px rgba(0,255,160,0.12), inset 0 0 18px rgba(0,255,150,0.06)" }} />
        )}
        <div className="flex items-center justify-between">
          <button
            className={`rounded-md px-3 py-1 text-[12px] sm:text-sm font-semibold

              ${lateBirdData.isActive ? "bg-[#01C1FB]/100 text-[#FFD8D8]" : "bg-[#cfcfcf] text-[#555]"}`}
          >
            {lateBirdData.type?.[0]?.toLocaleUpperCase() + lateBirdData.type?.slice(1) || ""}
          </button>

          {lateBirdData.isActive ? (

            <FaCheckCircle className="text-white text-2xl sm:text-3xl drop-shadow" />
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
            <p className={`text-sm mt-2 font-medium ${lateBirdData.isActive ? "text-white" : "text-[#9aa0a6]"}`}>
              Inclusive GST*
            </p>
          </div>

          <img
            src={lateBirdData.isActive ? studentImage : Student}
            className="w-20 sm:w-[120px] h-auto opacity-95 max-sm:hidden"
            alt="student"
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
