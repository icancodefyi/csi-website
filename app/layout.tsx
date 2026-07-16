import type { Metadata } from "next";
import localFont from "next/font/local";
import LenisProvider from "@/components/lenis-provider";
import "./globals.css";

const cabinetGrotesk = localFont({
  src: "./fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet",
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
    <html lang="en" className={`${cabinetGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
