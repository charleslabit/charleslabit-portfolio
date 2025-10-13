import { Card as MCard, Text } from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";

export const Card = ({
  children,
  id,
  title,
  animation = "fade-in",
  withBorder = false,
}: {
  children: React.ReactNode;
  id?: string;
  title?: string;
  animation?:
    | "fade-in"
    | "slide-in-left"
    | "slide-in-right"
    | "fade-in-up"
    | "zoom-in";
  withBorder?: boolean;
}) => {
  const isMobile = useMediaQuery("(max-width: 1320px)");
  const [hasAnimated, setHasAnimated] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const { ref: intersectionRef, entry } = useIntersection({
    root: null,
    threshold: 0.05,
  });

  // Combine refs
  const setRefs = (el: HTMLDivElement) => {
    cardRef.current = el;
    intersectionRef(el);
  };

  // Set initial offset based on animation type and element width
  useEffect(() => {
    if (
      cardRef.current &&
      (animation === "slide-in-left" || animation === "slide-in-right")
    ) {
      const width = cardRef.current.offsetWidth;
      setInitialX(animation === "slide-in-left" ? -width * 0.1 : width * 0.1); // 10% of width
    }
  }, [animation]);

  useEffect(() => {
    if (entry?.isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [entry?.isIntersecting, hasAnimated]);

  return (
    <MCard
      ref={setRefs}
      w={isMobile ? "100%" : 1300}
      withBorder={withBorder}
      id={id}
      bg="transparent"
      style={{
        opacity: hasAnimated ? 1 : 0,
        transform:
          animation === "slide-in-left" || animation === "slide-in-right"
            ? `translateX(${hasAnimated ? 0 : initialX}px)`
            : animation === "fade-in-up"
            ? `translateY(${hasAnimated ? 0 : 40}px)`
            : animation === "zoom-in"
            ? `scale(${hasAnimated ? 1 : 0.9})`
            : undefined,
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {title && (
        <Text fw="bold" fz={30}>
          {title}
        </Text>
      )}
      {children}
    </MCard>
  );
};
