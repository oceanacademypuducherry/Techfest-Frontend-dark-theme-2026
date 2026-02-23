

// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { UserAPI } from "../../../service";

// /* =======================
//    SPEAKER TYPE
// ======================= */
// interface Speaker {
//   _id: string;
//   image: string;
//   name: string;
//   position: string;
//   currentCompany: string;
//   linkedinUrl?: string;
// }

// export default function SpeakersSection() {
//   const navigate = useNavigate();

//   const [speakers, setSpeakers] = useState<Speaker[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

 
//   useEffect(() => {
//     const fetchSpeakers = async () => {
//       try {
//         const res = await UserAPI.get("/speaker/get");

//         // ✅ API returns { success, data: [] }
//         const speakerList: Speaker[] =
//           Array.isArray(res.data)
//             ? res.data
//             : res.data?.data || [];

//         setSpeakers(speakerList);
//       } catch (error) {
//         console.error("Error fetching speakers:", error);
//         setSpeakers([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSpeakers();
//   }, []);

//   /* =======================
//      SPLIT INTO 2 ROWS
//   ======================= */
//   const rowOne = speakers.filter((_, i) => i % 2 === 0);
//   const rowTwo = speakers.filter((_, i) => i % 2 !== 0);

//   /* =======================
//      SPEAKER CARD
//   ======================= */
//   const renderSpeakerCard = (speaker: Speaker) => (
//     <div
//       key={speaker._id}
//       onClick={() =>
//         speaker.linkedinUrl &&
//         window.open(speaker.linkedinUrl, "_blank")
//       }
//       className="
//         relative min-w-[220px] sm:min-w-[260px]
//         max-w-[220px] sm:max-w-[260px]
//         h-[240px] sm:h-[270px]
//         rounded-2xl overflow-hidden
//         cursor-pointer group
//         border border-black
//         bg-gray-800
//       "
//     >
//       {/* IMAGE */}
//       <img
//         src={speaker.image}
//         alt={speaker.name}
//         className="
//           absolute inset-0 w-full h-full
//           object-cover object-top
//           transition-transform duration-300
//            group-hover:scale-105
//         "
//       />

//       {/* OVERLAY */}
//       <div className="
//         absolute inset-0
//         bg-black/40
//         group-hover:bg-white/40
//         transition-all duration-300
//       " />

//       {/* TEXT */}
//       <div className="
//         relative z-10
//         h-full
//         flex flex-col justify-end
//         p-4
//       ">
//         <h3 className="text-white group-hover:text-black text-lg font-bold">
//           {speaker.name}
//         </h3>

//         <p className="text-white/90 group-hover:text-black text-sm">
//           {speaker.position}
//         </p>

//         <p className="text-white/70 group-hover:text-black text-xs mt-1">
//           {speaker.currentCompany}
//         </p>
//       </div>
//     </div>
//   );

//   /* =======================
//      LOADING STATE
//   ======================= */
//   if (loading) {
//     return (
//       <section className="bg-[#0A0C12] py-10">
//         <p className="text-white text-center">Loading speakers...</p>
//       </section>
//     );
//   }

//   /* =======================
//      UI
//   ======================= */
//   return (
//     <section className="bg-[#0A0C12] py-6 sm:py-10 overflow-hidden">
//       {/* TITLE */}
//       <div className="flex items-center justify-center gap-4 mb-6">
//         <span className="h-[2px] w-24 bg-gradient-to-l from-[#01C1FB] to-transparent" />
//         <span className="text-[#01C1FB] text-lg tracking-wide">
//           Expert Speakers
//         </span>
//         <span className="h-[2px] w-24 bg-gradient-to-r from-[#01C1FB] to-transparent" />
//       </div>

//       {/* HEADING */}
//       <h2 className="text-center text-4xl md:text-5xl font-semibold text-white">
//         Learn from the <span className="text-[#00C2FF]">Industry</span>
//         <br />
//         <span className="bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C] bg-clip-text text-transparent">
//           Experts
//         </span>
//       </h2>

//       {/* SUB TEXT */}
//       <p className="text-center text-white/70 mt-4">
//         Join sessions led by visionaries shaping the future of technology
//       </p>

//       {/* SPEAKERS */}
//       <div className="mt-12 flex justify-center">
//         <div className="w-[95%] sm:w-[80%] lg:w-[70%] overflow-hidden">
//           <div className="flex gap-6 w-max marquee-left">
//             {[...rowOne, ...rowOne].map(renderSpeakerCard)}
//           </div>

//           <div className="flex gap-6 w-max marquee-right mt-10">
//             {[...rowTwo, ...rowTwo].map(renderSpeakerCard)}
//           </div>
//         </div>
//       </div>

//       {/* VIEW ALL */}
//       <div className="flex justify-center mt-14">
//         <button
//           onClick={() => navigate("/speakers")}
//           className="
//             bg-gradient-to-r from-pink-500 to-purple-500
//             px-7 py-3 rounded-lg
//             text-white font-semibold
//             hover:scale-105 transition
//           "
//         >
//           View All Speakers →
//         </button>
//       </div>
//     </section>
//   );
// }


export default function SpeakersComingSoon() {
  return (
    <section className=" bg-[#070B14] py-10 px-4 sm:px-6 text-center">

      {/* TOP SMALL TITLE */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
        <span className="h-[2px] w-24 bg-gradient-to-l from-[#01C1FB] to-transparent" />
        <span className="text-[#01C1FB] sm:text-[18px] text-[17px] tracking-[0.0em] sm:tracking-[0.1em]">
          Expert Speakers
        </span>
        <span className="h-[2px] w-24 bg-gradient-to-r from-[#01C1FB] to-transparent" />
      </div>

      {/* MAIN HEADING */}
      <h2 className="text-[28px] sm:text-4xl md:text-5xl font-semibold text-white">
        Learn from the <span className="text-[#00C2FF]">Industry</span>
        <br />
        <span className="bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C] bg-clip-text text-transparent">
          Experts
        </span>       
      </h2>

      {/* SUB TEXT */}
      <p className="text-white/70 mt-4 max-w-2xl mx-auto">
        Join sessions led by visionaries shaping the future of technology
      </p>

      {/* COMING SOON SECTION */}
      <div className="mt-16 flex flex-col items-center">

        <h1 className="
  text-3xl md:text-4xl 
  font-semibold
  leading-[1.2]          /* 👈 important */
  pb-2                   /* 👈 small bottom padding */
  bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]
  bg-clip-text text-transparent
">
  Coming Soon
</h1>

        <p className="text-white/60 mt-6 text-lg">
          Stay tuned for updates
        </p>
         {/* ANIMATED UNDERLINE */}
  <div className="relative w-36 h-[3px] overflow-hidden mt-1">
    <span
      className="absolute inset-0
                 bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]
                 animate-[slide_1.5s_ease-in-out_infinite]">
    </span>
  </div>

        <p className="text-white/70 mt-6 max-w-2xl leading-relaxed">
          We’re curating an inspiring lineup of keynote speakers,
          tech leaders, and innovators. The full speakers list will
          be announced shortly.
        </p>

        <div className="mt-10">
          <button
            className="
              px-6 py-3 rounded-full
              border border-white/20
              text-white
              hover:bg-white hover:text-black
              transition duration-300
            "
          >
            Speaker Lineup • Updates Coming Soon
          </button>
        </div>

      </div>
    </section>
  );
}   