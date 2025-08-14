import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marc Dy - Software Engineer Portfolio",
  description: "Full-stack developer passionate about building practical solutions. From trading card price trackers to Discord bots and IoT devices.",
  openGraph: {
    title: "Marc Dy - Software Engineer Portfolio",
    description: "Full-stack developer passionate about building practical solutions. From trading card price trackers to Discord bots and IoT devices.",
    url: "https://marccarlody.com",
    siteName: "Marc Dy Portfolio",
    images: [
      {
        url: "https://marccarlody.com/icon.png",
        width: 512,
        height: 512,
        alt: "Marc Dy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Marc Dy - Software Engineer Portfolio",
    description: "Full-stack developer passionate about building practical solutions. From trading card price trackers to Discord bots and IoT devices.",
    images: ["https://marccarlody.com/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
