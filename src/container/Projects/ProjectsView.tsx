import { Stack, Text } from "@mantine/core";
import { Advertisement } from "./Advertisement";
import { Exsight } from "./Exsight";
import { Megaworld } from "./Megaworld";
import { PersonalProjects } from "./PersonalProjects";
import { SharpKernel } from "./SharpKernel";

export const Projects = () => {
  return (
    <>
      <Stack align="center">
        <Text fw="bold" id="projects">
          Some of My Work Projects
        </Text>
        <Stack align="center" gap={25}>
          <Megaworld />
          <Exsight />
          <SharpKernel />
          <Advertisement />
        </Stack>
      </Stack>
      <Stack align="center">
        <Text fw="bold">Personal Projects</Text>
        <PersonalProjects />
      </Stack>
    </>
  );
};
