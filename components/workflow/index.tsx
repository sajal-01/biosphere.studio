import { MagicCard } from "../ui/magic-card";

export default function WorkFlow() {
  return (
    <section className="text-white   w-full bg-slate-950  ">
      <div className="grid grid-cols-2 px-8">
        <div className="sticky top-0 h-screen grid place-content-center">
          <h1 className="text-2xl md:text-5xl text-purple-500 px-8 font-bold text-left tracking-tight leading-[120%]">
            Discovery To Delivery 2X Faster
          </h1>
          <p className="text-lg md:text-2xl py-2 text-gray-400 px-8 text-left">
            Think of us as your product team. We look after discovery, design
            and development, while you can focus on growing your business.
          </p>
        </div>
        <div className="grid gap-2">
          <figure className="sticky top-0 h-screen grid place-content-center">
            <MagicCard
              className="cursor-pointer flex-col items-center   text-4xl shadow-2xl"
              gradientColor={"#262626"}
            >
              <div className="flex  flex-col p-5  space-y-10">
                <div className="flex items-center w-full   space-x-5">
                  {/* // number 1 */}
                  <div className="w-10 h-10 shrink-0 mx-[-1px] bg-purple-500 flex items-center justify-center rounded-full ring-2 ring-gray-300 ring-offset-4">
                    <span className="w-4 h-8 text-2xl font-bold text-white ">
                      1
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl text-white font-bold">
                    Design
                  </h1>
                </div>

                <p className="text-lg md:text-2xl font-bold text-gray-400 px-5 ">
                  Most agencies design and develop in one go.
                </p>
                <p className="text-lg md:text-2xl text-gray-400 px-5 ">
                  It doesn’t work because it doesn’t give you a full picture of
                  the product. By designing first, it’s easier to make changes
                  and collaborate before we begin to develop.
                </p>
              </div>
            </MagicCard>
          </figure>
          <figure className="sticky top-0 h-screen grid place-content-center">
            <MagicCard
              className="cursor-pointer flex-col items-center   text-4xl shadow-2xl"
              gradientColor={"#262626"}
            >
              <div className="flex  flex-col p-5  space-y-10">
                <div className="flex items-center w-full   space-x-5">
                  {/* // number 1 */}
                  <div className="w-10 h-10 shrink-0 mx-[-1px] bg-purple-500 flex items-center justify-center rounded-full ring-2 ring-gray-300 ring-offset-4">
                    <span className="w-4 h-8 text-2xl font-bold text-white ">
                      2
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl text-white font-bold">
                    Development
                  </h1>
                </div>

                <p className="text-lg md:text-2xl font-bold text-gray-400 px-5 ">
                  We use a modern tech stack to accelerate development.
                </p>
                <p className="text-lg md:text-2xl text-gray-400 px-5 ">
                  By leveraging cutting-edge technology used by leading tech
                  companies, we deliver your product faster and iterate to
                  achieve product-market fit.
                </p>
              </div>
            </MagicCard>
          </figure>
          <figure className="sticky top-0 h-screen grid place-content-center">
            <MagicCard
              className="cursor-pointer flex-col items-center   text-4xl shadow-2xl"
              gradientColor={"#262626"}
            >
              <div className="flex  flex-col p-5  space-y-10">
                <div className="flex items-center w-full   space-x-5">
                  {/* // number 1 */}
                  <div className="w-10 h-10 shrink-0 mx-[-1px] bg-purple-500 flex items-center justify-center rounded-full ring-2 ring-gray-300 ring-offset-4">
                    <span className="w-4 h-8 text-2xl font-bold text-white ">
                      3
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl text-white font-bold">
                    Delivery
                  </h1>
                </div>

                <p className="text-lg md:text-2xl font-bold text-gray-400 px-5 ">
                  More than just the initial build.
                </p>
                <p className="text-lg md:text-2xl text-gray-400 px-5 ">
                  As you gather user feedback, our team continue to support with
                  upgrades, and maintenance to help you gain product market fit
                  and grow.
                </p>
              </div>
            </MagicCard>
          </figure>
        </div>
      </div>
    </section>
  );
}
