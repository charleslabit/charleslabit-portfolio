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
import { Category, CategoryIcons } from "./skills.types";

export const CATEGORY_ICONS: CategoryIcons = {
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

export const SKILL_CATEGORIES: Category = {
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
