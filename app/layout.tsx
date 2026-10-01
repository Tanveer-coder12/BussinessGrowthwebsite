import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova — Build Faster. Launch Smarter.",
  description:
    "Nova helps modern teams build, manage and launch their products faster.",
  keywords: ["SaaS", "productivity", "team collaboration", "web application"],
  authors: [{ name: "M A Tanveer" }],
  creator: "M A Tanveer",
  openGraph: {
    title: "Nova — Build Faster. Launch Smarter.",
    description:
      "A modern SaaS platform designed to help teams build and launch products faster.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}