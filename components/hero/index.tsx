//@ts-nocheck
"use client";
import { motion } from "framer-motion";
import Hyperspeed from "@/components/ui/hyper-speed";
import CalenderBookingButton from "@/components/buttons/calender-booking";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import useForceRerender from "@/hooks/useForceRerender";
import { hyperspeedPresets } from "../ui/presets-three";

export default function Hero() {
  const [key, forceRerender] = useForceRerender();

  return (
    <div className="text-white  md:h-screen h-[80vh]  overflow-hidden  w-full bg-black  grid place-content-center sticky top-0">
      {/* <div className=" top-0 w-full  h-1/2  absolute z-10">
        <div className="demo-container relative min-h-[800px]  h-full mb-4 cursor-pointer">
          <Hyperspeed
            key={key}
            effectOptions={hyperspeedPresets["ascension"]}
          />
        </div>
      </div> */}
      <div className="overflow-hidden">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl  px-4 md:text-4xl lg:text-6xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            We Build Digital Products
            <br />
            <Highlight className="text-black dark:text-white">
              Unlock speed to market
            </Highlight>
            <br />
            Twice As Fast & Half The Cost
          </motion.h1>

          <CalenderBookingButton
            namespace="15min"
            link="biosphere.studio/15min"
            layout_view="month_view"
          >
            <motion.button
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="font-sans flex justify-center mt-10 gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-gradient-to-r from-indigo-500 to-purple-500 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group/inner"
            >
              Book a Briefing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 19"
                className="w-8 h-8 justify-end bg-gray-50 group-hover/inner:rotate-90 group-hover/inner:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover/inner:border-gray-700 p-2 rotate-45"
              >
                <path
                  className="fill-gray-800 group-hover/inner:fill-gray-800"
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                />
              </svg>
            </motion.button>
          </CalenderBookingButton>
        </HeroHighlight>
      </div>
    </div>
  );
}
