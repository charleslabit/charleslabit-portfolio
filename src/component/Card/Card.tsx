import { Card as MCard } from "@mantine/core";

export const Card = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <MCard w={1000} withBorder={false} id={id}>
      {children}
    </MCard>
  );
};
