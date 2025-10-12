import { SECTIONS } from "@/constants";
import { useEffect, useRef, useState } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");
  const manualOverride = useRef(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateActiveSectionFromHash = () => {
      if (manualOverride.current) return;
      const newSection = window.location.hash.substring(1) || "home";
      setActiveSection(newSection);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (manualOverride.current) return;

        let visibleSection: string | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.getAttribute("id") || "home";
          }
        });

        if (visibleSection) {
          // Debounce the update
          if (debounceTimer.current) clearTimeout(debounceTimer.current);
          debounceTimer.current = setTimeout(() => {
            setActiveSection(visibleSection as string);
            history.replaceState(null, "", `#${visibleSection}`);
          }, 1000);
        }
      },
      { threshold: 0.7 }
    );

    const sectionElements = SECTIONS.map((id) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null);

    sectionElements.forEach((section) => observer.observe(section));

    window.addEventListener("hashchange", updateActiveSectionFromHash);
    updateActiveSectionFromHash();

    return () => {
      window.removeEventListener("hashchange", updateActiveSectionFromHash);
      sectionElements.forEach((section) => observer.unobserve(section));
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  const setActiveSectionManually = (section: string) => {
    manualOverride.current = true;
    setActiveSection(section);
    history.replaceState(null, "", `#${section}`);

    // Re-enable observer after the next tick
    requestAnimationFrame(() => {
      manualOverride.current = false;
    });
  };

  return { activeSection, setActiveSectionManually };
};
