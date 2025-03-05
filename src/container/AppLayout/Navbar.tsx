"use client";
import { isDarkModeAtom } from "@/store";
import {
  ActionIcon,
  AppShell,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandProducthunt,
  IconChevronLeft,
  IconChevronRight,
  IconHome,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

type NavbarItem = {
  href: string;
  path: string[];
  label: React.ReactNode;
  icon: React.ReactNode;
};
type Navbar = {
  products: NavbarItem[];
};

const NAVBAR_ARRAY: Navbar = {
  products: [
    {
      href: "/products",
      icon: <IconBrandProducthunt />,
      label: "Products",
      path: ["products"],
    },
  ],
};

export function AppNavbar({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  const router = useRouter();
  const paths = usePathname()?.split("/");
  const basepath = useMemo(() => paths[1], [paths]);
  const [isDarkMode] = useAtom(isDarkModeAtom);

  const goHome = () => router.push("/");

  return (
    <>
      <AppShell.Navbar>
        <Box mt={35} mb={50}>
          <Image
            src={
              !opened
                ? "/default/ExsightMiniLogo.png"
                : "/default/ExsightLogo.png"
            }
            alt="Logo"
            width={opened ? 270 : 80}
            height={50}
          />
        </Box>
        <Stack ml={16} mr={16}>
          {opened ? (
            <Flex gap={8}>
              <Button
                onClick={goHome}
                bg={isDarkMode ? "gray" : "#37487C"}
                color={isDarkMode ? "gray" : "#198ffd"}
                variant={"filled"}
                leftSection={<IconHome />}
                w={180}
                h={50}
              >
                Home
              </Button>
              <ActionIcon
                onClick={toggle}
                variant="filled"
                color="#EAEAEA"
                w={50}
                h={50}
              >
                <IconChevronLeft color="black" />
              </ActionIcon>
            </Flex>
          ) : (
            <>
              <Box ta="center">
                <ActionIcon
                  onClick={goHome}
                  variant="filled"
                  color={isDarkMode ? "gray" : "#37487C"}
                  w={50}
                  h={50}
                >
                  <IconHome />
                </ActionIcon>
              </Box>
              <ActionIcon
                onClick={toggle}
                variant="filled"
                color="#EAEAEA"
                w={50}
                h={50}
              >
                <IconChevronRight color="black" />
              </ActionIcon>
            </>
          )}

          <Text p={10}>Menu</Text>
          {/* {NAVBAR_ARRAY["products"]?.map((item, i) => {
            return (
              <Link
                href={item?.href}
                key={i}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Group key={i} p={8}>
                  <Box m={!opened && "auto"}>{item?.icon && item?.icon}</Box>
                  {opened && <Text fw={500}>{item?.label}</Text>}
                </Group>
              </Link>
            );
          })} */}
        </Stack>
      </AppShell.Navbar>
    </>
  );
}
