import { LampContainer } from "../ui/lamp";
import { FeatureHeading } from "./feature-heading";

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
    <section id="services" className=" bg-black service h-full ">
      <LampContainer>
        <FeatureHeading
          title="We offer a wide range of services"
          description="From custom websites to mobile applications, we provide a variety of services to help you achieve your goals."
          services={features}
        />
      </LampContainer>
    </section>
  );
}
