import { Card } from "@/component/";
import { Center, Text } from "@mantine/core";

export const HomePage = () => {
  return (
    <Center h={"calc(100vh - 130px)"} className="fade-in">
      <Card id="home">
        <Text fw="bold" fz={54}>
          Hello, I'm Charles,
        </Text>
        <Text fz={40}>
          A Front End Developer specializing in building responsive and
          user-friendly web applications. I focus on creating seamless and
          interactive experiences using modern web technologies.
        </Text>
      </Card>
    </Center>
  );
};
