import React from "react";

interface Props {
  label: string;
  width?: string; // Optional Tailwind width class
  height?: string; // Optional Tailwind height class
  textSize?: string; // Optional text size class
}

const BgButton = ({
  label,
  width = "w-[161px] md:w-[157px] lg:w-[180px]", // Responsive width
  height = "h-[56px] md:h-[44px] lg:h-[56px]", // Responsive height
  textSize = "text-base lg:text-lg", // Responsive text size
}: Props) => {
  return (
    <button
      className={`bg-[#FEBF00] ${width} ${height} ${textSize} font-robotoBold hover:bg-[#d7ac2c] transition-colors duration-200`}
    >
      {label.toUpperCase()}
    </button>
  );
};

export default BgButton;
