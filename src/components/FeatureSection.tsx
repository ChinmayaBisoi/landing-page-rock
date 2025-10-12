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

function FeatureSection() {
  return (
    <div className="w-full relative z-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[80px] max-sm:pb-10 pb-20">
          <div className="flex flex-col flex-1 gap-6 lg:gap-[48px] order-2 w-[calc(100%-160px)] max-sm:w-full max-lg:w-full">
            <div className="flex flex-col gap-[40px]">
              <HowRocketDoesIt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
