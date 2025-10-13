import { Card, ImagePreview } from "@/component";
import { Badge, Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { useMegaWorldViewModel } from "./MegaWorldViewModel";

export const Megaworld = () => {
  const { stack: techStack, images: megaworldImages } = useMegaWorldViewModel();
  return (
    <Card withBorder animation="slide-in-right">
      <Paper m="auto">
        <Stack>
          <SimpleGrid cols={{ sm: 1, md: 2 }}>
            <Stack gap={0}>
              <Group justify="space-between">
                <Link
                  href="https://investorrelations.megaworldhotels.com/"
                  target="_blank"
                >
                  <Text fw="bold" fz={20} c="blue" td="underline">
                    Investor Relations Megaworld
                  </Text>
                </Link>
              </Group>
              <Text c="dimmed" fz={16}>
                A comprehensive property and booking management system built to
                streamline operations for real estate and hospitality
                businesses. It includes modules for reservations, content
                management, messaging, revenue tracking, and approval workflows
                — all secured with role-based access.
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

            <SimpleGrid cols={{ sm: 1, md: 2 }}>
              {megaworldImages?.map((src) => {
                return <ImagePreview key={src} title="Megaworld" src={src} />;
              })}
            </SimpleGrid>
          </SimpleGrid>
        </Stack>
      </Paper>
    </Card>
  );
};
