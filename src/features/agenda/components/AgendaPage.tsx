import React, { useEffect, useState } from "react";
import { Navigation, Navbar, Footer } from "../../../common/ui/index";
import { Header, HallToggle, EventCard } from "../ui/index";
import { eventData } from "../utils/eventData";
import { scrollToTop } from "../../../utils/scrollTo";

const AgendaPage: React.FC = () => {
  const [selectedHall, setSelectedHall] = useState("Mark Hall");
  const halls = ["Mark Hall", "Musk Hall", "Sundar Hall"];

  // Filter events based on selected hall
  const filteredEvents =
    eventData.find(event => event.hall === selectedHall)?.events || [];

  useEffect(() => {
    scrollToTop();
  }, [selectedHall]);

  // 🔽 DOWNLOAD HANDLER
  const handleDownloadSchedule = () => {
    const link = document.createElement("a");
    link.href = "/agenda-full-schedule.pdf";
    link.download = "TechFest_Agenda_Schedule.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navigation />

      {/* PAGE BACKGROUND */}
      <div className="bg-[#0A0C12] min-h-screen">
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center mb-6 px-4">
          <h2 className="mt-6 mb-4 text-[30px] sm:text-[36px] font-semibold text-white">
            A Day Of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              Innovation and Learning
            </span>
          </h2>

          <p className="text-gray-300 text-[18px] max-w-3xl mx-auto leading-7">
            Join us for an inspiring day of keynotes, workshops, and networking
            across three specialized halls
          </p>
        </div>

        {/* HALL TOGGLE */}
        <div
          className="flex flex-col md:flex-row justify-center items-center
                     px-3 sm:px-6 py-3 mb-8 sticky top-0 z-10 sm:static"
        >
          <HallToggle
            halls={halls}
            selectedHall={selectedHall}
            setSelectedHall={setSelectedHall}
          />
        </div>

        {/* EVENT CARDS */}
        <div className="space-y-6 w-[92%] max-w-screen-xl mb-12 mx-auto">
          {filteredEvents.map(event => (
            <EventCard
              key={event.id}
              time={event.time}
              title={event.title}
              speakers={event.speakers || []}
              description={event.description}
            />
          ))}
        </div>

        {/* DOWNLOAD BUTTON */}
        <div className="flex justify-center mb-16">
          <button
            onClick={handleDownloadSchedule}
            className="px-8 py-3 rounded-full
                       bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]
                       text-white text-[16px] font-semibold
                       hover:scale-105 transition-transform duration-200"
          >
            Download Full Schedule
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AgendaPage;
