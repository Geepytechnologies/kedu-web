import React from "react";
import { MdOutlineSchedule } from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import { GiInnerSelf } from "react-icons/gi";
import { motion } from "framer-motion";

type Props = {};

const Pitchcards = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 md:gap-5 lg:gap-9 justify-center items-center -translate-y-[50px]">
      {/* 1 */}
      <motion.div
        initial={{
          y: -50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="bg-primary2 flex gap-3 md:w-[400px] w-[300px] items-center min-h-[150px] rounded-[24px] px-4 py-3"
      >
        <div>
          <MdOutlineSchedule className="text-[#bfa85b] text-[35px]" />
        </div>
        <div>
          <p className="text-white font-[500] text-[20px] font-[poppins]">
            Scheduling
          </p>
          <p className="text-white">
            Streamline your healthcare journey with our intuitive scheduling
            feature.
          </p>
        </div>
      </motion.div>
      {/* 2 */}
      <motion.div
        initial={{
          y: -50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="bg-primary2 flex gap-3 md:w-[400px] w-[300px] items-center min-h-[150px] rounded-[24px] px-4 py-3"
      >
        <div>
          <GiMeditation className="text-[#bfa85b] text-[35px]" />
        </div>
        <div>
          <p className="text-white font-[500] text-[20px] font-[poppins]">
            Meditation
          </p>
          <p className="text-white">
            Access guided meditation sessions tailored to your needs
          </p>
        </div>
      </motion.div>
      {/* 3 */}
      <motion.div
        initial={{
          y: -50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.4,
        }}
        className="bg-primary2 flex gap-3 md:w-[400px] w-[300px] items-center min-h-[150px] rounded-[24px] px-4 py-3"
      >
        <div>
          <GiInnerSelf className="text-[#bfa85b] text-[35px]" />
        </div>
        <div>
          <p className="text-white font-[500] text-[20px] font-[poppins]">
            Self management
          </p>
          <p className="text-white">
            Monitor health metrics, track medication adherence, and set
            personalized health goals
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Pitchcards;
