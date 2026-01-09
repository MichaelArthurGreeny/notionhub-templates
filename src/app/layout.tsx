import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NotionHub Templates - Premium Notion Templates for Productivity",
  description: "Boost your productivity with our premium Notion templates. Personal planners, finance trackers, business tools, and student resources. Instant download.",
  keywords: "notion templates, notion, productivity, planner, finance tracker, business templates, student templates",
  authors: [{ name: "NotionHub Templates" }],
  openGraph: {
    title: "NotionHub Templates - Premium Notion Templates",
    description: "Boost your productivity with our premium Notion templates.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotionHub Templates - Premium Notion Templates",
    description: "Boost your productivity with our premium Notion templates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
