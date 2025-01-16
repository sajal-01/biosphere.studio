import AnimatedText from "@/components/ui/animated-text";
import SplitText from "@/components/ui/split-text";

export default function Footer() {
  return (
    <>
      <div className="relative overflow-hidden h-full  pt-8 md:pt-20 bg-black text-white">
        <div className="  px-4 mx-auto">
          <div className=" mt-2 py-5 md:pt-20 relative w-full flex items-center justify-center  border-gray-200">
            <div className="md:hidden block">
              <SplitText
                text="Biosphere.Studio"
                className="text-3xl font-semibold text-center  text-purple-500"
                delay={50}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.5}
                rootMargin="-50px"
              />
            </div>
            <div className="md:block hidden">
              <AnimatedText
                text="Biosphere.Studio"
                className=" text-center  text-gray-500 md:text-[10rem] text-[2rem]"
              />
            </div>
          </div>
          <div className="md:flex justify-between w-full">
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold">
                Let&lsquo;s do great work together!
              </h1>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-3 justify-between pb-2">
            <span className="font-medium">
              &copy; {new Date().getFullYear()} Biosphere.Studio. All rights
              reserved.
            </span>
            <a href="#" className="font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
