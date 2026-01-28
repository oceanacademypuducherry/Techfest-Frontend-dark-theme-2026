import { FaMicrophone, FaUsers, FaBook } from "react-icons/fa";
import { PiBuildingFill } from "react-icons/pi";
import { Link } from "react-router-dom";


export default function About() {

  const topStats = [
    { icon: FaMicrophone, color: "#00C2FF", value: "25+", label: "Speakers" },
    { icon: PiBuildingFill, color: "#EE4C9C", value: "3", label: "Halls" },
    { icon: FaUsers, color: "#8A63FF", value: "600+", label: "Attendees" },
    { icon: FaBook, color: "#00C075", value: "10+", label: "Topics" },
  ];

  function darkenColor(hex, amount = 0.3) {
    let col = hex.replace("#", "");
    let r = parseInt(col.substring(0, 2), 16);
    let g = parseInt(col.substring(2, 4), 16);
    let b = parseInt(col.substring(4, 6), 16);

    r = Math.floor(r * (1 - amount));
    g = Math.floor(g * (1 - amount));
    b = Math.floor(b * (1 - amount));

    return `rgb(${r}, ${g}, ${b})`;
  }

  /* ------------------- STAT CARD ------------------- */

  const StatCard = ({ icon: Icon, color, value, label }) => (
    <div
      className="
        bg-[#0F121A] p-3 sm:p-5  rounded-xl border border-white/10 shadow-lg text-center
        transition-all duration-300 hover:-translate-y-2
        hover:border-[#01C1FB] hover:shadow-[0_0_20px_rgba(1,193,251,0.35)]
      "
    >
      <div
        className="
          w-[45px] h-[45px] sm:w-[60px] sm:h-[60px]
          mx-auto mb-4 rounded-xl flex items-center justify-center border
        "
        style={{
          background: `linear-gradient(135deg, ${color}, ${darkenColor(color, 0.45)})`,
          borderColor: color,
        }}
      >
        <Icon className="text-white text-xl sm:text-2xl" />
      </div>

      <p className="font-semibold text-2xl sm:text-3xl lg:text-5xl" style={{ color }}>
        {value}
      </p>

      <p className="text-white/70 font-semibold text-[14px] sm:text-[16px] lg:text-[18px]">
        {label}
      </p>
    </div>
  );

  /* ------------------- INFO CARD ------------------- */

  const InfoCard = ({ title, text, lineColor }) => (
    <div
      className="
        group bg-[#0F121A] p-6 rounded-xl border border-white/10 shadow-lg text-left
        transition-all duration-300
        hover:border-[#01C1FB] hover:shadow-[0_0_20px_rgba(1,193,251,0.35)]
      "
    >
      <div
        className="h-1 w-10 mb-3 rounded-full transition-all duration-300 group-hover:w-24"
        style={{ backgroundColor: lineColor }}
      ></div>

      <h3
        className="font-semibold mb-2 border-b border-white/10 pb-2 text-white
        text-[16px] sm:text-[18px] lg:text-[22px]"
      >
        {title}
      </h3>

      <p
        className="text-white/70 text-[14px] sm:text-[16px] lg:text-[16px]
        leading-6 sm:leading-7 lg:leading-8"
      >
        {text}
      </p>
    </div>
  );

  /* ---------------------- MAIN ---------------------- */

  return (
    <section
      id="about_section"
      className="bg-[#0A0C12] text-white py-6 sm:py-12 px-2 sm:px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 mb-6">
  <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-l from-[#01C1FB] to-transparent"></span>

  <span className="text-[#01C1FB] sm:text-[18px] text-[17px] tracking-[0.0em] sm:tracking-[0.1em] ">
    About the Event
  </span>

  <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-r from-[#01C1FB] to-transparent"></span>
</div>

        {/* Title */}
        <h2 className="mt-6 mb-6 text-[28px] sm:text-4xl md:text-5xl font-semibold leading-tight">
          Where Innovation{" "}
          <span className="text-[#01C1FB]">Meets</span>
          <br />
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r
            from-[#00C2FF] to-[#EE4C9C]"
          >
            Opportunity
          </span>
        </h2>

        {/* Description */}
        <p
          className="mt-4 text-white/70 text-[16px] text-[16px] sm:text-[18px]
          max-w-3xl mx-auto leading-6 lg:leading-8"
        >
          TechFest 2026 is a technical event bringing together students,
  educators, and industry professionals to explore emerging technologies.
  The event features expert talks and interactive sessions that inspire innovation and learning.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12 mt-10">
          {topStats.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </div>

        {/* Info Cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-14">
          <InfoCard
            title="Network & Connect"
            text="Meet industry leaders, investors, and innovators. Build meaningful connections that last beyond the event."
            lineColor="#00C2FF"
          />                
          <InfoCard
            title="Learn & Grow"
            text="Gain practical knowledge through expert talks, panel discussions, and keynotes from the brightest minds in technology."
            lineColor="#EE4C9C"
          />
          <InfoCard
            title="Launch & Scale"
            text="Showcase your startup, secure funding, and gain insights to accelerate your growth journey."
            lineColor="#8A63FF"
          />
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-14">
  <InfoCard
    title="Network & Connect"
    text="Interact with industry experts, speakers, students, and working professionals across multiple halls. Build connections through panel discussions, fireside chats, and open networking sessions."
    lineColor="#00C2FF"
  />

  <InfoCard
    title="Learn & Grow"
    text="Gain real-world insights through keynote presentations, expert talks, and technical sessions on AI, App Development, Cloud, Cybersecurity, Data Science, and more."
    lineColor="#EE4C9C"
  />

  <InfoCard
    title="Discuss & Explore"
    text="Participate in group discussions, panel sessions, and interactive conversations covering careers, hiring trends, non-technical skills, and emerging technologies."
    lineColor="#8A63FF"
  />
</div>
<div className="flex justify-center mt-6">
  {/* <Link
    to="/ticket-booking"
    onClick={(e) => handleClick(e, "/ticket-booking")}
    className="px-4 py-3 rounded-lg text-white font-semibold
      bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
      shadow-md hover:scale-105 transition-all"
  >
    Book Your Tickets
  </Link> */}
   <button
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
</button>
</div>
      </div>
    </section>
  );
}
