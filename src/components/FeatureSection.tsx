import React from "react";
import Image from "next/image";
import HowItWorks from "~public/assets/how-it-works.webp";

function HowRocketDoesIt() {
  return (
    <div className="rounded-12 p-8 max-sm:p-4 lg:p-[64px] flex-1 overflow-hidden relative">
      <Image
        alt="how-it-works"
        width="1920"
        height="1180"
        className="w-full h-full object-cover absolute inset-0 rounded-[12px]"
        // src="/assets/how-it-works.webp"
        src={HowItWorks}
        style={{ color: "transparent" }}
        placeholder="blur"
        // blurDataURL="/assets/how-it-works-placeholder.png"
      />
      <div className="relative flex flex-col gap-4 lg:gap-6 z-1">
        <div>
          <p className="text-[48px] leading-[120%] max-sm:text-[32px] text-onColor-heading">
            How Rocket does it
          </p>
          <p className="text-[48px] leading-[120%] max-sm:text-[32px] text-onColor-heading font-bold">
            One sentence in
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="inline-block"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
            Whole app out
          </p>
        </div>
        <p className="text-[16px] leading-[150%] text-onColor-heading w-full lg:w-6/12 font-medium">
          Forget endless tutorials. Skip the boilerplate. No coding required-
          just your imagination. Type it once and get a full-stack app, backend
          ready, integration ready, launch button waiting.
        </p>
      </div>
    </div>
  );
}

const features = ["One prompt", "Backend", "Launch", "Templates"];
function FeaturesSidebar() {
  return (
    <div className="max-sm:hidden w-full lg:w-[160px] flex-shrink-0 sticky max-sm:top-[65px] -mr-[16px] bg-surface-default z-10 lg:top-[160px] lg:bg-transparent h-fit">
      <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible max-sm:gap-4">
        {features.map((feature) => (
          <div
            key={feature}
            onClick={() => {
              const element = document.getElementById(
                feature.toLowerCase().replace(" ", "-")
              );
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            className="flex items-center gap-2 cursor-pointer py-3 px-2 relative min-sm:border-b border-dashed border-outline-default-primary-default nav-item whitespace-nowrap opacity-100"
          >
            <div className="w-1 h-1 rounded-full  bg-heading shrink-0"></div>
            <p className="text-[16px] leading-[150%] font-semibold grow">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const featureDetails = [
  {
    id: "one-prompt",
    title: (
      <>
        One prompt <br /> Whole app. No kidding.
      </>
    ),
    description: (
      <>
        While others make you prompt for every page and feature, Rocket&apos;s
        different. Describe your vision once and get full functional app with
        backend, integrations, production-ready code- everything. It&apos;s like
        your senior product and dev teams that read your mind.
      </>
    ),
    steps: [
      "Rocket does deep research about your market (seriously)",
      "Contextualizes your problem and decides features set",
      "Designs optimum user experience and interface (UI/UX)",
      "Writes awesome copy that ranks high in SEO",
      "Writes high quality code in your choice of framework",
    ],
    starredStep: "Rocket adds features that you didn't know you needed!",
    btnTitle: "Sounds unbelievable? Try it",
  },
  {
    id: "backend",
    title: (
      <>
        Backend <br /> Already ready.
      </>
    ),
    description: (
      <>
        Your application is already ready and configured to integrate with the
        backend. Database schemas, authentication, etc. can all be setup
        on-the-go based on your choice of services.
      </>
    ),
    steps: [
      "Database schemas auto-generated",
      "Authentication and security configured",
      "API endpoints created automatically",
      "Ready for payment gateway and other integrations",
      "Cloud infrastructure provisioned",
    ],
    btnTitle: "See it in action, now",
  },
  {
    id: "launch",
    title: (
      <>
        Launch <br /> Deploy instantly.
      </>
    ),
    description: (
      <>
        From idea to live application in minutes, not months. Our deployment
        pipeline handles everything from code optimization, to server
        configuration for launching instantly.
      </>
    ),
    steps: [
      "Code optimization and bundling",
      "Sync with Github",
      "Ready to deploy on Netlify",
      "Ready to deploy on your custom domain",
      "Mobile apps ready to install in your device",
    ],
    starredStep: "You own the code. Clean, functional, and high quality.",
    btnTitle: "Launch your idea, now",
  },
  {
    id: "templates",
    title: (
      <>
        Templates <br /> Jump start your idea launch.
      </>
    ),
    description: (
      <>
        Top quality templates curated by our experts. Reduce token consumption
        by upto 80%.
      </>
    ),
    btnTitle: "Explore more templates",
  },
];

function FeatureStep({
  step,
  numbering,
  isStarred,
}: {
  step: string;
  numbering?: string;
  isStarred: boolean;
}) {
  return (
    <div className="flex items-center gap-[20px] max-sm:gap-4 relative py-3 border-b border-dashed border-emphasis-low">
      <p className="text-[14px] leading-[150%] text-heading min-w-[2.5rem]">
        {isStarred ? (
          <span className="!text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="text-[#fb8500]"
            >
              <path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path>
            </svg>
          </span>
        ) : (
          numbering
        )}
      </p>
      <div className="flex-1">
        <p className="text-[14px] leading-[150%] text-heading">{step}</p>
      </div>
    </div>
  );
}

function FeatureDetailCard({
  feature,
  index,
  content,
}: {
  feature: (typeof featureDetails)[number];
  index: number;
  content?: React.ReactNode;
}) {
  return (
    <section
      id={feature.id}
      className="bg-surface-card p-8 rounded-lg max-sm:p-4"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[32px] leading-[130%] max-sm:text-[24px] font-semibold text-heading">
              {feature.title}
            </p>
          </div>
          <div className="" />
          <p className="text-[16px] text-body leading-relaxed">
            {feature.description}
          </p>
        </div>
        {content ? (
          content
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-[14px] leading-[150%] text-body uppercase">
              What Actually Happens:
            </p>
            <div className="flex flex-col">
              {feature.steps?.map((step, idx) => (
                <FeatureStep
                  key={step}
                  step={step}
                  numbering={`${index + 1}.${idx + 1}`}
                  isStarred={false}
                />
              ))}
              {feature.starredStep && (
                <FeatureStep
                  step={feature.starredStep}
                  numbering={`${index + 1}.${0 + 1}`}
                  isStarred
                />
              )}
            </div>
          </div>
        )}
        {feature.btnTitle && (
          <div className="flex">
            <button
              className="relative flex w-max items-center justify-center cursor-pointer bg-surface-button-default text-white hover:bg-surface-button-default-hover disabled:hover:bg-surface-button-default py-1.5 px-6 h-[40px] rounded-[10px] disabled:opacity-80 disabled:text-disabled-default focus:outline-none disabled:cursor-not-allowed rightAnimation"
              aria-disabled="false"
              aria-busy="false"
            >
              <div className="w-full flex items-center justify-center">
                <div className="flex items-center justify-center gap-1">
                  <p className="text-inherit text-[14px] leading-[150%]">
                    {feature.btnTitle}
                  </p>
                </div>
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FeatureDetailsContainer() {
  return (
    <div className="flex-1 flex flex-col gap-6 lg:gap-[48px] order-1 lg:order-2">
      {featureDetails.map((feature, index) => (
        <FeatureDetailCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  );
}

function FeaturesContainer() {
  return (
    <div className="flex max-lg:flex-col gap-4">
      <FeaturesSidebar />
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[40px]">
        <div className="max-sm:hidden relative flex justify-center items-center w-[558px] max-xl:w-[300px] h-[300px] lg:h-[600px] lg:sticky lg:top-32 order-2 lg:order-1">
          <div className="w-full max-lg:max-w-[300px] max-w-[500px] h-full relative">
            <div className="w-full h-full relative">
              <Image
                src="/assets/rocket-1.webp"
                alt="feature-section-image"
                width={1000}
                height={1200}
                style={{
                  verticalAlign: "top",
                  width: "500px",
                  height: "600px",
                }}
              />
              <Image
                src="/assets/rocket-1.webp"
                alt="feature-section-image"
                width={1000}
                height={1200}
                style={{
                  verticalAlign: "top",
                  width: "500px",
                  height: "600px",
                }}
              />
              <Image
                src="/assets/rocket-1.webp"
                alt="feature-section-image"
                width={1000}
                height={1200}
                style={{
                  verticalAlign: "top",
                  width: "500px",
                  height: "600px",
                }}
              />
              <Image
                src="/assets/rocket-1.webp"
                alt="feature-section-image"
                width={1000}
                height={1200}
                style={{
                  verticalAlign: "top",
                  width: "500px",
                  height: "600px",
                }}
              />
            </div>
          </div>
        </div>
        <FeatureDetailsContainer />
      </div>
    </div>
  );
}

function FeatureSection() {
  return (
    <div className="w-full relative z-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[80px] max-sm:pb-10 pb-20">
          <div className="flex flex-col flex-1 gap-6 lg:gap-[48px] order-2 w-[calc(100%-160px)] max-sm:w-full max-lg:w-full">
            <div className="flex flex-col gap-[40px]">
              <HowRocketDoesIt />
              <FeaturesContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
