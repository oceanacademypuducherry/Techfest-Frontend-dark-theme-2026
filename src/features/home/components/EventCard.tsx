import React from "react";

interface Speaker {
  id: number;
  name: string;
  img: string;
}

interface EventProps {
  time: string;
  title: string;
  speakers: Speaker[];
  description?: string; // Optional description
}

const EventCard: React.FC<EventProps> = ({ time, title, speakers, description }) => {
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
    <div className="border flex flex-col gap-4 relative border-gray-200 p-4 rounded-lg shadow-sm sm:shadow-md hover:shadow-lg transition-shadow mb-6">
      {/* Event Time for Mobile (Top Right above Title) */}
      {/* <h3 className="px-2 py-1 w-fit self-end rounded-md  block sm:hidden text-[#4B5563]">
        {time}
      </h3> */}
      <h3 className="px-2 py-1 w-fit self-end rounded-md block sm:hidden text-[#4B5563] text-sm sm:text-base   bg-gray-100">
  {time}
</h3>


      {/* Title and Event Time */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center relative">
        <h3 className="text-lg font-semibold text-gray-800 mt-2 sm:mt-0 max-sm:text-[16px]">
          {title}
        </h3>

        {/* Event Time for Desktop (Centered Below Title) */}
        <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-lg sm:block hidden mt-2 sm:mt-0">
          {time}
        </span>
      </div>

      {/* Conditional Rendering of Speakers */}
      {speakers.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {speakers.map((speaker, index) => (
            <div key={speaker.id} className="text-center">
              <div
                className={`w-20 h-20 overflow-hidden shadow-sm sm:shadow-md ${getImageBorderRadius(index)}`}
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-700 font-medium">{description}</p> // Show description if no speakers
      )}

      {/* Speaker Names */}
      {speakers.length > 0 && (
        <p className="text-sm text-gray-700 font-medium">
          {speakers.map((speaker) => speaker.name).join(", ")}
        </p>
      )}
    </div>
  );
};              

export default EventCard;
