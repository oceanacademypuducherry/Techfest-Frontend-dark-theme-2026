import { MouseEvent } from "react";
import {

  

  NAMMAFLUTTER,
  FOUNDERX,
  Namma,
  Lecture,
  SFM,
  BOIKO,
  FIA,
  
  
  
} from "../../../assets/images";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom"; 

export default function SponsorsSection() {
  const navigate = useNavigate(); 
  const partnerLogos = [
    { src: NAMMAFLUTTER, alt: "Namma Flutter" },
    { src: FOUNDERX, alt: "FounderX" },
    { src: Namma, alt: "Namma" },
    { src: Lecture, alt: "Lecture" },
    { src: SFM, alt: "SFM" },
    { src: BOIKO, alt: "BOIKO" }, 
    { src: FIA, alt: "FIA" },
  
  ];

 

  return (
    <section className="bg-[#0A0C12] text-white">

      {/* Top Badge */}
      <div className="flex justify-center">
        <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 mb-6">
  <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-l from-[#01C1FB] to-transparent"></span>

  <span className="text-[#01C1FB] sm:text-[18px] text-[17px] tracking-[0.0em] sm:tracking-[0.1em]">
    Our Sponsors
  </span>

  <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-r from-[#01C1FB] to-transparent"></span>
</div>
      </div>

      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-4xl md:text-5xl font-semibold  mt-0 sm:mt-6">
        Powered by  <span className="text-[#01C1FB]">Industry</span>
        <br />
        <span className="bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C] bg-clip-text text-transparent">
          Sponsors
        </span>
      </h2>

      {/* Description */}
      <p className="text-center text-white/70 text-[16px] sm:text-[18px] max-w-2xl mx-auto mt-4 px-4">
        Empowering events with top-tier partners from around the world.
      </p>

      {/* ================= EVENT SPONSORS ================= */}
      <div className="relative max-w-7xl mx-auto mt-10 sm:mt-14 rounded-2xl p-[2px]">
        <div className=" px-4 py-3 sm:py-0 overflow-hidden">

          {/* Label */}
          <div
            className="absolute -top-7 left-1/2 -translate-x-1/2
            text-[#01C1FB] sm:px-7 py-3 rounded-full font-semibold
            text-[18px] sm:text-[24px]"
          >
            Our Partners
          </div>

          {/* ---------- DESKTOP & TABLET VIEW ---------- */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 
                gap-8 justify-center place-items-center 
                mt-6 max-w-5xl mx-auto">
  {partnerLogos.map((item, index) => (
    <div key={item.alt} className="flex items-center justify-center">
      <img
  src={item.src}
  alt={item.alt}
  className={`
    object-contain
    ${
      index === 2
        ? "h-24"   // 3rd image
        : index === 3
        ? "h-52"   // 4th image
        : "h-8 sm:h-12 md:h-12 lg:h-16"    // Other images
    }
    ${index !== 0 ? "white-logo" : ""}
  `}
/>
    </div>
  ))}
</div>
          {/* ---------- MOBILE VIEW (Marquee) ---------- */}
          <div className="sm:hidden mt-6">
            <Marquee pauseOnHover speed={25} gradient={false}>
              <div className="flex items-center gap-8 px-4">
                {partnerLogos.map((item, index) => (
  <div key={item.alt} className="flex items-center justify-center">
    <img
  src={item.src}
  alt={item.alt}
  className={`
    object-contain
    ${
      index === 2
        ? "h-[4.25rem]"      // 3rd image mobile
        : index === 3
        ? "h-28"     // 4th image mobile
        : "h-7"      // Other images
    }
    ${index !== 0 ? "white-logo" : ""}
  `}
/>
  </div>
))}

              </div>
            </Marquee>
          </div>

        </div>
      </div>

 

{/* Buttons Row */}
<div className="flex justify-center gap-4 mt-5 sm:mt-10 flex-wrap">
  {/* Book Your Tickets Button */}
   <Link
  to="/ticket-booking"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="px-6 py-3 rounded-lg text-white font-semibold
    bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
    hover:scale-105 transition-all"
>
  Book Your Tickets
</Link>
   {/* <button
  disabled
  className="
    px-7 py-3 text-[16px] text-white font-semibold rounded-lg
    bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
    cursor-not-allowed
    shadow-lg
    flex items-center justify-center
  "
>
  Tickets Opening Soon
</button> */}
  {/* View Sponsors Button */}
  <button
          onClick={() => {
            navigate("/sponsors");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="
           
            px-7 py-3 rounded-lg
           relative 
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
          View Sponsors
         
        </button>

  
</div>



    </section>
    
  );
}
