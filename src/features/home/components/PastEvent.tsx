import {
  CK,
  CODE_CLASH,
  IWCCT,
  TECH_TALKS,
  WORKSHOP,
  SFM,
  TECHFEST,
  INTERNSHIP,
  CODE_CLASH_2025
} from "../../../assets/images/pastEvent";
import { Link } from "react-router-dom";
import React, { forwardRef } from "react";

const PastEvent = forwardRef((props, ref) => {
  const PINK = "#F467B5";
  


  const eventData = [
    { images: TECHFEST, title: "🌐 Witness the next wave of innovation begin!" },
    { images: CODE_CLASH_2025, title: "⚡ Ideas spark, solutions fly, logic rules." },
    { images: SFM, title: "🔥 Countdown to the smokeless zone begins!" },
    { images: CODE_CLASH, title: "Who'll break the code first... or the keyboard? 😀" },
    { images: TECH_TALKS, title: "Casual 🎙️ chats with a side of 🚀 tech wisdom 🚭" },
    { images: WORKSHOP, title: "Learn, build, and sneak in coffee breaks! ☕💻" },
    { images: CK, title: "Guess what he is asking? 🌟" },
    { images: IWCCT, title: "🚀 Diving into Tech's Future!" },
    { images: INTERNSHIP, title: "💼 Internship Drive — Career Launchpad!" },
  ];

  const [techFest, ...otherEvents] = eventData;

  return (
     <article
  id="past_events"
  className="bg-bgcolor text-white py-8 sm:py-12 px-4 scroll-mt-40"
>
      <main className="max-w-6xl mx-auto text-center">


<div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 mb-6">
  <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-l from-[#01C1FB] to-transparent"></span>

  <span className="text-[#01C1FB] sm:text-[18px] text-[17px] tracking-[0.0em] sm:tracking-[0.1em] ">
    Past Events
  </span>

  <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-r from-[#01C1FB] to-transparent"></span>
</div>









        {/* TITLE */}
        <h2 className="mb-8 sm:mb-16 text-[28px] sm:text-4xl md:text-5xl font-semibold ">
          Power of Innovation <span className="text-[#01C1FB]">Through</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C]">
            Previous Highlights
          </span>
        </h2>
<div
  className=" flex items-center justify-center text-white font-semibold text-[20px] sm:text-[22px] md:text-[26px]"
  
>
  TechFest 2025
</div>
        {/* GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-0 sm:mt-8 p-6">




          {/* 🔥 TECHFEST – ALWAYS SINGLE ROW */}
          <div
            className="
              col-span-1
              sm:col-span-2
              lg:col-span-3
              rounded-[20px]
              overflow-hidden
              border-2
              shadow-lg
              transition-all duration-300
              hover:scale-[1.02]
            "
            style={{ borderColor: PINK, backgroundColor: "white" }}
          >
            <div className="p-2 sm:p-3 bg-white">
  <img
    src={techFest.images}
    alt="TechFest"
    className="
      w-full
      object-contain
      rounded-[10px]
      sm:rounded-[12px]
      aspect-[16/9]
      sm:aspect-auto
    "
  />
</div>



            <div
              className="h-[70px] flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: PINK }}
            >
              {techFest.title}
            </div>
          </div>
          {/* OTHER EVENTS TITLE */}
<div className="col-span-1 sm:col-span-2 lg:col-span-3  ">
  <h3 className="text-center text-white font-semibold text-[20px] sm:text-[22px] md:text-[26px]">
    Other Events 
  </h3>
</div>


          {/* 🔹 OTHER EVENTS */}
          {otherEvents.map((event, index) => (
            <div
              key={index}
              className="
                rounded-[20px]
                overflow-hidden
                border-2
                shadow-lg
                transition-all duration-300
                hover:scale-[1.03]
              "
              style={{ borderColor: PINK, backgroundColor: "white" }}
            >
              <div className="p-2 bg-white">
                <img
                  src={event.images}
                  alt="event"
                  className="w-full object-contain rounded-[10px]"
                />
              </div>

              <div
                className="h-[70px] flex items-center justify-center text-white text-[14px] sm:text-[16px]"
                style={{ backgroundColor: PINK }}
              >
                {event.title}
              </div>
            </div>
          ))}
        </section>

        {/* BUTTON */}
        <div className="flex justify-center mt-0 sm:mt-10">
          <Link
  to="/ticket-booking"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="px-6 py-3 rounded-lg text-white font-semibold
    bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
    hover:scale-105 transition-all"
>
  Book Your Tickets
</Link>


           {/* <button
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
</button> */}
        </div>

      </main>
    </article>
  );
});
export default PastEvent;