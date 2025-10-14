import Image from "next/image";
import React from "react";
import WizardForm from "~/components/WizardForm";
import StartBuildingImage from "~public/assets/start-building.webp";

function SocialsAndFooter() {
  return (
    <div className="container relative z-2">
      <div className="py-4 flex max-sm:flex-col max-sm:gap-4 justify-center items-center pb-16 max-sm:pb-20 gap-6">
        <div className="min-sm:hidden">
          <a
            className="text-[14px] leading-[150%] w-[210px] block mb-4 cursor-pointer"
            role="button"
          >
            <div className="relative">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 815 217"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M706.902 22.368H721.254V13.104H706.902V22.368ZM706.902 37.296H722.166V26.784H706.902V37.296ZM726.87 12.816V21.888L724.422 24.048L727.83 27.024V37.584L723.414 42H701.334V8.4H722.454L726.87 12.816ZM732.224 42V8.4H755.456V13.2H737.792V22.416H753.056V27.12H737.792V37.2H755.936V42H732.224ZM768.132 42V13.296H758.34V8.4H783.492V13.296H773.7V42H768.132ZM782.102 42L790.406 8.4H803.462L811.766 42H805.958L804.038 33.84H789.83L787.91 42H782.102ZM790.79 29.424H803.078L799.142 13.008H794.726L790.79 29.424Z"
                  fill="var(--color-onColor-heading)"
                ></path>
                <path
                  d="M201.766 182.169V108.988L217.674 93.083H264.457V109.625H220.224V182.186H201.766V182.169Z"
                  fill="var(--color-onColor-heading)"
                ></path>
                <path
                  d="M275.611 166.583V108.669L291.2 93.083H339.577L355.166 108.669V166.583L339.577 182.169H291.2L275.611 166.583ZM294.07 166.583H336.708V108.669H294.07V166.583Z"
                  fill="var(--color-onColor-heading)"
                ></path>
                <path
                  d="M371.097 166.583V108.669L386.686 93.083H444.612V109.625H389.555V165.627H444.612V182.169H386.686L371.097 166.583Z"
                  fill="var(--color-onColor-heading)"
                ></path>
                <path
                  d="M457.98 182.17V70.8042H476.439V127.93H500.468L521.477 93.0841H542.486L515.906 134.137L543.912 182.187H523.071L501.592 143.852H476.456V182.187H457.998L457.98 182.17Z"
                  fill="var(--color-onColor-heading)"
                ></path>
                <path
                  d="M549.955 166.583V108.669L565.543 93.083H627.932V142.726H568.413V166.281H624.744V182.186H565.543L549.955 166.6V166.583ZM568.413 130.949L611.219 129.355V108.35H568.413V130.949Z"
                  fill="var(--color-onColor-heading)"
                ></path>
                <path
                  d="M644.816 78.7565L663.275 70.8042V96.2549H701.148V112.16H663.275V166.249H701.148V182.153H660.724L644.816 166.249V78.7397V78.7565Z"
                  fill="var(--color-onColor-heading)"
                ></path>
                <path
                  d="M168.05 204.234L142.696 180.209C124.724 163.163 112.29 141.118 106.987 116.943L90.5427 42.1845C90.1569 40.5068 88.7635 39.668 87.3709 39.668C85.9784 39.668 84.6021 40.5068 84.1999 42.1845L67.755 116.96C62.4356 141.136 50.0182 163.18 32.0466 180.226L6.69163 204.25C4.32564 206.784 3 210.122 3 213.595V216.632L67.3019 205.525C73.9301 204.385 80.6593 203.797 87.3546 203.797C94.0499 203.797 100.779 204.385 107.407 205.525L171.708 216.632V213.595C171.708 210.122 170.383 206.784 168.017 204.25L168.05 204.234Z"
                  fill="var(--color-onColor-heading)"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <ul className="flex gap-4 items-center justify-center text-onColor-heading">
            <li>
              <a
                href="https://www.youtube.com/@rocketdotnew"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-colors"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/rocketdotnew"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-colors"
                aria-label="Twitter/X"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/invite/rocket-878500942604038215"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-colors"
                aria-label="Discord"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/rocketdotnew"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-colors"
                aria-label="Discord"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rocketdotnew/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-colors"
                aria-label="Discord"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </a>
            </li>
          </ul>
          <div className="w-[1px] h-[10px] mx-2 bg-white max-sm:hidden"></div>
          <div className="flex items-center max-sm:flex-wrap gap-4 justify-center">
            <p
              className="text-[14px] leading-[150%] text-onColor-body absolute left-0 right-0 text-center mx-auto bottom-2"
              data-sentry-element="Text"
              data-sentry-source-file="Footer.tsx"
            >
              © 2025 DhiWise USA Inc.
            </p>
            <a className="cursor-pointer">
              <p className="text-[14px] leading-[150%] text-onColor-heading">
                Terms
              </p>
            </a>
            <a className="cursor-pointer">
              <p className="text-[14px] leading-[150%] text-onColor-heading">
                Privacy
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StartBuildingNow() {
  return (
    <div className="overlay_bg_top flex flex-col justify-between pt-[80px] max-w-[1920px] mx-auto overflow-hidden relative max-h-full min-h-[1180px] 2xl:min-h-[1450px] max-sm:min-h-[1100px]">
      <Image
        alt="start-building"
        src={StartBuildingImage}
        placeholder="blur"
        width={1920}
        height={1180}
        className="absolute inset-0 w-full h-full max-h-full object-cover object-bottom"
      />
      <div className="container relative z-2">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col grow gap-2 text-center max-sm:px-4 ">
            <p
              className="text-[48px] leading-[120%] max-sm:text-[32px] font-semibold text-onColor-heading"
              data-sentry-element="Text"
              data-sentry-source-file="Footer.tsx"
            >
              Start building, now!
            </p>
            <p
              className="text-[18px] leading-[150%] text-onColor-heading"
              data-sentry-element="Text"
              data-sentry-source-file="Footer.tsx"
            >
              Production-ready apps and websites in minutes, not months.
            </p>
          </div>
          <WizardForm />
        </div>
      </div>
      <SocialsAndFooter />
    </div>
  );
}

export default StartBuildingNow;
