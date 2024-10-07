"use client";

import { useState } from "react";
import { HiChevronUp as ChevronUpIcon } from "react-icons/hi2";

/*

export type Faq = {
  id: number;
  question: {
    en: string;
    ja: string;
  };
  answer: {
    en: string;
    ja: string;
  };
};

*/

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded((prev) => !prev)}
      className="flex cursor-pointer flex-col overflow-hidden rounded-xl bg-background-2 p-4"
    >
      <div className="flex items-center justify-between gap-8">
        <p className="w-fit font-bold">{title}</p>
        <ChevronUpIcon
          className={`h-4 w-4 transition-all ${expanded ? "rotate-180 text-accent" : ""}`}
        />
      </div>
      <div
        className={`${expanded ? "mt-2 max-h-24 opacity-100" : "max-h-0 opacity-0"} text-text-gray transition-all`}
      >
        {children}
      </div>
    </div>
  );
}
