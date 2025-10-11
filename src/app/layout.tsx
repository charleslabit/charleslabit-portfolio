import { Layout } from "@/container/AppLayout";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { Metadata } from "next";
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
  title: "Charles Kenneth Labit | Front-End Developer",
  description:
    "A Front-End Developer specializing in building responsive and user-friendly web applications using React, Next.js, and TypeScript.",
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js",
    "Next.js Portfolio",
    "TypeScript",
    "Web Developer",
    "Mantine UI",
    "JavaScript",
    "JavaScript Developer",
    "Software Engineer",
  ],
  authors: [
    {
      name: "Charles Labit",
      url: "https://charleslabit-portfolio.vercel.app/",
    },
  ],
  metadataBase: new URL("https://charleslabit-portfolio.vercel.app/"),

  openGraph: {
    title: "Charles Kenneth Labit | Front-End Developer",
    description:
      "Creating seamless and interactive web experiences with modern web technologies.",
    url: "https://charleslabit-portfolio.vercel.app/",
    siteName: "Charles Kenneth Labit Portfolio",
    images: [
      {
        url: "https://charleslabit-portfolio.vercel.app/default/ck-profile.png",
        width: 1200,
        height: 630,
        alt: "Charles Kenneth Labit Cover",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Kenneth Labit | Front-End Developer",
    description:
      "Building modern, responsive, and interactive web applications.",
    images: [
      "https://charleslabit-portfolio.vercel.app/default/ck-profile.png",
    ],
  },

  // Robots Meta Tag (Controls indexing behavior)
  robots: {
    index: true, // Allow search engines to index
    follow: true, // Allow following links
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/logo.svg" /> */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/logo-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/logo-512x512.png"
        />
        {/* <ColorSchemeScript /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
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
