"use client";
import Image from "next/image";

const IconButton: React.FC<{
  src: string;
  click: () => void;
  ariaLabel: string;
  tooltip?: string;
  width?: number;
  className?: string;
}> = ({ src, click, width, ariaLabel, className = '', tooltip }) => {
  return (
    <button
      type="button"
      onClick={click}
      aria-label={ariaLabel}
      title={tooltip}
      className={`w-[48px] h-[48px] flex items-center justify-center hover:bg-accent/20 rounded-full ${className}`}
    >
      <Image
        src={src}
        alt=""
        width={width ?? 38}
        height={width ?? 38}
        priority
      />
    </button>
  );
};

export default IconButton;
