import { Layout } from "@/container/AppLayout";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./global.css";
import { QueryProvider } from "./QueryProvider";
import { UIProvider } from "./UIProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charles Kenneth Labit",
  description: "Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/next.svg" />
        {/* <ColorSchemeScript /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
          <UIProvider>
            <NuqsAdapter>
              <Layout>{children}</Layout>
            </NuqsAdapter>
          </UIProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
