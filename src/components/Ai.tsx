import React from "react";

type Props = {};

const Ai = (props: Props) => {
  return (
    <div className="w-full my-[50px] flex justify-center items-center">
      <div className="w-[80%] flex flex-col items-center gap-6 py-6">
        <p className="font-[poppins] font-[500] text-center md:text-start text-[30px] text-[#bfa85b]">
          An Improved World With Artificial Intelligence
        </p>
        <img
          src="/doctorai.jpg"
          alt=""
          className="w-full h-[500px] object-cover"
        />
        <p className="font-[poppins] ">
          Artificial intelligence (AI) is revolutionizing the health sector,
          particularly in mental health, nutrition, and fitness. AI analyzes
          data to provide personalized mental health support, early detection of
          issues, and tailored treatment plans. In nutrition, it utilizes
          genetic information and lifestyle factors to offer personalized
          dietary advice, while in fitness, AI-driven devices and apps create
          personalized workout routines and track physical activity. These
          advancements contribute to a world where individuals have access to
          efficient and personalized healthcare solutions, promoting overall
          well-being and fostering a healthier, happier global population.
        </p>
      </div>
    </div>
  );
};

export default Ai;
