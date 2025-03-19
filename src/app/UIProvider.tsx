"use client";
import {
  Button,
  ColorSchemeScript,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";

export function UIProvider({ children }: { children: React.ReactNode }) {
  // In Next.js, during SSR, we need to delay the rendering of the app until the colorScheme is determined
  const [hydrated, setHydrated] = useState(false);
  // Use effect to ensure we run this logic only on the client-side
  useEffect(() => {
    setHydrated(true);
  }, []);
  // Avoid hydration errors: Don't render until the app is hydrated  this is for theme settings
  if (!hydrated) return null;

  const themeComponents = {
    Button: Button.extend({
      defaultProps: {
        radius: "md",
      },
    }),
    Stack: {
      defaultProps: {
        gap: 10,
      },
    },

    Card: {
      defaultProps: {
        radius: "md",
      },
      styles: () => ({
        root: {
          wordBreak: "break-word",
        },
      }),
    },

    Text: {
      defaultProps: {
        fz: 25,
      },
    },

    Badge: {
      styles: () => ({
        root: {
          textTransform: "none",
        },
      }),
    },
  };
  const theme = createTheme({
    cursorType: "pointer",
    components: themeComponents,
    primaryColor: "light",
    fontFamily: "Helvetica",
    white: "#FFFFF0", // Replace white color
    black: "#333333",
    colors: {
      light: [
        "#F1F8FF", // Light blue background
        "#E1E5F2", // Soft blue-gray for sections or cards
        "#D1D9E6", // Light lavender-gray background
        "#B0B8D8", // Softer blue for subtle accents
        "#5F5D9E", // Slate blue for interactive elements
        "#3F51B5", // Deep indigo for strong accents or buttons
        "#2C3878", // Dark indigo for headings or text
        "#1A237E", // Very dark blue-indigo for footer or strong emphasis
        "#0D47A1", // Royal blue for highlights or active elements
        "#003366", // Midnight blue for backgrounds or text
      ],
    },
  });

  return (
    <>
      <ColorSchemeScript forceColorScheme={"dark"} />
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <Notifications position="top-right" />
        <ModalsProvider modalProps={{ centered: true }}>
          {children}
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}
