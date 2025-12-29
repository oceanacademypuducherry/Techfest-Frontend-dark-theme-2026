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
      <div className="bg-gray-50 min-h-screen w-full">
        <Navigation />

        <main className="w-[95%] mx-auto max-w-[700px] mt-6">
          {/* Header Section */}
          <section className="flex justify-between items-center w-full">
            <div>
              <h2 className="mt-6 mb-4 text-[30px] sm:text-[36px] font-semibold text-gray-900">
                Ticket{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
                  Booking
                </span>
              </h2>

              <p className="text-green-600 text-xl font-medium mt-2 max-sm:text-[17px]">
                {isLoading ? (
                  <span className="animate-pulse bg-gray-300 w-32 h-6 inline-block rounded-md"></span>
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
              className="border border-gray-300 shadow-md rounded-full p-2 flex items-center justify-center bg-white cursor-pointer"
              onClick={() => setIsPopupOpen(true)}
            >
              <BsInfoCircle className="text-[24px] text-gray-600" />
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

          {/* Ticket Types */}
          <article className="w-full flex flex-col gap-y-8 mx-auto justify-center items-center mt-16 max-sm:mt-10 max-[800px]:gap-y-6">
            {/* Student Section */}
            <div className="w-full">
              <div
                className="flex justify-between items-center cursor-pointer p-4 bg-white border border-gray-200 rounded-md shadow-sm"
                onClick={toggleStudentDropdown}
              >
                <h3 className="text-lg text-gray-900 font-bold">Student</h3>
                <span
                  className={`text-gray-600 transform transition-transform ${
                    isStudentOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              <div
                className={`w-full transition-all duration-700 ${
                  isStudentOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <section className="w-full flex justify-start gap-y-6 gap-x-4 max-w-[1400px] mx-auto mt-6">
                  {ProfessionalPlanDetails.length > 0 ? (
                    <>
                      <EarlyBirdCardStudent data={StudentPlanDetails} />
                      <LateBirdCardStudent data={StudentPlanDetails} />
                    </>
                  ) : (
                    <div className="w-full flex gap-1 sm:gap-14">
                      <SkeletonCard />
                      <SkeletonCard />
                    </div>
                  )}
                </section>
              </div>
            </div>

            {/* Working Professional Section */}
            <div className="w-full">
              <div
                className="flex justify-between items-center cursor-pointer p-4 bg-white border border-gray-200 rounded-md shadow-sm"
                onClick={toggleWorkingProfDropdown}
              >
                <h3 className="text-lg text-gray-900 font-bold">
                  Working Professional
                </h3>
                <span
                  className={`text-gray-600 transform transition-transform ${
                    isWorkingProfOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              <div
                className={`w-full transition-all duration-700 ${
                  isWorkingProfOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <section className="w-full flex justify-start gap-y-6 gap-x-4 max-w-[1400px] mx-auto mt-6">
                  {ProfessionalPlanDetails.length > 0 ? (
                    <>
                      <EarlyBirdWorkingProfCard
                        data={ProfessionalPlanDetails}
                      />
                      <LateBirdWorkingProfCard
                        data={ProfessionalPlanDetails}
                      />
                    </>
                  ) : (
                    <div className="w-full flex gap-1 sm:gap-14">
                      <SkeletonCard />
                      <SkeletonCard />
                    </div>
                  )}
                </section>
              </div>
            </div>
          </article>

          {/* Information Section */}
          <div className="mt-12 p-1">
            <li className="flex gap-2 text-red-600">
              <BsInfoCircle className="text-[24px]" />
              <span className="text-[18px] font-semibold max-sm:text-[15px]">
                {isLoading ? (
                  <span className="animate-pulse bg-gray-300 w-48 h-6 inline-block rounded-md"></span>
                ) : activePlan?.type ? (
                  `${activePlan.type.charAt(0).toUpperCase() +
                    activePlan.type.slice(1)} tickets are limited!`
                ) : (
                  "No tickets are available"
                )}
              </span>
            </li>

            <ul className="flex flex-col gap-2 mt-9">
              <li className="flex gap-2">
                <FaCheck className="text-green-600 text-[24px]" />
                <span className="text-[18px] text-green-600 font-semibold max-sm:text-[15px]">
                  Participation E-Certificate Showcase Your Achievement.
                </span>
              </li>

              <li className="flex gap-2">
                <FaCheck className="text-green-600 text-[24px]" />
                <span className="text-[18px] text-green-600 font-semibold max-sm:text-[15px]">
                  Get 10% off when purchasing 10 or more tickets!
                </span>
              </li>
            </ul>
          </div>

          {/* Continue Button */}
          <div className="sticky bottom-12 md:bottom-0 py-6 flex justify-center px-4 max-sm:mt-8">
            <button
              className={`bg-[#FFA908] shadow-md text-black p-4 w-[500px] max-w-full font-semibold rounded-lg ${
                data.length === 0
                  ? "cursor-not-allowed bg-gray-400 text-white"
                  : ""
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
