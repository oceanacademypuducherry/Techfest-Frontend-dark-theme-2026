import React, { useState, useEffect } from 'react';

interface VerticalNumberIndicatorProps {
  studentCount: number;
  workingPresCount: number;
}

const VerticalNumberIndicator: React.FC<VerticalNumberIndicatorProps> = ({
  studentCount,
  workingPresCount,
}) => {
  const totalCount = studentCount + workingPresCount;
  const [activeIndex, setActiveIndex] = useState<number>(0); // Initially set to 0 for the first number

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = entry.target.getAttribute('data-index');
        if (entry.isIntersecting) {
          setActiveIndex(Number(index)); // Set active index when form is visible
        }
      });
    }, {
      threshold: 0.5, // Trigger when 50% of the form is in view
    });

    // Observe each form element with the data-index attribute
    const forms = document.querySelectorAll('[data-form]');
    forms.forEach((form) => observer.observe(form));

    // Clean up the observer on component unmount
    return () => {
      forms.forEach((form) => observer.unobserve(form));
    };
  }, [totalCount]);

  return (
    <div
      className="sticky top-10  mt-[60px] left-10 flex flex-col items-center space-y-4 border-2 bg-white border-gray-600 p-0 py-0 rounded-full max-h-full"
      style={{ height: `${totalCount * 50}px` }} // Dynamic height based on total count
    >
      {Array.from({ length: totalCount }, (_, index) => (
        <button
          key={index}
          className={`w-9 h-9 flex items-center justify-center font-bold rounded-full transition-all duration-300 ease-in-out ${
            activeIndex === index
              ? 'bg-red-500 text-white scale-125' // Active state with red background and no border
              : 'bg-transparent' // Inactive state, no background or border
          }`}
          onClick={() => {
            setActiveIndex(index); // Set the clicked number as active
            document
              .getElementById(`card-${index}`)!
              .scrollIntoView({ behavior: 'smooth' }); // Scroll to the clicked card
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default VerticalNumberIndicator;
