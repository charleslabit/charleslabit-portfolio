import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const ThemeSettings = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const toggleDarkMode = () => {
    const newColorScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(newColorScheme);
  };
  return (
    <Tooltip
      label={colorScheme === "dark" ? "Light Mode" : "Dark Mode"}
      events={{
        hover: true,
        focus: true,
        touch: true,
      }}
    >
      <ActionIcon
        variant="transparent"
        onClick={toggleDarkMode}
        data-testid="theme-settings"
        aria-label="Toggle Theme Settings"
      >
        {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
      </ActionIcon>
    </Tooltip>
  );
};
