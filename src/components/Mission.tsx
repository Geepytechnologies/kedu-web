import React from "react";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row  p-[20px] mt-[50px]">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[2px] bg-primary2"></div>
          <p className="font-[500] text-primary2">OUR MISSION</p>
        </div>
        <p className="font-[500] text-[2rem]">
          The Need For Mental Health Awareness In Africa And Beyond
        </p>
      </div>
      <img src="/drugs1.jpg" className="h-[400px] rounded-md" />
    </div>
  );
};

export default Mission;
