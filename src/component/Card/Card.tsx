import { Card as MCard, Text } from "@mantine/core";

export const Card = ({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id: string;
  title?: string;
}) => {
  return (
    <MCard w={1300} withBorder={false} id={id} bg="transparent">
      {title && (
        <Text fw="bold" fz={30}>
          {title}
        </Text>
      )}
      {children}
    </MCard>
  );
};
