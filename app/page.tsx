import { FeaturesSectionDemo } from "@/components/features";
import WorkFlow from "@/components/workflow";
import ProjectsShowcase from "@/components/projects";
import Hero from "@/components/hero";
import SubHero from "@/components/sub-hero";

export default function Home() {
  return (
    <section className="relative ">
      <article className="relative bg-black">
        <Hero />
        <SubHero />
      </article>
      <FeaturesSectionDemo />
      <WorkFlow />
      <ProjectsShowcase />
    </section>
  );
}
