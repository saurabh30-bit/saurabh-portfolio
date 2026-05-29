import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-kraken-product",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-kraken-brand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saurabh Shinde | Full-Stack Developer",
  description: "Portfolio of Saurabh Shinde, a Full-Stack Developer passionate about building scalable web applications, real-time systems, and AI integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-kraken-product bg-background text-foreground">{children}</body>
    </html>
  );
}
