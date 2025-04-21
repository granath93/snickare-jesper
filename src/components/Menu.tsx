"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Underline from "./Underline";

type MenuItem = { href: string; label: string };

const items: MenuItem[] = [
  {
    label: "Hem",
    href: "#home",
  },
  {
    label: "Om mig",
    href: "#about",
  },
  {
    label: "Kontakt",
    href: "#contact",
  },
  {
    label: "Arbeten",
    href: "#library",
  },
];

const Menu = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.querySelector(hash);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <nav className="fixed top-0 z-10 inline-flex items-center justify-end right-4 md:right-10 w-full">
      {items.map((item) => (
        <MenuItem item={item} key={item.href} />
      ))}
    </nav>
  );
};

const MenuItem: React.FC<{ item: MenuItem }> = ({ item: { href, label } }) => {
  const [isActive, setIsActive] = useState(false);
  const searchParam = useSearchParams();

  useEffect(() => {
    setIsActive(window.location.hash === href);
  }, [searchParam]);

  useEffect(() => {
    const onHashChange = () => {
      setIsActive(window.location.hash === href);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <Underline key={href} hidden={!isActive} variant="small">
      <Link
        href={href}
        className={`text-lg md:text-xl p-2 ${
          isActive ? "text-accent" : "text-red-200"
        }`}
        aria-current={isActive ? "page" : "false"}
      >
        {label}
      </Link>
    </Underline>
  );
};

export default Menu;
