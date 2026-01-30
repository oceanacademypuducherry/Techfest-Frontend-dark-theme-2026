// import { useNavigate, Link } from "react-router-dom";
// import { speakersData } from "../../speakers/utils/speaker";

// export default function SpeakersSection() {
//   const navigate = useNavigate();

//   // 🔥 Divide speakers into two rows
//   const rowOne = speakersData.filter((_, i) => i % 2 === 0);
//   const rowTwo = speakersData.filter((_, i) => i % 2 !== 0);

// const renderSpeakerCard = (speaker, index) => (
//   <div
//     key={index}
//     onClick={() =>
//       speaker.socialLinks?.linkedin &&
//       window.open(speaker.socialLinks.linkedin, "_blank")
//     }
//     className="
//       relative min-w-[220px] sm:min-w-[260px]
//       max-w-[220px] sm:max-w-[260px]
//       h-[230px] sm:h-[260px]
//       rounded-2xl overflow-hidden
//       cursor-pointer group
//       border border-black
//       bg-gray-800
//     "
//   >
//     {/* IMAGE */}
//     <img
//       src={speaker.image}
//       alt={speaker.name}
//       className="
//         absolute inset-0 w-full h-full object-cover object-top
//         transition-all duration-300 brightness-75
//         group-hover:scale-105
//       "
//     />

//     {/* WHITE OVERLAY ON HOVER */}
//     <div
//       className="
//         absolute inset-0
//         bg-gray-400
//         opacity-0
//         group-hover:opacity-70
//         transition-all duration-300
//       "
//     />

//     {/* TEXT CONTAINER */}
//     <div
//       className="
//         relative z-10
//         h-full
//         flex flex-col justify-end
//         p-4
//         transition-colors duration-300
//       "
//     >
//       <h3 className="text-white group-hover:text-black text-lg font-bold">
//         {speaker.name}
//       </h3>
//       <p className="text-white group-hover:text-black text-sm mt-1">
//         {speaker.achievements}
//       </p>
//     </div>
//   </div>
// )


//   return (
//     <section className="bg-[#0A0C12] py-6  sm:py-10 overflow-hidden">
// {/* <div className="flex justify-center mb-6">
//   <Link
//     to="/ticket-booking"
//     onClick={(e) => handleClick(e, "/ticket-booking")}
//     className="px-4 py-3 rounded-lg text-white font-semibold
//       bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
//       shadow-md hover:scale-105 transition-all"
//   >
//     Book Your Tickets
//   </Link>
// </div> */}

      

//       <div className="flex items-center justify-center gap-2 sm:gap-4 mt-0 sm:mt-6 mb-6">
//   <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-l from-[#01C1FB] to-transparent"></span>

//   <span className="text-[#01C1FB] sm:text-[18px] text-[17px] tracking-[0.0em] sm:tracking-[0.1em] ">
//    Expert Speakers
//   </span>

//   <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-r from-[#01C1FB] to-transparent"></span>
// </div>

//       {/* Heading */}
//       <h2 className="text-center text-[28px] sm:text-4xl md:text-5xl font-semibold text-white">
//         Learn from the{" "}
//         <span className="text-[#00C2FF]">Industry</span>
//         <br />
//         <span className="bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C] bg-clip-text text-transparent">
//           Experts
//         </span>
//       </h2>

//       {/* Subtext */}
//       <p className="text-center text-[16px] sm:text-[18px] text-white/70 mt-4 px-4">
//         Join sessions led by visionaries who are shaping the future of technology
//       </p>

//       {/* Speakers Marquee Wrapper */}
// <div className="mt-12 flex justify-center">
//   <div className="w-[95%] sm:w-[80%] lg:w-[70%] overflow-hidden">

//     {/* 🔥 ROW 1 – LEFT */}
//     <div className="overflow-hidden">
//       <div className="flex gap-6 w-max marquee-left">
//         {[...rowOne, ...rowOne].map(renderSpeakerCard)}
//       </div>
//     </div>

//     {/* 🔥 ROW 2 – RIGHT */}
//     <div className="overflow-hidden mt-10">
//       <div className="flex gap-6 w-max marquee-right">
//         {[...rowTwo, ...rowTwo].map(renderSpeakerCard)}
//       </div>
//     </div>

//   </div>
// </div>


//       {/* View All */}
//       <div className="flex justify-center mt-14">
//         <button
//           onClick={() => {
//             navigate("/speakers");
//             window.scrollTo({ top: 0, behavior: "smooth" });
//           }}
//           className="
//             bg-gradient-to-r from-pink-500 to-purple-500
//             px-7 py-3 rounded-lg
//             text-white font-semibold
//             hover:scale-105 transition
//             shadow-[0_0_20px_rgba(238,76,156,0.35)]
//           "
//         >
//           View All Speakers
//           <span className="text-2xl ml-2">→</span>
//         </button>
//       </div>

//     </section>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserAPI } from "../../../service";

/* =======================
   SPEAKER TYPE
======================= */
interface Speaker {
  _id: string;
  image: string;
  name: string;
  position: string;
  currentCompany: string;
  linkedinUrl?: string;
}

export default function SpeakersSection() {
  const navigate = useNavigate();

  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /* =======================
     FETCH SPEAKERS
  ======================= */
  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const res = await UserAPI.get("/speaker/get");

        // ✅ API returns { success, data: [] }
        const speakerList: Speaker[] =
          Array.isArray(res.data)
            ? res.data
            : res.data?.data || [];

        setSpeakers(speakerList);
      } catch (error) {
        console.error("Error fetching speakers:", error);
        setSpeakers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  /* =======================
     SPLIT INTO 2 ROWS
  ======================= */
  const rowOne = speakers.filter((_, i) => i % 2 === 0);
  const rowTwo = speakers.filter((_, i) => i % 2 !== 0);

  /* =======================
     SPEAKER CARD
  ======================= */
  const renderSpeakerCard = (speaker: Speaker) => (
    <div
      key={speaker._id}
      onClick={() =>
        speaker.linkedinUrl &&
        window.open(speaker.linkedinUrl, "_blank")
      }
      className="
        relative min-w-[220px] sm:min-w-[260px]
        max-w-[220px] sm:max-w-[260px]
        h-[240px] sm:h-[270px]
        rounded-2xl overflow-hidden
        cursor-pointer group
        border border-black
        bg-gray-800
      "
    >
      {/* IMAGE */}
      <img
        src={speaker.image}
        alt={speaker.name}
        className="
          absolute inset-0 w-full h-full
          object-cover object-top
          transition-transform duration-300
           group-hover:scale-105
        "
      />

      {/* OVERLAY */}
      <div className="
        absolute inset-0
        bg-black/40
        group-hover:bg-white/40
        transition-all duration-300
      " />

      {/* TEXT */}
      <div className="
        relative z-10
        h-full
        flex flex-col justify-end
        p-4
      ">
        <h3 className="text-white group-hover:text-black text-lg font-bold">
          {speaker.name}
        </h3>

        <p className="text-white/90 group-hover:text-black text-sm">
          {speaker.position}
        </p>

        <p className="text-white/70 group-hover:text-black text-xs mt-1">
          {speaker.currentCompany}
        </p>
      </div>
    </div>
  );

  /* =======================
     LOADING STATE
  ======================= */
  if (loading) {
    return (
      <section className="bg-[#0A0C12] py-10">
        <p className="text-white text-center">Loading speakers...</p>
      </section>
    );
  }

  /* =======================
     UI
  ======================= */
  return (
    <section className="bg-[#0A0C12] py-6 sm:py-10 overflow-hidden">
      {/* TITLE */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="h-[2px] w-24 bg-gradient-to-l from-[#01C1FB] to-transparent" />
        <span className="text-[#01C1FB] text-lg tracking-wide">
          Expert Speakers
        </span>
        <span className="h-[2px] w-24 bg-gradient-to-r from-[#01C1FB] to-transparent" />
      </div>

      {/* HEADING */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-white">
        Learn from the <span className="text-[#00C2FF]">Industry</span>
        <br />
        <span className="bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C] bg-clip-text text-transparent">
          Experts
        </span>
      </h2>

      {/* SUB TEXT */}
      <p className="text-center text-white/70 mt-4">
        Join sessions led by visionaries shaping the future of technology
      </p>

      {/* SPEAKERS */}
      <div className="mt-12 flex justify-center">
        <div className="w-[95%] sm:w-[80%] lg:w-[70%] overflow-hidden">
          <div className="flex gap-6 w-max marquee-left">
            {[...rowOne, ...rowOne].map(renderSpeakerCard)}
          </div>

          <div className="flex gap-6 w-max marquee-right mt-10">
            {[...rowTwo, ...rowTwo].map(renderSpeakerCard)}
          </div>
        </div>
      </div>

      {/* VIEW ALL */}
      <div className="flex justify-center mt-14">
        <button
          onClick={() => navigate("/speakers")}
          className="
            bg-gradient-to-r from-pink-500 to-purple-500
            px-7 py-3 rounded-lg
            text-white font-semibold
            hover:scale-105 transition
          "
        >
          View All Speakers →
        </button>
      </div>
    </section>
  );
}


