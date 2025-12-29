import { useState } from "react";

import { FAQListItem } from "./FAQListItem";
import { Support } from "./Support";
import { FAQ_DATA } from "../../../utils";


export const FAQListView: React.FC = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]); // Tracks multiple open items

  const handleToggle = (index: number) => {
    // Add or remove the index from activeIndexes
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
   <main className="flex flex-grow flex-wrap gap-10 md:flex-nowrap bg-[#0A0C12] text-gray-200">
      <section className="basis-full md:basis-8/12">
        {FAQ_DATA.map((faq, index) => (
          <FAQListItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
            activeIndexes={activeIndexes}
            onToggle={handleToggle}
          />
        ))}
      </section>
      <section className="basis-full md:basis-4/12">
        <Support />
      </section>
    </main>
  );
};
