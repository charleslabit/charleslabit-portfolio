import { Card, FilePreview } from "@/component";
import { Carousel } from "@mantine/carousel";
import { List, SimpleGrid, Stack, Text } from "@mantine/core";
import {
  IconCircleChevronDown,
  IconCircleChevronUp,
} from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
const exsightFeatures = [
  "Drag-and-Drop Interface: Easily build custom surveys using an intuitive drag-and-drop system for seamless question arrangement.",
  "Element-Specific Settings: Each survey element comes with customizable settings, allowing fine-tuned control over labels, validations, visibility conditions, and styling.",
  "Flexible Question Types: Supports various input types such as multiple choice, text fields, checkboxes, and more.",
  "Conditional Logic: Enables dynamic question flows based on user responses for improved accuracy and relevance.",
  "Data Collection & Management: Efficiently gathers, stores, and organizes survey responses for analysis.",
  "Customizable Design: Offers flexible styling options to match branding requirements.",
  "Export & Reporting: Provides detailed insights with exportable data for deeper analysis.",
  "Role-Based Access Control: Ensures secure access with different permission levels for admins, editors, and viewers.",
  "Local Save & Recovery: Progress is automatically saved locally, ensuring no data is lost during network issues.",
  "Undo & Redo Functionality: Easily revert or restore recent changes to improve the building experience.",
  "And More: Includes additional features to enhance user experience, improve data accuracy, and streamline survey management.",
];

const exsightImages = ["/default/formbuilder.png", "/default/role-setting.png"];

export const Exsight = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

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
        </Stack>

        <Carousel
          orientation="vertical"
          height={500}
          withIndicators
          loop
          plugins={[autoplay.current]}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          dragFree
          slideSize="60%"
          slideGap="xs"
          controlSize={40}
          nextControlIcon={<IconCircleChevronDown />}
          previousControlIcon={<IconCircleChevronUp />}
        >
          {exsightImages.map((src, index) => (
            <Carousel.Slide key={index}>
              <FilePreview src={src} h={500} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </SimpleGrid>
    </Card>
  );
};
