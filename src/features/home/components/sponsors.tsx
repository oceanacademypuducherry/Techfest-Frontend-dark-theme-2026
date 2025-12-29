import {
  SFM,
  AIC,
  BOIKO,
  DUSKCODER,
  FIA,
  FOUNDERX,
  NAMMAFLUTTER,
  JPINFOTECH,
  SNIPPET,
  HIRENOW,
  divyam,
} from "../../../assets/images";
import Marquee from "react-fast-marquee";

export default function SponsorsSection() {
  const partnerLogos = [
    { src: NAMMAFLUTTER, alt: "Namma Flutter" },
    { src: FOUNDERX, alt: "FounderX" },
    { src: SNIPPET, alt: "Snippet" },
    { src: AIC, alt: "AIC" },
    { src: SFM, alt: "SFM" },
    { src: BOIKO, alt: "BOIKO" },
    { src: FIA, alt: "FIA" },
    { src: divyam, alt: "Divyam" },
  ];

  return (
    <section className=" bg-white text-gray-800">
      
      {/* Top Badge */}
      <div className="flex justify-center">
        <span className="bg-[#EAF8FF] border border-[#01C1FB] px-6 py-3 rounded-full text-[#01C1FB] font-medium">
          Our Sponsors
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mt-6">
        Our Sponsors <span className="text-[#01C1FB]">Industry</span>
        <br />
        <span className="bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C] bg-clip-text text-transparent">
          Leaders
        </span>
      </h2>

      {/* Description */}
      <p className="text-center text-gray-600 text-[16px] sm:text-[18px] max-w-2xl mx-auto mt-4 px-4">
        Partnering with innovative companies to deliver an exceptional experience.
      </p>

      {/* ================= EVENT SPONSORS ================= */}
      <div className="relative max-w-7xl mx-auto mt-14 rounded-2xl p-[2px]">
  <div className="rounded-2xl bg-white px-4 py-3 sm:py-10 overflow-hidden">

    {/* Label */}
    <div
      className="absolute -top-7 left-1/2 -translate-x-1/2
       text-black sm:px-7 py-3 rounded-full font-semibold
       text-[18px] sm:text-[24px]"
    >
      Event Sponsors
    </div>

    {/* ---------- DESKTOP & TABLET VIEW (Responsive 2 Rows) ---------- */}
    <div className="hidden sm:grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8  gap-8 justify-items-center mt-6">
      {partnerLogos.map((item) => (
        <div key={item.alt} className="flex items-center justify-center">
          <img
            src={item.src}
            alt={item.alt}
            className="h-8 sm:h-12 md:h-12 lg:h-12 object-contain"
          />
        </div>
      ))}
    </div>

    {/* ---------- MOBILE VIEW (Marquee) ---------- */}
    <div className="sm:hidden mt-6">
      <Marquee pauseOnHover speed={25} gradient={false}>
        <div className="flex items-center gap-8 px-4">
          {partnerLogos.map((item) => (
            <div key={item.alt} className="flex items-center justify-center">
              <img
                src={item.src}
                alt={item.alt}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>

  </div>
</div>



 
  
{/* ================= ASSOCIATE SPONSORS ================= */}
<div className="relative max-w-5xl mx-auto mt-10 rounded-2xl p-[2px]">

  <div className="rounded-2xl bg-white px-4  py-3 sm:py-10 overflow-hidden">

    {/* Title */}
    <div
      className="absolute -top-7 left-1/2 -translate-x-1/2
      text-black sm:px-7 py-3 rounded-full font-semibold
      text-[18px] sm:text-[24px]"
    >
      Associate Sponsors
    </div>

    {/* ---------- DESKTOP VIEW ---------- */}
    <div className="hidden sm:flex justify-center items-center gap-12 mt-2">
      {[
        { src: JPINFOTECH, height: 'h-24 sm:h-24' },
        { src: DUSKCODER, height: 'h-12 sm:h-9' },
        { src: HIRENOW, height: 'h-14 sm:h-18' },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center"
        >
          <img
            src={item.src}
            alt="Associate Sponsor"
            className={`${item.height} object-contain`}
          />
        </div>
      ))}
    </div>

    {/* ---------- MOBILE VIEW (Marquee) ---------- */}
    <div className="sm:hidden mt-6">
      <Marquee pauseOnHover speed={25} gradient={false}>
        <div className="flex items-center gap-10 px-4">
          {[
            { src: JPINFOTECH, height: 'h-20' },
            { src: DUSKCODER, height: 'h-8' },
            { src: HIRENOW, height: 'h-12' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={item.src}
                alt="Associate Sponsor"
                className={`${item.height} object-contain`}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>

  </div>
</div>







    </section>
  );
}
