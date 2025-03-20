import { Card } from "@/component";
import { Carousel } from "@mantine/carousel";
import {
  AspectRatio,
  Badge,
  Group,
  List,
  Paper,
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

const megaworldFeatures = [
  {
    title: "Booking System",
    description:
      "View availability, make reservations, and manage bookings efficiently.",
  },
  {
    title: "CMS",
    description:
      "Easily update website content, announcements, and promotions.",
  },
  {
    title: "Messaging",
    description:
      "Communicate via inquiries, updates, and support for better customer engagement.",
  },
  {
    title: "Property & Revenue Management",
    description:
      "Track properties and generate financial insights to optimize revenue.",
  },
  {
    title: "Approval Workflow",
    description:
      "Structured review process for bookings, content updates, and financial approvals.",
  },
  {
    title: "Role-Based Access",
    description:
      "Secure system with different access levels for admin, staff, and customers.",
  },
  {
    title: "FAQ Management",
    description:
      "Create, update, and manage frequently asked questions to assist users.",
  },
];

const megaworldImages = [
  "/default/mega1.png",
  "/default/mega2.png",
  "/default/mega3.png",
  "/default/mega4.png",
];

const skills = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Mantine UI",
  "Zustand",
  "Jotai",
  "REST API Integration",
  "GraphQL API & Subscriptions",
  "AWS Amplify API (GraphQL)",
  "Apollo GraphQL",
  "Tanstack Query",
  "AWS Cognito Auth",
];

export const Megaworld = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const handleMouseEnter = () => autoplay.current?.stop(); // Stop autoplay on hover
  const handleMouseLeave = () => autoplay.current?.play(); // Restart autoplay when hover ends
  return (
    <Card>
      <SimpleGrid cols={{ lg: 2, md: 1 }} spacing={50}>
        <Paper m="auto">
          <Stack>
            <Stack gap={0}>
              <Text fw="bold" fz={20}>
                Comprehensive Property and Booking Management System
              </Text>
              <Text c="dimmed" fz={16}>
                Developed a robust web application designed to streamline
                property management operations.
              </Text>
            </Stack>
            <Text fz={16}>Key Features:</Text>
            <List>
              {megaworldFeatures?.map(({ title, description }) => {
                return (
                  <List.Item key={title}>
                    <strong>{title}</strong> – {description}
                  </List.Item>
                );
              })}
            </List>

            <Group gap={10}>
              {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </Group>
          </Stack>
        </Paper>
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
          {megaworldImages.map((src, index) => (
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
