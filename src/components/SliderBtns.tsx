import { MutableRefObject } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ArrowBtn from "./ArrowBtn";
import { Swiper } from "swiper";

const SliderBtns = ({
  swiperRef,
}: {
  swiperRef: MutableRefObject<Swiper | null>;
}) => {
  const handlePrevBtnClick = () => {
    swiperRef.current?.slidePrev();
  };
  const handleNextBtnClick = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="flex gap-6">
      <ArrowBtn
        icon={IoIosArrowBack}
        iconSize={22}
        onClick={handlePrevBtnClick}
      />
      <ArrowBtn
        icon={IoIosArrowForward}
        iconSize={22}
        onClick={handleNextBtnClick}
      />
    </div>
  );
};

export default SliderBtns;
