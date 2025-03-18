import { Card, FilePreview } from "@/component";
import { Carousel } from "@mantine/carousel";
import { Badge, Group, List, SimpleGrid, Stack, Text } from "@mantine/core";
import {
  IconCircleChevronLeft,
  IconCircleChevronRight,
} from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
const exsightFeatures = [
  "Drag-and-Drop Builder: Easily create surveys with a user-friendly interface.",
  "Customizable Elements: Adjust labels, validations, visibility, and styling per element.",
  "Multiple Question Types: Supports text fields, multiple choice, checkboxes, and more.",
  "Conditional Logic: Show or hide questions based on user responses.",
  "Data Management: Collect, store, and organize responses efficiently.",
  "Custom Styling: Personalize survey appearance to match branding.",
  "Export & Reports: Analyze data with exportable insights.",
  "Role-Based Access: Secure access with admin, editor, and viewer roles.",
  "Auto Save & Recovery: Prevents data loss during network issues.",
  "Undo & Redo: Effortlessly revert or restore changes.",
  "More Enhancements: Additional features to improve usability and accuracy.",
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
              streamline data collection and enhance user experience. Key
              features include:
            </Text>
          </Stack>
          <List>
            {exsightFeatures?.map((feature, i) => {
              return <List.Item key={i}>{feature}</List.Item>;
            })}
          </List>
          <Group>
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </Group>
        </Stack>

        <Carousel
          height={"100%"}
          withIndicators
          loop
          m="auto"
          plugins={[autoplay.current]}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          dragFree
          controlSize={40}
          nextControlIcon={<IconCircleChevronRight />}
          previousControlIcon={<IconCircleChevronLeft />}
        >
          {exsightImages.map((src, index) => (
            <Carousel.Slide key={index} h={"100%"}>
              <FilePreview src={src} h={"100%"} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </SimpleGrid>
    </Card>
  );
};
