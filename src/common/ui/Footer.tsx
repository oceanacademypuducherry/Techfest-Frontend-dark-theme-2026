import { discord, linkedin, instagram, youtube } from "../../assets/images/footer";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { BiSupport } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { scrollToTop } from "../../utils/scrollTo";
import { Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";



export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();



const DiscordOutline = ({ size = 22, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 71 55"
    fill="none"
    stroke={color}
    strokeWidth="5.0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Outer Discord shape */}
    <path d="M60.1 4.5c-4.7-2.2-9.7-3.7-14.9-4.4l-2 4
             c-5.6-.8-11.2-.8-16.8 0l-2-4
             c-5.2.7-10.2 2.2-14.9 4.4
             C1.8 16.2-1.3 28.6 0.7 40.8
             c5.5 4 11.7 7 18.4 8.7l2.9-4
             c-3.3-1.2-6.4-2.9-9.3-5
             .8-.6 1.6-1.2 2.4-1.8
             5.6 2.6 11.8 4 18.4 4
             s12.8-1.4 18.4-4
             c.8.6 1.6 1.2 2.4 1.8
             -2.9 2.1-6 3.8-9.3 5
             l2.9 4
             c6.7-1.7 12.9-4.7 18.4-8.7
             C69.6 27.3 66.6 14.9 60.1 4.5z" />

    {/* Eyes */}
    <path d="M26 30.5c0 2.2-1.6 4-3.6 4s-3.6-1.8-3.6-4 1.6-4 3.6-4 3.6 1.8 3.6 4z" />
    <path d="M48.6 30.5c0 2.2-1.6 4-3.6 4s-3.6-1.8-3.6-4 1.6-4 3.6-4 3.6 1.8 3.6 4z" />
  </svg>
);



  const scrollToAbout = () => {
    const section = document.getElementById("about_section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPastEvents = () => {
    const section = document.getElementById("past_events");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleFooterClick = (path) => {
    if (path === "/about") {
      location.pathname === "/"
        ? scrollToAbout()
        : navigate("/", { state: { scrollToAbout: true } });
      return;
    }

    if (path === "/past-events") {
      location.pathname === "/"
        ? scrollToPastEvents()
        : navigate("/", { state: { scrollToPastEvents: true } });
      return;
    }

    scrollToTop();
    navigate(path);
  };

  return (
    <footer className="bg-gradient-to-b from-[#0B0F1A] to-[#060913] text-gray-300">

      {/* ================= TOP SECTION ================= */}
 <div
  className="max-w-7xl mx-auto px-6 py-6
             grid grid-cols-1 md:grid-cols-[auto_auto_auto]
             justify-center
             gap-6 md:gap-24 xl:gap-64
             text-center md:text-left"
>



  {/* LEFT: BRAND + SOCIAL ICONS */}
  <div className="flex flex-col items-center md:items-start">
    <h2 className="text-xl font-semibold text-white">Tech Fest 2026</h2>
    <p className="text-sm text-gray-400 mt-4 leading-6 max-w-[360px]">
      Join us for the biggest tech celebration of the year. Innovation, inspiration, and incredible experiences await.
    </p>

    {/* SOCIAL ICONS */}
    <div className="flex gap-6 mt-6 justify-center md:justify-start">
  {[
    {
      Icon: Linkedin,
      link: "https://www.linkedin.com/company/74764079",
      label: "LinkedIn",
    },
    {
      Icon: Instagram,
      link: "https://www.instagram.com/oceanacademy_official/",
      label: "Instagram",
    },
    {
      Icon: Youtube,
      link: "https://www.youtube.com/@ocean_academy",
      label: "YouTube",
    },
     { Icon: DiscordOutline, link: "https://discord.gg/TEFER5Kuzu", label: "Discord" },
  ].map(({ Icon, link, label }, i) => (
    <div key={i} className="relative group">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#01C1FB] transition-colors duration-200"
      >
        <Icon size={22} strokeWidth={1.8} />
      </a>

      {/* Tooltip */}
      <span
        className="
          absolute -top-8 left-1/2 -translate-x-1/2
          bg-black text-white text-xs px-2 py-1 rounded
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
          whitespace-nowrap pointer-events-none
        "
      >
        {label}
      </span>
    </div>
  ))}
</div>



  </div>

  {/* QUICK LINKS */}
  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-sm font-semibold text-white tracking-wider mb-4">QUICK LINKS</h3>
    <ul className="space-y-3 text-sm text-gray-400">
      <li onClick={() => handleFooterClick("/about")} className="hover:text-white cursor-pointer">About</li>
      <li onClick={() => handleFooterClick("/agenda")} className="hover:text-white cursor-pointer">Agenda</li>
      <li onClick={() => handleFooterClick("/speakers")} className="hover:text-white cursor-pointer">Speakers</li>
    </ul>
  </div>

  {/* EXPLORE */}
  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-sm font-semibold text-white tracking-wider mb-4">EXPLORE</h3>
    <ul className="space-y-3 text-sm text-gray-400">
      <li onClick={() => handleFooterClick("/past-events")} className="hover:text-white cursor-pointer">Past Events</li>
      <li onClick={() => window.open("https://techfest25.oceanacademy.in", "_blank")} className="hover:text-white cursor-pointer">Past Editions</li>
    </ul>
  </div>

</div>



      {/* ================= CONTACT ROW ================= */}
      <div className="border-t border-white/10" />

      <div className="max-w-7xl mx-auto px-6 py-4 
                flex flex-col md:flex-row 
                items-center justify-center 
                gap-4 md:gap-10 text-sm text-gray-400 text-center md:text-left">
  <div className="flex items-center gap-2"> <MdEmail /> <Link
                  to="mailto:oatechfest@gmail.com"
                  className=" text-blue-600"
                >
                  oatechfest@gmail.com
                </Link> </div>
  <div className="flex items-center gap-2"> <FaPhoneAlt /> 0413-22 </div>
  <div className="flex items-center gap-2"> <MdLocationOn /> JIPMER, Puducherry </div>
</div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="px-6 py-5 flex flex-col items-center gap-3 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-[#F3A828]"
            onClick={() => {
              navigate("/faq");
              scrollToTop();
            }}
          >
            <BiSupport /> Support / FAQ
          </div>

          <span
            className="cursor-pointer hover:text-[#F3A828]"
            onClick={() => {
              navigate("/privacy-policy");
              scrollToTop();
            }}
          >
            Privacy Policy / Terms & Conditions
          </span>
        </div>

        <p>
          <span className="text-white font-medium">Tech Fest 2026</span> — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
