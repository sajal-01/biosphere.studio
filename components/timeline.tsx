import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Design",
      content: (
        <div>
          <p className="text-lg md:text-2xl font-bold text-gray-100 md:px-5 ">
            Most agencies design and develop in one go.
          </p>
          <p className="text-[1rem] leading-6  md:text-2xl text-gray-500 md:px-5 pt-5">
            It doesn’t work because it doesn’t give you a full picture of the
            product. By designing first, it’s easier to make changes and
            collaborate before we begin to develop.
          </p>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div>
          <p className="text-lg md:text-2xl font-bold text-gray-100 md:px-5 ">
            We use a modern tech stack to accelerate development.
          </p>
          <p className="text-[1rem] leading-6  md:text-2xl text-gray-500 md:px-5 pt-5">
            By leveraging cutting-edge technology used by leading tech
            companies, we deliver your product faster and iterate to achieve
            product-market fit.
          </p>
        </div>
      ),
    },

    {
      title: "Delivery",
      content: (
        <div>
          <p className="text-lg md:text-2xl font-bold text-gray-100 md:px-5 ">
            More than just the initial build.
          </p>
          <p className="text-[1rem] leading-6  md:text-2xl text-gray-500 md:px-5 pt-5">
            As you gather user feedback, our team continue to support with
            upgrades, and maintenance to help you gain product market fit and
            grow.
          </p>
        </div>
      ),
    },
  ];
  return (
    <section className="w-full ">
      <Timeline
        data={data}
        title="Discovery To Delivery"
        subtitle="Think of us as your product team. We look after discovery, design and
          development, while you can focus on growing your business."
      />
    </section>
  );
}
