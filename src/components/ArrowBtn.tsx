import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  onClick: () => void;
  iconSize?: number;
}
const ArrowBtn = ({ icon: Icon,   onClick }: Props) => {
  const [iconSize, setIconSize] = useState(window.innerWidth < 768 ? 22 : 32);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth < 768 ? 22 : 32);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-full shadow w-[40px] h-[40px] md:w-16 md:h-16 flex items-center justify-center hover:text-[#BD1F17]"
    >
      <Icon size={iconSize} />
    </button>
  );
};

export default ArrowBtn;
