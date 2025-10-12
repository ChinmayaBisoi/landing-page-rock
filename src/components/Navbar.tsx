import React from "react";
import Logo from "~/components/Logo";
import ChevronDown from "~/icons/ChevronDown";
import Hamburger from "~/icons/Hamburger";

function Navbar() {
  return (
    <div className="h-[88px] flex justify-center items-center sticky top-0 z-50">
      <div className="container flex grow justify-between items-center">
        <div className="w-[30%] max-sm:w-auto">
          <div
            className="h-8 w-auto block max-sm:w-20 cursor-pointer text-white"
            role="button"
          >
            <Logo />
          </div>
        </div>
        <div className="px-4 h-10 flex items-center justify-center py-[9.5px] rounded-[12px] max-sm:hidden text-white bg-white/10 backdrop-blur-[80px]">
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
                  <ChevronDown className="w-4 h-4" />
                </p>
              </button>
            </div>
          </ul>
        </div>
        <div className=" max-sm:hidden flex items-center gap-3 justify-end w-[30%]">
          <button className="relative flex w-max items-center justify-center cursor-pointer bg-surface-button-onColor text-black hover:bg-surface-button-onColor-hover disabled:hover:bg-surface-button-onColor py-1.5 px-6 h-[40px] rounded-[10px] disabled:opacity-80 disabled:text-disabled-default focus:outline-none disabled:cursor-not-allowed rightAnimation">
            <div className="w-full flex items-center justify-center">
              <div className="flex items-center justify-center gap-1">
                <p className="text-inherit text-[14px] leading-[150%]">
                  Sign in / Sign up
                </p>
              </div>
            </div>
          </button>
        </div>
        {/* Toggle menu button */}
        <button
          className="relative items-center justify-center cursor-pointer bg-surface-glassmore-10 text-onColor-heading hover:bg-surface-glassmore-20 backdrop-blur-[80px] disabled:hover:bg-surface-glassmore-10 w-[26px] h-[26px] rounded-[6px] disabled:opacity-80 disabled:text-disabled-default focus:outline-none disabled:cursor-not-allowed hidden max-sm:block rightAnimation"
          aria-label="Toggle menu"
        >
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-center gap-1">
              <div className="w-[16px] h-[16px] flex justify-center items-center">
                <Hamburger />
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
