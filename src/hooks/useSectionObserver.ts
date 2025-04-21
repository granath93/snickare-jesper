"use client";

import { useEffect } from "react";

export function useSectionObserver(id: string) {
  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          history.replaceState(null, "", `#${id}`);
        } else if (window.scrollY < window.innerHeight) {
          if (window.location.hash !== "#home") {
            history.replaceState(null, "", "#home");
          }
        }
      },
      {
        rootMargin: "-56px 0px 0px 0px",
        threshold: 1.0,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [id]);
}
