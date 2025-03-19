import { Card as MCard, Text } from "@mantine/core";
import { useIntersection, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import styles from "./Card.module.css";

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
  animation?: "fade-in" | "slide-in";
  withBorder?: boolean;
}) => {
  const isMobile = useMediaQuery("(max-width: 1320px)");
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, entry } = useIntersection({
    root: null, // Uses viewport as the root
    threshold: 0.2,
  });
  useEffect(() => {
    if (entry?.isIntersecting && !hasAnimated) {
      setHasAnimated(true); // Mark as animated once it enters
    }
  }, [entry?.isIntersecting, hasAnimated]);

  return (
    <MCard
      ref={ref}
      w={isMobile ? "auto" : 1300}
      withBorder={withBorder}
      id={id}
      bg="transparent"
      className={hasAnimated ? animation : styles["card-hidden"]}
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
