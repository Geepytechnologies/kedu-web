import React from "react";
import { FaHeadset } from "react-icons/fa";
import Pitchcards from "./Pitchcards";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-[url('/therapist2.jpg')] bg-cover h-[500px] w-full flex flex-col relative">
      <div className="w-full h-full absolute top-0 bg-[rgba(0,0,0,0.4)]"></div>
      <div className="w-full h-full absolute flex flex-col items-center top-0">
        {/* navbar */}
        <div className="flex items-center w-full justify-between px-2">
          <Link to="/">
            <img className="w-[150px] h-[150px]" src="/whitelogo.png" />
          </Link>
          <div className="text-white flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaHeadset />
              <p>021 3456 789</p>
            </div>
            <div className="px-3 py-2 border rounded-md">Contact Us</div>
          </div>
        </div>
        {/* headercontent */}
        <div className="flex items-center flex-1 justify-center">
          <div className="flex flex-col text-white w-[80%] items-center justify-center">
            <p className="font-[poppins] text-center text-[2rem]">
              Improving General wellbeing
            </p>
            <p className="font-[poppins] font-[500] text-center md:text-[2.5rem]">
              Let&apos;s Get You Back To Your Best Through Our Organized
              Schemes.
            </p>
            {/* <div className="px-3 py-2 border rounded-md">Learn More</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
