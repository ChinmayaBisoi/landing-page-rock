import React from "react";
import Logo from "~/components/Logo";

function Navbar() {
  return (
    <div className="container flex justify-between items-center">
      <div className="w-[30%] max-sm:w-auto">
        <div
          className="h-8 w-auto block max-sm:w-20 cursor-pointer"
          role="button"
        >
          <Logo />
        </div>
      </div>
      <div className="px-4 py-[9.5px] rounded-12  max-sm:hidden text-onColor-heading bg-surface-glassmore-10 backdrop-blur-[80px]">
        <ul className="flex gap-[32px] items-center">
          <div>
            <a className="text-[14px] leading-[150%] opacity-70 hover:opacity-100 font-medium cursor-pointer">
              Pricing
            </a>
          </div>
          <a className="text-[14px] leading-[150%] opacity-70 hover:opacity-100 font-medium cursor-pointer">
            Careers
          </a>
          <div className="relative">
            <button type="button" className="focus:outline-none">
              <p className="text-[14px] leading-[150%] opacity-70 hover:opacity-100 cursor-pointer flex items-center gap-1 font-medium">
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="transition-all "
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </p>
            </button>
          </div>
        </ul>
      </div>
      <div className=" max-sm:hidden flex items-center gap-3 justify-end w-[30%]">
        <button
          className="relative flex w-max items-center justify-center cursor-pointer bg-surface-button-onColor text-black hover:bg-surface-button-onColor-hover disabled:hover:bg-surface-button-onColor py-1.5 px-6 h-[40px] rounded-10 disabled:opacity-80 disabled:text-disabled-default focus:outline-none disabled:cursor-not-allowed rightAnimation"
          aria-disabled="false"
          aria-busy="false"
        >
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-center gap-1">
              <p className="text-inherit text-[14px] leading-[150%]">
                Sign in / Sign up
              </p>
            </div>
          </div>
        </button>
      </div>
      <button
        className="relative items-center justify-center cursor-pointer bg-surface-glassmore-10 text-onColor-heading hover:bg-surface-glassmore-20 backdrop-blur-[80px] disabled:hover:bg-surface-glassmore-10 w-[26px] h-[26px] rounded-6 disabled:opacity-80 disabled:text-disabled-default focus:outline-none disabled:cursor-not-allowed hidden max-sm:block rightAnimation"
        aria-label="Toggle menu"
      >
        <div className="w-full flex items-center justify-center">
          <div className="flex items-center justify-center gap-1">
            <div className="w-[16px] h-[16px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="var(--color-onColor-heading)"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Navbar;
