import { useNavigate, Link } from "react-router-dom";
import { speakersData } from "../../speakers/utils/speaker";

export default function SpeakersSection() {
  const navigate = useNavigate();

  // 🔥 Divide speakers into two rows
  const rowOne = speakersData.filter((_, i) => i % 2 === 0);
  const rowTwo = speakersData.filter((_, i) => i % 2 !== 0);

  const renderSpeakerCard = (speaker, index) => (
    <div
      key={index}
      className="
        relative min-w-[220px] sm:min-w-[260px]
        max-w-[220px] sm:max-w-[260px]
        bg-[#0F121A] border border-white/10
        rounded-2xl overflow-hidden
        transition-all duration-300
        hover:border-[#EE4C9C]
        hover:shadow-[0_0_25px_rgba(238,76,156,0.35)]
        cursor-pointer
      "
      onClick={() =>
        speaker.socialLinks?.linkedin &&
        window.open(speaker.socialLinks.linkedin, "_blank")
      }
    >
      {/* Image */}
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-[230px] sm:h-[250px] object-cover object-top brightness-75"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 w-full p-3 text-center bg-gradient-to-t from-black/90 to-transparent">
        <h3 className="text-white text-[16px] sm:text-lg font-bold">
          {speaker.name}
        </h3>
        <p className="text-white/80 text-xs sm:text-sm mt-1">
          {speaker.achievements}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#0A0C12] py-6  sm:py-10 overflow-hidden">
{/* <div className="flex justify-center mb-6">
  <Link
    to="/ticket-booking"
    onClick={(e) => handleClick(e, "/ticket-booking")}
    className="px-4 py-3 rounded-lg text-white font-semibold
      bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
      shadow-md hover:scale-105 transition-all"
  >
    Book Your Tickets
  </Link>
</div> */}

      

      <div className="flex items-center justify-center gap-2 sm:gap-4 mt-0 sm:mt-6 mb-6">
  <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-l from-[#01C1FB] to-transparent"></span>

  <span className="text-[#01C1FB] sm:text-[18px] text-[17px] tracking-[0.0em] sm:tracking-[0.1em] ">
   Expert Speakers
  </span>

  <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-r from-[#01C1FB] to-transparent"></span>
</div>

      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-4xl md:text-5xl font-semibold text-white">
        Learn from the{" "}
        <span className="text-[#00C2FF]">Industry</span>
        <br />
        <span className="bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C] bg-clip-text text-transparent">
          Experts
        </span>
      </h2>

      {/* Subtext */}
      <p className="text-center text-[16px] sm:text-[18px] text-white/70 mt-4 px-4">
        Join sessions led by visionaries who are shaping the future of technology
      </p>

      {/* Speakers Marquee Wrapper */}
<div className="mt-12 flex justify-center">
  <div className="w-[95%] sm:w-[80%] lg:w-[70%] overflow-hidden">

    {/* 🔥 ROW 1 – LEFT */}
    <div className="overflow-hidden">
      <div className="flex gap-6 w-max marquee-left">
        {[...rowOne, ...rowOne].map(renderSpeakerCard)}
      </div>
    </div>

    {/* 🔥 ROW 2 – RIGHT */}
    <div className="overflow-hidden mt-10">
      <div className="flex gap-6 w-max marquee-right">
        {[...rowTwo, ...rowTwo].map(renderSpeakerCard)}
      </div>
    </div>

  </div>
</div>


      {/* View All */}
      <div className="flex justify-center mt-14">
        <button
          onClick={() => {
            navigate("/speakers");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="
            bg-gradient-to-r from-pink-500 to-purple-500
            px-7 py-3 rounded-lg
            text-white font-semibold
            hover:scale-105 transition
            shadow-[0_0_20px_rgba(238,76,156,0.35)]
          "
        >
          View All Speakers
          <span className="text-2xl ml-2">→</span>
        </button>
      </div>

    </section>
  );
}
