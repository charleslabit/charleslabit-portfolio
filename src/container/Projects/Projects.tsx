import { Card } from "@/component";
import { Anchor, Center, Group, Image, Text } from "@mantine/core";

export const Projects = () => {
  return (
    <Center>
      <Card id="projects" title="Personal Project">
        <Text fw="bold" fz={20}>
          CK Mart
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
          A responsive e-commerce demo built with <b>Next.js 15.2.1</b> and{" "}
          <b>Mantine UI</b>, featuring <b>Zustand</b> for state management.
          Implements <b>Server-Side Rendering (SSR)</b> to improve initial load
          performance and utilizes mock data to showcase product listings, cart
          functionality, and dynamic UI interactions.
        </Text>
        <Image src="default/e-commerce-products.png" />
      </Card>
    </Center>
  );
};
