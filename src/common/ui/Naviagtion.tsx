import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { scrollToTop } from "../../utils/scrollTo";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const scrollToSection = () => {
    const section = document.getElementById("past_events");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const section = document.getElementById("about_section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.state?.scrollToAbout) scrollToAbout();
    if (location.state?.scrollToPastEvents) scrollToSection();
  }, [location]);

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
      path: "https://techfest.oceanacademy.in",
      label: "Past Edition",
      hoverLabel: "TechFest 2025",
      external: true,
    },
    { path: "/about", label: "About" },
    { path: "/speakers", label: "Speakers" },
    { path: "/agenda", label: "Agenda" },
    { path: "/past-events", label: "Past Events" },
  ];

  return (
    <main className="bg-white p-5 w-full sticky top-0 z-50 shadow-md border-b border-gray-200">
      <section className="flex justify-between items-center max-w-[1400px] mx-auto">

        {/* Logo */}
        <h1 className="text-gray-900 text-2xl font-semibold">Logo</h1>

        {/* Hamburger */}
        {!menuOpen && (
          <button
            className="lg:hidden flex flex-col justify-between w-5 h-4"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-full h-[3px] bg-gray-800 rounded"></span>
            <span className="block w-full h-[3px] bg-gray-800 rounded"></span>
            <span className="block w-full h-[3px] bg-gray-800 rounded"></span>
          </button>
        )}

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-10 text-[16px] font-medium items-center">
          {navItems.map(({ path, label, hoverLabel, external }) =>
            external ? (
              <a
                key={path}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-gray-800 hover:text-[#01C1FB]"
              >
                {label}
                <span className="absolute left-1/2 -translate-x-1/2 top-[140%]
                  px-3 py-2 text-sm rounded-md bg-gray-900 text-white
                  opacity-0 scale-95 transition-all duration-300
                  group-hover:opacity-100 group-hover:scale-100">
                  {hoverLabel}
                </span>
              </a>
            ) : (
              <Link
                key={path}
                to={path}
                onClick={(e) => handleClick(e, path)}
                className={`relative text-gray-800 hover:text-[#01C1FB]
                after:absolute after:left-0 after:bottom-[-6px]
                after:w-full after:h-[2px] after:bg-[#01C1FB]
                after:opacity-0 hover:after:opacity-100 transition-all duration-300
                ${isActive(path) ? "text-[#01C1FB] after:opacity-100" : ""}`}
              >
                {label}
              </Link>
            )
          )}

          <Link
            to="/ticket-booking"
            onClick={(e) => handleClick(e, "/ticket-booking")}
            className="px-4 py-[12px] rounded-lg text-white font-semibold
            bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
            shadow-md hover:scale-105 transition-all duration-300"
          >
            Book Your Tickets
          </Link>
        </div>
      </section>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-[270px] bg-white h-screen
        shadow-xl z-50 transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-5 right-5 w-8 h-8 border border-gray-400 rounded-full
          flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <span className="absolute block w-4 h-[2px] bg-gray-800 rotate-45"></span>
          <span className="absolute block w-4 h-[2px] bg-gray-800 -rotate-45"></span>
        </button>

        <div className="flex flex-col px-6 py-16 space-y-6">
          {navItems.map(({ path, label, hoverLabel, external }) =>
            external ? (
              <a key={path} href={path} target="_blank"
                className="text-gray-800 text-[18px]">
                {label}
                <span className="block text-sm text-gray-500">{hoverLabel}</span>
              </a>
            ) : (
              <Link
                key={path}
                to={path}
                onClick={(e) => handleClick(e, path)}
                className={`text-gray-800 text-[16px]
                ${isActive(path) ? "text-[#01C1FB]" : ""}`}
              >
                {label}
              </Link>
            )
          )}

          <Link
            to="/ticket-booking"
            onClick={(e) => handleClick(e, "/ticket-booking")}
            className="px-4 py-3 rounded-lg text-white font-semibold
            bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
            text-center shadow-md hover:scale-105 transition-all"
          >
            Book Your Tickets
          </Link>
        </div>
      </div>
    </main>
  );
}
