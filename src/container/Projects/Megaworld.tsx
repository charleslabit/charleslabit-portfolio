import { Card, FilePreview } from "@/component";
import { Carousel } from "@mantine/carousel";
import { List, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import {
  IconCircleChevronDown,
  IconCircleChevronUp,
} from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const megaworldFeatures = [
  "Booking and Reservation System: Allows users to view availability, make reservations, and manage bookings efficiently.",
  "Content Management System (CMS): Enables administrators to manage website content, announcements, and promotions.",
  "Messaging Feature: Provides a communication platform for inquiries, updates, and customer support.",
  "Property and Revenue Management: Tracks property details, calculates revenue, and generates financial insights.",
  "Approval Process: Implements a structured approval flow for reservations, content updates, or financial records to ensure proper oversight.",
  "Role-Based Access Control (RBAC): Ensures secure access by assigning permissions based on user roles (e.g., admin, staff, customer).",
  "FAQ Management: Allows administrators to create and manage frequently asked questions for improved user guidance.",
];

const megaworldImages = [
  "/default/mega1.png",
  "/default/mega2.png",
  "/default/mega3.png",
  "/default/mega4.png",
];

export const Megaworld = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const handleMouseEnter = () => autoplay.current?.stop(); // Stop autoplay on hover
  const handleMouseLeave = () => autoplay.current?.play(); // Restart autoplay when hover ends
  return (
    <Card>
      <SimpleGrid cols={{ lg: 2, md: 1 }} spacing={50}>
        <Paper m="auto">
          <Stack gap={0}>
            <Text fw="bold" fz={20}>
              Comprehensive Property and Booking Management System
            </Text>
            <Text c="dimmed" fz={16}>
              Developed a robust web application designed to streamline property
              management operations. Key features include:
            </Text>
          </Stack>
          <List>
            {megaworldFeatures?.map((feature, i) => {
              return <List.Item key={i}>{feature}</List.Item>;
            })}
          </List>
        </Paper>
        <Carousel
          orientation="vertical"
          height={500}
          withIndicators
          loop
          plugins={[autoplay.current]}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          dragFree
          controlSize={40}
          nextControlIcon={<IconCircleChevronDown />}
          previousControlIcon={<IconCircleChevronUp />}
        >
          {megaworldImages.map((src, index) => (
            <Carousel.Slide key={index}>
              <FilePreview src={src} h={500} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </SimpleGrid>
    </Card>
  );
};
