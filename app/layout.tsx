import type { Metadata } from "next";
import LenisProvider from "@/components/lenis-provider";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
