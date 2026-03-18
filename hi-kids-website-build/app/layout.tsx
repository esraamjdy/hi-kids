import type { Metadata, Viewport } from "next";
import { Fredoka } from "next/font/google";

import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: {
    default: "HiKids - Shaping the Future of Early Education",
    template: "%s | HiKids",
  },
  description:
    "HiKids is a modern kindergarten franchise bringing structured, progressive early education to communities worldwide.",
};

export const viewport: Viewport = {
  themeColor: "#f27a1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} font-sans`} suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
