import React, { useState } from "react";
import logo from "../assets/logo.png";
import BgButton from "./BgButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"; // Import a close icon for the mobile menu

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-[108px] flex justify-between items-center px-6">
      {/* Logo Section */}
      <div className="flex items-center gap-4 md:gap-12 lg:gap-14">
        <div className="flex items-center gap-2 md:gap-3">
          <img className="w-[37px] h-[37px]" src={logo} alt="Restaurant logo" />
          <div className="flex text-[28px] md:text-[24px] lg:text-[28px] text-white">
            <h3 className="font-poppinsSemiBold">Restau</h3>
            <h3 className="font-poppinsRegular">rant</h3>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-8 font-ralewayMedium text-sm lg:text-[15px] text-white">
          <li className="hover:scale-110 transition-transform duration-200">
            <a href="#">Home</a>
          </li>
          <li className="hover:scale-110 transition-transform duration-200">
            <a href="#">About</a>
          </li>
          <li className="hover:scale-110 transition-transform duration-200">
            <a href="#">Portfolio</a>
          </li>
          <li className="hover:scale-110 transition-transform duration-200">
            <a href="#">Clients</a>
          </li>
          <li className="hover:scale-110 transition-transform duration-200">
            <a href="#">Blog</a>
          </li>
          <li className="hover:scale-110 transition-transform duration-200">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:flex">
        <BgButton label="Book a table" />
      </div>

      {/* Hamburger Menu Button for Mobile */}
      {!isMobileMenuOpen && (
        <button className="p-1 md:hidden" onClick={toggleMobileMenu}>
          <RxHamburgerMenu size={32} color="white" />
        </button>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#8E1B0F] bg-opacity-95 z-50 flex flex-col">
          <div className="flex justify-end items-center p-6 pt-8">
            <button onClick={toggleMobileMenu}>
              <AiOutlineClose size={32} color="white" />
            </button>
          </div>

          <ul className="flex flex-col gap-6 p-6 text-white text-lg font-ralewayMedium">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Clients</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <div className="px-6">
            <BgButton label="Book a table" width="w-full" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
