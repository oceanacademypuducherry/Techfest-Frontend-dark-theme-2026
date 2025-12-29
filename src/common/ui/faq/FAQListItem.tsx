import React from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  activeIndexes: number[]; // Array to track multiple active items
  onToggle: (index: number) => void;
}

export const FAQListItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  index,
  activeIndexes,
  onToggle,
}) => {
  const isActive = activeIndexes.includes(index);

  return (
    <article
      key={index}
      className="border-b border-gray-700 pb-3 transition-all"
    >
      <button
        onClick={() => onToggle(index)}
        className="my-5 flex w-full cursor-pointer items-center justify-between gap-5 
        text-left text-lg font-semibold hover:text-[#00C2FF] text-gray-100"
        aria-expanded={isActive}
      >
        <span className="text-[16px] text-gray-200">{question}</span>

        {/* Arrow Icon */}
        <span className={`transition-all ${isActive ? "text-[#00C2FF]" : "text-gray-400"}`}>
          {isActive ? "▲" : "▼"}
        </span>
      </button>

      {/* Dropdown Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="my-2 text-sm leading-7 text-gray-400 md:text-[16px]">
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </p>
      </div>
    </article>
  );
};

