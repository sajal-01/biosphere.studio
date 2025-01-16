import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";
import ContactForm from "@/components/forms/contact-form";
import NonShimmerButton from "@/components/ui/nav-button";

export default function Navbar() {
  return (
    <div className=" fixed top-0  bg-opacity-30  w-full backdrop-filter backdrop-blur-sm firefox:bg-opacity-90 md:top-0   px-5 md:px-20  md:mx-auto z-50 ">
      <div className="pt-4 grid md:grid-cols-3 grid-cols-2    w-full items-center">
        <Link href="/" className="text-xl md:text-3xl  font-bold">
          <span className="text-xl md:text-3xl  text-gray-100 font-bold">
            Biosphere.Studio{" "}
          </span>
        </Link>
        <div className="hidden md:flex  w-full items-center place-content-center justify-center space-x-4">
          <NonShimmerButton>
            <div className="flex space-x-4  ">
              <Link
                href="#services"
                className="flex p-1 z-10 hover:text-white text-gray-300"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="flex p-1 z-10   hover:text-white text-gray-300"
              >
                Projects
              </Link>
            </div>
          </NonShimmerButton>
        </div>
        <div className="justify-self-end">
          <ContactForm>
            <ShimmerButton className="shadow-2xl  justify-self-end ml-10">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Contact Us
              </span>
            </ShimmerButton>
          </ContactForm>
        </div>
      </div>
    </div>
  );
}
