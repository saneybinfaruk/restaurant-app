import React from "react";
import restaurent from "../assets/restaurent.jpg";
import InfoItem from "./InfoItem";
import { FaLinkedinIn, FaRegClock } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { PiMapPin } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="md:h-[719.45px] w-full overflow-hidden relative flex items-center justify-center">
      
      <img
        src={restaurent}
        alt="restaurent"
        className="absolute z-0 h-full object-cover object-center md:h-auto md:object-cover md:object-top"
      />

      <div className="h-full absolute z-1 bg-black opacity-75 inset-0" />

      <div className="max-w-[1321px] mx-auto w-full md:h-[479.45px] z-10 flex flex-col justify-between p-7 md:p-0">
        
        <div className="md:h-[256px] flex flex-col items-center gap-6 md:gap-7">

          <h1 className="font-BebasNeueRegular text-[40px] md:text-6xl text-center md:text-left text-white px-16 md:px-0 leading-tight md:leading-normal">
            We ready to have you the best dining experiences
          </h1>

          <div className="flex flex-col md:flex-row justify-between py-5 md:py-0 gap-5 md:gap-0">
            <InfoItem
              icon={FaRegClock}
              title="Opening hours"
              firstSubTitle="Monday - Sunday"
              secondSubTitle="9:00 AM to 11:30 PM"
            />
            <InfoItem
              icon={FiPhoneCall}
              title="LET'S TALK"
              firstSubTitle="Phone: 1-800-222-4545"
              secondSubTitle="Fax: 1-800-222-4545"
            />
            <InfoItem
              icon={FiMail}
              title="BOOK A TABLE"
              firstSubTitle="Email: demo@website.com"
              secondSubTitle="Support: support@website.com"
            />
            <InfoItem
              icon={PiMapPin}
              title="Our Address"
              firstSubTitle="123 Stree New York City ,"
              secondSubTitle="United States Of America."
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-7 items-center mt-14 mb-2">
          <div className="flex gap-7">
            <div className="w-[36px] h-[36px] md:w-[53.45px] md:h-[53.45px] rounded-full flex items-center justify-center ring-white ring-1">
              <TiSocialFacebook
                color="black"
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] bg-white rounded-full"
              />
            </div>
            <div className="w-[36px] h-[36px] md:w-[53.45px] md:h-[53.45px] rounded-full flex items-center justify-center ring-white ring-1">
              <BsTwitterX
                color="black"
                className="w-[15px] h-[15px] md:w-[20px] md:h-[20px] bg-white rounded-sm p-1"
              />
            </div>
            <div className="w-[36px] h-[36px] md:w-[53.45px] md:h-[53.45px] rounded-full flex items-center justify-center ring-white ring-1">
              <IoLogoInstagram
                color="black"
                className="w-[15px] h-[15px] md:w-[20px] md:h-[20px] bg-white rounded-sm p-0.5"
              />
            </div>

            <div className="w-[36px] h-[36px] md:w-[53.45px] md:h-[53.45px] rounded-full flex items-center justify-center ring-white ring-1">
              <FaLinkedinIn
                color="black"
                className="w-[15px] h-[15px] md:w-[20px] md:h-[20px] bg-white rounded-sm p-0.5"
              />
            </div>
          </div>
          <p className="font-robotoRegular text-white text-base bg:text-xl">
            © 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
