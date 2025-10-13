"use client";

import { Box, Modal } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

type ProjectImagesProps = {
  src: string;
  title: string;
};

export function ImagePreview({ src, title }: ProjectImagesProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  if (!src) return null;

  return (
    <>
      <Box
        pos="relative"
        mb="xs"
        onClick={() => setSelected(src)}
        style={{
          cursor: "pointer",
          overflow: "hidden",
          height: "250px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <Image
          src={src}
          alt={`${title} main image`}
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />

        {/* Dark overlay */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.25)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            zIndex: 5,
          }}
        />

        {/* Eye icon */}
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              borderRadius: "50%",
              padding: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s ease",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <IconEye size={24} color="white" />
          </Box>
        </Box>
      </Box>

      {/* Lightbox Modal */}
      <Modal
        opened={!!selected}
        onClose={() => setSelected(null)}
        size="lg"
        centered
        radius="lg"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {selected && (
          <Box pos="relative" h={400}>
            <Image
              src={selected}
              alt={`${title} preview`}
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
            />
          </Box>
        )}
      </Modal>
    </>
  );
}
