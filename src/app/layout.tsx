import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Fira_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  weight: ['400', '500', '700'],
  variable: "--font-fira-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joel Kabura - Software Engineering Intern",
  description: "Software engineering intern from Las Vegas. Specializing in robotics vision pipelines, PyTorch, and machine learning. Currently building tools for robotic systems at Haigs Quality Printing.",
  openGraph: {
    title: "Joel Kabura - Software Engineering Intern",
    description: "Software engineering intern from Las Vegas. Specializing in robotics vision pipelines, PyTorch, and machine learning. Currently building tools for robotic systems at Haigs Quality Printing.",
    url: "https://joelkabura.com",
    siteName: "Joel Kabura Portfolio",
    images: [
      {
        url: "https://joelkabura.com/icon.png",
        width: 512,
        height: 512,
        alt: "Joel Kabura",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Joel Kabura - Software Engineering Intern",
    description: "Software engineering intern from Las Vegas. Specializing in robotics vision pipelines, PyTorch, and machine learning.",
    images: ["https://joelkabura.com/icon.png"],
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
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${firaMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
