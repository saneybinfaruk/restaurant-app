import React from "react";
import burger from "../assets/burger.jpg";

interface Props {
  imgSrc: string;
  title: string;
  subTitle: string;
}
const FoodItem = ({ imgSrc, title, subTitle }: Props) => {
  return (
    <div className="w-full  h-[300px] bg-white flex flex-col gap-6 items-center p-8">
      <img src={imgSrc} alt={imgSrc} className="h-[120px] object-cover" />
      <div className="w-[57px] h-1 bg-[#BD1F17]" />
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className="font-BebasNeueRegular text-2xl tracking-wide">
          {title}
        </h2>
        <p className="font-robotoRegular text-base text-center">{subTitle}</p>
      </div>
    </div>
  );
};

export default FoodItem;
