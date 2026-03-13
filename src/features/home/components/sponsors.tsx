import { MouseEvent } from "react";
import {

  

  NAMMAFLUTTER,
  FOUNDERX,
  Namma,
  Lecture,
  SFM,
  BOIKO,
  FIA,
  BobMaassy,
  PSP,
  Sequestera,
  SMVEC,
  Unstop,
  Chatur,
  Bala,
  jpinfotech,
  CloudBees,
  DataClad,
  Thiru,
  Juno,
  Abinesh,
  Yashika,
  DNA,
  
  
  
} from "../../../assets/images";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom"; 

export default function SponsorsSection() {
  const navigate = useNavigate(); 
  const partnerLogos = [
  { src: SMVEC, alt: "SMVEC" },
    { src: Unstop, alt: "Unstop"},
     { src: FOUNDERX, alt: "FounderX" },
    { src: BOIKO, alt: "BOIKO" },
   { src: NAMMAFLUTTER, alt: "Namma Flutter" },
    { src: Namma, alt: "Namma" },
     { src: FIA, alt: "FIA" },
     { src: DNA, alt: "DNA" },
    { src: Lecture, alt: "Lecture" },
    { src: Sequestera, alt: "Sequestera"},
    { src: SFM, alt: "SFM" },
    { src: BobMaassy, alt: "Bob Maassy"},
    { src: PSP, alt: "PSP" },
    
];

const sponsorLogos = [
    { src: Chatur, alt: "Chatur"},
    { src: Bala, alt: "Bala"},
     { src: DataClad, alt: "DataClad"},
   
    { src: CloudBees, alt: "CloudBees"},
   
    { src: Thiru, alt: "Thiru"},
     { src: jpinfotech, alt: "jpinfotech" },
    { src: Juno, alt: "Juno"},
    { src: Abinesh, alt: "Abinesh"},
    { src: Yashika, alt: "Yashika"},
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


       {/* ================= OUR SPONSORS ================= */}

<div className="relative max-w-7xl mx-auto mt-10 rounded-2xl p-[2px]">
  <div className="px-4 py-0 overflow-hidden">

    {/* Label */}
    <div
      className="absolute -top-7 left-1/2 -translate-x-1/2
      text-[#01C1FB] sm:px-7 sm:py-3 rounded-full font-semibold
      text-[18px] sm:text-[24px]"
    >
      Our Sponsors
    </div>

    {/* ---------- DESKTOP & TABLET VIEW ---------- */}

   <div className="hidden sm:block max-w-5xl mx-auto mt-0 sm:mt-4">

  {/* Row 1 */}
  <div className="grid grid-cols-6 gap-x-6">
    {sponsorLogos.slice(0,6).map((item, index) => (
      <div key={item.alt} className="flex items-center justify-center">
        <img
          src={item.src}
          alt={item.alt}
          className={`
            object-contain
            ${
              index === 0
                ? "h-36"
                : index === 1
                ? "h-28"
                : index === 2
                ? "h-[130px]"
                : index === 3
                ? "h-32"
                : index === 4
                ? "h-[110px]"
                : index === 5
                ? "h-24"
                : "h-16"
            }
            ${[2,3].includes(index) ? "" : "white-logo"}
          `}
        />
      </div>
    ))}
  </div>

  {/* Row 2 */}
  <div className="flex justify-center gap-x-6 mt-0">
    {sponsorLogos.slice(6,9).map((item, index) => {
      const actualIndex = index + 6;

      return (
        <div key={item.alt} className="flex items-center justify-center">
          <img
            src={item.src}
            alt={item.alt}
            className={`
              object-contain
              ${
                actualIndex === 6
                  ? "h-[120px]"
                  : actualIndex === 7
                  ? "h-[120px]"
                  : actualIndex === 8
                  ? "h-[120px]"
                  : "h-16"
              }
              ${[3,4,6].includes(actualIndex) ? "" : "white-logo"}
            `}
          />
        </div>
      );
    })}
  </div>

</div>

    {/* ---------- MOBILE VIEW (Marquee) ---------- */}

    <div className="sm:hidden mt-4">
      <Marquee pauseOnHover speed={25} gradient={false}>
        <div className="flex items-center gap-6 px-4">

          {sponsorLogos.map((item, index) => (
            <div key={item.alt} className="flex items-center justify-center">

              <img
                src={item.src}
                alt={item.alt}
                className={`
                  object-contain
                  ${
                    index === 0
                      ? "h-28"
                      : index === 1
                      ? "h-24"
                      : index === 2
                      ? "h-28"
                      : index === 3
                      ? "h-32"
                      : index === 4
                      ? "h-24"
                      : index === 5
                      ? "h-24"
                      : index === 6
                      ? "h-24"
                      : index === 7
                      ? "h-24"
                      : index === 8
                      ? "h-24"
                      : "h-12"
                  }
                   ${[3,2,6].includes(index) ? "" : "white-logo"}
                `}
              />

            </div>
          ))}

        </div>
      </Marquee>
    </div>

  </div>
</div>

      {/* ================= EVENT SPONSORS ================= */}
      <div className="relative max-w-7xl mx-auto mt-6 sm:mt-10 rounded-2xl p-[2px]">
        <div className=" px-4 py-0 sm:py-0 overflow-hidden">


          {/* Label */}
          <div
            className="absolute -top-7 left-1/2 -translate-x-1/2
            text-[#01C1FB] sm:px-7 sm:py-3 rounded-full font-semibold
            text-[18px] sm:text-[24px]"
          >
            Our Partners
          </div>

          {/* ---------- DESKTOP & TABLET VIEW ---------- */}
<div className="hidden sm:block max-w-5xl mx-auto mt-6">

  {/* Row 1 */}
  <div className="grid grid-cols-6 gap-x-6">
    {partnerLogos.slice(0,6).map((item, index) => (
      <div key={item.alt} className="flex items-center justify-center">
        <img
          src={item.src}
          alt={item.alt}
          className={`
            object-contain
            ${
              index === 0
                ? "h-38"
                : index === 1
                ? "h-28"
                : index === 2
                ? "h-[45px]"
                : index === 3
                ? "h-[40px]"
                : index === 5
                ? "h-[90px]"
                : "h-8 sm:h-12 md:h-12 lg:h-16"
            }
            ${[0,4].includes(index) ? "" : "white-logo"}
          `}
        />
      </div>
    ))}
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-6 gap-x-6 mt-0">
    {partnerLogos.slice(6,12).map((item, index) => {
      const actualIndex = index + 6;

      return (
        <div key={item.alt} className="flex items-center justify-center">
          <img
            src={item.src}
            alt={item.alt}
            className={`
              object-contain
              ${
                actualIndex === 7
                  ? "h-32"
                  : actualIndex === 8
                  ? "h-36"
                  : actualIndex === 9
                  ? "h-30"
                  : actualIndex === 11
                  ? "h-28"
                  : "h-8 sm:h-12 md:h-12 lg:h-16"
              }
              ${[11].includes(actualIndex) ? "" : "white-logo"}
            `}
          />
        </div>
      );
    })}
  </div>

  {/* Row 3 */}
  <div className="flex justify-center mt-0">
    {partnerLogos.slice(12,13).map((item, index) => {
      const actualIndex = index + 12;

      return (
        <div key={item.alt} className="flex items-center justify-center">
          <img
            src={item.src}
            alt={item.alt}
            className={`
              object-contain
              ${
                actualIndex === 12
                  ? "h-28"
                  : "h-8 sm:h-12 md:h-12 lg:h-16"
              }
              ${[12].includes(actualIndex) ? "" : "white-logo"}
            `}
          />
        </div>
      );
    })}
  </div>

</div>
          {/* ---------- MOBILE VIEW (Marquee) ---------- */}
          <div className="sm:hidden mt-0">
            <Marquee pauseOnHover speed={25} gradient={false}>
              <div className="flex items-center gap-6 px-4">
                {partnerLogos.map((item, index) => (
  <div key={item.alt} className="flex items-center justify-center">
    <img
  src={item.src}
  alt={item.alt}
  className={`
    object-contain
    ${
      index === 0
        ? "h-36"
      :index === 1
        ? "h-[4.25rem]"
        : index === 2
        ? "h-22"
        : index === 3
        ? "h-10"
        : index === 5
        ? "h-20"
         : index === 6
        ? "h-[40px]"
        : index === 7
        ? "h-24"
        : index === 8
        ? "h-28"
        : index === 9
        ? "h-24"
        : index === 10
        ? "h-[20px]"
        : index === 11
        ? "h-16"
        : index === 12
        ? "h-16"
        : "h-7"
    }
    ${[0,4,11,12].includes(index) ? "" : "white-logo"}
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
<div className="flex justify-center gap-4 mt-0 sm:mt-6 flex-wrap">
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
