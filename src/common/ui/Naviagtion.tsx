import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { scrollToTop } from "../../utils/scrollTo";
import techfestImg from "../../assets/images/hero/techfest.png";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Routes where BACK button should appear */
 const ticketPages = [
  "/ticket-booking",
  "/ticket-summary",
  "/ticket-confirmation",
];

const isTicketPage = ticketPages.includes(location.pathname);


  // useEffect(() => {
  //   setActiveTab(location.pathname);
  // }, [location.pathname]);

  useEffect(() => {
  // Only auto-set active tab for real routes
  if (location.pathname !== "/") {
    setActiveTab(location.pathname);
  }
}, [location.pathname]);


  /* Auto close mobile menu on resize >= 1280px */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("past_events");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const section = document.getElementById("about_section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   if (location.state?.scrollToAbout) scrollToAbout();
  //   if (location.state?.scrollToPastEvents) scrollToSection();
  // }, [location]);

  useEffect(() => {
  if (location.state?.scrollToPastEvents) {
    setActiveTab("/past-events");
    scrollToSection();
  }

  if (location.state?.scrollToAbout) {
    setActiveTab("/about");
    scrollToAbout();
  }
}, [location.state]);


  const handleClick = (e, path) => {
    e.preventDefault();
    setActiveTab(path);
    setMenuOpen(false);

    if (path === "/about") {
      location.pathname === "/"
        ? scrollToAbout()
        : navigate("/", { state: { scrollToAbout: true } });
      return;
    }

    if (path === "/past-events") {
      location.pathname === "/"
        ? scrollToSection()
        : navigate("/", { state: { scrollToPastEvents: true } });
      return;
    }

    scrollToTop();
    navigate(path);
  };

  const isActive = (path) => activeTab === path;

  const navItems = [
    { path: "/", label: "Home" },
    {
      path: "https://techfest25.oceanacademy.in",
      label: "Past Edition",
      hoverLabel: "TechFest 2025",
      external: true,
    },
    { path: "/about", label: "About" },
    { path: "/speakers", label: "Speakers" },
    { path: "/agenda", label: "Agenda" },
    { path: "/sponsors", label: "Sponsors" },
    { path: "/past-events", label: "Past Events" },
  ];

  return (
    <main className="bg-[#0A0C12] p-3 w-full sticky top-0 z-50 shadow-lg border-b border-white/10">
      <section className="flex justify-between items-center max-w-[1400px] mx-auto">

        {/* LOGO */}
        <img
          src={techfestImg}
          alt="Techfest Logo"
          className="h-[80px] sm:h-24 object-contain"
        />

        {/* HAMBURGER (below 1280px) */}
        {!menuOpen && (
          <button
            className="xl:hidden flex flex-col justify-between w-5 h-4"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-full h-[3px] bg-white rounded"></span>
            <span className="block w-full h-[3px] bg-white rounded"></span>
            <span className="block w-full h-[3px] bg-white rounded"></span>
          </button>
        )}

        {/* ================= DESKTOP NAV (>=1280px) ================= */}
        <div className="hidden xl:flex space-x-10 text-[16px] font-medium items-center">
          {navItems.map(({ path, label, hoverLabel, external }) =>
            external ? (
              <div key={path} className="relative group">
  <a
    href={path}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-[#01C1FB] cursor-pointer"
  >
    {label}
  </a>

  {/* Tooltip */}
  <span
    className="absolute left-1/2 -translate-x-1/2 top-[130%]
    px-3 py-1 text-sm rounded-md bg-black text-white
    opacity-0 scale-95 transition-all duration-300
    group-hover:opacity-100 group-hover:scale-100
    whitespace-nowrap"
  >
    {hoverLabel}
  </span>
</div>

            ) : (
              <Link
  key={path}
  to={path}
  onClick={(e) => handleClick(e, path)}
  className={`relative transition-all duration-300
    ${isActive(path) ? "text-[#01C1FB]" : "text-white/80 hover:text-[#01C1FB]"}
    
    after:absolute after:left-0 after:bottom-[-6px]
    after:w-full after:h-[2px] after:bg-[#01C1FB]
    after:transition-all after:duration-300
    ${isActive(path) ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}
  `}
>
  {label}
</Link>

            )
          )}

          {isTicketPage ? (
  <Link
    to="/ticket-booking"
    onClick={() => scrollToTop()}
    className="px-4 py-3 rounded-lg text-white font-semibold
    bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
    shadow-md hover:scale-105 transition-all"
  >
    Book Your Tickets
  </Link>
) : (
   <Link
              to="/ticket-booking"
              onClick={(e) => handleClick(e, "/ticket-booking")}
              className="px-4 py-3 rounded-lg text-white font-semibold
              bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
              shadow-md hover:scale-105 transition-all"
            >
              Book Your Tickets
            </Link>
//     <button
//   disabled
//   className="
//     px-7 py-3 text-[16px] text-white font-semibold rounded-lg
//     bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
//     cursor-not-allowed
//     shadow-lg
//     flex items-center justify-center
//   "
// >
//   Tickets Opening Soon
// </button>
)}

      
        </div>
      </section>

      {/* ================= MOBILE OVERLAY (<1280px) ================= */}
      {menuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* ================= MOBILE DRAWER (<1280px) ================= */}
      <div
        className={`xl:hidden fixed top-0 right-0 w-[270px] bg-[#0A0C12] h-screen
        shadow-xl z-50 transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-5 right-5 w-8 h-8 border border-white/30 rounded-full
          flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <span className="absolute block w-4 h-[2px] bg-white rotate-45"></span>
          <span className="absolute block w-4 h-[2px] bg-white -rotate-45"></span>
        </button>

        <div className="flex flex-col px-6 py-16 space-y-6">
          {navItems.map(({ path, label, hoverLabel, external }) =>
            external ? (
              <div key={path}>
                <span className="text-white text-[18px]">{label}</span>
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/60 mt-1"
                >
                  {hoverLabel}
                </a>
              </div>
            ) : (
              <Link
                key={path}
                to={path}
                onClick={(e) => handleClick(e, path)}
                className={`text-white text-[16px]
                ${isActive(path) ? "text-[#01C1FB]" : ""}`}
              >
                {label}
              </Link>
            )
          )}

          {isTicketPage ? (
  <Link
    to="/ticket-booking"
    onClick={() => {
      scrollToTop();
      setMenuOpen(false);
    }}
    className="px-4 py-3 rounded-lg text-white font-semibold
    bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
    text-center shadow-md"
  >
    Book Your Tickets
  </Link>
) : (
   // <Link
            //   to="/ticket-booking"
            //   onClick={(e) => handleClick(e, "/ticket-booking")}
            //   className="px-4 py-3 rounded-lg text-white font-semibold
            //   bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
            //   text-center shadow-md"
            // >
            //   Book Your Tickets
            // </Link>
   <button
  disabled
  className="
    px-4 py-3 text-[16px] text-white font-semibold rounded-lg
    bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
    cursor-not-allowed
    shadow-lg
    flex items-center justify-center
  "
>
  Tickets Opening Soon
</button>
)}

           
          
        </div>
      </div>
    </main>
  );
}
