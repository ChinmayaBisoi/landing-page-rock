import React, { useEffect, useState } from "react";
import Logo from "~/components/Logo";
import ChevronDown from "~/icons/ChevronDown";
import Hamburger from "~/icons/Hamburger";
import { throttle } from "~/lib/general";
import { cn } from "~/lib/utils";

function Navbar({ showStickyNavbar = false }: { showStickyNavbar?: boolean }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY > 88);
    }

    const throttledHandleScroll = throttle(handleScroll, 100);

    handleScroll();

    window.addEventListener("scroll", throttledHandleScroll);

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <div
      className={cn(
        "flex justify-center items-center sticky top-0 z-50",
        "transition-all duration-400 ",
        showStickyNavbar
          ? isSticky
            ? "items-center flex ease-out max-sm:py-4 shrink-0 max-lg:px-0 max-sm:relative max-sm:z-[10] !fixed top-0 bg-[#fff9] !backdrop-blur-[80px] !py-1 w-[100%] min-h-[65px] max-sm:min-h-[55px] inset-x-0 mx-auto "
            : "hidden"
          : "min-h-[88px]"
      )}
    >
      <div className="container flex grow justify-between items-center z-[110]">
        <div className="w-[30%] max-sm:w-auto">
          <div
            className={cn(
              "h-8 w-auto block max-sm:w-20 cursor-pointer",
              showStickyNavbar ? "!text-black" : "text-white"
            )}
            role="button"
          >
            <Logo />
          </div>
        </div>
        <div
          className={cn(
            "px-4 h-10 flex items-center justify-center py-[9.5px] rounded-[12px] max-sm:hidden",
            showStickyNavbar
              ? "!text-black"
              : "!text-white bg-white/10 backdrop-blur-[80px]"
          )}
        >
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
        <div className="max-sm:hidden flex items-center gap-3 justify-end w-[30%]">
          <button
            className={cn(
              "relative flex w-max items-center justify-center cursor-pointer bg-surface-button-onColor text-black hover:bg-surface-button-onColor-hover disabled:hover:bg-surface-button-onColor py-1.5 px-6 h-[40px] rounded-[10px] disabled:opacity-80 disabled:text-disabled-default focus:outline-none disabled:cursor-not-allowed rightAnimation",
              showStickyNavbar ? "!text-white !bg-black" : ""
            )}
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
