import { Card } from "@/component";
import { Center, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const skillSet = [
  { name: "React.js", img: "/default/react.png" },
  { name: "Next.js", img: "/default/next.png" },
  { name: "TypeScript", img: "/default/ts.png" },
  { name: "JavaScript", img: "/default/js.png" },
  { name: "HTML", img: "/default/html.png" },
  { name: "CSS", img: "/default/css.png" },
  { name: "TanStack Query", img: "/default/tanstack.jpg" },
  { name: "Zustand", img: "/default/zustand.jpg" },
  { name: "Jotai", img: "/default/jotai.jpg" },
  { name: "Nuqs", img: "/default/nuqs.png" },
  { name: "Git", img: "/default/git.png" },
  { name: "Mantine UI", img: "/default/mantine.png" },
  { name: "Playwright", img: "/default/playwright.png" },
];

export const SkillsPage = () => {
  const isMobile = useMediaQuery("(max-width: 1320px)");

  return (
    <Center>
      <Card id="skills" title="Technical Skills">
        <Stack justify="center" gap={100}>
          <SimpleGrid
            cols={{ sm: 2, xs: 1, md: 3 }}
            w={isMobile ? "100%" : "50%"}
            m="auto"
          >
            {skillSet.map((skill) => (
              <Stack m="auto" align="center" key={skill.name}>
                <Image
                  alt={skill.name}
                  src={skill.img}
                  h={"auto"}
                  w={55}
                  radius={"25%"}
                />
                <Text>{skill.name}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Card>
    </Center>
  );
};
