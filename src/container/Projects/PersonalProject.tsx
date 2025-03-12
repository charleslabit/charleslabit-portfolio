import { Card } from "@/component";
import {
  Anchor,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

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
            UI, featuring Zustand for state management. Implements Server-Side
            Rendering (SSR) to improve initial load performance and utilizes
            mock data to showcase product listings, cart functionality, and
            dynamic UI interactions.
          </Text>
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
