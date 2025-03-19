import type React from "react";
import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";

// Load Archivo Black font with Next.js font optimization
const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  title: "Intuit CIT Open Day - Brutalist Tech Fest",
  description:
    "A tech fest happening at Cambridge Institute of Technology, KR Puram",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivoBlack.variable}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import Nav from "@/components/Nav";
