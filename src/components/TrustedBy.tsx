import React from "react";
import Image from "next/image";

function TrustedBy() {
  return (
    <div className="py-[80px] max-sm:py-[40px] max-w-[1920px] mx-auto undefined">
      <div className="relative z-2">
        <div className="text-center flex flex-col max-sm:gap-4">
          <div className="container">
            <p className="text-[24px] leading-[140%] max-sm:text-[20px] font-semibold w-[600px] mx-auto max-sm:w-full text-heading">
              Trusted by 400K+ users in 180+ countries
            </p>
          </div>
          <div className="marquee-container overflow-hidden">
            <div className="object-contain h-20 marquee-content">
              <Image
                alt="customer"
                loading="lazy"
                width="2500"
                height="140"
                decoding="async"
                className="object-contain"
                src="/assets/trusted-by.webp"
                style={{ color: "transparent" }}
              />

              <Image
                alt="customer"
                loading="lazy"
                width="2500"
                height="140"
                decoding="async"
                className="object-contain"
                src="/assets/trusted-by.webp"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
