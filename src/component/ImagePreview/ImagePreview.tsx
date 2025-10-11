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

  if (!src) return null;

  const handleOpen = () => setSelected(src);

  const handleClose = () => setSelected(null);

  return (
    <>
      <Box
        pos="relative"
        mb="xs"
        onClick={handleOpen}
        style={{
          cursor: "pointer",
          overflow: "hidden",
          height: "250px",
          backgroundColor: "#f8f9fa",
        }}
        p={10}
        onMouseEnter={(e) => {
          const icon = e.currentTarget.querySelector(
            ".preview-icon"
          ) as HTMLElement;
          if (icon) icon.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          const icon = e.currentTarget.querySelector(
            ".preview-icon"
          ) as HTMLElement;
          if (icon) icon.style.opacity = "0";
        }}
      >
        <Image
          src={src}
          alt={`${title} main image`}
          fill
          className="object-cover object-center transition-transform duration-200 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
        {/* Hover Preview Icon */}
        <Box
          pos="absolute"
          top="50%"
          left="50%"
          className="preview-icon"
          style={{
            transform: "translate(-50%, -50%)",
            opacity: 0,
            transition: "opacity 0.2s ease-in-out",
            pointerEvents: "none",
            zIndex: 1,
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
            }}
          >
            <IconEye size={24} color="white" />
          </Box>
        </Box>
      </Box>

      {/* Lightbox Modal */}
      <Modal
        opened={!!selected}
        onClose={handleClose}
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
              className="object-contain"
              sizes="100vw"
            />
          </Box>
        )}
      </Modal>
    </>
  );
}
