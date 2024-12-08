import React from "react";
import { GlobeIcon, PersonIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 md:px-8 py-3 flex items-center justify-between w-full flex-wrap">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <a href="/" className="flex items-center">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="40"
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Simplified SVG Logo */}
            <g fill="#566777">
              <path d="M0 100 l0 -100 100 0 100 0 0 100 0 100 -100 0 -100 0 0 -100z" />
            </g>
          </svg>
        </a>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex md:space-x-6">
        <a href="/" className="hover:underline text-sm md:text-base">
          Places to stay
        </a>
        <a href="/" className="hover:underline text-sm md:text-base">
          Experiences
        </a>
        <a href="/" className="hover:underline text-sm md:text-base">
          Online Experiences
        </a>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <a href="/" className="hover:underline text-sm md:text-base">
          Become a Host
        </a>
        <GlobeIcon className="w-5 h-5 md:w-6 md:h-6" />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.75 5.75H19.25"
              stroke="#111827"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.75 18.25H19.25"
              stroke="#111827"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.75 12H19.25"
              stroke="#111827"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <PersonIcon className="w-5 h-5 rounded-full bg-gray-500" />
        </div>
      </div>

      {/* Mobile Menu for Small Screens */}
      <div className="md:hidden mt-3 w-full">
        <div className="flex justify-center space-x-6">
          <a href="/" className="hover:underline text-sm">
            Places to stay
          </a>
          <a href="/" className="hover:underline text-sm">
            Experiences
          </a>
          <a href="/" className="hover:underline text-sm">
            Online Experiences
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
