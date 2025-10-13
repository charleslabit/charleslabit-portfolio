import { Card } from "@/component";
import { Badge, Blockquote, Center, Group, List, Text } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import { useWorkExperienceViewModel } from "./WorkExperienceViewModel";
import type { WorkExperienceTypes } from "./workExperience.types";

export const WorkExperience = () => {
  const { experienceList } = useWorkExperienceViewModel();
  return (
    <Center>
      <Card id="experience" title="Work Experience" animation="slide-in-left">
        {experienceList.map((exp, index) => (
          <ExperienceBlock key={index} {...exp} />
        ))}
      </Card>
    </Center>
  );
};

const ExperienceBlock = ({
  role,
  period,
  details,
  skills,
}: WorkExperienceTypes) => (
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
