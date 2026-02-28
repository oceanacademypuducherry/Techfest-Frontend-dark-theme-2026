// import React, { useState } from "react";
// import { Footer, Navigation } from "../../../common/ui";
// import { speakersData } from "../utils/speaker";
// import SpeakerModal from "./SpeakerModal";

// const Speakers: React.FC = () => {
//   const [selectedSpeaker, setSelectedSpeaker] = useState(null);

//   return (
//     <>
//       <Navigation />



//       <main className="bg-[#0A0C12] px-3 sm:px-6 md:px-0 xl:px-10 text-center">
//         {/* Heading */}
//         <h2 className="mb-4 pt-5 text-[28px] sm:text-4xl md:text-5xl font-semibold text-gray-200">

//           Voices of{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E64F8F] to-[#671AD2]">
//             Techfest
//           </span>
//         </h2>


//         <p className="text-cyan-600 text-[16px] sm:text-[18px] mb-8">

//          Meet our speakers — accomplished professionals shaping the future of technology and innovation.

//         </p>

//         {/* Speakers Grid */}
//         <div className="mx-auto max-w-[1600px] px-2 sm:px-6 md:px-12 lg:px-20 pb-16">

//           <div
//             className="
//               grid gap-5
//               grid-cols-1
//               sm:grid-cols-2
//               md:grid-cols-3
//               xl:grid-cols-4
//             "
//           >

//             {speakersData.map((person, index) => (
//               <div
//                 key={index}
//                 className="
//                   relative rounded-xl overflow-hidden cursor-pointer
//                   hover:scale-[1.03] transition-all duration-300

//                   bg-white border border-gray-200
//                   shadow-md hover:shadow-xl

//                 "
//                 onClick={() =>
//                   person.socialLinks?.linkedin &&
//                   window.open(person.socialLinks.linkedin, "_blank")
//                 }
//               >
//                 {/* Image */}

//                 <div
//                   className="
//                     w-full
//                     h-[260px]
//                     sm:h-[280px]
//                     md:h-[300px]
//                     xl:h-[320px]
//                     relative
//                   "
//                 >
//                   <img
//                     src={person.image}
//                     alt={person.name}
//                     className="w-full h-full  bg-gray-100 object-cover object-top brightness-75"
//                   />

//                   {/* Name & Achievement */}
//                   <div
//                     className="
//                       absolute bottom-0 w-full
//                       bg-gradient-to-t to-transparent
//                       px-4 py-3
//                     "
//                   >
//                     <h3
//                       className="
//                         text-white font-semibold
//                         text-[16px] sm:text-lg
//                       "
//                     >
//                       {person.name}
//                     </h3>

//                     <p
//                       className="
//                         text-white
//                         text-[13px] sm:text-sm
//                         mt-1 line-clamp-2
//                       "
//                     >

//                       {person.achievements}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       {selectedSpeaker && (
//         <SpeakerModal
//           speaker={selectedSpeaker}
//           onClose={() => setSelectedSpeaker(null)}
//         />
//       )}
//       <Footer />
//     </>
//   );
// };

// export default Speakers;


import React, { useEffect, useState } from "react";
import { Footer, Navigation } from "../../../common/ui";
import SpeakerModal from "./SpeakerModal";
import { UserAPI } from "../../../service";

interface Speaker {
  _id: string;
  image: string;
  name: string;
  position: string;
  currentCompany: string;
  linkedinUrl?: string;
}

const Speakers: React.FC = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const res = await UserAPI.get("/speaker/get");

        const speakerList: Speaker[] =
          Array.isArray(res.data)
            ? res.data
            : res.data?.data || [];

        setSpeakers(speakerList);
      } catch (error) {
        console.error("Failed to load speakers:", error);
        setSpeakers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <>
      <Navigation />

      {/* <main className="bg-[#0A0C12] px-3 sm:px-6 md:px-0 xl:px-10 text-center min-h-screen"> */}
        <main className="bg-[#0A0C12] px-3 sm:px-6 md:px-0 xl:px-10 py-14 sm:py-28 text-center ">
        {/* HEADING */}
        <h2 className="mb-4 pt-5 text-[28px] sm:text-4xl md:text-5xl font-semibold text-gray-200">
          Voices of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E64F8F] to-[#671AD2]">
            Techfest
          </span>
        </h2>

        <p className="text-cyan-600 text-[16px] sm:text-[18px] mb-10">
          Meet our speakers who are accomplished professionals shaping the future of technology and innovation.
        </p>

        {/* LOADING */}
        {loading && (
          <p className="text-white text-center py-20">
            Loading speakers...
          </p>
        )}

        {/* SPEAKERS GRID */}
         {!loading && (
          <div className="mx-auto max-w-[1600px] px-2 sm:px-6 md:px-12 lg:px-20 pb-16">
            <div className="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
              gap-6
              justify-items-center
            ">
              {speakers.map((person) => (
                <div
                  key={person._id}
            onClick={() => {
      if (person.linkedinUrl) {
        window.open(person.linkedinUrl, "_blank", "noopener,noreferrer");
      }
    }}
                  className="
                    relative w-full max-w-[340px]
                    h-[300px]
                    rounded-2xl overflow-hidden
                    cursor-pointer group
                    border border-black
                    bg-gray-800
                    transition-transform duration-300
                    hover:scale-105
                  "
                >
                  
                   <img
                    src={person.image}
                    alt={person.name}
                    className="
                      absolute inset-0 w-full h-full
                      object-cover object-top
                    
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  /> 

                   <div className="
                    absolute inset-0
                    bg-black/40
                    group-hover:bg-white/40
                    transition-all duration-300
                  " /> 

                   <div className="
                    relative z-10
                    h-full flex flex-col justify-end
                    p-4
                  ">
                    <h3 className="text-white group-hover:text-black text-lg sm:text-xl font-bold">
                      {person.name}
                    </h3>

                    <p className="text-white/90 group-hover:text-black text-sm font-semibold">
                      {person.position}
                    </p>

                    <p className="text-white group-hover:text-black text-xs mt-1 font-semibold">
                      {person.currentCompany}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} 

         {/* COMING SOON SECTION */}
      {/* <div className="mt-16 flex flex-col items-center">

        <h1 className="
  text-3xl md:text-4xl 
  font-semibold
  leading-[1.2]          
  pb-2                
  bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]
  bg-clip-text text-transparent
">
  Coming Soon
</h1>

        <p className="text-white/60 mt-6 text-lg">
          Stay tuned for updates
        </p>
        
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

      </div> */}
      </main>

     

      <Footer />
    </>
  );
};

export default Speakers;


