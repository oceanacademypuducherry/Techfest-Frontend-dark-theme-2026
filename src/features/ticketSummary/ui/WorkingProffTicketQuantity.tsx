import { FiCheckCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { decrement, increment, resetCount } from "../services";
import { useEffect } from "react";
import { benefits } from "../utils/BenifitsList";

interface WorkingProffTicketProps {
  data?: {
    label: string;
    price: number;
    priceType: string;
    type: string;
  };
}

export default function WorkingProffTicket({ data }: WorkingProffTicketProps) {
  const count = useSelector(
    (state: RootState) => state.ticketReducer.workingProfTicketCount
  );
  const studentTicketCount = useSelector(
    (state: RootState) => state.ticketReducer.studentTicketCount
  );

  const totalTicketCount = count + studentTicketCount;
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.plans);

  useEffect(() => {
    dispatch(resetCount("workingProf"));
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem("workingProfTicketCount", count.toString());
  }, [count]);

  return (
    <main>
      {/* OUTER BORDER GRADIENT */}
      <div
        className="rounded-md p-[1.4px]
        bg-gradient-to-r from-[#F04C98] via-[#F36FAE] to-[#F78BC4]"
      >
        {/* CARD BACKGROUND */}
        <section
          className="
          w-full bg-gradient-to-br from-[#F35FA3] via-[#F77BB8] to-[#F9A3CF]
          rounded-md p-[20px] px-[40px] shadow-lg max-sm:p-[25px] mx-auto
        "
        >
          <>
            <div className="flex justify-between items-center">
              {/* Skeleton Loader for Button */}
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
                {/* Decrement */}
                <button
                  onClick={() => dispatch(decrement("workingProf"))}
                  disabled={count === 0}
                  className={`bg-white text-black font-bold w-6 h-6 rounded-full flex justify-center items-center ${
                    count === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  -
                </button>

                {/* Counter */}
                <input
                  type="text"
                  value={count.toString().padStart(2, "0")}
                  readOnly
                  className="w-16 h-8 text-center border border-white/60 
                             text-lg font-bold rounded-md 
                             bg-transparent text-white"
                />

                {/* Increment */}
                <button
                  onClick={() => dispatch(increment("workingProf"))}
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
              <>
                <div className="h-8 w-24 bg-white/40 rounded-md mt-3"></div>
                <div className="h-6 w-32 bg-white/40 rounded-md mt-2"></div>
              </>
            ) : (
              <>
                <p className="font-bold text-3xl text-black max-sm:text-2xl mt-3">
                  ₹{data?.price}
                </p>
                <p className="text-black font-semibold text-[16px] sm:text-[16px] md:text-[16px] lg:text-[20px] mt-3">
                  {data?.label}
                </p>
              </>
            )}

            {/* Benefits */}
            <ul className="flex flex-col gap-2 mt-3">
              {benefits.map((benefit) => (
                <li key={benefit.id} className="flex items-center gap-2">
                  <FiCheckCircle className="text-[18px] text-black flex-shrink-0" />
                  <p className="text-[14px] text-black lg:text-[15px] leading-6">
                    {benefit.text}
                  </p>
                </li>
              ))}
            </ul>
          </>
        </section>
      </div>
    </main>
  );
}
