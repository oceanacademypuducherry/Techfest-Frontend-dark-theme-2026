import { discord, linkedin, instagram, youtube } from "../../assets/images/footer";
import { useLocation, useNavigate } from "react-router-dom";
import { BiSupport } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { scrollToTop } from "../../utils/scrollTo";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/faq");
    scrollToTop();
  };

  const handlePrivacy = () => {
    navigate("/privacy-policy");
    scrollToTop();
  };

  return (
    <footer className="bg-[#F4F3F6] text-gray-800 p-8  border-gray-200">
      <div className="flex flex-col items-center text-center gap-4">

        {/* ---------- HEADING ---------- */}
        <h2 className="text-lg font-medium text-gray-900">
          Connect with us
        </h2>

        {/* ---------- SOCIAL ICONS ---------- */}
        <div className="flex justify-center gap-5">
          {[
            { img: linkedin, alt: "LinkedIn", link: "https://www.linkedin.com/company/74764079" },
            { img: instagram, alt: "Instagram", link: "https://www.instagram.com/oceanacademy_official/" },
            { img: youtube, alt: "YouTube", link: "https://www.youtube.com/@ocean_academy" },
            { img: discord, alt: "Discord", link: "https://discord.gg/TEFER5Kuzu" }
          ].map((icon, index) => (
            <div key={index} className="relative group">
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-md flex items-center justify-center
                           border  transition-all
                           hover:bg-gray-100 hover:border-[#F3A828]"
              >
                <img
                  src={icon.img}
                  alt={icon.alt}
                  className="w-5 h-5"
                  draggable="false"
                />
              </a>

              {/* Tooltip */}
              <span
                className="absolute left-1/2 -translate-x-1/2 -top-8 
                           bg-gray-900 text-white text-xs px-2 py-1 rounded 
                           opacity-0 group-hover:opacity-100 transition-all 
                           whitespace-nowrap pointer-events-none"
              >
                {icon.alt}
              </span>
            </div>
          ))}
        </div>

        {/* ---------- CONTACT DETAILS ---------- */}
        <div className="flex flex-col text-sm gap-2 mt-3 text-gray-600">

          {/* Email */}
          <div className="flex mb-3 items-center justify-center gap-2">
            <MdEmail />
            <p>techfest2026@gmail.com</p>
          </div>

          {/* Phone + Location */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p>0413-2204580</p>
            </div>

            <div className="flex items-center gap-2">
              <MdLocationOn />
              <p>PTU, Puducherry</p>
            </div>
          </div>
        </div>

        {/* ---------- SUPPORT ---------- */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <BiSupport />
          <p
            onClick={handleClick}
            className="cursor-pointer hover:text-[#F3A828]"
          >
            Support / FAQ
          </p>
        </div>

        {/* ---------- PRIVACY ---------- */}
        <p
          onClick={handlePrivacy}
          className="text-sm text-gray-600 cursor-pointer hover:text-[#F3A828]"
        >
          Privacy Policy / Terms & Conditions
        </p>

        {/* ---------- COPYRIGHT ---------- */}
        <p className="text-gray-500 text-sm mt-2">
          <strong className="text-gray-900">Tech Fest 2025</strong> — All rights reserved.
        </p>

      </div>
    </footer>
  );
}
