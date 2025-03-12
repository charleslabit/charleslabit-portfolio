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
  "Booking System: View availability, make reservations, and manage bookings.",
  "CMS: Easily update website content, announcements, and promotions.",
  "Messaging: Communicate via inquiries, updates, and support.",
  "Property & Revenue Management: Track properties and generate financial insights.",
  "Approval Workflow: Structured review process for bookings, content, and finances.",
  "Role-Based Access: Secure system with admin, staff, and customer roles.",
  "FAQ Management: Create and update frequently asked questions.",
];

const megaworldImages = [
  "/default/mega1.png",
  "/default/mega2.png",
  "/default/mega3.png",
  "/default/mega4.png",
];

export const Megaworld = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

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
          height={400}
          withIndicators
          loop
          m="auto"
          plugins={[autoplay.current]}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          dragFree
          controlSize={40}
          nextControlIcon={<IconCircleChevronDown />}
          previousControlIcon={<IconCircleChevronUp />}
        >
          {megaworldImages.map((src, index) => (
            <Carousel.Slide key={index} h={300}>
              <FilePreview src={src} h="100%" />
            </Carousel.Slide>
          ))}
        </Carousel>
      </SimpleGrid>
    </Card>
  );
};
