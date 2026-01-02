import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://signalist-nu.vercel.app"),
  title: {
    default: "Signalist - AI Stock Alerts & Market Insights",
    template: "%s | Signalist",
  },
  description:
    "Signalist is an AI-powered stock market app with real-time alerts, advanced charts, company insights, and personalized watchlists.",
  keywords: [
    "stock market app",
    "AI stock alerts",
    "real time stock prices",
    "stock watchlist app",
    "Indian stock market",
    "US stock alerts",
  ],
  authors: [{ name: "Rutvik Darji" }],
  creator: "Rutvik Darji",
  openGraph: {
    title: "Signalist - AI Stock Alerts & Market Insights",
    description:
      "Track stocks, set alerts, analyze charts, and receive AI-powered market summaries.",
    url: "https://signalist-nu.vercel.app",
    siteName: "Signalist",
    images: ["/readme/hero.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signalist - AI Stock Alerts",
    description:
      "AI-powered stock alerts, charts, and market insights in real-time.",
    images: ["/readme/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
