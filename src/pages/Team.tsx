import React from "react";
import Layout from "../layout/Layout";

type Props = {};

const teamdata = [
  {
    name: "Enwereuzor Victor",
    role: "CEO/ Co-Founder",
    image: "/victor.jpg",
  },
  {
    name: "Dr Usiosefe Anthony Ereyimwen",
    role: "Chief Medical Officer",
    image: "/tony.jpeg",
  },
  {
    name: "Bon-Ejehu Ijeoma Nwamaka",
    role: "Chief Dietitian",
    image: "/ijeoma.JPG",
  },
  {
    name: "Enwereuzor Godspower",
    role: "CTO",
    image: "/geepy.jpeg",
  },
];

const Team = (props: Props) => {
  return (
    <Layout>
      <div className="my-5 ">
        <p className="font-[500] font-[montserrat] text-center text-[1.5rem]">
          Meet The Team
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-[85%] lg:w-[98%] w-[90%] md:gap-4 gap-9 items-center justify-items-center py-4">
            {teamdata.map((item, index) => (
              <div key={index} className="w-[300px] h-[400px] mb-5 rounded-md">
                <img
                  src={item.image}
                  className="w-full h-[350px] object-cover object-center"
                />
                <p className="font-[poppins] font-[500] text-[20px]">
                  {item.name}
                </p>
                <p className="font-[poppins] italic">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
