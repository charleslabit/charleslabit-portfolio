"use client";
import { useScrollVisibility } from "@/hooks/";
import { AppShell, Stack } from "@mantine/core";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout({ children }: { children: React.ReactNode }) {
  const visible = useScrollVisibility({ idleDelay: 500, scrollUpDelay: 250 });

  return (
    <AppShell
      padding="md"
      styles={{
        header: {
          transition: "transform 0.3s ease, opacity 0.3s ease",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          opacity: visible ? 1 : 0,
        },
        footer: {
          transition: "transform 0.3s ease, opacity 0.3s ease",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          opacity: visible ? 1 : 0,
        },
      }}
    >
      <AppShell.Header p="md">
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Stack gap={25} mb={100} mt={70}>
          {children}
        </Stack>
      </AppShell.Main>

      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
