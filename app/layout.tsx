
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
  title: "Farkai Foundation Sierra Leone | Empowering Lives, Building Hope",
  description:
    "Farkai Foundation Sierra Leone is a charitable organization dedicated to supporting vulnerable children, people living with disabilities, and less privileged communities through compassion, inclusion, and community outreach.",
  metadataBase: new URL("https://farkai-foundation.vercel.app"),
  icons: {
  icon: "/icon.jpg?v=2",
  shortcut: "/icon.jpg?v=2",
  apple: "/icon.jpg?v=2",
},
  openGraph: {
    title: "Farkai Foundation Sierra Leone",
    description:
      "Empowering lives and building hope through compassion, charitable outreach, and community support in Sierra Leone.",
    url: "https://farkai-foundation.vercel.app",
    siteName: "Farkai Foundation Sierra Leone",
    images: [
      {
        url: "/images/team.jpg",
        width: 1200,
        height: 630,
        alt: "Farkai Foundation Sierra Leone community outreach",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
