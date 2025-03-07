"use client";
import { AppShell, Stack } from "@mantine/core";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell padding="md" withBorder={false}>
      <AppShell.Header p={"md"}>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Stack gap={100} mt={100}>
          {children}
        </Stack>
      </AppShell.Main>
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
