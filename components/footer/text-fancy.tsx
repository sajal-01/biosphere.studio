"use client"

import { LayoutGroup, motion } from "motion/react"

import TextRotate from "@/components/ui/text-rotate"

export default function TextFancy() {
    return (
        <div className="w-28 md:hidden  h-20  text-xl   flex flex-row items-center justify-center font-overused-grotesk  font-light   md:p-24">
            <LayoutGroup>
                <motion.div className="flex  flex-col" layout>
                    <motion.span
                        layout
                        className="font-extralight"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    >
                        Make it{" "}
                    </motion.span>
                    <TextRotate
                        texts={[
                            "work!",
                            "right!",
                            "fast!",
                            "fun!",
                            "rock!",
                        ]}
                        mainClassName="text-white font-bold px-2 sm:px-2 md:px-3 bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </motion.div>
            </LayoutGroup>
        </div>
    )
}
