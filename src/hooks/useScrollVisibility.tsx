import { useEffect, useRef, useState } from "react";

interface ScrollVisibilityOptions {
  idleDelay?: number;
  scrollUpDelay?: number;
}

export const useScrollVisibility = ({
  idleDelay = 500,
  scrollUpDelay = 250,
}: ScrollVisibilityOptions = {}) => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear idle timer
      if (idleTimeout.current) clearTimeout(idleTimeout.current);

      // Hide when scrolling down
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        // Show after a short delay when scrolling up
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(
          () => setVisible(true),
          scrollUpDelay
        );
      }

      // Show after user stops scrolling (idle)
      idleTimeout.current = setTimeout(() => setVisible(true), idleDelay);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, [idleDelay, scrollUpDelay]);

  return visible;
};
