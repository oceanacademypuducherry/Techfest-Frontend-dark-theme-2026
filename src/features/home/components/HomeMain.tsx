import { useNavigate } from "react-router-dom";
import { Countdown } from "../utils/index";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function HomeMain() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full bg-white sm:min-h-[90svh] min-h-[80svh] 
        text-gray-900 py-10 sm:py-20 px-2 sm:px-4 overflow-hidden">

        {/* 🔥 Soft Glow Background */}
        <div className="absolute inset-0 pointer-events-none">

          {/* Blue Glow */}
          <div
            className="
              absolute 
              top-[0px] left-[10px] 
              w-[150px] h-[150px] 
              bg-[#00C2FF]/20 
              rounded-full blur-[60px] 
              animate-pulse-slow

              sm:top-[100px] sm:left-[100px] 
              sm:w-[250px] sm:h-[250px] 
              sm:blur-[120px]
            "
          ></div>

          {/* Pink Glow */}
          <div
            className="
              absolute 
              bottom-[30px] right-[10px] 
              w-[150px] h-[150px] 
              bg-[#EE4C9C]/20 
              rounded-full blur-[60px] 
              animate-pulse-slower

              sm:bottom-[150px] sm:right-[130px]
              sm:w-[250px] sm:h-[250px]
              sm:blur-[120px]
            "
          ></div>
        </div>

        {/* Center Content */}
        <div className="relative sm:mt-9 mt-0 max-w-4xl mx-auto text-center">

          {/* Tagline */}
          <div className="inline-block bg-[#EAF8FF] text-[#01C1FB] 
            text-[14px] sm:text-[16px] px-6 py-4 rounded-full 
            border border-[#01C1FB]/30 shadow-sm">
            The Future of Innovation Starts Here
          </div>

          {/* Title */}
          <h1 className="sm:mt-10 mt-10 text-[30px] sm:text-[50px] md:text-[60px] 
            font-bold leading-tight text-gray-900">
            FutureTech Summit <br />
            <span className="text-transparent bg-clip-text 
              bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              2026
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-gray-600 text-[16px] sm:text-[18px] 
            max-w-[690px] mx-auto">
            Unlock the future of technology at our exclusive tech event! 
            Connect with innovators, explore game-changing ideas, and 
            secure your spot today
          </p>

          {/* Button */}
          {/* Buttons */}
<div className="flex justify-center sm:mt-10 mt-10 gap-4 flex-wrap">
  
  {/* Book Tickets */}
  <button
    onClick={() => navigate("/ticket-booking")}
    className="px-7 py-3 text-[16px] font-semibold rounded-lg 
    bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C] 
    shadow-lg hover:scale-105 transition-all duration-300 
    flex items-center justify-center"
  >
    Book Your Tickets
    <span className="ml-2 text-2xl font-bold">→</span>
  </button>

  {/* View Agenda */}
  {/* View Agenda - Gradient Border */}
<button
  onClick={() => navigate("/agenda")}
  className="
    relative rounded-lg px-7 py-3
    text-white font-semibold text-[16px]
    hover:scale-105 transition-all duration-300
    before:absolute before:inset-0
    before:rounded-lg before:p-[1.7px]
    before:bg-gradient-to-r before:from-[#01C1FB] before:to-[#EE4C9C]
    before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
    before:[-webkit-mask-composite:xor]
    before:[mask-composite:exclude]
  "
>
  View Agenda
</button>








</div>



          {/* Date & Location */}
          <div className="flex justify-center items-center gap-6 
            sm:mt-10 mt-10 text-gray-600 text-[15px]">

            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#01C1FB] text-[18px]" />
              March 2, 2026
            </div>

            <div className="flex items-center gap-2">
              <FaLocationDot className="text-[#EE4C9C] text-[20px]" />
              PTU, Puducherry
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-12">
            <Countdown />
          </div>

        </div>
      </div>
    </>
  );
}
