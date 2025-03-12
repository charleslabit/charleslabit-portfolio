import { Card as MCard, Text } from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";

interface AnimatedCardProps {
  children: React.ReactNode;
  animation?: "fade" | "slide";
  threshold?: number;
}

export const Card = ({
  children,
  id,
  title,
  animation = "fade-in",
}: {
  children: React.ReactNode;
  id?: string;
  title?: string;
  animation?: "fade-in";
}) => {
  const isMobile = useMediaQuery("(max-width: 1320px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.2,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (entry?.isIntersecting && !hasAnimated) {
      setHasAnimated(true); // Mark as animated once it enters
    }
  }, [entry?.isIntersecting, hasAnimated]);

  return (
    <MCard
      opacity={hasAnimated ? 1 : 0}
      ref={ref}
      w={isMobile ? "auto" : 1300}
      withBorder={false}
      id={id}
      bg="transparent"
      className={hasAnimated ? animation : ""}
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
