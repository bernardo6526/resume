import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/side-nav";
import localFont from "next/font/local";

const lastica = localFont({
  src: "../public/fonts/Lastica.ttf",
  weight: "400",
  variable: "--font-lastica",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bernardo's Resume",
  description: "Resume website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lastica.variable} antialiased`}
      >
        <div className="flex">
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          <SideNav />
        </div>
      </body>
    </html>
  );
}
