import React from "react";
import { X } from "lucide-react";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";



interface SpeakerModalProps {
  speaker: any;
  onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
    console.log(speaker,"speaker");
    
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#111826] w-full max-w-5xl rounded-3xl shadow-2xl animate-fadeIn 
            max-h-[90vh] overflow-y-auto">
        
        {/* HEADER CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition"
          >
            <X size={26} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
          
          {/* LEFT SECTION */}
          <div className="flex flex-col items-center text-center border-r border-gray-700 lg:pr-6">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-[#00C2FF]"
            />

            <h2 className="text-2xl font-bold text-white mt-4">{speaker.name}</h2>
            {/* <p className="text-pink-400 mt-1">{speaker.role}</p> */}
            <p className="text-gray-300 text-sm">{speaker.achievements}</p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6 text-white ">
              {speaker?.socialLinks?.linkedin && (
                <a href={speaker.socialLinks.linkedin} target="_blank" className="bg-[#1F2937] rounded-xl h-8 w-8 flex items-center justify-center">
                  {/* <i className="fa fa-linkedin text-xl"></i> */}
                  <SlSocialLinkedin className="text-[15px]"/>

                </a>
              )}
              {speaker?.socialLinks?.instagram && (
                <a href={speaker.socialLinks.instagram} target="_blank" className="bg-[#1F2937] rounded-xl h-8 w-8 flex items-center justify-center">
                  {/* <i className="fa fa-instagram text-xl"></i> */}
                  <FaInstagram className="text-[15px]"/>
                </a>
              )}
              {speaker?.socialLinks?.youtube && (
                <a href={speaker.socialLinks.youtube} target="_blank" className="bg-[#1F2937] rounded-xl h-8 w-8 flex items-center justify-center">
                  {/* <i className="fa fa-youtube text-xl"></i> */}
                  <RiYoutubeLine className="text-[15px]"/>
                </a>
              )}
              {speaker?.socialLinks?.twitter && (
                <a href={speaker.socialLinks.twitter} target="_blank" className="bg-[#1F2937] rounded-xl h-8 w-8 flex items-center justify-center">
                  {/* <i className="fa fa-twitter text-xl"></i> */}
                  <FiTwitter className="text-[15px]"/>
                </a>
              )}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-2 text-white space-y-6">
            
            {/* ABOUT */}
            <div>
              <h3 className="text-xl font-bold border-l-4 border-cyan-400 pl-3">
                About
              </h3>
              <p className="text-gray-300 mt-3 leading-relaxed">
                {speaker.highlightAchievements}
              </p>
            </div>

            {/* EXPERTISE */}
            <div>
              <h3 className="text-xl font-bold border-l-4 border-pink-500 pl-3">
                Areas of Expertise
              </h3>

              <div className="flex flex-wrap gap-3 mt-3">
                {speaker.expertise?.map((item: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#1B2234] text-gray-200 rounded-full border border-gray-600 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-[#00C2FF] to-[#E64F8F] py-3 rounded-xl text-white font-semibold hover:opacity-90 transition"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
