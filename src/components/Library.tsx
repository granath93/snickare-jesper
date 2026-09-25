"use client";

import Image from "next/image";
import Section from "./Section";
import { libraryResources } from "@/libraryResources";
import type { LibraryResource } from "@/libraryResources";
import { useState } from "react";
import { ImagePopup } from "./ImagePopup";
import { content } from "../content";

const Library = () => {
  const [currentItem, setItem] = useState<LibraryResource | undefined>(
    undefined
  );
  return (
    <>
      <Section id="library" title="Arbeten">
        {content.library()}
        <div className="inline-flex flex-wrap justify-center md:justify-start gap-6">
          {libraryResources.map((item) => (
            <button
              key={item.imageUrl}
              className="flex flex-col items-center gap-2"
              popoverTarget="imagepopover"
              onClick={() => setItem(item)}
            >
              <Image
                title={item.title}
                alt={item.alt}
                src={item.imageUrl}
                width={366}
                height={366}
                sizes="(max-width: 2000px) 360px"
                loading="eager"
                className="cursor-zoom-in"
              />
              <p className="italic handwritten">{item.title}</p>
            </button>
          ))}
        </div>
      </Section>
      <ImagePopup
        currentItem={currentItem}
        list={libraryResources}
        updateCurrentItem={(item) => setItem(item)}
      />
    </>
  );
};

export default Library;
