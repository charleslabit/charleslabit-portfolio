import { Card } from "@/component/";
import { Center, Text } from "@mantine/core";

export const HomePage = () => {
  return (
    <Center h={"calc(100vh - 130px)"}>
      <Card id="home">
        <Text fw="bold" fz={{ base: 32, sm: 40, md: 48, lg: 54 }}>
          Hello, I'm Charles,
        </Text>
        <Text fz={{ base: 20, sm: 24, md: 32, lg: 40 }}>
          A Front End Developer specializing in building responsive and
          user-friendly web applications. I focus on creating seamless and
          interactive experiences using modern web technologies.
        </Text>
      </Card>
    </Center>
  );
};
