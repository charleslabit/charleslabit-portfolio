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
              Developed and maintained web apps for sectors like hotel
              management, data collection, e-commerce, and HR, using Next.js,
              TypeScript, and Mantine UI
            </List.Item>

            <List.Item>
              Improved UI performance by reducing network calls by 30% with
              TanStack Query and integrated GraphQL using Apollo Client and AWS
              Amplify
            </List.Item>

            <List.Item>
              Converted Figma designs into responsive, accessible, and
              cross-browser compatible user interfaces.
            </List.Item>

            <List.Item>
              Used Playwright for end-to-end testing, improving reliability and
              test coverage.
            </List.Item>

            <List.Item>
              Worked with back-end developers to integrate APIs, optimize data
              flow, and improve performance.
            </List.Item>

            <List.Item>
              Managed Git repositories, streamlined CI/CD pipelines, and tracked
              project progress using Bitbucket and Jira.
            </List.Item>
            <List.Item>
              Migrated from Ant Design to Mantine UI, improving speed and
              flexibility.
            </List.Item>
            <List.Item>
              Participated in code reviews to maintain standards, reduce errors,
              and encourage collaboration.
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
              Developed and maintained an in-house system for house planners,
              including desktop and web apps for inventory, data extraction,
              content management, and automation, improving efficiency and
              streamlining operations.
            </List.Item>
            <List.Item>
              Converted Magic XPA desktop application into Web Application
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
