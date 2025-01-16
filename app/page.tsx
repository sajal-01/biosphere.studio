import { FeaturesSectionDemo } from "@/components/features";
import ProjectsShowcase from "@/components/projects";
import Hero from "@/components/hero";
import SubHero from "@/components/sub-hero";
import { TimelineDemo } from "@/components/timeline";

export default function Home() {
  return (
    <>
      <section className="relative">
        <Hero />
        <SubHero />
      </section>
      <FeaturesSectionDemo />
      <TimelineDemo />
      <ProjectsShowcase />
    </>
  );
}
