"use client";
import { motion } from "framer-motion";
import CalenderBookingButton from "@/components/buttons/calender-booking";
import { MagicCard } from "@/components/ui/magic-card";

export default function SubHero() {
  return (
    <div className="bg-gray-300  text-black grid place-content-center md:h-screen  sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative z-20 md:pt-1 pb-10  pt-20  max-w-7xl mx-auto">
        <div>
          <h4 className="text-4xl pb-5 md:text-6xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 tracking-tighter capitalize bg-opacity-50">
            We make every client two simple promises
          </h4>
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
              Book a Brainstorm
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
          <div
            className={
              "flex h-full w-full motion-opacity-in-0 motion-translate-y-in-100 motion-ease-spring-smooth motion-blur-in-md flex-col gap-4 pb-10 mt-10 px-5 md:h-[300px] md:flex-row"
            }
          >
            <MagicCard
              className="cursor-pointer  flex-col items-center justify-center  text-center text-4xl shadow-2xl"
              gradientColor={"#262626"}
            >
              <div className="flex items-center flex-col p-5 justify-center space-y-5 md:space-y-10">
                <div className="flex items-center w-full  justify-center space-x-5">
                  <div className="md:w-10 md:h-10 w-6 h-6 shrink-0 mx-[-1px] bg-purple-500 flex items-center justify-center rounded-full ring-2 ring-gray-300 md:ring-offset-4 ring-offset-2">
                    <span className="md:w-4 md:h-8  md:text-2xl text-lg font-semibold md:font-bold text-white ">
                      1
                    </span>
                  </div>

                  <h1 className="md:text-3xl text-lg text-white font-bold">
                    A product you&apos;re proud of
                  </h1>
                </div>

                <p className="text-[1rem] leading-6 md:px-5  md:text-2xl text-gray-400   text-center">
                  We&apos;re a team of entrepreneurs that love building. We will
                  make sure you are happy with the results. We&apos;ll work as a
                  team to get there.
                </p>
              </div>
            </MagicCard>

            <MagicCard
              className="cursor-pointer flex-col items-center justify-center  text-4xl shadow-2xl"
              gradientColor={"#262626"}
            >
              <div className="flex items-center flex-col p-5 justify-center space-y-5 md:space-y-10">
                <div className="flex items-center w-full  justify-center space-x-5">
                  <div className="md:w-10 md:h-10 w-6 h-6 shrink-0 mx-[-1px] bg-purple-500 flex items-center justify-center rounded-full ring-2 ring-gray-300 md:ring-offset-4 ring-offset-2">
                    <span className="md:w-4 md:h-8  md:text-2xl text-lg font-semibold md:font-bold text-white ">
                      2
                    </span>
                  </div>

                  <h1 className="md:text-3xl text-lg text-white font-bold">
                    Daily progress updates
                  </h1>
                </div>

                <p className="text-[1rem] leading-6  md:text-2xl text-gray-400  md:px-5 text-center">
                  No guessing. You will always know what stage we are at. We
                  give you daily updates with regular Loom videos to show our
                  progress.
                </p>
              </div>
            </MagicCard>
          </div>
        </div>
      </div>
    </div>
  );
}
