import type { Metadata } from "next";

import "./globals.css";
  

export const metadata: Metadata = {
  title: "CSI ACE | Computer Society of India",
  description:
    "Build. Lead. Inspire. The official student chapter of the Computer Society of India at Atharva College of Engineering.",
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
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-primary">
{children}
      </body>
    </html>
  );
}
