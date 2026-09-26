"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Underline from "./Underline";
import HomeIcon from "./HomeIcon";

type MenuItem = { href: string; label: string };

const items: MenuItem[] = [
  {
    label: "Hem",
    href: "#home",
  },
  {
    label: "Om",
    href: "#about",
  },
  {
    label: "Kontakt",
    href: "#contact",
  },
  {
    label: "Tjänster",
    href: "#services",
  },
  {
    label: "Arbeten",
    href: "#library",
  },
];

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  return (
    <nav
      className={`fixed top-0 z-10 inline-flex items-center justify-end pr-4 md:pr-10 w-full transition-colors duration-200 ${
        scrolled ? "bg-black/30 backdrop-blur-xs" : "bg-transparent"
      }`}
      aria-hidden={false}
    >
      <Suspense>
        {items.map((item) => (
          <MenuItem item={item} key={item.href} />
        ))}
      </Suspense>
    </nav>
  );
};

const MenuItem: React.FC<{ item: MenuItem }> = ({ item: { href, label } }) => {
  const [isActive, setIsActive] = useState(false);
  const [hover, setHover] = useState(false);

  const searchParam = useSearchParams();

  useEffect(() => {
    setIsActive(window.location.hash === href);
  }, [searchParam]);

  return (
    <Underline   key={href} hidden={!isActive} variant="small">
      {
        label === "Hem" ? (
          <Link
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            href={href}
            className="flex items-center px-2 py-1"
            aria-current={isActive ? "page" : "false"}
          >
            <HomeIcon hover={hover} />
          </Link>
        ) : (
        <Link
          href={href}
          className="text-base md:text-lg p-2"
          aria-current={isActive ? "page" : "false"}
        >
          {label}
        </Link>
        )
      }
      
    </Underline>
  );
};

export default Menu;
