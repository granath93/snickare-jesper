"use client";

import { useSectionObserver } from "@/hooks/useSectionObserver";
import Underline from "./Underline";

const Section: React.FC<{
  title: string;
  id: string;
  children: React.ReactNode;
}> = ({ id, title, children }) => {
  useSectionObserver(id);

  return (
    <div
      id={id}
      className="flex flex-col gap-6 mb-48 scroll-mt-14 w-full md:w-3xl max-w-full"
    >
      <Underline>
        <h2>{title}</h2>
      </Underline>
      {children}
    </div>
  );
};

export default Section;
