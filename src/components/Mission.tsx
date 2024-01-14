import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col md:w-[80%] w-[90%]  p-[20px] mt-[50px]">
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
          className="flex items-center gap-3"
        >
          <div className="w-[30px] h-[2px] bg-primary2"></div>
          <p className="font-[500] text-primary2">OUR MISSION</p>
        </motion.div>
        <div className="flex flex-col gap-4">
          {/* mission1 */}
          <div className="flex flex-col gap-4 my-3 md:flex-row">
            <motion.div
              initial={{
                x: -20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex flex-col gap-3"
            >
              <p className="font-[500] text-[2rem]">
                The Need For Mental Health Awareness In Africa And Beyond
              </p>
              <p>
                In Africa and beyond, there's a pressing need for heightened
                mental health awareness due to pervasive negligence and a dearth
                of accessible resources.
              </p>
              <Link
                to={"/mental-health"}
                className="px-3 py-2 w-[120px]  border-[#bfa85b] text-[#bfa85b] font-[500] font-[montserrat] border rounded-md"
              >
                Learn More
              </Link>{" "}
            </motion.div>

            <motion.img
              initial={{
                x: 20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              src="/drugs1.jpg"
              className="h-[300px] object-cover rounded-md order-first md:order-last"
            />
          </div>
          {/* mission2 */}
          <div className="flex flex-col gap-4 my-3 md:flex-row">
            <motion.div
              initial={{
                x: -20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex flex-col gap-3"
            >
              <p className="font-[500] text-[2rem]">
                Revolutionizing Lives with Tailored Nutritional Solutions{" "}
              </p>
              <p>
                In a world inundated with generic advice, our focus is on
                tailoring nutrition plans to unique needs. We harness the power
                of technology to analyze genetic makeup, lifestyle choices, and
                health goals, delivering precision in nourishment.
              </p>
              <Link
                to={"/nutrition"}
                className="px-3 py-2 w-[120px]  border-[#bfa85b] text-[#bfa85b] font-[500] font-[montserrat] border rounded-md"
              >
                Learn More
              </Link>{" "}
            </motion.div>

            <motion.img
              initial={{
                x: 20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              src="/ladyfoodbowl1.jpg"
              className="h-[300px] object-cover  rounded-md order-first md:order-last"
            />
          </div>
          {/* mission3 */}
          <div className="flex flex-col gap-4 my-3 md:flex-row">
            <motion.div
              initial={{
                x: -20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex flex-col gap-3"
            >
              <p className="font-[500] text-[2rem]">
                A Visionary Pursuit of Personalized Fitness and Optimal
                Well-Being{" "}
              </p>
              <p>
                Our mission extends beyond conventional fitness approaches,
                leveraging technology to provide adaptive, personalized
                workouts.{" "}
              </p>
              <Link
                to={"/fitness"}
                className="px-3 py-2 w-[120px]  border-[#bfa85b] text-[#bfa85b] font-[500] font-[montserrat] border rounded-md"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.img
              initial={{
                x: 20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              src="/ladygym.jpg"
              className="h-[300px] w-[450px] object-cover rounded-md order-first md:order-last"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
