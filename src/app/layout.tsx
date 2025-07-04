import type { Metadata } from "next";
import { Montserrat, Josefin_Sans } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";
import { Footer } from "@/components/Footer";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Josefin_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Na wzgórzu",
  description: "Generated by create next app",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="*:box-border">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Navigation />
        {children}

        <Footer />
      </body>
    </html>
  );
}
