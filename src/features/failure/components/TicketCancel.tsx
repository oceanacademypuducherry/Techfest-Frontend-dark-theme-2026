import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyLottie } from '../../../utils'
import { Navbar } from '../../../common/ui'

const TicketCancel: React.FC = () => {
  const navigate = useNavigate()
  const Homepage = () => navigate('../')
  const moveToBookTicket = () => navigate('../ticket-booking')

  return (
    <>
      <Navbar />

      {/* 🌕 LIGHT THEME BACKGROUND */}
      <section className="min-h-screen bg-[#F8FAFC] text-gray-900">
        <div className="flex items-center justify-center min-h-[530px] sm:min-h-[560px] pt-10 px-4 sm:px-6">

          {/* 🌕 LIGHT THEME CARD */}
          <div
            className="bg-white border border-gray-200 rounded-xl shadow-lg
                       p-6 sm:p-8 md:p-12 text-center w-full
                       max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                       transition-all"
          >

            {/* Lottie Animation */}
            <div className="flex justify-center mb-6">
              <MyLottie type="failure" />
            </div>

            {/* Cancel Message */}
            <h1 className="text-red-600 sm:text-xl text-lg font-semibold mt-4 font-prompt">
              Cancelled!! Try Again 🔃
            </h1>

            <p className="text-gray-600 mt-4 text-sm sm:text-base font-poppins leading-relaxed px-2">
              For further details please contact us
              <Link
                to="mailto:oatechfest@gmail.com"
                className="underline text-[#01C1FB] hover:text-[#019AC7] mx-1"
              >
                oatechfest@gmail.com
              </Link>
              or 📲
              <span className="text-[#01C1FB] ml-1 font-medium">
                6379944398
              </span>
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center space-x-4">
              <button
                className="bg-gray-100 text-gray-800 font-semibold
                           py-2 px-4 md:py-3 md:px-5 rounded-lg
                           border border-gray-300 hover:bg-gray-200
                           transition text-xs sm:text-sm md:text-base"
                onClick={Homepage}
              >
                Back to Home
              </button>

              <button
                className="bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
                           text-white font-semibold py-2 px-4 md:py-3 md:px-5
                           rounded-lg hover:opacity-90 transition
                           text-xs sm:text-sm md:text-base"
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
