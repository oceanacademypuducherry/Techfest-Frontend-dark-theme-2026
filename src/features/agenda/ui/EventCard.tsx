// import React, { ReactNode } from "react";
// import { FaRegClock } from "react-icons/fa";

// interface Speaker {
//   id: number;
//   name: string;
//   img: string;
//   achievements?: string[];
// }

// interface EventProps {
//   time: string;
//   title: string;
//   speakers: Speaker[];
//   description?: string | ReactNode;
// }

// const EventCard: React.FC<EventProps> = ({
//   time,
//   title,
//   speakers,
//   description,
// }) => {
//   const borderStyles = [
//     "rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]",
//     "rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px]",
//     "rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]",
//     "rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]",
//   ];

//   const getImageBorderRadius = (index: number) =>
//     borderStyles[index % borderStyles.length];

//   return (
//     <div className="bg-[#0F172A] border border-[#0F172A] rounded-xl p-4 shadow-md hover:shadow-xl transition-all">
      
//       {/* Time (mobile) */}
//       <span className="sm:hidden block text-xs bg-[#1e293b] text-[#22d3ee] px-3 py-1 rounded-md w-fit ml-auto mb-1">
//         {time}
//       </span>

//       {/* Title + Desktop Time */}
//       <div className="flex justify-between items-start">
//         <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#22d3ee]">
//           {title}
//         </h3>

//         <span className="hidden sm:flex items-center gap-2 text-sm bg-[#1e293b] text-[#bc588e] px-3 py-1 rounded-md">
//           <FaRegClock className="text-[14px]" />
//           {time}
//         </span>
//       </div>

//       {/* Speakers */}
//       {speakers.length > 0 ? (
//         <div className="mt-4 space-y-4">
//           {speakers.map((speaker, index) => (
//             <div key={speaker.id} className="flex gap-4 items-start">
              
//               {/* Image */}
//               <div
//                 className={`w-16 h-16 sm:w-20 sm:h-20 overflow-hidden shadow-sm ${getImageBorderRadius(
//                   index
//                 )}`}
//               >
//                 <img
//                   src={speaker.img}
//                   alt={speaker.name}
//                   className="w-full h-full object-cover bg-gray-200"
//                 />
//               </div>

//               {/* Name + Description */}
//               <div>
//                 <p className="text-white text-sm font-medium">
//                   {speaker.name}
//                 </p>

//                 {speaker.achievements && (
//   <p className="mt-1 text-gray-400 text-xs sm:text-sm leading-relaxed">
//     {speaker.achievements}
//   </p>
// )}

//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-white text-sm mt-3">{description}</p>
//       )}
//     </div>
//   );
// };

// export default EventCard;


import React, { ReactNode } from "react";
import { FaRegClock } from "react-icons/fa";

interface Speaker {
  id: number;
  name: string;
  img: string;
  achievements?: string[];
}

interface EventProps {
  time: string;
  title: string;
  speakers: Speaker[];
  description?: string | ReactNode;
}

const EventCard: React.FC<EventProps> = ({
  time,
  title,
  speakers,
  description,
}) => {
  const borderStyles = [
    "rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]",
    "rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px]",
    "rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]",
    "rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]",
  ];

  const getImageBorderRadius = (index: number) =>
    borderStyles[index % borderStyles.length];

  /* ✅ Layout condition */
  const isRowLayout = speakers.length > 2;

  return (
    <div className="bg-[#0F172A] border border-[#0F172A] rounded-xl p-4 shadow-md hover:shadow-xl transition-all">
      
      {/* Time (mobile) */}
      <span className="sm:hidden block text-xs bg-[#1e293b] text-[#22d3ee] px-3 py-1 rounded-md w-fit ml-auto mb-1">
        {time}
      </span>

      {/* Title + Desktop Time */}
      <div className="flex justify-between items-start">
        <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#22d3ee]">
          {title}
        </h3>

        <span className="hidden sm:flex items-center gap-2 text-sm bg-[#1e293b] text-[#bc588e] px-3 py-1 rounded-md">
          <FaRegClock className="text-[14px]" />
          {time}
        </span>
      </div>

      {/* Speakers */}
      {speakers.length > 0 ? (
        <div
  className={`mt-4 gap-4 ${
    speakers.length > 2
      ? "flex flex-col space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0"
      : "flex flex-col space-y-4"
  }`}
>

          {speakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className={`flex gap-4 ${
                isRowLayout ? "items-center" : "items-start"
              }`}
            >
              {/* Image */}
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 overflow-hidden shadow-sm ${getImageBorderRadius(
                  index
                )}`}
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>

              {/* Name + Achievements */}
              <div
  className={`relative group ${
    speakers.length > 2
      ? "w-full sm:max-w-[260px] md:max-w-[260px] lg:max-w-[360px]"
      : "w-full"
  }`}
>
  <p className="text-white text-sm font-medium">
    {speaker.name}
  </p>

  {speaker.achievements && (
    speakers.length > 2 ? (
      <>
        {/* Short text (responsive) */}
        <p className="mt-1 text-gray-400 text-xs sm:text-sm truncate">
          {Array.isArray(speaker.achievements)
            ? speaker.achievements.join(", ")
            : speaker.achievements}
        </p>

        {/* Full text on hover (desktop only) */}
        <div className="absolute left-0 top-full mt-2 hidden sm:group-hover:block bg-[#020617] text-white text-xs p-3 rounded-md shadow-lg z-30 w-178">
          {Array.isArray(speaker.achievements)
            ? speaker.achievements.join(", ")
            : speaker.achievements}
        </div>
      </>
    ) : (
      /* Full width + full text */
      <p className="mt-1 text-gray-400 text-xs sm:text-sm leading-relaxed">
        {Array.isArray(speaker.achievements)
          ? speaker.achievements.join(", ")
          : speaker.achievements}
      </p>
    )
  )}
</div>


            </div>
          ))}
        </div>
      ) : (
        <p className="text-white text-sm mt-3">{description}</p>
      )}
    </div>
  );
};

export default EventCard;
