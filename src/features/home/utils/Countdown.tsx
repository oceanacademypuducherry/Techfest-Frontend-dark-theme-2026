// import { useEffect, useState } from "react";

// export default function Countdown(){
//     const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//           setTimeLeft(calculateTimeLeft());
//         }, 1000);
    
//         return () => clearInterval(intervalId);
//       }, []);
//       function calculateTimeLeft() {
//         const targetDate = new Date('2025-03-02T08:30:00'); // Target date: March 1, 2025
//         const now = new Date();
//         const difference = targetDate.getTime() - now.getTime();
    
//         if (difference <= 0) {
//           // If the target date has passed, display 0 for all units
//           return {
//             days: 0,
//             hours: 0,
//             minutes: 0,
//             seconds: 0,
//           };
//         }
    
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor(
//           (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
//         return { days, hours, minutes, seconds };
//       }
//     return(
//         <>
//         <main>
//         <div className='flex justify-center space-x-5  sm:space-x-6 space-x-low mb-6 mt-8'>
//             {/* Single Time Box */}
//             {['Days', 'Hours', 'Minutes', 'Seconds'].map(unit => (
//                 <div
//                 key={unit}
//                 className='flex flex-col items-center gradient-border  px-6  py-2 sm:py-4  w-[75px] sm:w-[132px] lg:25'
//               >
//             <p
//   className="text-2xl font-semibold max-sm:text-xl 
//   bg-gradient-to-b from-[#01C1FB] to-[#EE4C9C] 
//   bg-clip-text text-transparent"
// >
//   {timeLeft[unit.toLowerCase()]}
// </p>

//                 <p className='text-[12px] sm:text-sm text-white'>{unit}</p>
//               </div>
//             ))}
//           </div>
//         </main>
//         </>
//     )
// }


import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("2026-03-15T08:30:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="flex justify-center gap-2 sm:gap-6 mt-10">
      {["Days", "Hours", "Minutes", "Seconds"].map((unit) => (
        <div
          key={unit}
          className="
            w-[84px] sm:w-[130px]
            rounded-xl
            bg-white/5 backdrop-blur-md
            border border-white/6
            shadow-[inset_0_0_25px_rgba(1,193,251,0.15)]
            hover:shadow-[0_0_25px_rgba(238,76,156,0.25)]
            transition-all duration-300
            hover:-translate-y-1
            py-3 sm:py-4 flex flex-col items-center
          "
        >
          <p
            className="
              text-2xl sm:text-3xl font-bold
              bg-gradient-to-b from-[#01C1FB] to-[#EE4C9C]
              bg-clip-text text-transparent
            "
          >
            {timeLeft[unit.toLowerCase()]}
          </p>

          <p className="text-xs sm:text-sm text-gray-300 mt-1 tracking-wide">
            {unit}
          </p>
        </div>
      ))}
    </div>
                  );
}
