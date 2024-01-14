import React from "react";
import Layout from "../layout/Layout";
import { motion } from "framer-motion";

type Props = {};

const Nutrition = (props: Props) => {
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
            Revolutionizing Lives with Tailored Nutritional Solutions{" "}
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
                src="/ladyfoodbowl1.jpg"
                className="h-[450px] w-full object-center object-cover rounded-md"
              />
              <div className="flex flex-col gap-3 p-3">
                <p>
                  Embark on a transformative journey with our mission to
                  redefine nutrition. Kedu is committed to empowering
                  individuals with personalized nutritional solutions
                </p>
                <p>
                  In a world inundated with generic advice, our focus is on
                  tailoring nutrition plans to unique needs. We harness the
                  power of technology to analyze genetic makeup, lifestyle
                  choices, and health goals, delivering precision in nourishment
                </p>
                <p>
                  Our vision is to revolutionize lives by fostering a profound
                  connection between individuals and their nutrition,
                  cultivating well-being from within. Join us in this pursuit of
                  personalized nutrition, where each meal becomes a step towards
                  vibrant, individualized health.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Nutrition;
