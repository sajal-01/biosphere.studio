"use client";
import { FeaturesSectionDemo } from "@/components/features";
import ProjectsShowcase from "@/components/projects";
import Hero from "@/components/hero";
import SubHero from "@/components/sub-hero";
import { TimelineDemo } from "@/components/timeline";
import Hyperspeed from "@/components/ui/hyper-speed";
import { hyperspeedPresets } from "@/components/ui/presets-three";

export default function Home() {
  return (
    <>
      <section className="relative">
        <Hero />
        <SubHero />
      </section>
      <div className="demo-container   min-h-[800px] top-0  h-full mb-4 cursor-pointer">
        <Hyperspeed effectOptions={hyperspeedPresets["ascension"]} />
      </div>
      <FeaturesSectionDemo />
      <TimelineDemo />
      <ProjectsShowcase />
    </>
  );
}
