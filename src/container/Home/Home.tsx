import { Card } from "@/component/";
import { Center, Text } from "@mantine/core";

export const HomePage = () => {
  return (
    <Center h={"calc(100vh - 130px)"}>
      <Card id="home">
        <Text fw="bold" fz={54}>
          Hello, I'm Charles Kenneth Labit,
        </Text>
        <Text>
          Front End Developer with a strong focus on building dynamic and
          engaging web applications.
        </Text>
      </Card>
    </Center>
  );
};
