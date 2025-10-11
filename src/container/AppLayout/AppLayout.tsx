"use client";
import { AppShell, Stack } from "@mantine/core";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell padding="md">
      {/* Header */}
      <AppShell.Header p="md">
        <Header />
      </AppShell.Header>

      {/* Main */}
      <AppShell.Main>
        <Stack gap={100} mb={100} mt={70}>
          {children}
        </Stack>
      </AppShell.Main>

      {/* Footer */}
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
