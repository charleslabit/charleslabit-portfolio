import { Card, ImagePreview } from "@/component";
import { Badge, Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import Link from "next/link";

// const megaworldFeatures = [
//   {
//     title: "Booking System",
//     description:
//       "View availability, make reservations, and manage bookings efficiently.",
//   },
//   {
//     title: "CMS",
//     description:
//       "Easily update website content, announcements, and promotions.",
//   },
//   {
//     title: "Messaging",
//     description:
//       "Communicate via inquiries, updates, and support for better customer engagement.",
//   },
//   {
//     title: "Property & Revenue Management",
//     description:
//       "Track properties and generate financial insights to optimize revenue.",
//   },
//   {
//     title: "Approval Workflow",
//     description:
//       "Structured review process for bookings, content updates, and financial approvals.",
//   },
//   {
//     title: "Role-Based Access",
//     description:
//       "Secure system with different access levels for admin, staff, and customers.",
//   },
//   {
//     title: "FAQ Management",
//     description:
//       "Create, update, and manage frequently asked questions to assist users.",
//   },
// ];

const megaworldImages = [
  "/default/mega1.png",
  "/default/mega2.png",
  "/default/mega3.png",
  "/default/mega4.png",
];

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

export const Megaworld = () => {
  return (
    <Card withBorder>
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
