import React, { useState } from "react";
import { Navigation } from "../../../common/ui";
import { speakersData } from "../utils/speaker";
import SpeakerModal from "./SpeakerModal";

const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <>
      <Navigation />



      <main className="bg-gray-50 px-3 sm:px-6 md:px-0 xl:px-10 text-center">
        {/* Heading */}
        <h2 className="mb-4 pt-5 text-[26px] sm:text-4xl md:text-5xl font-semibold text-gray-900">

          All{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E64F8F] to-[#671AD2]">
            Speakers
          </span>
        </h2>


        <p className="text-cyan-600 text-[15px] sm:text-[18px] mb-8">

          Explore our complete lineup of 20 industry experts
        </p>

        {/* Speakers Grid */}
        <div className="mx-auto max-w-[1600px] px-2 sm:px-6 md:px-12 lg:px-20 pb-16">

          <div
            className="
              grid gap-5
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              xl:grid-cols-4
            "
          >

            {speakersData.map((person, index) => (
              <div
                key={index}
                className="
                  relative rounded-xl overflow-hidden cursor-pointer
                  hover:scale-[1.03] transition-all duration-300

                  bg-white border border-gray-200
                  shadow-md hover:shadow-xl

                "
                onClick={() =>
                  person.socialLinks?.linkedin &&
                  window.open(person.socialLinks.linkedin, "_blank")
                }
              >
                {/* Image */}

                <div
                  className="
                    w-full
                    h-[260px]
                    sm:h-[280px]
                    md:h-[300px]
                    xl:h-[320px]
                    relative
                  "
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover bg-gray-100 object-top brightness-50"
                  />

                  {/* Name & Achievement */}
                  <div
                    className="
                      absolute bottom-0 w-full
                      bg-gradient-to-t to-transparent
                      px-4 py-3
                    "
                  >
                    <h3
                      className="
                        text-white font-semibold
                        text-[16px] sm:text-lg
                      "
                    >
                      {person.name}
                    </h3>

                    <p
                      className="
                        text-white
                        text-[13px] sm:text-sm
                        mt-1 line-clamp-2
                      "
                    >

                      {person.achievements}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}
    </>
  );
};

export default Speakers;
