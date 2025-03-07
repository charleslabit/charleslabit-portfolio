import { Card } from "@/component";
import { Badge, Blockquote, Center, Group, List, Text } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";

export const WorkExperience = () => {
  return (
    <Center>
      <Card id="exp" title="Work Experience">
        <Blockquote
          color="blue"
          cite="July 2021 – Present"
          mt="xl"
          icon={<IconBriefcase />}
        >
          <Text fw={"bold"}>Front-End Developer | Awesomelab Inc. </Text>
          <List>
            <List.Item>
              Developed and maintained web applications for various sectors,
              including hotel management, data collection, e-commerce CMS, and
              HR systems, using Next.js, TypeScript, and Mantine UI.
            </List.Item>
            <List.Item>
              Optimized UI performance, reducing redundant network calls by 30%
              using TanStack Query.
            </List.Item>

            <List.Item>
              Integrated GraphQL using Apollo Client and AWS Amplify for
              efficient and scalable data fetching.
            </List.Item>

            <List.Item>
              Transformed Figma designs into pixel-perfect, responsive, and
              accessible user interfaces, ensuring cross-browser compatibility.
            </List.Item>

            <List.Item>
              Implemented comprehensive end-to-end testing with Playwright,
              improving software reliability and increasing test coverage.
            </List.Item>

            <List.Item>
              Collaborated closely with back-end developers to integrate APIs,
              optimize data flow, and enhance performance across the application
              stack.
            </List.Item>

            <List.Item>
              Managed Git repositories, streamlined CI/CD pipelines, and tracked
              project progress using Bitbucket and Jira.
            </List.Item>
            <List.Item>
              Migrated UI frameworks from Ant Design to Mantine UI, enhancing
              application speed and flexibility.
            </List.Item>
            <List.Item>
              Engaged in regular code review sessions with colleagues to
              maintain coding standards, reduce errors, and foster a
              collaborative development environment.
            </List.Item>
          </List>
          <Group mt={20}>
            <Badge>Javascript</Badge>
            <Badge>Typescript</Badge>
            <Badge>React.js</Badge>
            <Badge>Next.js</Badge>
            <Badge>Mantine UI</Badge>
            <Badge>GraphQL</Badge>
            <Badge>Playwright</Badge>
          </Group>
        </Blockquote>
        <Blockquote
          color="blue"
          cite="June 2018 – June 2021"
          mt="xl"
          icon={<IconBriefcase />}
        >
          <Text fw={"bold"}>Junior Programmer | HRD Singapore Pte. Ltd. </Text>
          <List>
            <List.Item>
              Developed and maintained a comprehensive in-house system for house
              planners, encompassing both desktop and web applications. Key
              features included inventory management, data extraction, content
              management, and automation, enhancing overall efficiency and
              streamlining business operations.
            </List.Item>
          </List>
          <Group mt={20}>
            <Badge>Magic XPA</Badge>
            <Badge>Javascript</Badge>
            <Badge>Vue.js</Badge>
            <Badge>Ant Design</Badge>
            <Badge>Node.js</Badge>
            <Badge>Express.js</Badge>
            <Badge>MySQL</Badge>
            <Badge>REST API</Badge>
          </Group>
        </Blockquote>
      </Card>
    </Center>
  );
};
