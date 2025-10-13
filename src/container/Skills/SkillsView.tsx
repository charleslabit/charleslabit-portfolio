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
import { useSkillsViewModel } from "./SkillsViewModel";

export const SkillsPage = () => {
  const { categoryIcons, skillCategories } = useSkillsViewModel();
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
