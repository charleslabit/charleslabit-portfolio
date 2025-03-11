import { Card as MCard, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

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
  return (
    <MCard
      w={isMobile ? "auto" : 1300}
      withBorder={false}
      id={id}
      bg="transparent"
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
