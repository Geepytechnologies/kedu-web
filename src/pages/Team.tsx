import React from "react";
import Layout from "../layout/Layout";

type Props = {};

const teamdata = [
  {
    name: "Enwereuzor Victor",
    role: "Co-Founder",
    image: "/doctorai.jpg",
  },
  {
    name: "Enwereuzor Godspower",
    role: "CTO",
    image: "/doctorai.jpg",
  },
  {
    name: "Dr Tony",
    role: "",
    image: "/doctorai.jpg",
  },
];

const Team = (props: Props) => {
  return (
    <Layout>
      <div className="my-5 ">
        <p className="font-[500] font-[montserrat] text-center text-[1.5rem]">
          Meet The Team
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center py-4">
            {teamdata.map((item, index) => (
              <div key={index} className="w-[300px] h-[350px] rounded-md">
                <img src={item.image} className="w-full h-[250px]" />
                <p className="font-[poppins]">{item.name}</p>
                <p className="font-[poppins]">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
