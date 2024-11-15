import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ArrowBtn from "./ArrowBtn";
import FoodItem from "./FoodItem";
import { foodItems } from "../constants/data";
import cousin from "../assets/c1aa9b555693793db0fb1c4f28b22547.png";
import BoxTitle from "./BoxTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SliderBtns from "./SliderBtns";
import { Swiper as SwiperType } from "swiper";

const SectionThree = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="md:h-[710px] bg-[#FBF7F2] relative">
      <div className="p-8 max-w-[1321px] mx-auto flex flex-col h-full  justify-center gap-8 md:gap-14">
        <div className="md:h-[110px] flex justify-between items-center">
          <div className="flex flex-col gap-2 md:gap-5">
            <BoxTitle title="Crispy, Every Bite Taste" />
            <h1 className="text-[40px] md:text-6xl font-BebasNeueRegular">
              POPULAR FOOD ITEMS
            </h1>
          </div>

          <div className="hidden md:flex">
            <SliderBtns swiperRef={swiperRef} />
          </div>
        </div>

        <div className="h-[300px] w-full flex justify-between">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            className="w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              
              480: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 50 },
              959: { slidesPerView: 3, spaceBetween: 40 },
              1120: { slidesPerView: 4, spaceBetween: 30 },
            
            }}
          >
            {foodItems.map((foodItem) => (
              <SwiperSlide key={foodItem.title}>
                <FoodItem
                  imgSrc={foodItem.foodImg}
                  title={foodItem.title}
                  subTitle={foodItem.subTitle}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex md:hidden justify-center">
          <SliderBtns swiperRef={swiperRef} />
        </div>
      </div>

      <img
        src={cousin}
        alt="cousine"
        className="hidden xl:flex w-[526px] h-[492px] absolute -left-[23.2rem]  -rotate-[71deg] inset-44"
      />
    </div>
  );
};

export default SectionThree;
