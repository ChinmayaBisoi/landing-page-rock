import React from "react";
import ChevronDown from "~/icons/ChevronDown";
import Accordion from "./ui/Accordion";

const faqs = [
  {
    title: "What is Rocket?",
    content:
      "Rocket is your AI-powered co-pilot for building production-ready apps and websites. Think of it as a Product Manager and Engineer in one- turning your plain-language prompts into full apps and websites, complete with backend, integrations, and hosting. No coding required.",
  },
  {
    title: "How&apos;s Rocket different from other vibe coding platforms?",
    content:
      "Most platforms stop at single page mockups or prototypes. Rocket delivers production-ready full apps- complete with backend, integrations, and hosting. It's not just no-code; it's launch-ready code.",
  },
  {
    title: "What can I do with Rocket?",
    content:
      "Anything from landing pages and dashboards to full-stack web and mobile apps. Users have built e-commerce sites, CRMs, internal tools, and even enterprise-grade systems- all from prompts in more than 30+ languages so far.",
  },
  {
    title: "What tech stacks does Rocket know?",
    content:
      "Rocket speaks modern stacks fluently: Flutter, HTML, Next.js, React, Tailwind, and more. Every project is built on proven, scalable technologies you can trust. You can select your stack while building.",
  },
  {
    title: "Who owns the IP and the code?",
    content:
      "You do. Rocket generates the code for you. You can host it on Rocket, export to GitHub, or download and take it anywhere. Your data, your IP, your choice.",
  },
  {
    title: "Do you offer free plans?",
    content:
      "Yes. You can start building for free with generous usage limits. Upgrade only when you're ready to scale or need advanced features.",
  },
  {
    title: "Is Rocket only for developers?",
    content:
      "Nope. Rocket is for anyone with an idea- students, founders, designers, marketers, even enterprises. If you can describe it, Rocket can build it. From a farmer in Brazil to Fortune 100 companies, Rocket is used in 180+ countries.",
  },
  {
    title: "Is Rocket secure and scalable?",
    content:
      "Yes. Rocket builds on modern, battle-tested frameworks. You get production-grade code with enterprise-level scalability. Rocket is ISO 27001 and SOC-II Compliant.",
  },
];

function FaqSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-[80px] max-sm:py-[40px] relative z-3">
      <div className="container flex flex-col gap-16 max-sm:gap-8">
        <div className="text-center flex flex-col gap-4">
          <p className="text-[48px] leading-[120%] max-sm:text-[32px] font-semibold">
            FAQs
          </p>
          <p className="text-[20px] leading-[140%] max-sm:text-[18px] text-body">
            Rocket is super easy to navigate for anyone. <br /> Here are some of
            our most common questions and answers.
          </p>
        </div>
        <div className="max-w-3xl w-full max-sm:w-full flex flex-col gap-5 mx-auto">
          {faqs.map((faq) => (
            <Accordion
              key={faq.title}
              title={faq.title}
              content={faq.content}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5 text-center max-sm:pb-0">
          <div className="flex flex-col gap-2">
            <p className="text-[32px] leading-[130%] max-sm:text-[24px] font-medium">
              Still have questions?
            </p>
            <p className="text-[20px] leading-[140%] max-sm:text-[18px]">
              Explore{" "}
              <a
                className="text-link hover:underline"
                target="_blank"
                href="https://docs.rocket.new"
              >
                {" "}
                docs
              </a>
              , see{" "}
              <a
                className="text-link hover:underline"
                target="_blank"
                href="https://www.youtube.com/@rocketdotnew"
              >
                tutorials
              </a>
              , or join our{" "}
              <a
                className="text-link hover:underline"
                target="_blank"
                href="https://discord.com/invite/rocket-878500942604038215"
              >
                Discord community
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
