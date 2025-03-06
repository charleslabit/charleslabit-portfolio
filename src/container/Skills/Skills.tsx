import { Card } from "@/component";
import { Box, Center, List, SimpleGrid, Text } from "@mantine/core";

const skillCategories = [
  {
    title: "Front-End Technologies",
    items: ["React.js", "Next.js", "Typescript", "Javascript", "HTML", "CSS"],
  },
  {
    title: "Tools",
    items: ["Jira", "Bitbucket", "Git", "Chrome Dev Tools"],
  },
  {
    title: "State Management & Data Fetching",
    items: ["TanStack Query", "Zustand", "Atom", "Axios", "Nuqs"],
  },
  {
    title: "UI Library",
    items: ["Mantine UI"],
  },
  {
    title: "API Integration",
    items: ["REST API", "GraphQL"],
  },
  {
    title: "Testing & Deployment",
    items: ["Playwright", "Bitbucket (CI/CD), AWS (S3, CloudFront)"],
  },
];

export const SkillsPage = () => {
  return (
    <Center>
      <Card id="skills">
        <Text fw="bold" fz={30} mb={20}>
          Technical Skills and Tools
        </Text>
        <SimpleGrid cols={{ sm: 1, md: 2 }} spacing={20}>
          {skillCategories.map((category, index) => (
            <Box key={index}>
              <Text fz={25} fw={500} mb={10}>
                {category.title}
              </Text>
              <List fz={20}>
                {category.items.map((item, i) => (
                  <List.Item key={i}>{item}</List.Item>
                ))}
              </List>
            </Box>
          ))}
        </SimpleGrid>
      </Card>
    </Center>
  );
};
