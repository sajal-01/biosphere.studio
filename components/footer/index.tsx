import Link from "next/link";
import TextFancy from "./text-fancy";

export default function Footer() {
  return (
    <div className="pb-2  overflow-hidden relative w-full bg-gray-300  text-black  items-center justify-center h-full">

      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="sticky z-0 bottom-2 left-0 w-full h-60 flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end md:justify-self-start px-12 text-left items-start py-12 bg-gradient-to-l from-primary5 to-primary95 bg-clip-text text-transparent">
          <div className="flex flex-row space-x-10 items-start md:space-x-24 text-md md:text-xl">
            <TextFancy />
            <ul>
              <li className="hover:underline cursor-pointer  font-normal">
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className="hover:underline cursor-pointer  font-normal">
                <Link href="#services">
                  Services
                </Link>
              </li>
              <li className="hover:underline cursor-pointer  font-normal">
                <Link href="#projects" >
                  Projects
                </Link>
              </li>
            </ul>
            <ul>
              <li className="hover:underline cursor-pointer  font-normal">
                <Link href="/policy/terms">
                  Terms
                </Link>
              </li>
              <li className="hover:underline cursor-pointer  font-normal">
                <Link href="/policy/privacy">
                  Privacy
                </Link>
              </li>
              <li className="hover:underline cursor-pointer  font-normal">
                <Link href="/policy/foundation">
                  Foundational
                </Link>
              </li>

            </ul>
          </div>
          <h2 className="absolute -bottom-2 md:bottom-8  flex flex-col items-start  left-0  -translate-y-1/4 md:translate-y-1/3 md:text-[120px] font-extralight text-[40px] bg-gradient-to-l from-primary5 to-primary95 bg-clip-text text-transparent ">
            Biosphere.Studio
          </h2>
          <h2 className="absolute -bottom-2 md:bottom-2  flex flex-col items-start left-1  -translate-y-1/4 md:translate-y-1/3 text-sm md:text-xl font-extralight  bg-gradient-to-l from-primary5 to-primary95 bg-clip-text text-transparent ">
            &copy; 2025 Biosphere.Studio
          </h2>
        </div>
      </div>
    </div>
  )
}


