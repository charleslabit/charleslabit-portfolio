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

const landingPagesVideos = [
  "/default/sharp-kernel.mp4",
  "/default/dragon-tiger.mp4",
  "/default/color-game-h5.mp4",
  "/default/color-game-web.png",
];

const videoExtensions = [".mp4", ".webm", ".ogg"];

export const LandingPages = () => {
  return (
    <Card>
      <Paper m="auto">
        <Stack>
          <Stack gap={0}>
            <Text fw="bold" fz={20}>
              Modern Landing Page & Advertisement Platform
            </Text>
            <Text c="dimmed" fz={16}>
              Created an engaging and responsive landing page designed to
              promote products and services effectively. Focused on
              conversion-driven UI and modern animations to enhance user
              interaction.
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
        {landingPagesVideos?.map((src, i) => {
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
