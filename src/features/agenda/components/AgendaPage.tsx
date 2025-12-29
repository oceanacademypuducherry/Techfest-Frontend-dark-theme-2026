import React, { useEffect, useState } from "react";
import { Navigation, Navbar, Footer } from "../../../common/ui/index";
import { Header, HallToggle, EventCard } from "../ui/index";
import { eventData } from "../utils/eventData";
import { scrollToTop } from "../../../utils/scrollTo";

const AgendaPage: React.FC = () => {
  const [selectedHall, setSelectedHall] = useState("Mark Hall");
  const halls = ["Mark Hall", "Musk Hall", "Sundar Hall"];

  // Filter events based on the selected hall
  const filteredEvents =
    eventData.find(event => event.hall === selectedHall)?.events || [];

  useEffect(() => {
    scrollToTop();
  }, [selectedHall]);

  return (
    <>
      <Navigation />

      <div className="bg-white">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-4 px-4">

          {/* TITLE */}
          <h2 className="mt-6 mb-4 text-[30px] sm:text-[36px] font-semibold text-gray-900">
            One Day Of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              Innovation and Learning
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-600 text-[18px] max-w-3xl mx-auto leading-7">
            Join us for inspiring day of keynotes, workshops, and networking across
            three specialized halls
          </p>
        </div>

        {/* Hall Toggle */}
        <div className="flex flex-col md:flex-row justify-center items-center px-3 sm:px-6 py-2 mb-8 sticky top-0 z-10  sm:static">
          <HallToggle
            halls={halls}
            selectedHall={selectedHall}
            setSelectedHall={setSelectedHall}
          />
        </div>

        {/* Event Cards */}
        <div className="space-y-6 w-[92%] min-h-[88%] max-w-screen-xl mb-10 mx-auto">
          {filteredEvents.map(event => (
            <div key={event.id}>
              <EventCard
                time={event.time}
                title={event.title}
                speakers={event.speakers || []}
                description={event.description}
              />
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AgendaPage;
