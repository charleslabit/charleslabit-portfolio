import { Card } from "@/component";
import {
  Anchor,
  Badge,
  Group,
  Image,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

const skills = [
  "Next.js",
  "Next.js App Router API (Mock REST API)",
  "NextAuth.js",
  "TypeScript",
  "JavaScript",
  "Mantine UI",
  "Tanstack Query",
  "Zustand",
  "Nuqs",
  "Playwright",
  "Vercel",
];

const features = [
  {
    title: "Dynamic CRUD Operations",
    description:
      "Manage product data with TanStack Query, no persistence required.",
  },
  {
    title: "State Management",
    description: "Uses Zustand for efficient and responsive cart handling.",
  },
  {
    title: "Authentication",
    description:
      "Sign in with GitHub/Google via NextAuth.js to access database management (no data stored).",
  },
  {
    title: "Dark Mode",
    description: "Seamless theme toggling between light and dark modes.",
  },
  {
    title: "Filtering & Sorting",
    description: "Easily search and filter products by category.",
  },
  {
    title: "Performance Optimized",
    description: "Hosted on Vercel for a fast, seamless experience.",
  },
  {
    title: "Fully Responsive",
    description: "Works smoothly on all devices.",
  },
];

export const PersonalProject = () => {
  return (
    <Card>
      <SimpleGrid cols={{ lg: 2, md: 1 }}>
        <Stack>
          <Text fw="bold" fz={20}>
            CK Mart | E-Commerce Demo (Static, Fully Interactive, with
            Authentication, Dark Mode & Filters)
          </Text>
          <Group>
            <Anchor
              href="https://ecommerce-demo-orpin.vercel.app/"
              target="_blank"
            >
              Live Demo
            </Anchor>
            |
            <Anchor
              href="https://github.com/charleslabit/ecommerce-demo/"
              target="_blank"
            >
              Source
            </Anchor>
          </Group>
          <Text fz={16}>
            This is a fully responsive e-commerce demo showcasing dynamic
            functionality without a backend database. Built with Next.js,
            TanStack Query, and Zustand, the project enables users to browse
            products, perform CRUD operations, and manage their cart—all within
            a static environment.
          </Text>
          <Text fz={16}>Key Features:</Text>
          <List>
            {features.map(({ title, description }) => (
              <List.Item key={title}>
                <strong>{title}</strong> – {description}
              </List.Item>
            ))}
          </List>
          <Group>
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </Group>
        </Stack>

        <Paper h={400} m="auto">
          <Image
            src="default/e-commerce-products.png"
            alt="e-commerce-demo"
            h={"100%"}
            w="100%"
            fit="contain"
          />
        </Paper>
      </SimpleGrid>
    </Card>
  );
};
