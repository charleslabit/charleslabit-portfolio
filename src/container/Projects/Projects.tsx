import { Stack, Text } from "@mantine/core";
import { Exsight } from "./Exsight";
import { LandingPages } from "./LandingPages";
import { Megaworld } from "./Megaworld";
import { PersonalProject } from "./PersonalProject";

export const Projects = () => {
  return (
    <>
      <Stack align="center" mt={100}>
        <Text fw="bold">Some of My Work Projects</Text>
        <Stack align="center" gap={100}>
          <Megaworld />
          <Exsight />
          <LandingPages />
        </Stack>
      </Stack>
      <Stack align="center">
        <Text fw="bold" id="projects">
          Personal Projects
        </Text>
        <PersonalProject />
      </Stack>
    </>
  );
};
