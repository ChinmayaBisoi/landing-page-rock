import FundingBanner from "./FundingBanner";

export function HeroHeading() {
  return (
    <div className="flex flex-col grow gap-2 text-center">
      <FundingBanner />
      <div className="w-7/12 mx-auto max-sm:w-full flex flex-col gap-2">
        <p className="text-[48px] leading-[120%] max-sm:text-[32px] text-white font-semibold">
          Think It. Type It. Launch It.
        </p>
      </div>
      <div className="text-white w-[620px] overflow-hidden max-sm:w-full mx-auto flex flex-col gap-1 justify-center">
        <div className="flex flex-wrap justify-center">
          <p className="text-[20px] leading-[140%] max-sm:text-[18px] text-white">
            Build production-ready
          </p>
          <div className="relative overflow-hidden text-left w-[150px] ml-1 max-sm:h-[25px]">
            <div
              className="transition-transform duration-1000 ease-in-out  rotateX-0"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <div
                className="absolute inset-0 transition-opacity duration-500  opacity-100"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(0deg)",
                }}
              >
                <p className="text-[20px] leading-[140%] max-sm:text-[18px] underline underline-offset-1 outline-white text-white font-medium">
                  internal tool.<span className="animate-pulse">|</span>
                </p>
              </div>
              <div
                className="absolute inset-0 transition-opacity duration-500 outline outline-white opacity-0"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                <p className="text-[20px] leading-[140%] max-sm:text-[18px] underline underline-offset-1 outline-white text-white font-medium">
                  dashboard.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
