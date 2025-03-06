"use client";
import { isDarkModeAtom } from "@/store";
import { Button, MantineProvider, createTheme } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { useAtom } from "jotai";

const labelStyles = {
  fontWeight: 500,
  fontSize: 14,
};

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode] = useAtom(isDarkModeAtom);
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
        withBorder: true,
      },
      styles: () => ({
        root: {
          wordBreak: "break-word",
        },
      }),
    },
    Paper: {
      defaultProps: {
        radius: "md",
      },
    },
    Tabs: {
      styles: () => ({
        panel: {
          marginTop: 15,
        },
      }),
    },

    TextInput: {
      styles: () => ({
        label: labelStyles,
      }),
    },

    Textarea: {
      styles: () => ({
        label: labelStyles,
      }),
    },
    Text: {
      defaultProps: {
        fz: 36,
      },
    },

    Image: {
      styles: () => ({
        root: {
          objectFit: "contain",
        },
      }),
    },
  };
  const theme = createTheme({
    cursorType: "pointer",
    components: themeComponents,
    primaryColor: isDarkMode ? "dark" : "light",
    autoContrast: true,
    white: "#FFFFF0", // Replace white color
    black: "#333333",
    colors: {
      // Custom colors for the dark mode
      light: [
        // Light mode shades for brand color (blue)
        "#56CCF2", // Brand light blue color
        "#4AB7E0",
        "#399DCE",
        "#2583BC",
        "#1471A9",
        "#0A5A8D",
        "#07486F",
        "#053A56",
        "#032F44",
        "#021F33", // Darker version for dark mode
      ],
      dark: [
        // Dark Mode Shades for Brand Color (adjusted for dark mode)
        "#56CCF2", // Main bright brand color for dark mode (same as light mode for contrast)
        "#4AB7E0", // Slightly lighter blue shade
        "#399DCE", // Soft medium blue
        "#2583BC", // Darker shade of blue (for hover or buttons)
        "#1471A9", // Rich blue for prominent elements like headers or action buttons
        "#0A5A8D", // Dark blue for inactive or disabled states
        "#07486F", // Even darker blue, used for borders or subtle elements
        "#053A56", // Very dark blue, used for backgrounds or larger sections
        "#032F44", // Almost black, used for text or heavy borders
        "#021F33", // Deep dark blue for deep shadows or contrast-heavy sections
      ],
    },
  });

  return (
    <MantineProvider
      theme={theme}
      forceColorScheme={isDarkMode ? "dark" : "light"}
    >
      <Notifications position="top-right" />
      <ModalsProvider modalProps={{ centered: true }}>
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
}
