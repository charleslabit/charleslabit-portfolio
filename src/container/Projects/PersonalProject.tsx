import { Card } from "@/component";
import {
  Anchor,
  Badge,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

const skills = [
  "Next.js",
  "Typescript",
  "Javascript",
  "Mantine UI",
  "HTML",
  "CSS",
  "Tanstack Query",
  "Zustand",
  "Nuqs",
];

export const PersonalProject = () => {
  return (
    <Card>
      <SimpleGrid cols={{ lg: 2, md: 1 }}>
        <Stack>
          <Text fw="bold" fz={20}>
            CK Mart | Personal Project
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
            A responsive e-commerce demo built with Next.js 15.2.1 and Mantine
            UI, showcasing a modular codebase with Zustand for state management
            and TanStack for efficient data fetching. Implements Server-Side
            Rendering (SSR) to optimize initial load performance. Features mock
            product listings, cart functionality with state persistence, and
            dynamic UI interactions. Checkout flow is not yet implemented.
          </Text>
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
