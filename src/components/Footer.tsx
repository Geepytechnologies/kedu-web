import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-primary2 min-h-[200px] ">
      <div className="flex flex-col md:flex-row items-center justify-between px-7">
        <Link to="/">
          <img className="w-[150px] h-[150px]" src="/whitelogo.png" />
        </Link>
        <div className="flex flex-col gap-3 text-white font-[poppins]">
          <p className="text-[#bfa85b]">Quick Links</p>
          <Link to="/mental-health">Mental Health</Link>
          <Link to="/fitness">Fitness</Link>
          <Link to="/nutrition">Nutrition</Link>
          <Link to="/team">Meet The Team</Link>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-[150px] h-[100px] flex items-end">
            <img
              src="/googleplay.png"
              alt=""
              className="w-full h-full object-contain object-bottom"
            />
          </div>
          <div className="w-[150px] h-[100px]">
            <img
              src="/appstore.jfif"
              alt=""
              className="w-full h-full object-contain object-top"
            />
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-center p-5 gap-2 text-white">
        <AiOutlineCopyright />
        <p className="text-[12px] lg:text-[14px]">
          {year} | Kedu. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
