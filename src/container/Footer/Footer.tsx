import { ThemeSetting } from "@/component";
import { ActionIcon, Group } from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconFileCv,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <Group>
      <ThemeSetting />
      <ActionIcon
        variant="transparent"
        component="a"
        href="/default/Charles-Kenneth-Labit-CV.pdf"
        target="_blank"
      >
        <IconFileCv />
      </ActionIcon>
      <ActionIcon
        variant="transparent"
        component="a"
        href="https://www.github.com/charleslabit"
        target="_blank"
      >
        <IconBrandGithubFilled />
      </ActionIcon>
      <ActionIcon
        variant="transparent"
        component="a"
        href="https://www.linkedin.com/in/charleslabit/"
        target="_blank"
      >
        <IconBrandLinkedinFilled />
      </ActionIcon>
      <ActionIcon
        variant="transparent"
        component="a"
        href="https://www.facebook.com/charleskieeeee"
        target="_blank"
      >
        <IconBrandFacebookFilled />
      </ActionIcon>
    </Group>
  );
};
