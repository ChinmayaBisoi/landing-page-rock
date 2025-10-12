import React, { useState } from "react";
import ChevronDown from "~/icons/ChevronDown";
import { cn } from "~/lib/utils";

function Accordion({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-surface-card p-5 rounded-[12px] flex justify-between items-center cursor-pointer"
      >
        <p className="text-[16px] leading-[150%] font-medium pr-4">{title}</p>
        <ChevronDown
          className={cn("w-5 h-5 min-w-5", isOpen ? "rotate-180" : "")}
        />
      </div>
      <div className={cn("p-6", isOpen ? "" : "hidden")}>
        <p className="text-[14px] leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default Accordion;
