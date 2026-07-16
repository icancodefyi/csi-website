import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CSI ACE | Computer Society of India - Atharva College of Engineering",
  description:
    "CSI ACE is the official student chapter of the Computer Society of India at Atharva College of Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
