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

export default function PastEvent() {
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
    <article id="past_events" className="bg-bgcolor text-white py-8 sm:py-12 px-4">
      <main className="max-w-6xl mx-auto text-center">
{/* Badge */}
        {/* <div
          className="inline-block bg-white/5 text-[#01C1FB]
          text-[16px] px-6 py-3 mb-0 sm:mb-5 rounded-full border border-[#01C1FB]/30 backdrop-blur"
        >
          Past Event
        </div> */}
       

       


{/* <div className="flex flex-col items-center gap-2 mb-6">
  <span className="text-[#01C1FB] text-[13px] tracking-widest font-semibold uppercase">
    About the Event
  </span>
  <span className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#01C1FB] to-transparent"></span>
</div> */}

{/* <div className="flex justify-center mb-6">
  <div className="
    px-6 py-2
    text-[13px] tracking-widest font-semibold uppercase
    text-white
    rounded-full
    bg-gradient-to-r from-cyan-400 to-pink-500
    shadow-[0_0_20px_rgba(0,193,251,0.6)]
  ">
    About the Event
  </div>
</div> */}

{/* <div className="flex justify-center mb-6">
  <div className="flex items-center overflow-hidden rounded-full border border-white/10 bg-white/5">
    <div className="px-3 py-2 bg-[#01C1FB] text-black">
      📅
    </div>
    <div className="px-5 py-2 text-[13px] tracking-widest uppercase text-white font-semibold">
      About the Event
    </div>
  </div>
</div> */}


{/* <div className="flex justify-center mb-6">
  <div className="p-[1px] rounded-full bg-gradient-to-r from-cyan-400 to-pink-500">
    <div className="
      px-6 py-2
      rounded-full
      bg-[#0B0F1A]
      text-[13px] tracking-widest uppercase
      text-white font-semibold
    ">
      About the Event
    </div>
  </div>
</div> */}


{/* <div className="flex justify-center mb-6">
  <div className="
    px-6 py-2
    bg-pink-500
    text-white
    text-[13px] tracking-widest uppercase font-semibold
    clip-path-[polygon(0_0,100%_0,90%_50%,100%_100%,0_100%,10%_50%)]
  ">
    About the Event
  </div>
</div> */}


<div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 mb-6">
  <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-l from-[#01C1FB] to-transparent"></span>

  <span className="text-[#01C1FB] sm:text-[18px] text-[17px] tracking-[0.0em] sm:tracking-[0.1em] ">
    Past Events
  </span>

  <span className="h-[1px] sm:h-[4px] w-24 bg-gradient-to-r from-[#01C1FB] to-transparent"></span>
</div>

{/* <div className="flex justify-center mb-6">
  <div className="
    px-6 py-2
    rounded-full
    bg-white/10
    backdrop-blur-lg
    border border-white/20
    text-white
    text-[13px] tracking-widest uppercase font-semibold
  ">
    About the Event
  </div>
</div> */}


{/* <div className="flex items-center justify-center gap-3 mb-6">
  <span className="w-6 h-[2px] bg-[#01C1FB]"></span>
  <span className="w-2 h-2 border border-[#01C1FB] rotate-45"></span>

  <div className="
    px-5 py-2
    border border-[#01C1FB]
    text-[#01C1FB]
    text-[13px] tracking-widest uppercase font-semibold
  ">
    About the Event
  </div>

  <span className="w-2 h-2 border border-[#01C1FB] rotate-45"></span>
  <span className="w-6 h-[2px] bg-[#01C1FB]"></span>
</div> */}







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
          {/* <Link
  to="/ticket-booking"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="px-6 py-3 rounded-lg text-white font-semibold
    bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
    hover:scale-105 transition-all"
>
  Book Your Tickets
</Link> */}


          <button
              // onClick={() => navigate("/ticket-booking")}
              className="px-7 py-3 text-[16px] font-semibold rounded-lg
              bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
              shadow-lg hover:scale-105 transition-all duration-300
              flex items-center justify-center"
            >
             Tickets Opening Soon
              <span className="ml-2 text-2xl font-bold">→</span>
            </button>
        </div>

      </main>
    </article>
  );
}
