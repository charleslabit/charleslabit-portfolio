import { Burger, Button, Center, Drawer, Group, Stack } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";

// Navigation sections
const SECTIONS = ["home", "about", "skills", "experience", "projects"];

export const Header = () => {
  const [opened, setOpened] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track the active section based on the URL hash
  const updateActiveSection = useCallback(() => {
    setActiveSection(window.location.hash.substring(1) || "home");
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", updateActiveSection);
    updateActiveSection(); // Set initial value

    return () => window.removeEventListener("hashchange", updateActiveSection);
  }, [updateActiveSection]);

  const handleClick = (id: string) => {
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  onClick: (id: string) => void;
  fullWidth?: boolean;
}) => (
  <Button
    fullWidth={fullWidth}
    className="hover-effect"
    component="a"
    href={`#${id}`}
    variant={activeSection === id ? "filled" : "light"} // Highlight active section
    onClick={() => onClick(id)}
  >
    {id.charAt(0).toUpperCase() + id.slice(1)}
  </Button>
);
