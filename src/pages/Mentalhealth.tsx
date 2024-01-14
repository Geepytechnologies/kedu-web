import React from "react";
import Layout from "../layout/Layout";
import { motion } from "framer-motion";

type Props = {};

const Mentalhealth = (props: Props) => {
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
            The Need For Mental Health Awareness In Africa And Beyond
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
                src="/drugs1.jpg"
                className="h-[450px] w-full object-center object-cover rounded-md"
              />
              <div className="flex flex-col gap-3 p-3">
                <p>
                  In Africa and beyond, there's a pressing need for heightened
                  mental health awareness due to pervasive negligence and a
                  dearth of accessible resources.
                </p>
                <p>
                  Stigma often accompanies mental health challenges,
                  exacerbating the problem. The lack of educational materials
                  and tools compounds this issue. Artificial Intelligence (AI)
                  emerges as a crucial ally, offering scalable solutions
                </p>
                <p>
                  AI-driven platforms can disseminate culturally sensitive
                  information, destigmatize mental health, and provide remote,
                  personalized support. By leveraging technology, we can bridge
                  knowledge gaps, combat neglect, and foster a global dialogue
                  on mental health, ensuring a brighter future where well-being
                  is prioritized and supported.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Mentalhealth;
