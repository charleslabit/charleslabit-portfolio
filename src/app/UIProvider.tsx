"use client";
import { isDarkModeAtom } from "@/store";
import { PRIMARY_COLOR } from "@/util";
import { Button, MantineProvider, createTheme } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { useAtom } from "jotai";

const labelStyles = {
  color: PRIMARY_COLOR,
  fontWeight: 500,
  fontSize: 14,
};

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode] = useAtom(isDarkModeAtom);
  const themeComponents = {
    Button: Button.extend({
      defaultProps: {
        radius: "md",
        color: PRIMARY_COLOR,
      },
    }),
    Stack: {
      defaultProps: {
        gap: 10,
      },
    },
    Table: {
      defaultProps: {
        verticalSpacing: "md",
        highlightOnHover: true,
        highlightOnHoverColor: "#F6F7F8",
      },
      styles: () => ({
        th: {
          color: PRIMARY_COLOR,
        },
      }),
    },
    DatePickerInput: {
      styles: () => ({
        label: labelStyles,
      }),
    },
    YearPickerInput: {
      styles: () => ({
        label: labelStyles,
      }),
    },
    DateInput: {
      styles: () => ({
        label: labelStyles,
      }),
    },
    TimeInput: {
      styles: () => ({
        label: labelStyles,
      }),
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
        tabLabel: {
          color: PRIMARY_COLOR,
        },
        panel: {
          marginTop: 15,
        },
      }),
    },
    Title: {
      defaultProps: {
        c: PRIMARY_COLOR,
        order: 4,
      },
    },
    TextInput: {
      styles: () => ({
        label: labelStyles,
      }),
    },
    PasswordInput: {
      styles: () => ({
        label: labelStyles,
      }),
    },
    Textarea: {
      styles: () => ({
        label: labelStyles,
      }),
    },
    Select: {
      styles: () => ({
        label: labelStyles,
        item: {
          "&[data-selected]": {
            "&, &:hover": {
              backgroundColor: PRIMARY_COLOR,
            },
          },
        },
      }),
    },
    NumberInput: {
      styles: () => ({
        label: labelStyles,
      }),
    },
    Modal: {
      defaultProps: {
        centered: true,
      },
      styles: () => ({
        title: {
          color: PRIMARY_COLOR,
          fontWeight: "bold",
        },
      }),
    },
    Pagination: {
      defaultProps: {
        color: PRIMARY_COLOR,
      },
    },
    ActionIcon: {
      defaultProps: {
        color: isDarkMode ? "white" : "black",
        variant: "transparent",
      },
    },
    Stepper: {
      defaultProps: {
        color: PRIMARY_COLOR,
      },
    },
    Checkbox: {
      defaultProps: {
        color: PRIMARY_COLOR,
      },
    },
    Drawer: {
      styles: () => ({
        title: {
          color: PRIMARY_COLOR,
          fontWeight: 500,
        },
      }),
    },
    Skeleton: {
      defaultProps: {
        h: 35,
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
