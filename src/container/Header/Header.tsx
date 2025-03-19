import { Burger, Button, Center, Drawer, Group, Stack } from "@mantine/core";
import { useEffect, useState } from "react";

// Navigation sections
const SECTIONS = ["home", "skills", "experience", "projects"] as const;

export const Header = () => {
  const [opened, setOpened] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const newSection = window.location.hash.substring(1) || "home";
      if (newSection !== activeSection) setActiveSection(newSection);
    };

    window.addEventListener("hashchange", updateActiveSection);
    updateActiveSection(); // Set initial value

    return () => window.removeEventListener("hashchange", updateActiveSection);
  }, [activeSection]);

  const handleClick = (
    id: string,
    event?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (event && id === "home") event.preventDefault(); // Prevent default for home

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
