import React, { useEffect, useState } from "react";
import ProgressBar from "react-customizable-progressbar";

const MarketExperiences = () => {
  const [progressBarElement, setProgressBarElement] = useState<{
    radius: number;
    strokeWidth: number;
    trackStrokeWidth: number;
    pointerRadius: number;
    pointerStrokeWidth: number;
  }>({
    radius: window.innerWidth < 768 ? 25 : window.innerWidth < 1024 ? 45 : 55,
    strokeWidth: window.innerWidth < 768 ? 3 : window.innerWidth < 1024 ? 5 : 6,
    trackStrokeWidth: window.innerWidth < 768 ? 3 : 5,
    pointerRadius: window.innerWidth < 768 ? 3.5 : 7,
    pointerStrokeWidth: window.innerWidth < 768 ? 3 : 4,
  });

  useEffect(() => {
    const handleResize = () => {
      setProgressBarElement({
        radius:
          window.innerWidth < 768 ? 25 : window.innerWidth < 1024 ? 45 : 55,
        strokeWidth:
          window.innerWidth < 768 ? 3 : window.innerWidth < 1024 ? 5 : 6,
        trackStrokeWidth: window.innerWidth < 768 ? 3 : 5,
        pointerRadius: window.innerWidth < 768 ? 3.5 : 7,
        pointerStrokeWidth: window.innerWidth < 768 ? 3 : 4,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-[132px] h-[75px] md:w-[242px] md:h-[137px] bg-white rounded-xl absolute flex items-center justify-center m-4 md:m-6 p-5">
      <ProgressBar
        progress={85}
        radius={progressBarElement.radius} // Responsive radius
        strokeWidth={progressBarElement.strokeWidth} // Responsive stroke width
        strokeColor="#FEBF00"
        trackStrokeWidth={progressBarElement.trackStrokeWidth}
        trackStrokeColor="#F1F1F1"
        pointerRadius={progressBarElement.pointerRadius}
        pointerStrokeWidth={progressBarElement.pointerStrokeWidth}
        pointerFillColor="#fff"
        pointerStrokeColor="#FEBF00"
        className="relative"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-black font-OpenSansBold text-sm md:text-2xl">
            50+
          </p>
        </div>
      </ProgressBar>
      <p className="font-OpenSansSemiBold text-[9px] md:text-base">
        Market Experiences
      </p>
    </div>
  );
};

export default MarketExperiences;
