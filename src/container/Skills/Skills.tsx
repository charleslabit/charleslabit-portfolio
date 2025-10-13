import { Card } from "@/component";
import {
  Badge,
  Center,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandReact,
  IconCloudCog,
  IconFlask2,
  IconLock,
  IconPlugConnected,
  IconServer,
  IconTestPipe,
  IconTransform,
  IconUsers,
} from "@tabler/icons-react";

type CategoryIcons = {
  [key: string]: React.ReactNode;
};

type Category = {
  [key: string]: Array<string>;
};

const categoryIcons: CategoryIcons = {
  "Frontend Development": <IconBrandReact size={20} />,
  "State & Data Handling": <IconTransform size={20} />,
  "API Integration": <IconPlugConnected size={20} />,
  "DevOps, CI/CD & Deployment": <IconCloudCog size={20} />,
  Authentication: <IconLock size={20} />,
  "Backend Development": <IconServer size={20} />,
  "API Development & Testing": <IconTestPipe size={20} />,
  "End-to-End Testing": <IconFlask2 size={20} />,
  "Collaboration Tools": <IconUsers size={20} />,
};

const skillCategories: Category = {
  "Frontend Development": [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Mantine UI",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "i18n",
    "React Hook Form",
    "React Native",
  ],
  "State & Data Handling": [
    "Zustand",
    "Jotai",
    "TanStack Query",
    "Nuqs",
    "Redux",
  ],
  "API Integration": [
    "REST API",
    "Apollo Client (GraphQL)",
    "AWS Amplify API (GraphQL)",
    "GraphQL (Queries, Mutations & Subscriptions)",
    "Axios",
  ],

  "DevOps, CI/CD & Deployment": [
    "Vercel",
    "Git / Github",
    "Bitbucket",
    "AWS S3 and Cloudfront",
    "Railway",
  ],
  Authentication: ["AWS Cognito Auth", "JWT", "NextAuth.js"],
  "Backend Development": ["Node.js", "Express.js", "Supabase", "MySQL"],
  "API Development & Testing": ["Postman", "Insomnia", "Bruno"],
  "End-to-End Testing": ["Playwright"],
  "Collaboration Tools": ["Jira", "Slack", "Lark"],
};

export const SkillsPage = () => {
  return (
    <Center id="skills">
      <Card title="Technologies I’ve Worked With" animation="fade-in-up">
        <Container size="lg">
          <Text c="dimmed" mb="md">
            A collection of technologies and tools I’ve worked with across
            frontend, backend, and DevOps environments to build scalable and
            maintainable applications
          </Text>

          <Grid>
            {Object.entries(skillCategories).map(([category, skills]) => (
              <Grid.Col key={category} span={{ md: 6, lg: 4 }}>
                <Paper
                  withBorder
                  p="md"
                  radius="md"
                  shadow="xs"
                  className="hover-card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Stack gap="sm" align="center">
                    <Group align="center">
                      {categoryIcons[category]}
                      <Title order={4} ta="center" title={category}>
                        {category}
                      </Title>
                    </Group>
                    <Group gap="xs" justify="center" wrap="wrap">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="light"
                          size="lg"
                          className="hover-badge"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Card>
    </Center>
  );
};
