import React from "react";
import Layout from "../layout/Layout";
import { motion } from "framer-motion";

type Props = {};

const Fitness = (props: Props) => {
  return (
    <Layout>
      <div className="flex flex-col gap-4 my-3 md:flex-row">
        <motion.div
          initial={{
            x: -50,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col gap-3 my-9"
        >
          <p className="font-[500] font-[montserrat] text-center text-[1.5rem]">
            A Visionary Pursuit of Personalized Fitness and Optimal Well-Being
          </p>
          <div className="flex items-center justify-center">
            <div className="w-[90%]">
              <motion.img
                initial={{
                  x: 50,
                }}
                whileInView={{
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                src="/ladygym.jpg"
                className="h-[450px] w-full object-cover object-center rounded-md"
              />
              <div className="flex flex-col gap-3 p-3">
                <p>
                  Kedu signifies our dedication to transforming lives through
                  personalized fitness journeys. In a dynamic world, we believe
                  in tailoring exercise regimens to individual aspirations and
                  capabilities
                </p>
                <p>
                  Our mission extends beyond conventional fitness approaches,
                  leveraging technology to provide adaptive, personalized
                  workouts. With our visionary pursuit of fitness, we aim to
                  break barriers and make well-being an inclusive experience for
                  everyone
                </p>
                <p>
                  Our mission envisions a world where fitness is not a
                  one-size-fits-all concept but a bespoke journey tailored to
                  your goals and abilities. By harnessing the power of
                  cutting-edge technology, we offer adaptive workouts that
                  evolve with you. Whether you're a beginner or an experienced
                  athlete, our program adjusts to your progress, ensuring
                  sustained motivation and optimal results.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Fitness;
