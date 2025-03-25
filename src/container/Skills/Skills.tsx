import { Card } from "@/component";
import { Center, Container, Grid, List, ThemeIcon, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const skillCategories = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Mantine UI",
    "HTML",
    "CSS",
  ],
  "API Integration": [
    "REST API",
    "Apollo Client (GraphQL)",
    "AWS Amplify API (GraphQL)",
    "GraphQL (Queries, Mutations & Subscriptions)",
    "Axios",
  ],
  "State Management": ["Zustand", "Jotai", "TanStack Query", "Nuqs"],
  "DevOps, CI/CD & Deployment": [
    "Vercel",
    "Git / Github",
    "Bitbucket",
    "AWS S3 and Cloudfront",
    "Railway",
  ],
  Authentication: ["AWS Cognito Auth", "JWT", "NextAuth.js"],
  "API Development & Testing": ["Postman", "Insomnia", "Bruno"],
  "Backend, Databases & Tools (Familiar With)": [
    "Node.js",
    "Express.js",
    "Supabase",
    "MySQL",
    "TablePlus",
  ],
  "Project Management & Collaboration": ["Jira", "Slack"],
  "End-to-End Testing": ["Playwright"],
};

export const SkillsPage = () => {
  return (
    <Center>
      <Card id="skills" title="Tech Stack">
        <Container size="lg">
          <Grid>
            {Object.entries(skillCategories).map(([category, skills]) => (
              <Grid.Col key={category} span={{ sm: 6, md: 4 }}>
                <Title order={4} mb="xs">
                  {category}
                </Title>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon size={16}>
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  {skills.map((skill) => (
                    <List.Item key={skill}>{skill}</List.Item>
                  ))}
                </List>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Card>
    </Center>
  );
};
