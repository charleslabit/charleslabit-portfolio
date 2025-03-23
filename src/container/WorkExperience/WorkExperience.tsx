import { Card } from "@/component";
import { Badge, Blockquote, Center, Group, List, Text } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";

const experienceData = [
  {
    role: "Front-End Developer | Awesomelab Inc.",
    period: "July 5, 2021 – March 31, 2025",
    details: [
      "Developed and maintained web apps for sectors like hotel management, data collection, CMS, and HR, using Next.js, TypeScript, and Mantine UI.",
      "Converted Figma designs into responsive, accessible, and cross-browser compatible user interfaces.",
      "Worked with back-end developers to integrate APIs, optimize data flow, and improve performance.",
      "Managed Git repositories, streamlined CI/CD pipelines, and tracked project progress using Bitbucket and Jira.",
      "Enhanced UI performance by streamlining data fetching with TanStack Query and reducing boilerplate. Integrated GraphQL using Apollo Client and AWS Amplify.",
      "Migrated from Ant Design to Mantine UI, improving speed and flexibility.",
      "Participated in code reviews to maintain standards, reduce errors, and encourage collaboration.",
      "Used Playwright for end-to-end testing, improving reliability and test coverage.",
    ],
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Mantine UI",
      "HTML",
      "CSS",
      "Zustand",
      "Jotai",
      "Nuqs",
      "REST API",
      "GraphQL",
      "GraphQL Subscriptions",
      "Amplify API (GraphQL)",
      "Apollo GraphQL",
      "Tanstack Query",
      "AWS Cognito Auth",
      "Playwright",
      "Git",
      "Bitbucket",
      "Jira",
    ],
  },
  {
    role: "Junior Programmer | HRD Singapore Pte. Ltd.",
    period: "June 21, 2018 – June 21, 2021",
    details: [
      "Developed and maintained an in-house system for house planners, including desktop and web apps for inventory, data extraction, content management, and automation, improving efficiency and streamlining operations.",
      "Converted Magic XPA desktop application into Web Application using Vue.js, Ant Design, Node.js, Express.js, RESTful APIs, and MySQL.",
    ],
    skills: [
      "Magic XPA",
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Ant Design",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
      "Git",
    ],
  },
];

const ExperienceBlock = ({
  role,
  period,
  details,
  skills,
}: (typeof experienceData)[0]) => (
  <Blockquote color="blue" cite={period} mt="xl" icon={<IconBriefcase />}>
    <Text fw="bold">{role}</Text>
    <List>
      {details.map((item, index) => (
        <List.Item key={index}>{item}</List.Item>
      ))}
    </List>
    <Group mt={20} justify="center">
      {skills.map((skill) => (
        <Badge key={skill} variant="light">
          {skill}
        </Badge>
      ))}
    </Group>
  </Blockquote>
);

export const WorkExperience = () => {
  return (
    <Center>
      <Card id="experience" title="Work Experience">
        {experienceData.map((exp, index) => (
          <ExperienceBlock key={index} {...exp} />
        ))}
      </Card>
    </Center>
  );
};
