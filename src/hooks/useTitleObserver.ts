"use client";

import { useEffect } from "react";

export function useTitleObserver() {
  useEffect(() => {
    const sectionIds = ["home", "about", "services", "library", "contact"];

    // Track the section's title (h1/h2) rather than the whole section,
    // since long sections may never reach 50% visible in the viewport.
    const titleToSectionId = new Map<Element, string>();
    sectionIds.forEach((id) => {
      const sec = selectElementById(id);
      if (!sec) return;
      const title = sec.querySelector("h1, h2") ?? sec;
      titleToSectionId.set(title, id);
    });

    const observerOptions: IntersectionObserverInit = {
      root: null,
      // Collapse the root to a single line 40% down from the top of the
      // viewport: the title only "intersects" once it crosses that line.
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    // Only write to history once scrolling has settled, instead of on
    // every intersection change while the user is still scrolling.
    let pendingId: string | null = null;
    let scrollEndTimeout: ReturnType<typeof setTimeout> | null = null;

    const commitPendingId = () => {
      if (pendingId) {
        history.replaceState(null, "", `#${pendingId}`);
      }
    };

    const onScroll = () => {
      if (scrollEndTimeout) clearTimeout(scrollEndTimeout);
      scrollEndTimeout = setTimeout(commitPendingId, 100);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = titleToSectionId.get(entry.target);
          if (id) {
            pendingId = id;
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    titleToSectionId.forEach((_id, element) => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (scrollEndTimeout) clearTimeout(scrollEndTimeout);
    };
  }, []);
}

function selectElementById(id: string): HTMLElement {
  return document.querySelector(`#${id}`)!;
}
