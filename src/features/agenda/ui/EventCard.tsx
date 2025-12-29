import React, { ReactNode } from "react";
import { FaRegClock } from "react-icons/fa";

interface Speaker {
  id: number;
  name: string;
  img: string;
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
  // Predefined border styles for dynamic assignment
  const borderStyles = [
    "rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]",
    "rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px]",
    "rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]",
    "rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]",
  ];

  // Function to get border-radius based on index
  const getImageBorderRadius = (index: number) =>
    borderStyles[index % borderStyles.length];

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

      {/* Speaker Images */}
      {speakers.length > 0 ? (
        <div className="flex gap-4 mt-4">
          {speakers.map((speaker, index) => (
            <div key={speaker.id} className="text-center">
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 overflow-hidden shadow-sm hover:scale-105 transition ${getImageBorderRadius(
                  index
                )}`}
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white text-sm mt-3">{description}</p>
      )}

      {/* Speaker Names */}
      {speakers.length > 0 && (
        <p className="text-white text-sm mt-3">
          {speakers.map(s => s.name).join(" | ")}
        </p>
      )}
    </div>
  );
};

export default EventCard;
