import { Card, ImagePreview } from "@/component";
import { Badge, Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import Link from "next/link";
// const exsightFeatures = [
//   {
//     title: "Drag-and-Drop Builder",
//     description: "Easily create surveys with an intuitive interface.",
//   },
//   {
//     title: "Customizable Elements",
//     description: "Adjust labels, validations, visibility, and styling.",
//   },
//   {
//     title: "Multiple Question Types",
//     description: "Supports text fields, multiple choice, checkboxes, and more.",
//   },
//   {
//     title: "Conditional Logic",
//     description: "Dynamically show or hide questions based on responses.",
//   },
//   {
//     title: "Data Management",
//     description:
//       "Organize and store responses efficiently with structured data.",
//   },
//   {
//     title: "Custom Styling",
//     description: "Personalize surveys to match your brand identity.",
//   },
//   {
//     title: "Export & Reports",
//     description: "Analyze data with exportable insights and reports.",
//   },
//   {
//     title: "Role-Based Access",
//     description: "Secure platform access for admins, editors, and viewers.",
//   },
//   {
//     title: "Auto Save & Recovery",
//     description: "Prevent data loss by auto-saving progress.",
//   },
//   {
//     title: "Undo & Redo",
//     description: "Effortlessly revert or restore changes.",
//   },
//   {
//     title: "More Enhancements",
//     description: "Additional features to enhance usability and accuracy.",
//   },
// ];

const exsightImages = ["/default/formbuilder.png", "/default/role-setting.png"];

const techStack = {
  Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Mantine UI"],
  "State Management": ["Zustand", "Jotai", "TanStack Query", "Nuqs"],
  Forms: ["React Hook Form"],
  "Interactions & UI": ["Dnd Kit"],
  "Backend & APIs": [
    "REST API Integration",
    "GraphQL API & Subscriptions",
    "Apollo GraphQL",
  ],
  "Cloud & Auth": ["AWS Amplify API (GraphQL)", "AWS Cognito Auth"],
  Testing: ["Playwright"],
};

export const Exsight = () => {
  return (
    <Card id="Exsight" withBorder animation="slide-in-left">
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
