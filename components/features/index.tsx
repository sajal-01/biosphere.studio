import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Custom Website",
      description:
        "Fully tailored websites for businesses, portfolios, or blogs, designed to meet specific client requirements.",
    },
    {
      title: "E-commerce Platform",
      description:
        "Online stores with product catalogs, shopping carts, and secure payment systems.",
    },
    {
      title: "Marketing Dashboards",
      description:
        "Custom analytics platforms that display key marketing metrics and campaign performance in real-time.",
    },
    {
      title: "Mobile Applications",
      description:
        "Native or hybrid apps designed for iOS and Android to enhance customer engagement and accessibility.",
    },
    {
      title: "Web Portals",
      description:
        "Centralized platforms for users to access personalized information, services, or resources.",
    },
    {
      title: "SaaS Products",
      description:
        "Cloud-based software solutions for recurring services like project management, email marketing, or customer support.",
    },
    {
      title: "Membership or Subscription Platforms",
      description:
        "Websites offering exclusive content or services for subscribed members.",
    },
    {
      title: "Event Management Software",
      description:
        "Applications to manage virtual or in-person events, including registrations, schedules, and attendee interactions.",
    },
  ];
  return (
    <div
      id="services"
      className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto"
    >
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          We offer a wide range of services
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From custom websites to mobile applications, we provide a variety of
          services to help you achieve your goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {/* <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div> */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
