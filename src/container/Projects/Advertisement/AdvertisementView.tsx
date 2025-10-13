import { Card } from "@/component";
import {
  AspectRatio,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { useAdvertisementViewModel } from "./AdvertisementViewModel";

export const Advertisement = () => {
  const { landingPages, videoExtensions } = useAdvertisementViewModel();
  return (
    <Card withBorder animation="fade-in">
      <Paper m="auto">
        <Stack>
          <Stack gap={0}>
            <Text fw="bold" fz={20}>
              Responsive H5 & Web Advertisement Platform
            </Text>
            <Text c="dimmed" fz={16}>
              Developed a modern, mobile-first landing page to promote products
              and services across devices. Emphasized smooth DOM interactions,
              responsive layout, and translation support for a wider audience
              reach.
            </Text>
          </Stack>

          <Text fz={16}>Key Highlights:</Text>
          <List spacing="xs">
            <List.Item>
              <strong>Dynamic Layout</strong> – Optimized for all screen sizes
              using adaptive, responsive sections.
            </List.Item>
            <List.Item>
              <strong>Interactive Animations</strong> – Smooth transitions and
              motion effects enhance user engagement and retention.
            </List.Item>
            <List.Item>
              <strong>SEO Optimized</strong> – Improved metadata, structured
              data, and fast performance for higher search visibility.
            </List.Item>
            <List.Item>
              <strong>Call-to-Action Focused</strong> – Strategically placed
              banners and buttons to drive conversions and engagement.
            </List.Item>
            <List.Item>
              <strong>Analytics Integration</strong> – Integrated{" "}
              <strong>PostHog</strong> for behavioral analytics and marketing
              insights, enabling data-driven decisions.
            </List.Item>
            <List.Item>
              <strong>Performance Tracking</strong> – Monitored metrics like
              user retention and funnel conversion to refine UX and boost
              campaign results.
            </List.Item>
          </List>
        </Stack>
      </Paper>

      <SimpleGrid cols={{ sm: 2, xs: 1 }} spacing="md" mt={30}>
        {landingPages?.map((src, i) => {
          const isVideo = videoExtensions.some((ext) =>
            src.toLowerCase().endsWith(ext)
          );

          return (
            <AspectRatio key={i} ratio={9 / 16}>
              {isVideo ? (
                <video
                  src={src}
                  controls
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: 400,
                    borderRadius: "10px",
                    objectFit: "contain",
                    backgroundColor: "#000",
                  }}
                />
              ) : (
                <Image
                  alt={`LP-${i}`}
                  src={src}
                  height={400}
                  width={300}
                  style={{
                    objectFit: "contain",
                    background: "#000",
                    borderRadius: "10px",
                  }}
                />
              )}
            </AspectRatio>
          );
        })}
      </SimpleGrid>
    </Card>
  );
};
