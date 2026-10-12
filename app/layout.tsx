import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { ViewTransition } from "react";
import "./globals.css";
import { siteUrl } from "./site-url";
import "./vbg.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jarren San Jose",
  description:
    "Jarren San Jose builds complete web products and grows audiences, from AI prototyping at Reforge to creator monetization at WannaText.",
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="vbg-report">
        <ViewTransition>{children}</ViewTransition>
        <Analytics />
      </body>
    </html>
  );
}
