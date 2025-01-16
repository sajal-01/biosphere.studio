"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideChevronRight } from "lucide-react";

const Feature = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-r  border-l md:border-l-0 border-b md:border-b-0 border-t md:border-t-0  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) &&
          "border-l border-b   dark:border-neutral-800",
        index < 4 && "!border-b  border-l   dark:border-neutral-800",
        (index === 3 || index === 7) && "md:border-r-0"
      )}
    >
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-20 w-[0.1px] rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-purple-500 transition-all duration-200 origin-center">
          <LucideChevronRight className="w-6 h-6 text-neutral-800 dark:text-neutral-100 group-hover/feature:text-purple-500 transition duration-200" />
        </div>
        <span className="group-hover/feature:translate-x-2 group-hover/feature:text-purple-700 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
export const FeatureHeading = ({ title, description, services }: any) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        initial={{ opacity: 0.5, y: 300 }}
        whileInView={{ opacity: 1, y: 250 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="pt-10 bg-gradient-to-br  from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-normal text-transparent md:text-7xl"
      >
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full ">
          <h1 className="text-4xl pb-5 capitalize tracking-tighter md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {title}
          </h1>
          <p className="text-[1rem] leading-6 max-w-2xl mx-auto  md:text-2xl text-gray-400 md:px-5 ">
            {description}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.5, y: 400 }}
        whileInView={{ opacity: 1, y: 300 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="grid  px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4   z-10  max-w-7xl mx-auto"
      >
        {services.map((feature: any, index: number) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </motion.div>
    </div>
  );
};
