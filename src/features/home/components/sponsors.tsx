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
    <section className="bg-[#0A0C12] text-white">

      {/* Top Badge */}
      <div className="flex justify-center">
        <span className="bg-white/5 border border-[#01C1FB]/40 px-6 py-3 rounded-full text-[#01C1FB] font-medium backdrop-blur">
          Our Sponsors
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-4xl md:text-5xl font-semibold mt-6">
        Powered by  <span className="text-[#01C1FB]">Industry</span>
        <br />
        <span className="bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C] bg-clip-text text-transparent">
          Partners
        </span>
      </h2>

      {/* Description */}
      <p className="text-center text-white/70 text-[16px] sm:text-[18px] max-w-2xl mx-auto mt-4 px-4">
        Empowering events with top-tier partners from around the world.
      </p>

      {/* ================= EVENT SPONSORS ================= */}
      <div className="relative max-w-7xl mx-auto mt-10 sm:mt-14 rounded-2xl p-[2px]">
        <div className=" px-4 py-3 sm:py-10 overflow-hidden">

          {/* Label */}
          <div
            className="absolute -top-7 left-1/2 -translate-x-1/2
            text-[#01C1FB] sm:px-7 py-3 rounded-full font-semibold
            text-[18px] sm:text-[24px]"
          >
            Event Partners
          </div>

          {/* ---------- DESKTOP & TABLET VIEW ---------- */}
          <div className="hidden sm:grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-8 justify-items-center mt-6">
            {partnerLogos.map((item, index) => (
  <div key={item.alt} className="flex items-center justify-center">
    <img
      src={item.src}
      alt={item.alt}
      className={`
        h-8 sm:h-12 md:h-12 lg:h-16 object-contain
        ${index !== 0 &&  index !==2 ? "white-logo" : ""}
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
        h-7 object-contain
        ${index !== 0 && index !==2 ? "white-logo" : ""}
      `}
    />
  </div>
))}

              </div>
            </Marquee>
          </div>

        </div>
      </div>

      {/* ================= ASSOCIATE SPONSORS ================= */}
      <div className="max-w-6xl mx-auto mt-6 px-4 text-center">

  {/* Section Title */}
  

  {/* ================= DESKTOP & MOBILE LAYOUT ================= */}
  <div className="flex flex-col items-center gap-6">

  {/* Section Title */}
  <h2 className="text-[#01C1FB] text-[18px] sm:text-[24px] font-semibold mb-0 sm:mb-6">
    Our Sponsors
  </h2>

  {/* Sponsors Row */}
  <div className="flex flex-col sm:flex-row items-center justify-center  gap-10 sm:gap-16">

    {/* Event Sponsor */}
    <div className="flex flex-col items-center gap-3 sm:gap-6">
      <span className="font-semibold text-white text-lg">Event Sponsor</span>
      <img
        src={HIRENOW}
        alt="HIRENOW"
        className="h-[65px] sm:h-[68px] object-contain filter brightness-0 invert"
      />
    </div>

    {/* Associate Sponsors */}
    <div className="flex flex-col items-center gap-2">
      <span className="font-semibold text-white text-lg">Associate Sponsors</span>
      <div className="flex flex-row items-center gap-6 mt-1">
        <img
          src={JPINFOTECH}
          alt="JP Infotech"
          className="h-[80px] object-contain filter brightness-0 invert"
        />
        <img
          src={DUSKCODER}
          alt="DuskCoder"
          className="h-8 sm:h-10 object-contain filter brightness-0 invert"
        />
      </div>
    </div>

  </div>
</div>



</div>


    </section>
  );
}
