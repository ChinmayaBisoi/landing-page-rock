import React from "react";
import ArrowRight from "~/icons/ArrowRight";
import RocketIcon from "~/icons/Rocket";

function FundingBanner() {
  return (
    <a
      target="_blank"
      className="w-max px-5 py-2 rounded-[8px] mx-auto text-onColor-revers bg-[#C1F5EF] flex gap-2 items-center mb-8"
      href="/blog/rocket-raises-15m-in-seed"
    >
      <RocketIcon />
      <p className="text-[12px] leading-[150%] uppercase font-medium text-black">
        ROCKET RAISES $15M SEED FUNDING
      </p>
      <ArrowRight />
    </a>
  );
}

export default FundingBanner;
