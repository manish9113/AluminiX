
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaNetworkWired, FaBriefcase, FaUserGraduate, FaStar, FaCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#E3F2FD] to-[#E3F2FD] text-[#000] shadow-md w-full h-16  z-10 "> {/* Changed background color to teal */}
      <div className=" px-2 py-3  flex justify-between w-full  h-16">
        <div className="text-base font-semibold ml-7 ">
          <Link to="/home" className="flex items-center space-x-2  hover:text-red-900 hover:font-semibold">
            <FaHome className="text-2xl"/>
            <span className="text-2xl ">Home</span >
          </Link>
        </div>
        
        <div className="flex space-x-6 mr-6 font-md">
          <Link to="/network" className="flex items-center space-x-1 hover:text-blue-900 hover:font-semibold ">
            <FaNetworkWired className="text-base"/>
            <span className="text-base">Network</span >
          </Link>
          <Link to="/job-portal" className="flex items-center space-x-1 hover:text-blue-900 hover:font-semibold">
            <FaBriefcase className="text-base"/>
            <span className="text-base">Job Portal</span >
          </Link>
          <Link to="/mentorship-program" className="flex items-center space-x-1 hover:text-blue-900 hover:font-semibold">
            <FaUserGraduate className="text-base" />
            <span className="text-base">Mentorship Program</span >
          </Link>
          <Link to="/success-stories" className="flex items-center space-x-1 hover:text-blue-900 hover:font-semibold">
            <FaStar className="text-base" />
            <span className="text-base">Success Stories</span >
          </Link>
          <Link to="/events" className="flex items-center space-x-1 hover:text-blue-900 hover:font-semibold">
            <FaCalendarAlt className="text-base"/>
            <span className="text-base ">Events</span >
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
