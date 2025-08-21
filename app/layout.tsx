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
  title: "Martin Tembo | Software Engineer",
  description: "Personal website of Martin Tembo, a software engineer.",
  openGraph: {
    title: "Martin Tembo | Software Engineer",
    description: "Personal website of Martin Tembo, a software engineer.",
    url: "https://martintembo.com",
    siteName: "Martin Tembo",
    images: [
      {
        url: "https://martintembo.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Martin Tembo | Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Tembo | Software Engineer",
    description: "Personal website of Martin Tembo, a software engineer.",
    images: ["https://martintembo.com/og-image.png"],
    creator: "@martintembo",
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
