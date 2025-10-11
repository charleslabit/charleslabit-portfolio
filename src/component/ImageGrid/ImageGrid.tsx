"use client";

import { Box, SimpleGrid } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import Image from "next/image";

type ImageGridProps = {
  images: string[];
  title: string;
  onImageClick: (src: string) => void;
  cols?: number;
  height?: number;
  spacing?: number;
  borderRadius?: number;
  iconSize?: number;
  iconPadding?: number;
};

export function ImageGrid({
  images,
  title,
  onImageClick,
  cols = 3,
  height = 100,
  spacing = 8,
  borderRadius = 8,
  iconSize = 16,
  iconPadding = 8,
}: ImageGridProps) {
  if (!images || images.length === 0) return null;

  return (
    <SimpleGrid cols={cols} spacing={spacing}>
      {images.map((src, i) => (
        <Box
          key={i}
          pos="relative"
          h={height}
          onClick={() => onImageClick(src)}
          style={{
            cursor: "pointer",
            overflow: "hidden",
            borderRadius,
            backgroundColor: "#f8f9fa",
          }}
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
            alt={`${title} thumbnail ${i + 1}`}
            fill
            className="object-cover object-center transition-transform duration-200 hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
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
                padding: `${iconPadding}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconEye size={iconSize} color="white" />
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
