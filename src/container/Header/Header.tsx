import { Button, Center, Group } from "@mantine/core";

export const Header = () => {
  return (
    <Center>
      <Group justify="end" w={1440}>
        <Group>
          <Button
            className="shortcut-button"
            component="a"
            href="#home"
            variant="light"
          >
            Home
          </Button>
          <Button
            className="shortcut-button"
            component="a"
            href="#about"
            variant="light"
          >
            About
          </Button>
          <Button
            className="shortcut-button"
            component="a"
            href="#skills"
            variant="light"
          >
            Skills
          </Button>
          <Button
            className="shortcut-button"
            component="a"
            href="#exp"
            variant="light"
          >
            Work Experience
          </Button>
          <Button
            className="shortcut-button"
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
