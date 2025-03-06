import { isDarkModeAtom } from "@/store";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useAtom } from "jotai";

export const ThemeSetting = () => {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  };
  return (
    <Tooltip
      label={isDarkMode ? "Light Mode" : "Dark Mode"}
      events={{
        hover: true,
        focus: true,
        touch: true,
      }}
    >
      <ActionIcon variant="transparent" onClick={toggleDarkMode}>
        {isDarkMode ? <IconSun /> : <IconMoon />}
      </ActionIcon>
    </Tooltip>
  );
};
