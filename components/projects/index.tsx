import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { LucideLink } from "lucide-react";
import RetroGrid from "../ui/retro-grid";

export default function ProjectsShowcase() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section
      id="projects"
      className="my-10 bg-grid-white/[0.02] bg-black/[0.96] antialiased bg-grid-white/[0.02]  overflow-hidden"
    >
      <div className="md:h-[20rem] h-[10rem]  space-y-10 w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <RetroGrid />
        <div className=" p-4 pb-10   max-w-7xl  mx-auto  z-10  w-full ">
          <h1 className="text-lg h-full pb-5 md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b leading-tight from-neutral-50 to-neutral-400 max-w-5xl mx-auto bg-opacity-50">
            We develop thoughtful solutions that assist businesses in navigating
            the digital landscape.
          </h1>
        </div>
      </div>
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = ({ content, link }: any) => {
  return (
    <div className="bg-[#F5F5F7] text-left flex-col flex items-start dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl ">
        {content}
      </p>{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        className="flex items-center pt-5 select-none  underline  space-x-2 text-purple-500 font-bold"
      >
        <span className=" text-base md:text-xl font-sans max-w-3xl mx-auto">
          Visit
        </span>

        <LucideLink size={24} className="text-black dark:text-white" />
      </a>
    </div>
  );
};

const data = [
  {
    category: "Personal Coaching & Consulting",
    place: "Bengaluru, India",
    title: "Coach Kalpa Kartik",
    src: "https://res.cloudinary.com/dhknh8hzg/image/upload/v1736793552/1_gd5gdz.png",
    content: (
      <DummyContent
        content="Offers personalized family coaching services to strengthen bonds and improve communication within families."
        link="https://www.coachkalpakartik.com"
      />
    ),
  },
  {
    category: "Industrial Solutions",
    place: "Mumbai, India",
    title: "Sai Industrial Alliances Private Limited",
    src: "https://res.cloudinary.com/dhknh8hzg/image/upload/v1736793552/4_mlhbwn.png",
    content: (
      <DummyContent
        link="https://saiapl.com"
        content="Specializes in industrial solutions and services, catering to various sectors with a focus on quality and innovation."
      />
    ),
  },
  {
    category: "Digital Marketing & Growth",
    place: "India",
    title: "Growth Agency",
    src: "https://res.cloudinary.com/dhknh8hzg/image/upload/v1736793552/5_mglsf7.png",
    content: (
      <DummyContent
        link="https://growthagency.in"
        content="Provides digital marketing and growth strategies to help businesses expand their online presence and achieve their goals."
      />
    ),
  },
  {
    category: "Spiritual & Personal Growth",
    place: "Bengaluru, India",
    title: "Deekshma Spiritual Zone",
    src: "https://res.cloudinary.com/dhknh8hzg/image/upload/v1736793552/6_kgtqnv.png",
    content: (
      <DummyContent
        content="Focuses on spiritual well-being, offering resources and guidance for personal growth and enlightenment."
        link="https://www.deekshma.com"
      />
    ),
  },
  {
    category: "Industrial Packaging",
    place: "Bengaluru, India",
    title: "SRM Strappings",
    src: "https://res.cloudinary.com/dhknh8hzg/image/upload/v1736793552/2_eftbwe.png",
    content: (
      <DummyContent
        content="Manufactures high-quality polypropylene (PP) strapping rolls for various industrial packaging needs."
        link="https://www.srmstrappings.com"
      />
    ),
  },
  {
    category: "Healthcare Services",
    place: "El Paso, TX",
    title: "River Valley Pulmonary Consultants",
    src: "https://res.cloudinary.com/dhknh8hzg/image/upload/v1736793552/3_tct3ph.png",
    content: (
      <DummyContent
        content="Provides exceptional pulmonary, sleep, and critical care services, offering advanced diagnostic procedures and personalized treatments."
        link="https://www.rivervalleypulmonary.com"
      />
    ),
  },
];
