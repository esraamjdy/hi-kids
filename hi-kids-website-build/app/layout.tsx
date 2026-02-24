import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Geist } from "next/font/google";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
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
    <html suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${geist.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
