import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: "Srikandi VA",
  description: "Virtual Assistant Service",
  verification: {
    google: "x8nsNCwkJrUBwNS3J0X8QJuLKoi7CcLqW3uG76HWhQU",
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
        

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <GoogleAnalytics gaId="G-25MEE58LXK" />
        <Toaster position="top-right" />

        {children}
      </body>
    </html>
  );
}
