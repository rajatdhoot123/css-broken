import { Inter } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "@/lib/posthog";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata = {
  title: "Rajat Dhoot",
  description:
    "Making Life Better Off-Screen at https://kukufm.com🌟 | Hustling to fund my party vibes at https://launchify.club 🚀 | Penning thoughts http://rajatdhoot.com/blog ✍️",
  keywords: [
    "next.js",
    "react",
    "javascript",
    "web development",
    "traveller",
    "entrepreneur",
    "rajat dhoot",
  ],
  authors: [{ name: "Rajat Dhoot", url: "https://www.rajatdhoot.com" }],
  creator: "Rajat Dhoot",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.rajatdhoot.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rajat Dhoot",
    description:
      "Making Life Better Off-Screen at https://kukufm.com🌟 | Hustling to fund my party vibes at https://launchify.club 🚀 | Penning thoughts http://rajatdhoot.com/blog ✍️",
    url: "https://www.rajatdhoot.com",
    siteName: "Rajat Dhoot | Coder | Traveller | Entrepreneur",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajat Dhoot",
    description:
      "Making Life Better Off-Screen at https://kukufm.com🌟 | Hustling to fund my party vibes at https://launchify.club 🚀 | Penning thoughts http://rajatdhoot.com/blog ✍️",
    creator: "@Rajat_Dhoot",
    images: ["https://example.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CSPostHogProvider>{children}</CSPostHogProvider>
      </body>
    </html>
  );
}
