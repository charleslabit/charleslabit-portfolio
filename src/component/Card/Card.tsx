import { Card as MCard, Text } from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";

export const Card = ({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id?: string;
  title?: string;
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
      className={hasAnimated ? "fade-in" : ""}
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
