import { Card } from "@/component";
import { Carousel } from "@mantine/carousel";
import {
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
const exsightFeatures = [
  {
    title: "Drag-and-Drop Builder",
    description: "Easily create surveys with an intuitive interface.",
  },
  {
    title: "Customizable Elements",
    description: "Adjust labels, validations, visibility, and styling.",
  },
  {
    title: "Multiple Question Types",
    description: "Supports text fields, multiple choice, checkboxes, and more.",
  },
  {
    title: "Conditional Logic",
    description: "Dynamically show or hide questions based on responses.",
  },
  {
    title: "Data Management",
    description:
      "Organize and store responses efficiently with structured data.",
  },
  {
    title: "Custom Styling",
    description: "Personalize surveys to match your brand identity.",
  },
  {
    title: "Export & Reports",
    description: "Analyze data with exportable insights and reports.",
  },
  {
    title: "Role-Based Access",
    description: "Secure platform access for admins, editors, and viewers.",
  },
  {
    title: "Auto Save & Recovery",
    description: "Prevent data loss by auto-saving progress.",
  },
  {
    title: "Undo & Redo",
    description: "Effortlessly revert or restore changes.",
  },
  {
    title: "More Enhancements",
    description: "Additional features to enhance usability and accuracy.",
  },
];

const exsightImages = ["/default/formbuilder.png", "/default/role-setting.png"];

const skills = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Mantine UI",
  "Zustand",
  "Jotai",
  "Nuqs",
  "REST API Integration",
  "GraphQL API & Subscriptions",
  "AWS Amplify API (GraphQL)",
  "Apollo GraphQL",
  "Tanstack Query",
  "AWS Cognito Auth",
  "Playwright",
];

export const Exsight = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const handleMouseEnter = () => autoplay.current?.stop(); // Stop autoplay on hover
  const handleMouseLeave = () => autoplay.current?.play(); // Restart autoplay when hover ends
  return (
    <Card id="Exsight">
      <SimpleGrid cols={{ lg: 2, md: 1 }} spacing={50}>
        <Stack>
          <Stack gap={0}>
            <Text fw="bold" fz={20}>
              Survey Builder & Data Collection Tool
            </Text>
            <Text c="dimmed" fz={16}>
              Developed a powerful survey-building platform designed to
              streamline data collection and enhance user experience.
            </Text>
          </Stack>
          <Text fz={16}>Key Features:</Text>
          <List>
            {exsightFeatures?.map(({ title, description }) => {
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
          {exsightImages.map((src, index) => (
            <Carousel.Slide key={index}>
              <AspectRatio ratio={16 / 9} h={500} pos="relative">
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
