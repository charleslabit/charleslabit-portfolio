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
    description:
      "Easily create surveys with an intuitive, user-friendly interface.",
  },
  {
    title: "Customizable Elements",
    description:
      "Adjust labels, validations, visibility, and styling for each survey element.",
  },
  {
    title: "Multiple Question Types",
    description:
      "Supports text fields, multiple choice, checkboxes, dropdowns, and more.",
  },
  {
    title: "Conditional Logic",
    description: "Dynamically show or hide questions based on user responses.",
  },
  {
    title: "Data Management",
    description:
      "Collect, store, and organize responses efficiently with structured data handling.",
  },
  {
    title: "Custom Styling",
    description: "Personalize survey appearance to match your brand identity.",
  },
  {
    title: "Export & Reports",
    description:
      "Analyze collected data with exportable insights and reporting tools.",
  },
  {
    title: "Role-Based Access",
    description:
      "Secure the platform with different access levels for admins, editors, and viewers.",
  },
  {
    title: "Auto Save & Recovery",
    description:
      "Prevents data loss by automatically saving progress, even during network disruptions.",
  },
  {
    title: "Undo & Redo",
    description:
      "Effortlessly revert or restore changes while designing surveys.",
  },
  {
    title: "More Enhancements",
    description:
      "Additional features to improve usability, accuracy, and overall survey experience.",
  },
];

const exsightImages = ["/default/formbuilder.png", "/default/role-setting.png"];

const skills = [
  "Next.js",
  "Typescript",
  "Javascript",
  "Mantine UI",
  "HTML",
  "CSS",
  "Zustand",
  "Jotai",
  "Nuqs",
  "REST API",
  "GraphQL",
  "GraphQL Subscriptions",
  "Amplify API (GraphQL)",
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
          <Group>
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
          nextControlIcon={<IconCircleChevronRightFilled />}
          previousControlIcon={<IconCircleChevronLeftFilled />}
        >
          {exsightImages.map((src, index) => (
            <Carousel.Slide key={index}>
              <AspectRatio ratio={16 / 9} h={720}>
                <Image
                  alt={`Attachment-${index}`}
                  src={src}
                  layout="fill"
                  objectFit="contain"
                />
              </AspectRatio>
            </Carousel.Slide>
          ))}
        </Carousel>
      </SimpleGrid>
    </Card>
  );
};
