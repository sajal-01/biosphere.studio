import { HeroHighlightText } from "@/components/home/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Navbar />
      <div className="z-10 w-full flex-col  items-center justify-between  text-sm lg:flex">
        <HeroHighlightText />
      </div>
    </main>
  );
}
