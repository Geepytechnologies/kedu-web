import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="flex flex-col  p-[20px] mt-[50px]">
      <div className="flex items-center gap-3">
        <div className="w-[30px] h-[2px] bg-primary2"></div>
        <p className="font-[500] text-primary2">OUR MISSION</p>
      </div>
      <div>
        {/* missio1 */}
        <div className="flex flex-col md:flex-row">
          <div>
            <p className="font-[500] text-[2rem]">
              The Need For Mental Health Awareness In Africa And Beyond
            </p>
            <Link to={"/mental-health"} className="px-3 py-2 border rounded-md">
              Learn More
            </Link>{" "}
          </div>

          <img src="/drugs1.jpg" className="h-[400px] rounded-md" />
        </div>
        {/* mission2 */}
        <div className="flex flex-col md:flex-row">
          <div>
            <p className="font-[500] text-[2rem]">
              The Need For Mental Health Awareness In Africa And Beyond
            </p>
            <Link to={"/nutrition"} className="px-3 py-2 border rounded-md">
              Learn More
            </Link>{" "}
          </div>

          <img src="/ladyfoodbowl1.jpg" className="h-[400px] rounded-md" />
        </div>
        {/* mission3 */}
        <div className="flex flex-col md:flex-row">
          <div>
            <p className="font-[500] text-[2rem]">
              The Need For Mental Health Awareness In Africa And Beyond
            </p>
            <Link to={"/fitness"} className="px-3 py-2 border rounded-md">
              Learn More
            </Link>
          </div>

          <img src="/ladygym.jpg" className="h-[400px] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
