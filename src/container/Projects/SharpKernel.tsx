import { Card } from "@/component";
import { AspectRatio, Paper, Stack, Text } from "@mantine/core";
import Link from "next/link";

export const SharpKernel = () => {
  return (
    <Card withBorder>
      <Paper m="auto">
        <Stack gap={0}>
          <Link href="https://sharpkernel.com/" target="_blank">
            <Text fw="bold" fz={20} c="blue" td="underline">
              Sharp Kernel — IT Infrastructure & Software Solutions
            </Text>
          </Link>
          <Text c="dimmed" fz={16}>
            A professional and multilingual landing page built for Sharp Kernel,
            showcasing their IT infrastructure, cloud, and cybersecurity
            services. Designed with a clean, modern layout focused on clarity,
            trust, and lead conversion, the page features translation support
            for a wider audience and highlights their technical expertise,
            service offerings, and regional presence across APAC.
          </Text>
        </Stack>
      </Paper>

      <AspectRatio ratio={9 / 16}>
        <video
          src={"/default/sharp-kernel.mp4"}
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
      </AspectRatio>
    </Card>
  );
};
