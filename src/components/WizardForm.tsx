import React from "react";
import ArrowUp from "~/icons/ArrowUp";
import AttachmentIcon from "~/icons/AttachmentIcon";
import FigmaIcon from "~/icons/FigmaIcon";

function WizardForm() {
  return (
    <form className="w-full h-full overflow-hidden">
      <div className="flex flex-col gap-4 max-w-[766px] w-full mx-auto">
        <div className="flex flex-col gap-2 w-full flex-shrink-0 relative">
          <div
            className="w-full flex flex-col mx-auto overflow-hidden relative rounded-[20px]
                 
                 bg-white shadow-[0px_4px_10px_0px_var(--color-shadow-light)] "
          >
            <div className="relative grow h-full max-sm:overflow-auto">
              <textarea
                name="prompt"
                rows={4}
                className="block text-black relative z-1 resize-none overflow-auto py-5 pb-0 px-5 w-full max-h-[250px] min-h-[80px] bg-transparent placeholder:text-black placeholder:opacity-50 text-[14px] placeholder:text-[14px] focus:outline-none leading-[150%]"
                placeholder="What can I build for you today?"
                autoFocus
              ></textarea>
            </div>
            <div className="px-5 pb-3 pt-3 flex w-full relative z-1">
              <div className="flex gap-2 grow">
                <div className="relative w-max ">
                  <div className="flex gap-2">
                    <div>
                      <input
                        id="fileInput"
                        className="hidden"
                        accept="image/png, image/jpeg, image/jpg, image/webp"
                        type="file"
                        name="files"
                      />
                      <button
                        className="relative flex items-center justify-center cursor-pointer bg-surface-rever-glassmore-10 text-heading hover:bg-surface-rever-glassmore-20 disabled:hover:bg-surface-rever-glassmore-10 w-[26px] h-[26px] rounded-[6px] disabled:opacity-80 disabled:text-disabled-default focus:outline-none disabled:cursor-not-allowed !bg-onColor-glassmorph-10 hover:!bg-onColor-glassmorph-20 rightAnimation"
                        type="button"
                        aria-label="Attach"
                      >
                        <div className="w-full flex items-center justify-center">
                          <div className="flex items-center justify-center gap-1">
                            <div className="w-[16px] h-[16px] flex justify-center items-center">
                              <AttachmentIcon />
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="max-sm:hidden">
                      <button
                        data-tooltip-id="figma-import"
                        className="relative flex w-max items-center justify-center cursor-pointer bg-surface-rever-glassmore-10 text-heading hover:bg-surface-rever-glassmore-20 disabled:hover:bg-surface-rever-glassmore-10 py-[5px] px-3 h-[26px] rounded-[6px] disabled:opacity-80 disabled:text-disabled-default focus:outline-none disabled:cursor-not-allowed !bg-onColor-glassmorph-10 hover:!bg-onColor-glassmorph-20 rightAnimation"
                        type="button"
                      >
                        <div className="w-full flex items-center justify-center">
                          <div className="flex items-center justify-center gap-1">
                            <span className="w-[16px] h-[16px] flex items-center">
                              <FigmaIcon />
                            </span>
                            <p className="text-[12px] leading-[150%] text-black">
                              Import
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  className="relative flex items-center justify-center cursor-pointer bg-surface-button-onColor-subtle text-onColor-heading hover:bg-surface-button-onColor-subtle-hover disabled:hover:bg-surface-button-onColor-subtle w-[26px] h-[26px] rounded-[6px] disabled:opacity-80 disabled:text-disabled-default focus:outline-none disabled:cursor-not-allowed disabled:!bg-primary-200 disabled:!text-primary-300 rightAnimation"
                  type="submit"
                  aria-label="Submit prompt"
                >
                  <div className="w-full flex items-center justify-center pointer-events-none">
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-[16px] h-[16px] flex justify-center items-center">
                        <ArrowUp />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default WizardForm;
