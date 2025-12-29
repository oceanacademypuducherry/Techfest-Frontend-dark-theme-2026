import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="flex max-h-fit flex-col items-center bg-agenda justify-center text-center sm:text-left mt-3 sm:mt-5 px-0 sm:px-12  py-0 sm:py-4 box-border max-sm:pb-[10px]">
      <h1
        className="text-2xl sm:text-3xl font-semibold mb-4 max-[450px]:text-2xl"
        aria-label="Event Title"
      >
        {title}
      </h1>
      <p
        className="text-center max-w-2xl text-[16px] sm:text-lg md:text-xl text-gray-600"
        aria-label="Event Description"
      >
        {description}
      </p>
    </div>
  );
};

export default Header;
