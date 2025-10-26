import React, { useRef } from "react";
import Image from "next/image";
import { LibraryResource } from "@/libraryResources";
import IconButton from "./IconButton";

const arrowsStyle =
  "md:static absolute z-10 bg-black/80 rounded-full md:bg-transparent";

export const ImagePopup: React.FC<{
  list: LibraryResource[];
  currentItem: LibraryResource | undefined;
  updateCurrentItem: (item: LibraryResource) => void;
}> = ({ list, currentItem: item, updateCurrentItem }) => {
  const modal = useRef<HTMLDivElement>(null);

  const findIndex = (item?: LibraryResource): number => {
    if (!item || list.length === 0) return -1;
    return list.findIndex((i) => i.imageUrl === item.imageUrl);
  };

  const normalizeIndex = (index: number) => {
    const len = list.length;
    if (len === 0) return -1;
    return ((index % len) + len) % len; // handles negative indices
  };

  const moveBy = (offset: number) => {
    const currentIndex = findIndex(item);
    if (currentIndex === -1) return;
    const nextIndex = normalizeIndex(currentIndex + offset);
    updateCurrentItem(list[nextIndex]);
  };

  const nextItem = () => moveBy(1);
  const previousItem = () => moveBy(-1);

  return (
    <div
      ref={modal}
      id="imagepopover"
      popover="auto"
      className="self-center m-auto backdrop:backdrop-blur-sm md:pb-10 pb-4 px-4 h-full md:h-11/12 w-full md:w-fit bg-black text-white rounded-md scroll-auto"
    >
      <div className="flex flex-col">
        <div className="sticky top-0 -translate-1 sm:translate-0 sm:w-full w-[102%] bg-black z-20 h-[48px]">
          <IconButton
            src="/close.svg"
            ariaLabel="stäng modal"
            tooltip="Stäng"
            width={15}
            click={() => modal.current?.hidePopover()}
            className="top-0 right-0 absolute"
          />
        </div>
        {item && (
          <div className="flex flex-row items-center justify-center md:gap-x-6 relative">
            <IconButton
              src="/arrow.svg"
              ariaLabel="gå till föregående bild"
              width={15}
              tooltip="Föregående"
              click={previousItem}
              className={`rotate-180 -left-4 top-1/2 -translate-y-1/2 md:-left-[80px] ${arrowsStyle}`}
            />
            <Images item={item!} />
            <IconButton
              src="/arrow.svg"
              ariaLabel="gå till nästa bild"
              tooltip="Nästa"
              width={15}
              click={nextItem}
              className={`-right-4 top-1/2 -translate-y-1/2 md:-right-[80px] ${arrowsStyle}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Images: React.FC<{ item: LibraryResource }> = ({ item }) => {
  const items = item.popup ?? [item];

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="handwritten text-3xl">{item.title}</p>

      {items.map((popupItem, index) => {
        const img = popupItem === "original" ? item : popupItem;

        return (
          <span key={index} className="flex flex-col items-center">
            <div className="h-[350px] max-w-full w-[350px] md:h-[590px] md:w-[590px] relative">
              <Image
                className="h-full"
                alt={img.alt}
                src={img.imageUrl}
                fill={true}
              />
            </div>
            {img.description && (
              <p className="flex-wrap w-full md:w-[590px] pt-3">
                {img.description}
              </p>
            )}
          </span>
        );
      })}
    </div>
  );
};
