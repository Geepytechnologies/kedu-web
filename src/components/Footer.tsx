import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-primary2 h-[200px]">
      <img className="w-[150px] h-[150px]" src="/whitelogo.png" />
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
