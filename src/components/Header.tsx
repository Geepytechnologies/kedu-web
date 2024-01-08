import React from "react";
import { FaHeadset } from "react-icons/fa";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-[url('/therapist2.jpg')] bg-cover h-[500px] w-full">
      {/* navbar */}
      <div className="flex items-center justify-between px-2">
        <img className="w-[100px] h-[100px]" src="/whitelogo.png" />
        <div className="text-white flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FaHeadset />
            <p>021 3456 789</p>
          </div>
          <div className="px-3 py-2 border rounded-md">Contact Us</div>
        </div>
      </div>
      {/* headercontent */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col text-white w-[80%] items-center justify-center">
          <p className="font-[poppins] text-[2rem]">
            Improving Mental wellbeing
          </p>
          <p className="font-[poppins] font-[500] text-center text-[3rem]">
            Let&apos;s Get You Back To Your Best Through Our Organized Schemes.
          </p>
          <div className="px-3 py-2 border rounded-md">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
