import { FaCheck } from "react-icons/fa6";
import { Footer, Navbar, Navigation } from "../../../common/ui";
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import SkeletonCard from "../ui/SkeletonCard";
import Popup from "../../../common/ui/BackPopup";

import {
  EarlyBirdCardStudent,
  EarlyBirdWorkingProfCard,
  LateBirdCardStudent,
  LateBirdWorkingProfCard,
} from "../ui";

export default function TicketBooking() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [isStudentOpen, setIsStudentOpen] = useState(true);
  const [isWorkingProfOpen, setIsWorkingProfOpen] = useState(false);

  const toggleStudentDropdown = () => setIsStudentOpen(!isStudentOpen);
  const toggleWorkingProfDropdown = () =>
    setIsWorkingProfOpen(!isWorkingProfOpen);

  const moveToSummaryPage = () => {
    navigate("/ticket-summary");
  };

  const { data, isLoading } = useSelector(
    (state: RootState) => state.plans
  );

  const StudentPlanDetails = data?.studentPlans || [];
  const ProfessionalPlanDetails = data?.employeePlans || [];

  const activePlan = StudentPlanDetails.find(plan => plan.isActive);

  return (
    <>
      <div className="bg-[#0B0F1A] min-h-screen w-full text-gray-300">
        <Navigation />

        <main className="w-[95%] mx-auto max-w-[700px] mt-6">

          {/* ---------- HEADER ---------- */}
          <section className="flex justify-between items-center w-full">
            <div>
              <h2 className="mt-6 mb-4 text-[30px] sm:text-[36px] font-semibold text-white">
                Ticket{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
                  Booking
                </span>
              </h2>

              <p className="text-green-400 text-xl font-medium mt-2 max-sm:text-[17px]">
                {isLoading ? (
                  <span className="animate-pulse bg-white/10 w-32 h-6 inline-block rounded-md"></span>
                ) : activePlan ? (
                  `Now ${
                    activePlan.type.charAt(0).toUpperCase() +
                    activePlan.type.slice(1)
                  } birds is open`
                ) : (
                  "Ticket booking is closed"
                )}
              </p>
            </div>

            {/* Info Icon */}
            <div
              className="border border-white/10 shadow-md rounded-full p-2 
                         flex items-center justify-center bg-[#111827] cursor-pointer"
              onClick={() => setIsPopupOpen(true)}
            >
              <BsInfoCircle className="text-[24px] text-gray-400" />
            </div>
          </section>

          <Popup
            isVisible={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            onConfirm={() => setIsPopupOpen(false)}
            title="Information"
            message="✅ Early Bird tickets are open for booking.
🔒 Regular tickets are closed but will open soon.
⏳ Ticket type changes automatically based on time.
🚫 You can't pick Early or Regular manually."
          />

          {/* ---------- TICKET TYPES ---------- */}
          <article className="w-full flex flex-col gap-y-8 mx-auto mt-16 max-sm:mt-10">

            {/* STUDENT */}
            <div className="w-full">
              <div
                className="flex justify-between items-center cursor-pointer p-4
                           bg-[#111827] border border-white/10 rounded-md"
                onClick={toggleStudentDropdown}
              >
                <h3 className="text-lg text-white font-bold">Student</h3>
                <span
                  className={`text-gray-400 transform transition-transform ${
                    isStudentOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isStudentOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <section className="flex gap-x-4 mt-6">
                  {ProfessionalPlanDetails.length > 0 ? (
                    <>
                      <EarlyBirdCardStudent data={StudentPlanDetails} />
                      <LateBirdCardStudent data={StudentPlanDetails} />
                    </>
                  ) : (
                    <div className="flex gap-6">
                      <SkeletonCard />
                      <SkeletonCard />
                    </div>
                  )}
                </section>
              </div>
            </div>

            {/* WORKING PROFESSIONAL */}
            {/* <div className="w-full">
              <div
                className="flex justify-between items-center cursor-pointer p-4
                           bg-[#111827] border border-white/10 rounded-md"
                onClick={toggleWorkingProfDropdown}
              >
                <h3 className="text-lg text-white font-bold">
                  Working Professional
                </h3>
                <span
                  className={`text-gray-400 transform transition-transform ${
                    isWorkingProfOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isWorkingProfOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <section className="flex gap-x-4 mt-6">
                  {ProfessionalPlanDetails.length > 0 ? (
                    <>
                      <EarlyBirdWorkingProfCard data={ProfessionalPlanDetails} />
                      <LateBirdWorkingProfCard data={ProfessionalPlanDetails} />
                    </>
                  ) : (
                    <div className="flex gap-6">
                      <SkeletonCard />
                      <SkeletonCard />
                    </div>
                  )}
                </section>
              </div>
            </div> */}

            <div className="w-full">

  <div
    className="relative z-10 w-full cursor-pointer"
    onClick={toggleWorkingProfDropdown}
  >
    <div
      className="flex justify-between items-center p-4
                 bg-[#111827] border border-white/10 rounded-md"
    >
      <h3 className="text-lg text-white font-bold">
        Working Professional
      </h3>

      <span
        className={`text-gray-400 transform transition-transform duration-300 ${
          isWorkingProfOpen ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </div>
  </div>

  {/* DROPDOWN CONTENT */}
  <div
    className={`transition-all duration-700 overflow-hidden ${
      isWorkingProfOpen
        ? "max-h-[500px] opacity-100 pointer-events-auto"
        : "max-h-0 opacity-0 pointer-events-none"
    }`}
  >
    <section className="flex gap-x-4 mt-6">
      {ProfessionalPlanDetails.length > 0 ? (
        <>
          <EarlyBirdWorkingProfCard data={ProfessionalPlanDetails} />
          <LateBirdWorkingProfCard data={ProfessionalPlanDetails} />
        </>
      ) : (
        <div className="flex gap-6">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
    </section>
  </div>
</div>

          </article>

          {/* ---------- INFO ---------- */}
          <div className="mt-12">
            <li className="flex gap-2 text-red-400">
              <BsInfoCircle className="text-[24px]" />
              <span className="text-[18px] font-semibold">
                {isLoading ? (
                  <span className="animate-pulse bg-white/10 w-48 h-6 inline-block rounded-md"></span>
                ) : activePlan?.type ? (
                  `${activePlan.type.charAt(0).toUpperCase() +
                    activePlan.type.slice(1)} tickets are limited!`
                ) : (
                  "No tickets are available"
                )}
              </span>
            </li>

            <ul className="flex flex-col gap-3 mt-9">
              <li className="flex gap-2 text-green-400">
                <FaCheck className="text-[24px]" />
                <span className="text-[18px] font-semibold">
                  Participation E-Certificate Showcase Your Achievement.
                </span>
              </li>

              <li className="flex gap-2 text-green-400">
                <FaCheck className="text-[24px]" />
                <span className="text-[18px] font-semibold">
                  Get 10% off when purchasing 10 or more tickets!
                </span>
              </li>
            </ul>
          </div>

          {/* ---------- CONTINUE BUTTON ---------- */}
          <div className="sticky bottom-12 md:bottom-0 py-6 flex justify-center">
            <button
              className={`bg-[#FFA908] text-black p-4 w-[500px] rounded-lg font-semibold
              ${
                data.length === 0
                  ? "cursor-not-allowed bg-gray-600 text-white"
                  : "hover:scale-105 transition"
              }`}
              onClick={moveToSummaryPage}
              disabled={data.length === 0}
            >
              Continue
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
