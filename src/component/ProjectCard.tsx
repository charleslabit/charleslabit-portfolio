"use client";

import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Overlay,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
  referenceSite?: string;
  overlayDescription: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  liveDemo,
  github,
  referenceSite,
  overlayDescription,
}: ProjectCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Card
        shadow="md"
        padding="lg"
        radius="md"
        withBorder
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Card.Section pos="relative">
          <Image src={image} alt={title} height={"300"} fit="contain" />

          <Overlay
            zIndex={10}
            h="100%"
            w="100%"
            backgroundOpacity={0.7}
            p={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: hover ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <Text fz={26} c="white" ta="center">
              {overlayDescription}
            </Text>
          </Overlay>
        </Card.Section>

        <Stack mt="md" gap="xs" h="100%">
          <Text fw={600} size="lg" lineClamp={2}>
            {title}
          </Text>
          <Tooltip label={description}>
            <Text size="sm" c="dimmed" lineClamp={2}>
              {description}
            </Text>
          </Tooltip>

          <Group mt="sm" gap="xs" justify="center">
            {techStack.map((tech) => (
              <Badge key={tech} variant="light">
                {tech}
              </Badge>
            ))}
          </Group>

          <Group gap="sm" mt="auto">
            {liveDemo && (
              <Button
                component="a"
                href={liveDemo}
                target="_blank"
                variant="filled"
                leftSection={<IconExternalLink size={16} />}
              >
                Live Demo
              </Button>
            )}
            {github && (
              <Button
                component="a"
                href={github}
                target="_blank"
                variant="outline"
                leftSection={<IconBrandGithub size={16} />}
              >
                GitHub
              </Button>
            )}
            {referenceSite && (
              <Button
                component="a"
                href={referenceSite}
                target="_blank"
                variant="subtle"
                leftSection={<IconExternalLink size={16} />}
              >
                Reference Site
              </Button>
            )}
          </Group>
        </Stack>
      </Card>
    </>
  );
}
