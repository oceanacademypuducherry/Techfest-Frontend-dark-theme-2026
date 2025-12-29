import {
  CK,
  CODE_CLASH,
  IWCCT,
  TECH_TALKS,
  WORKSHOP,
  SFM,
  TECHFEST2025,
  INTERNSHIP,
  CODE_CLASH_2025
} from "../../../assets/images/pastEvent";

export default function PastEvent() {
  const PINK = "#F467B5";

  const eventData = [
    { images: IWCCT, title: "🚀 Diving into Tech's Future!" },
    { images: CODE_CLASH, title: "Who'll break the code first... or the keyboard? 😀" },
    { images: TECH_TALKS, title: "Casual 🎙️ chats with a side of 🚀 tech wisdom 🚭" },
    { images: SFM, title: "🔥 Countdown to the smokeless zone begins!" },
    { images: WORKSHOP, title: "Learn, build, and sneak in coffee breaks! ☕💻" },
    { images: CK, title: "Guess what he is asking? 🌟" },
    { images: TECHFEST2025, title: "🌐 Witness the next wave of innovation begin!" },
    { images: INTERNSHIP, title: "💼 Internship Drive — Career Launchpad!" },
    { images: CODE_CLASH_2025, title: "⚡ Ideas spark, solutions fly, logic rules." },
  ];

  return (
    <article
      id="past_events"

      className="bg-bgcolor text-white py-12 px-4"
    >
      <main className="max-w-6xl mx-auto text-center">
        
        {/* BADGE */}
        <div className="inline-block bg-[#0c1d2e] text-blue px-6 py-3 mb-6 rounded-full border border-[#0d3a4c]">

          Past Events
        </div>

        {/* TITLE */}
        <h2 className="mb-6 text-[28px] sm:text-4xl md:text-5xl font-semibold leading-tight">
          Power of Innovation{" "}

          <span className="text-[#01C1FB]">Through</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#9b5de5] to-[#EE4C9C]">
            Previous Highlights
          </span>
        </h2>

        {/* SUBTITLE */}

        <p className="text-gray-600 text-[15px] sm:text-[18px] max-w-3xl mx-auto leading-7">
          From inspiring talks to breakthrough showcases, explore the remarkable
          moments that shaped our journey.
        </p>

        {/* CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {eventData.map((event, index) => (
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
              {/* IMAGE */}
              <div className="p-2 bg-white">
                <img
                  src={event.images}
                  alt="event"
                  loading="lazy"
                  className="w-full object-contain rounded-[10px]"
                />
              </div>

              {/* TITLE */}
              <div
                className="
                  h-[70px]
                  flex items-center justify-center
                  text-center
                  px-3
                  font-medium
                  text-[14px] sm:text-[16px]

                  text-white
                "
                style={{ backgroundColor: PINK }}
              >
                {event.title}
              </div>
            </div>
          ))}
        </section>

      </main>
    </article>
  );
}
