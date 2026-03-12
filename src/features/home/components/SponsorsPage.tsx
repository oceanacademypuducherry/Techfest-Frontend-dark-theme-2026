// import React from "react";
// import { Footer, Navigation } from "../../../common/ui";
// import {
//   SFM,
//   AIC,
//   BOIKO,
//   DUSKCODER,
//   FIA,
//   FOUNDERX,
//   NAMMAFLUTTER,
//   JPINFOTECH,
//   SNIPPET,
//   HIRENOW,
//   divyam,
// } from "../../../assets/images";

// /* ================= SPONSOR GROUPS ================= */

// const platinumSponsors = [
//   { src: HIRENOW, alt: "HireNow" },
//   { src: DUSKCODER, alt: "DuskCoder" },
// ];

// const goldSponsors = [
//   { src: FOUNDERX, alt: "FounderX" },
//   { src: DUSKCODER, alt: "DuskCoder" },
//   { src: BOIKO, alt: "Boiko" },
// ];

// const silverSponsors = [
//   { src: AIC, alt: "AIC" },
//   { src: SFM, alt: "SFM" },
//   { src: DUSKCODER, alt: "DuskCoder" },
//   { src: BOIKO, alt: "Boiko" },
// ];

// const bronzeSponsors = [
//   { src: BOIKO, alt: "Boiko" },
//   { src: FIA, alt: "FIA" },
//   { src: AIC, alt: "AIC" },
//   { src: DUSKCODER, alt: "DuskCoder" },
 
//   { src: BOIKO, alt: "Boiko" },
// ];

// /* ================= COMPONENT ================= */

// const SponsorsPage: React.FC = () => {
//   return (
//     <>
//       <Navigation />

//       <main className="min-h-screen bg-[#0A0C12] px-1 sm:px-3 sm:px-6 md:px-0 xl:px-10 pb-1 sm:pb-6 text-center">
//         <div className="max-w-[1200px] mx-auto">

//           {/* ================= HEADER ================= */}
//           <div className="flex flex-col items-center mb-10">
//             <h2 className="mt-6 mb-4 text-[30px] sm:text-[36px] font-semibold text-white">
//               Our{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
//                 Sponsors
//               </span>
//             </h2>

//             <p className="text-gray-300 sm:text-[18px] text-[16px] max-w-3xl leading-7">
//               TechFest is proudly supported by industry leaders, innovators, and
//               organizations who believe in empowering the next generation of
//               technology professionals.
//             </p>
//           </div>

//           {/* ================= PLATINUM ================= */}
//           <SponsorSection
//             title="Platinum Sponsors"
//             color="#01C1FB"
//             sponsors={platinumSponsors}
//             logoSize="h-16"
//             grid="grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
//             description="Platinum sponsors are our most prestigious partners, providing exceptional support and strategic guidance to elevate the TechFest experience."
//           />

//           {/* ================= GOLD ================= */}
//           <SponsorSection
//             title="Gold Sponsors"
//             color="#EE4C9C"
//             sponsors={goldSponsors}
//             logoSize="h-14"
//             grid="grid-cols-2 sm:grid-cols-3 md:grid-cols-3"
//             description="Gold sponsors play a vital role in supporting TechFest with resources, mentorship, and active involvement in nurturing upcoming talent."
//           />

//           {/* ================= SILVER ================= */}
//           <SponsorSection
//             title="Silver Sponsors"
//             color="#01C1FB"
//             sponsors={silverSponsors}
//             logoSize="h-12"
//             grid="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
//             description="Silver sponsors contribute significantly by providing essential support, tools, and opportunities to help us deliver an outstanding TechFest."
//           />

//           {/* ================= BRONZE ================= */}
//           <SponsorSection
//             title="Bronze Sponsors"
//             color="#EE4C9C"
//             sponsors={bronzeSponsors}
//             logoSize="h-10"
//             grid="grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
//             description="Bronze sponsors help make TechFest accessible and inclusive, supporting our mission to inspire and empower the next generation of tech innovators."
//           />

//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default SponsorsPage;

// /* ================= REUSABLE SECTION ================= */

// interface SponsorSectionProps {
//   title: string;
//   color: string;
//   sponsors: { src: string; alt: string }[];
//   logoSize: string;
//   grid: string;
//   description: string; // Added description for each tier
// }

// const SponsorSection: React.FC<SponsorSectionProps> = ({
//   title,
//   color,
//   sponsors,
//   logoSize,
//   grid,
//   description,
// }) => {
//   return (
//     <section className="mb-6 sm:mb-16 text-center p-0 sm:p-2">

//       {/* Badge */}
//       <div className="flex justify-center mb-4">
//         <span
//           className="bg-white/5 border px-6 py-2 rounded-full font-medium backdrop-blur text-[16px] sm:text-[22px]"
//           style={{ color, borderColor: `${color}66` }}
//         >
//           {title}
//         </span>
//       </div>

//       {/* Description */}
//       <p className="text-gray-300 max-w-3xl mx-auto mb-6 text-[15px] sm:text-[16px]">
//         {description}
//       </p>

//       {/* Logos */}
//       <div className="flex justify-center">
//         <div className={`grid ${grid} gap-6`}>
//           {sponsors.map((item) => (
//             <div
//               key={item.alt}
//               className="h-32 bg-white/95 border p-4 rounded-xl flex items-center justify-center"
//             >
//               <img
//                 src={item.src}
//                 alt={item.alt}
//                 className={`${logoSize} object-contain`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };




import React from "react";
import { Footer, Navigation } from "../../../common/ui";
import {

  

  NAMMAFLUTTER,
  FOUNDERX,
  Nammasocials,
  Lecture_head,
  SFM,
  BOIKO,
  FIA,
  BobMaassy,
  PSP,
  Sequestera,
  SMVEC,
  Unstop,
  
  
  
} from "../../../assets/images";

/* ================= PARTNERS ================= */

const partners = [
  { src: SMVEC, alt: "SMVEC", size: "h-[280px]" },
  { src: Unstop, alt: "Unstop", size: "h-[120px]" },
   { src: FOUNDERX, alt: "FounderX", size: "h-[50px]" },
   { src: BOIKO, alt: "Boiko", size: "h-[50px]" },
  { src: NAMMAFLUTTER, alt: "NammaFlutter", size: "h-[50px]" },
 
  { src: Nammasocials, alt: "Nammasocials", size: "h-[110px]" },
  { src: FIA, alt: "FIA", size: "h-[50px]" },
  { src: Lecture_head, alt: "Lecture_head", size: "h-[150px]" },
   { src: Sequestera, alt: "Sequestera", size: "h-[130px]" },
  { src: SFM, alt: "SFM", size: "h-[50px]" },
  
  
  { src: BobMaassy, alt: "Bob Maassy", size: "h-[100px]" },
  { src: PSP, alt: "PSP", size: "h-[110px]" },
 
  
  
];
const SponsorsPage: React.FC = () => {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#0A0C12] px-4 sm:px-6 xl:px-10 pb-10 text-center">
        <div className="max-w-[1200px] mx-auto">

          {/* ================= HEADER ================= */}
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <h2 className="mt-6 mb-4 text-[30px] sm:text-[38px] font-semibold text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
                Partners
              </span>
            </h2>

            <p className="text-gray-300 sm:text-[18px] text-[16px] max-w-3xl leading-7">
              TechFest is proudly supported by our trusted partners who
              contribute to innovation, learning, and technology excellence.
            </p>
          </div>

          {/* ================= PARTNER LOGOS ================= */}
          <div className="flex justify-center">
  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 max-w-[1100px] mx-auto">
  {partners.map((item) => (
    <div
      key={item.alt}
      className={`w-[140px] sm:w-[150px] md:w-[160px] h-32 bg-white/95 border rounded-xl
                  flex items-center justify-center
                  ${item.alt === "SMVEC" || item.alt === "Lecture_head" ? "" : "p-2"}
                  transition duration-300`}
    >
      <img
        src={item.src}
        alt={item.alt}
        className={`${item.size} w-auto object-contain mix-blend-multiply`}
      />
    </div>
  ))}
</div>
</div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default SponsorsPage;
