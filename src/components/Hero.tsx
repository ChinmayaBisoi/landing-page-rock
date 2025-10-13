import Image from "next/image";
import FundingBanner from "~/components/FundingBanner";
import TextType from "~/components/TextType";
import WizardForm from "~/components/WizardForm";
import Navbar from "~/components/Navbar";
import HeroImage from "~public/assets/hero.webp";

function HeroHeading() {
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
                <div className="text-[20px] leading-[140%] max-sm:text-[18px] underline underline-offset-1 outline-white text-white font-medium">
                  <TextType
                    text={[
                      "internal tool.",
                      "dashboard.",
                      "landing page.",
                      "website.",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName=""
                    className="underline underline-offset-1"
                  />{" "}
                </div>
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

function HeroIntegrations() {
  return (
    <div className="flex max-md:flex-col bg-blur1 rounded-[20px] max-sm:gap-0 mx-auto max-sm:w-full">
      <div className="flex flex-col max-sm:w-full items-start gap-3 py-3 px-5 max-sm:p-4 border-r border-outline-glassmorph-onColor max-sm:border-b max-sm:border-r-0">
        <p className="text-[14px] leading-[150%] text-white opacity-50 max-sm:w-full max-sm:text-center">
          Frameworks
        </p>
        <div className="flex gap-5 max-sm:justify-center max-sm:w-full">
          <div data-tooltip-id="flutter">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   bg-[position:0_0]'
            ></div>
          </div>
          <div data-tooltip-id="html">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   bg-[position:-44px_0]'
            ></div>
          </div>
          <div data-tooltip-id="nextjs">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   bg-[position:-85px_0]'
            ></div>
          </div>
          <div data-tooltip-id="react">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   bg-[position:-119px_0] !bg-[length:660px]'
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-sm:w-full items-start gap-3 py-3 px-5 max-sm:p-4 max-sm:px-4">
        <p className="text-[14px] leading-[150%] text-white opacity-50 max-sm:w-full max-sm:text-center">
          Integrations
        </p>
        <div className="flex max-sm:flex-wrap justify-start gap-[18px] max-sm:justify-center">
          <div data-tooltip-id="github">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-177px_0]'
            ></div>
          </div>
          <div data-tooltip-id="supabase">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-219px_0]'
            ></div>
          </div>
          <div data-tooltip-id="figma">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-260px_0]'
            ></div>
          </div>
          <div data-tooltip-id="netlify">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-295px_0]'
            ></div>
          </div>
          <div data-tooltip-id="stripe">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-340px_0]'
            ></div>
          </div>
          <div data-tooltip-id="OpenAI">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-382px_0]'
            ></div>
          </div>
          <div data-tooltip-id="Anthropic">
            <div
              className='w-6 h-5 mt-1 bg-no-repeat bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
                opacity-50 hover:opacity-100 bg-[length:500px] bg-[position:-298px_0]'
            ></div>
          </div>
          <div data-tooltip-id="Gemini">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-476px_0]'
            ></div>
          </div>
          <div data-tooltip-id="Perplexity">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-520px_0]'
            ></div>
          </div>
          <div data-tooltip-id="Google-Analytics">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-560px_0]'
            ></div>
          </div>
          <div data-tooltip-id="AdSense">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-600px_0]'
            ></div>
          </div>
          <div data-tooltip-id="Resend">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-642px_0]'
            ></div>
          </div>
          <div data-tooltip-id="Twilio">
            <div
              className='w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 bg-[length:712px]
  bg-[url("https://assets.rocket.new/rocket/tech-stack-white.webp")]
   cursor-pointer bg-[position:-688px_0]'
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  // return (
  //   <div className="min-h-[80vh] flex flex-col">
  //     <Image
  //       placeholder="blur"
  //       blurDataURL="/assets/hero-placeholder.png"
  //       src="/assets/hero.webp"
  //       alt="Hero"
  //       width={1920}
  //       height={1080}
  //       className="absolute inset-0 w-full h-full max-h-full object-cover object-bottom"
  //       priority
  //     />
  //     <div className="my-auto z-10">
  //       <div className="flex flex-col gap-[40px] max-sm:gap-[40px] container my-auto">
  //         <div className="flex flex-col gap-8">
  //           <HeroHeading />
  //           <WizardForm />
  //         </div>
  //         <HeroIntegrations />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="overflow-hidden">
      <div className="min-h-screen max-w-[1920px] mx-auto max-sm:min-h-auto flex flex-col w-full bg-foundation-white home_page relative overlay_bg !min-h-auto">
        {/*  */}
        <Image
          placeholder="blur"
          blurDataURL="/assets/hero-placeholder.png"
          src="/assets/hero.webp"
          alt="Hero"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full max-h-full object-cover object-bottom"
          priority
        />
        <div className="hero_section">
          <div className="flex flex-col">
            <Navbar />
            <Navbar showStickyNavbar />
          </div>

          <div className="my-auto z-10">
            <div className="flex flex-col gap-[40px] max-sm:gap-[40px] container my-auto">
              <div className="flex flex-col gap-8">
                <HeroHeading />
                <WizardForm />
              </div>
              <HeroIntegrations />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
