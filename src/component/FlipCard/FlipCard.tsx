"use client";

import { Badge, Card, Group, List, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";

interface FlipCardProps {
  role: string;
  period: string;
  details: string[];
  skills: string[];
}

export const FlipCard = ({ role, period, details, skills }: FlipCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{
        perspective: 1000,
        width: "100%",
        // maxWidth: 420,
        minHeight: 500,
        height: "100%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {/* FRONT SIDE */}
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{
              height: "100%",
              cursor: "pointer",
            }}
          >
            <Stack h="100%" justify="center" align="center" gap="md">
              <Text fw={700} ta="center">
                {role}
              </Text>
              <Text size="sm" c="dimmed" ta="center">
                {period}
              </Text>
              <Text size="xs" c="blue" ta="center" mt="md">
                Hover to view details
              </Text>
            </Stack>
          </Card>
        </motion.div>

        {/* BACK SIDE */}
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Card
            shadow="md"
            padding="lg"
            radius="md"
            withBorder
            style={{
              height: "100%",
              cursor: "pointer",
            }}
          >
            <Text fw={600} mb={8}>
              Details:
            </Text>
            <List size="sm">
              {details.map((d, i) => (
                <List.Item key={i}>{d}</List.Item>
              ))}
            </List>

            <Group gap={6} mt="md" wrap="wrap" justify="center">
              {skills.slice(0, 6).map((s) => (
                <Badge key={s} variant="light">
                  {s}
                </Badge>
              ))}
            </Group>

            <Text ta="center" size="xs" c="blue" mt="sm">
              Hover away to flip back
            </Text>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
