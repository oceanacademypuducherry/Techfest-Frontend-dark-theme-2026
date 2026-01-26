import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, resetCount } from "../services";
import { useEffect } from "react";
import { RootState } from "../../../app/store";
import { benefits } from "../utils/BenifitsList";
import { FiCheckCircle } from "react-icons/fi";
import { toast } from "react-toastify";

interface StudentTicketQuantityProps {
  data?: {
    label: string;
    price: number;
    priceType: string;
    type: string;
  };
}

export default function StudentTicketQuantity({
  data,
}: StudentTicketQuantityProps) {
  const dispatch = useDispatch();
  const count = useSelector(
    (state: RootState) => state.ticketReducer.studentTicketCount
  );
  const workingProfCount = useSelector(
    (state: RootState) => state.ticketReducer.workingProfTicketCount
  );
  const totalTicketCount = count + workingProfCount;
  const { isLoading } = useSelector((state: RootState) => state.plans);

  useEffect(() => {
    dispatch(resetCount("student"));
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem("studentsTicketCount", count.toString());
    
  }, [count]);

//   useEffect(() => {
//   sessionStorage.setItem("studentsTicketCount", count.toString());

//   if (count < 10) {
//     sessionStorage.removeItem("discountToastShown");
//   }

//   const shown = sessionStorage.getItem("discountToastShown");

//   if (
//   count === 10 &&
//   !shown &&
//   window.matchMedia("(max-width: 640px)").matches
// ) {
//   toast.success("🎉 You’ve unlocked a 10% discount on your tickets!");


//   sessionStorage.setItem("discountToastShown", "true");
// }

// }, [count]);



  return (
    <main>
      {/* OUTER BORDER GRADIENT */}
      <div
        className="rounded-md p-[1.4px]
        bg-gradient-to-r from-[#2EC5FF] via-[#45D6FF] to-[#5EE3FF]"
      >
        {/* CARD BACKGROUND */}
        <section
          className="
          w-full bg-gradient-to-br from-[#2EC5FF] via-[#45D6FF] to-[#5EE3FF]
          rounded-md p-[20px] px-[40px] shadow-lg max-sm:p-[25px] mx-auto
        "
        >
          <div>
            <div className="flex justify-between items-center">
              {/* Skeleton Loader */}
              {isLoading ? (
                <div className="h-8 w-20 bg-white/40 rounded-md"></div>
              ) : (
                <button className="bg-white/90 text-black rounded-md p-2 font-semibold px-3 text-[13px]">
                  {data?.type
                    ? data.type[0].toUpperCase() + data.type.slice(1)
                    : ""}
                </button>
              )}

              <div className="flex items-center gap-3 p-3 rounded-md">
                <button
                  onClick={() => dispatch(decrement("student"))}
                  disabled={count === 0}
                  className={`bg-white text-black font-bold w-6 h-6 rounded-full flex justify-center items-center ${
                    count === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  -
                </button>

                <input
                  type="text"
                  value={count.toString().padStart(2, "0")}
                  readOnly
                  disabled
                  className="w-16 h-8 text-center border border-white/60 
                             text-lg font-bold rounded-md 
                             bg-transparent text-white"
                />

                <button
                  onClick={() => dispatch(increment("student"))}
                  disabled={totalTicketCount >= 15}
                  className={`bg-white text-black font-bold w-6 h-6 rounded-full flex justify-center items-center ${
                    totalTicketCount >= 15
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  +
                </button>
              </div>
            </div>

            {/* Price & Label */}
            {isLoading ? (
              <div>
                <div className="h-8 w-24 bg-white/40 rounded-md mt-3"></div>
                <div className="h-6 w-32 bg-white/40 rounded-md mt-2"></div>
              </div>
            ) : (
              <div>
                <p className="font-bold text-black text-3xl max-sm:text-2xl mt-3">
                  ₹{data?.price}
                </p>
                <p className="text-black font-semibold text-[16px] sm:text-[16px] md:text-[16px] lg:text-[20px] mt-3">
                  {data?.label}
                </p>
              </div>
            )}

            {/* Benefits */}
            <ul className="flex flex-col gap-2 mt-3">
              {benefits.map((benefit) => (
                <li key={benefit.id} className="flex items-center gap-2">
                  <FiCheckCircle className="text-[18px] text-black flex-shrink-0" />
                  <p className="text-[14px] lg:text-[15px] text-black leading-6">
                    {benefit.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
