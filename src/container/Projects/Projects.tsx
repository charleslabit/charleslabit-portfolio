import { Box, Stack, Text } from "@mantine/core";
import { Exsight } from "./Exsight";
import { Megaworld } from "./Megaworld";
import { PersonalProject } from "./PersonalProject";

export const Projects = () => {
  return (
    <Box>
      <Stack align="center">
        <Text fw="bold" id="projects">
          Personal Projects
        </Text>
        <PersonalProject />
      </Stack>

      <Stack align="center" mt={100}>
        <Text fw="bold">Some of My Work Projects</Text>
        <Stack align="center" gap={100}>
          <Megaworld />
          <Exsight />
        </Stack>
      </Stack>
    </Box>
  );
};
