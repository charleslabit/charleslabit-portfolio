import { Card } from "@/component/";
import { Center, Text } from "@mantine/core";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const fullText = "Hello, I'm Charles,"; // The text to animate
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 20); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, []);
  return (
    <Center h={"calc(100vh - 130px)"}>
      <Card id="home" animation="fade-in">
        <Text fw="bold" fz={{ base: 32, sm: 40, md: 48, lg: 54 }}>
          {displayedText}
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
