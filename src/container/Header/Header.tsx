import { Button, Center, Group } from "@mantine/core";
import { MouseEvent } from "react";

export const Header = () => {
  const onClickHome = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent the default action (e.g., navigating the link)
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Programmatically trigger the href link after scrolling
    setTimeout(() => {
      window.location.hash = "home"; // Use window.location.hash to update the hash
    }, 100);
  };

  return (
    <Center>
      <Group justify="end" w={1440}>
        <Group>
          <Button
            className="hover-effect"
            component="a"
            href="#home"
            variant="light"
            onClick={onClickHome}
          >
            Home
          </Button>
          <Button
            className="hover-effect"
            component="a"
            href="#about"
            variant="light"
          >
            About
          </Button>
          <Button
            className="hover-effect"
            component="a"
            href="#skills"
            variant="light"
          >
            Skills
          </Button>
          <Button
            className="hover-effect"
            component="a"
            href="#exp"
            variant="light"
          >
            Work Experience
          </Button>
          <Button
            className="hover-effect"
            component="a"
            href="#projects"
            variant="light"
          >
            Projects
          </Button>
        </Group>
      </Group>
    </Center>
  );
};
