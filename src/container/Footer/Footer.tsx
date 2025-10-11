import { ThemeSettings } from "@/component";
import { ActionIcon, Group, Text } from "@mantine/core";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconFileCv,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <Group justify="space-between">
      <Group>
        <ThemeSettings />
        <ActionIcon
          variant="transparent"
          component="a"
          href="/default/Charles-Kenneth-Labit-CV.pdf"
          target="_blank"
          aria-label="Download Charles Kenneth Labit CV"
        >
          <IconFileCv />
        </ActionIcon>
        <ActionIcon
          variant="transparent"
          component="a"
          href="https://www.github.com/charleslabit"
          target="_blank"
          aria-label="Visit Charles Kenneth Labit's GitHub profile"
        >
          <IconBrandGithubFilled />
        </ActionIcon>
        <ActionIcon
          variant="transparent"
          component="a"
          href="https://www.linkedin.com/in/charleslabit/"
          target="_blank"
          aria-label="Visit Charles Kenneth Labit's LinkedIn profile"
        >
          <IconBrandLinkedinFilled />
        </ActionIcon>
        {/* <ActionIcon
        variant="transparent"
        component="a"
        href="https://www.facebook.com/charleskieeeee"
        target="_blank"
        aria-label="Visit Charles Kenneth Labit's Facebook profile"
      >
        <IconBrandFacebookFilled />
      </ActionIcon> */}
      </Group>
      <Text fz="xs">
        © 2025 Charles Kenneth Labit | Built with Next.js & Mantine UI
      </Text>
    </Group>
  );
};
