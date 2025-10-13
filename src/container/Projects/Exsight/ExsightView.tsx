import { Card, ImagePreview } from "@/component";
import { Badge, Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { useExsightViewModel } from "./ExsightViewModel";

export const Exsight = () => {
  const { stack: techStack, images: exsightImages } = useExsightViewModel();
  return (
    <Card id="Exsight" withBorder animation="fade-in">
      <Paper m="auto">
        <Stack>
          <SimpleGrid cols={{ sm: 1, md: 2 }}>
            <Stack gap={0}>
              <Group justify="space-between">
                <Link href="https://flexiformph.com/" target="_blank">
                  <Text fw="bold" fz={20} c="blue" td="underline">
                    Exsight — Survey Builder Platform (Enhanced Flexiform
                    Version)
                  </Text>
                </Link>
              </Group>
              <Text c="dimmed" fz={16}>
                A powerful, user-friendly platform for creating and managing
                surveys with ease. Features include a drag-and-drop builder,
                customizable elements, conditional logic, structured data
                management, and exportable reports — all secured with role-based
                access and auto-save functionality.
              </Text>
              <Stack gap="sm" mt={10}>
                <Text fw="bold" fz={16}>
                  Tech Stack
                </Text>
                {Object.entries(techStack).map(([category, skills]) => (
                  <Stack key={category} gap="xs">
                    <Text fw={500} fz={14} c="dimmed">
                      {category}
                    </Text>
                    <Group gap="xs">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="light">
                          {skill}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <SimpleGrid cols={1}>
              {exsightImages?.map((src) => {
                return <ImagePreview key={src} title="Megaworld" src={src} />;
              })}
            </SimpleGrid>
          </SimpleGrid>
        </Stack>
      </Paper>
    </Card>
  );
};
