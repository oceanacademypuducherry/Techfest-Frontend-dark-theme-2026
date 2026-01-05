import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyLottie } from '../../../utils'
import { Navigation } from '../../../common/ui'

const TicketCancel: React.FC = () => {
  const navigate = useNavigate()
  const Homepage = () => navigate('../')
  const moveToBookTicket = () => navigate('../ticket-booking')

  return (
    <>
      <Navigation />

      {/* 🌑 DARK THEME BACKGROUND */}
      <section className="min-h-screen bg-[#0A0C12] text-gray-200">
        <div className="flex items-center justify-center min-h-[530px] sm:min-h-[560px] pt-10 px-4 sm:px-6">

          {/* 🌑 DARK THEME CARD */}
          <div
            className="
              bg-[#111827] border border-[#1F2937] rounded-xl shadow-xl
              p-6 sm:p-8 md:p-12 text-center w-full
              max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
              transition-all
            "
          >

            {/* Lottie Animation */}
            <div className="flex justify-center mb-6">
              <MyLottie type="failure" />
            </div>

            {/* Cancel Message */}
            <h1 className="text-red-400 sm:text-xl text-lg font-semibold mt-4 font-prompt">
              Cancelled!! Try Again 🔃
            </h1>

            <p className="text-gray-400 mt-4 text-sm sm:text-base font-poppins leading-relaxed px-2">
              For further details please contact us
              <Link
                to="mailto:oatechfest@gmail.com"
                className="underline text-[#38BDF8] hover:text-[#0EA5E9] mx-1"
              >
                oatechfest@gmail.com
              </Link>
              or 📲
              <span className="text-[#38BDF8] ml-1 font-medium">
                6379944398
              </span>
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center space-x-4">

              {/* Back to Home */}
              <button
                className="
                  bg-[#1F2937] text-gray-300 font-semibold
                  py-2 px-4 md:py-3 md:px-5 rounded-lg
                  border border-[#374151] hover:bg-[#374151]
                  transition text-xs sm:text-sm md:text-base
                "
                onClick={Homepage}
              >
                Back to Home
              </button>

              {/* Book Tickets */}
              <button
                className="
                  bg-gradient-to-r from-[#38BDF8] to-[#EC4899]
                  text-white font-semibold py-2 px-4 md:py-3 md:px-5
                  rounded-lg hover:opacity-90 transition
                  text-xs sm:text-sm md:text-base
                "
                onClick={moveToBookTicket}
              >
                Book Tickets
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default TicketCancel
