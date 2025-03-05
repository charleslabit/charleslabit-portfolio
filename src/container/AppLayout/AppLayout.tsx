"use client";
import { isDarkModeAtom } from "@/store/store";
import {
  ActionIcon,
  AppShell,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Grid,
  Group,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconDownload,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const pathArr = usePathname()?.split("/");
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(true);
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);
  const hasNavbar = path !== "/" && path !== "/privacy_policy";

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  };

  return (
    <>
      {path === "/login" ? (
        children
      ) : (
        <AppShell header={{ height: 70 }} footer={{ height: 60 }} padding="md">
          <AppShell.Header p={20}>
            <Center>
              <Group justify="space-between" w={1440}>
                <Badge size="lg">CK</Badge>
                <Group>
                  <Button
                    className="shortcut-button"
                    component="a"
                    href="#home"
                    variant="light"
                  >
                    Home
                  </Button>
                  <Button
                    className="shortcut-button"
                    component="a"
                    href="#about"
                    variant="light"
                  >
                    About Me
                  </Button>
                  <Button
                    className="shortcut-button"
                    component="a"
                    href="#skills"
                    variant="light"
                  >
                    Skills
                  </Button>
                  <Button
                    className="shortcut-button"
                    component="a"
                    href="#exp"
                    variant="light"
                  >
                    Work Experience
                  </Button>
                  <Button
                    className="shortcut-button"
                    component="a"
                    href="#projects"
                    variant="light"
                  >
                    Projects
                  </Button>
                </Group>
              </Group>
            </Center>
          </AppShell.Header>

          <AppShell.Main>
            <Tooltip
              label={isDarkMode ? "Light Mode" : "Dark Mode"}
              events={{
                hover: true,
                focus: true,
                touch: true,
              }}
            >
              <ActionIcon
                style={{ zIndex: 101 }}
                variant="transparent"
                className="cursor"
                pos="fixed"
                bottom={35}
                left={25}
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <IconSun /> : <IconMoon />}
              </ActionIcon>
            </Tooltip>
            <Stack gap={100} mt={100}>
              <Center>
                <Card w={1000} withBorder={false} id="home">
                  <Grid
                    columns={5}
                    gutter={16}
                    styles={{
                      inner: {
                        justifyContent: "center",
                      },
                    }}
                  >
                    <Grid.Col span={{ lg: 3, sm: 5, base: 5, xl: 3, md: 5 }}>
                      <Text fz={25}>Hello, I'm</Text>
                      <Text fw="bold" fz={30}>
                        Charles Kenneth Labit
                      </Text>
                      <Text fz={25}>
                        I'm a Software Developer with 7 years of experience,
                        specializing in front-end development for 4 years and
                        full-stack development for 3 years. I focus on building
                        responsive, user-friendly web applications, using both
                        front-end and back-end technologies to create seamless
                        solutions.
                      </Text>
                    </Grid.Col>
                    <Grid.Col span={2}>
                      <Image
                        src="/default/ck-profile.png"
                        alt="ck-profile"
                        w={420}
                        h={"auto"}
                      />
                    </Grid.Col>
                  </Grid>
                  <Center mt={100}>
                    <Group>
                      <Button
                        variant="light"
                        rightSection={<IconDownload />}
                        component="a"
                        href="/default/Charles-Kenneth-Labit-CV.pdf"
                        download
                      >
                        Download CV
                      </Button>
                      <ActionIcon
                        variant="outlined"
                        component="a"
                        href="https://www.github.com/charleslabit"
                        target="_blank"
                      >
                        <IconBrandGithubFilled />
                      </ActionIcon>
                      <ActionIcon
                        variant="outlined"
                        component="a"
                        href="https://www.linkedin.com/in/charleslabit/"
                        target="_blank"
                      >
                        <IconBrandLinkedinFilled />
                      </ActionIcon>
                      <ActionIcon
                        variant="outlined"
                        component="a"
                        href="https://www.facebook.com/charleskieeeee"
                        target="_blank"
                      >
                        <IconBrandFacebookFilled />
                      </ActionIcon>
                    </Group>
                  </Center>
                </Card>
              </Center>
              <Center>
                <Card w={1000} withBorder={false} id="about">
                  <Text fw="bold" fz={30}>
                    More About Me
                  </Text>
                  <Text fz={25}>
                    I’m currently employed as a Front-End Developer in
                    Awesomelab with nearly four years of experience specializing
                    in React.js, Next.js, TypeScript, Mantine UI, and GraphQL.
                    Previously, I worked as a Full-Stack Developer for three
                    years, building in-house systems with Vue.js, Node.js,
                    Express.js, REST API and MySQL. While my primary focus is
                    front-end development, my full-stack background gives me a
                    solid understanding of backend systems and API integrations
                  </Text>
                </Card>
              </Center>
              <Center>
                <Card w={1000} withBorder={false} id="skills">
                  <Text fw="bold" fz={30}>
                    Technical Skills and Tools
                  </Text>
                  <SimpleGrid cols={{ sm: 1, md: 2 }}>
                    <Box>
                      <Text fz={25} fw={500}>
                        Front-End Technologies:
                      </Text>
                      <List fz={20}>
                        <List.Item>React.js</List.Item>
                        <List.Item>Next.js</List.Item>
                        <List.Item>Typescript</List.Item>
                        <List.Item>Javascript</List.Item>
                        <List.Item>HTML</List.Item>
                        <List.Item>CSS</List.Item>
                      </List>
                    </Box>
                    <Box>
                      <Text fz={25} fw={500}>
                        Tools & Collaboration:
                      </Text>
                      <List fz={20}>
                        <List.Item> Jira</List.Item>
                        <List.Item>Bitbucket</List.Item>
                        <List.Item>Git</List.Item>
                        <List.Item>Postman</List.Item>
                        <List.Item>Insomnia</List.Item>
                        <List.Item>Chrome Dev Tools</List.Item>
                        <List.Item>React Dev Tools</List.Item>
                      </List>
                    </Box>
                    <Box>
                      <Text fz={25} fw={500}>
                        State Management & Data Fetching:
                      </Text>
                      <List fz={20}>
                        <List.Item>TanStack Query</List.Item>
                        <List.Item>Zustand</List.Item>
                        <List.Item>Atom</List.Item>
                        <List.Item>Axios</List.Item>
                        <List.Item>Fetch</List.Item>
                        <List.Item>Nuqs</List.Item>
                      </List>
                    </Box>
                    <Box>
                      <Text fz={25} fw={500}>
                        UI, Form, Date & DND Libraries:
                      </Text>
                      <List fz={20}>
                        <List.Item>Mantine UI</List.Item>
                        <List.Item>React Hook Form</List.Item>
                        <List.Item>Dayjs</List.Item>
                        <List.Item>Moment</List.Item>
                        <List.Item>DnD Kit</List.Item>
                      </List>
                    </Box>
                    <Box>
                      <Text fz={25} fw={500}>
                        API Integration:
                      </Text>
                      <List fz={20}>
                        <List.Item>REST API</List.Item>
                        <List.Item>GraphQL</List.Item>
                      </List>
                    </Box>
                    <Box>
                      <Text fz={25} fw={500}>
                        Testing & Deployment:
                      </Text>
                      <List fz={20}>
                        <List.Item> Playwright</List.Item>
                        <List.Item>
                          Bitbucket (CI/CD), AWS (S3, CloudFront)
                        </List.Item>
                      </List>
                    </Box>
                  </SimpleGrid>
                </Card>
              </Center>
            </Stack>
          </AppShell.Main>
          <AppShell.Footer p="md">Footer</AppShell.Footer>
        </AppShell>
      )}
    </>
  );
}
