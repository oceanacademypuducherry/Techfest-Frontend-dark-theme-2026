import { useNavigate } from "react-router-dom";
import { Countdown } from "../utils/index";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import techfestImg from "../../../assets/images/hero/techfest.png";
import heroVideo from "../../../assets/images/hero/techfestvideo.mp4";

export default function HomeMain() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="relative w-full sm:min-h-[90svh] min-h-[80svh]
        text-white py-10 sm:py-16 px-2  sm:px-4 overflow-hidden"
      >

        {/* 🎥 BACKGROUND VIDEO */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video> */}

        <video
  poster={techfestImg}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover z-0
             contrast-110 brightness-105 saturate-110"
>
  <source src={heroVideo} type="video/mp4" />
</video>

<div className="absolute inset-0 bg-black/35 z-10"></div>

<div className="absolute inset-0 pointer-events-none z-[5]">
  {/* Glow effects */}
</div>


        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* 🔥 Soft Glow Background */}
        <div className="absolute inset-0 pointer-events-none z-10">

          {/* Blue Glow */}
          <div
            className="
              absolute 
              top-[0px] left-[10px] 
              w-[150px] h-[150px] 
              bg-[#00C2FF]/25
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
              bg-[#EE4C9C]/25
              rounded-full blur-[60px] 
              animate-pulse-slower

              sm:bottom-[150px] sm:right-[130px]
              sm:w-[250px] sm:h-[250px]
              sm:blur-[120px]
            "
          ></div>
        </div>

        {/* 🌟 CENTER CONTENT */}
        <div className="relative z-20 mt-0 max-w-4xl mx-auto text-center">

          {/* Logo */}
          <div className="flex justify-center items-center w-full">
            <img
              src={techfestImg}
              alt="The Future of Innovation Starts Here"
              className="h-[222px] sm:h-[460px] object-contain"
            />
          </div>

          {/* Subtitle */}
          <p
            className="mt-4 text-white text-[16px] sm:text-[18px]
            max-w-[690px] mx-auto"
          >
            Unlock the future of technology at TechFest 2026. Connect with innovators, explore emerging ideas, and be part of a celebration of innovation and learning.
          </p>

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
          <div
            className="flex justify-center items-center gap-6
            sm:mt-10 mt-10 text-white/70 text-[15px]"
          >
            <div className="flex items-center text-white gap-2">
              <FaCalendarAlt className="text-white text-[18px]" />
              March 15, 2026
            </div>

            <div className="flex items-center text-white gap-2">
              <FaLocationDot className="text-white text-[20px]" />
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
