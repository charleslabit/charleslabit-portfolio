import { SECTIONS } from "@/constants";
import useActiveSection from "@/hooks/useActiveSection";
import { Burger, Button, Center, Drawer, Group, Stack } from "@mantine/core";
import { useState } from "react";

export const Header = () => {
  const [opened, setOpened] = useState(false);
  const { activeSection, setActiveSectionManually } = useActiveSection();

  const handleClick = (
    id: string,
    event?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (event && id === "home") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } // Prevent default for home
    setActiveSectionManually(id);
    setOpened(false);
  };

  return (
    <Center>
      <Group justify="end" w={1440} px="md">
        {/* Burger menu for mobile */}
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          hiddenFrom="sm"
        />

        {/* Desktop Navigation */}
        <Group visibleFrom="sm">
          {SECTIONS.map((id) => (
            <NavButton
              key={id}
              id={id}
              activeSection={activeSection}
              onClick={handleClick}
            />
          ))}
        </Group>

        {/* Mobile Drawer */}
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          size="75%"
          padding="md"
        >
          <Stack>
            {SECTIONS.map((id) => (
              <NavButton
                key={id}
                id={id}
                activeSection={activeSection}
                onClick={handleClick}
                fullWidth
              />
            ))}
          </Stack>
        </Drawer>
      </Group>
    </Center>
  );
};

// Reusable Navigation Button Component / Only used in header no need to separate
const NavButton = ({
  id,
  activeSection,
  onClick,
  fullWidth = false,
}: {
  id: string;
  activeSection: string;
  onClick: (id: string, event?: React.MouseEvent<HTMLAnchorElement>) => void;
  fullWidth?: boolean;
}) => (
  <Button
    fullWidth={fullWidth}
    className="hover-effect"
    component="a"
    href={`#${id}`}
    variant={activeSection === id ? "filled" : "light"} // Highlight active section
    onClick={(event) => onClick(id, event)}
  >
    {id.charAt(0).toUpperCase() + id.slice(1)}
  </Button>
);
