import { useNavigate } from "react-router-dom";
import { speakersData } from "../../speakers/utils/speaker";

export default function SpeakersSection() {
  const navigate = useNavigate();

  const midpoint = Math.ceil(speakersData.length / 2);
  const firstRow = speakersData.slice(0, midpoint);
  const secondRow = speakersData.slice(midpoint);

  const renderSpeakerCard = (speaker, index) => (
    <div
      key={index}
      className="
        relative min-w-[260px] max-w-[260px]
        bg-white border border-gray-200
        rounded-2xl overflow-hidden
        transition-all duration-300
        hover:border-[#EE4C9C]
        hover:shadow-[0_0_20px_rgba(238,76,156,0.25)]
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
        className="w-full h-[250px] object-cover bg-gray-100 object-top brightness-50"
      />

      {/* Overlay */}
      <div className="
        absolute bottom-0 w-full p-3 text-center
        bg-gradient-to-t  to-transparent
      ">
        <h3 className="text-white text-lg font-bold">
          {speaker.name}
        </h3>
        <p className="text-white text-sm mt-1">
          {speaker.achievements}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-[20px] sm:py-20 overflow-hidden">

      {/* Top Label */}
      <div className="flex justify-center mb-10">
        <span className="
          px-5 py-3 text-[16px]
          text-[#EE4C9C]
          rounded-full
          bg-[#FCEAF4]
          border border-[#EE4C9C]/40
        ">
          Featured Speakers
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-[30px] sm:text-4xl md:text-5xl font-semibold text-gray-900">
        Learn from the{" "}
        <span className="text-[#00C2FF]">Industry</span>
        <br />
        <span className="
          bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C]
          bg-clip-text text-transparent
        ">
          Leaders
        </span>
      </h2>

      {/* Subtext */}
      <p className="text-center sm:text-[18px] text-[16px] text-gray-600 mt-4 px-4">
        Join sessions led by visionaries who are shaping the future of technology
      </p>

      {/* Row 1 */}
      <div className="overflow-hidden mt-12 flex justify-center">
        <div className="sm:w-[70%] w-[95%] p-2 overflow-hidden">
          <div className="flex gap-6 marquee-left">
            {[...firstRow, ...firstRow].map(renderSpeakerCard)}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden mt-10 flex justify-center">
        <div className="sm:w-[70%] w-[95%] p-2 overflow-hidden">
          <div className="flex gap-6 marquee-right">
            {[...secondRow, ...secondRow].map(renderSpeakerCard)}
          </div>
        </div>
      </div>

      {/* View All Button */}
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
            shadow-md
          "
        >
          View All Speakers
          <span className="text-2xl ml-2">→</span>
        </button>
      </div>
    </section>
  );
}
