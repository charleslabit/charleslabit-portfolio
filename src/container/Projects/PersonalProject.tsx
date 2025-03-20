import { Card } from "@/component";
import { Carousel } from "@mantine/carousel";
import {
  Anchor,
  AspectRatio,
  Badge,
  Group,
  List,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconCircleChevronLeftFilled,
  IconCircleChevronRightFilled,
} from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  "Next.js",
  "Next.js App Router(Mock REST API)",
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
    description: "Fast and seamless, deployed on Vercel.",
  },
  {
    title: "Fully Responsive",
    description: "Works smoothly on all devices.",
  },
];

const demoProjImages = [
  "/default/e-commerce-products.png",
  "/default/e-commerce-cart.png",
  "/default/e-commerce-categories.png",
];

export const PersonalProject = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const handleMouseEnter = () => autoplay.current?.stop(); // Stop autoplay on hover
  const handleMouseLeave = () => autoplay.current?.play(); // Restart autoplay when hover ends
  return (
    <Card>
      <SimpleGrid cols={{ lg: 2, md: 1 }} spacing={50}>
        <Stack>
          <Text fw="bold" fz={20}>
            CK Mart | Interactive E-Commerce Demo (Static, Auth, Dark Mode)
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
          <Group gap={10}>
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </Group>
        </Stack>

        <Carousel
          withIndicators
          loop
          plugins={[autoplay.current]}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          dragFree
          controlSize={40}
          nextControlIcon={
            <IconCircleChevronRightFilled aria-label="Next Carousel" />
          }
          previousControlIcon={
            <IconCircleChevronLeftFilled aria-label="Previous Carousel" />
          }
        >
          {demoProjImages.map((src, index) => (
            <Carousel.Slide key={index}>
              <AspectRatio ratio={16 / 9} h={520} pos="relative">
                <Image
                  alt={`Attachment-${index}`}
                  src={src}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </AspectRatio>
            </Carousel.Slide>
          ))}
        </Carousel>
      </SimpleGrid>
    </Card>
  );
};
