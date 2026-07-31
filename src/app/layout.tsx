import type { Metadata } from "next";
import { Bebas_Neue, Dancing_Script, Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hero",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-script",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Wired Palate",
  description: "Thoughts, stories, and writing from The Wired Palate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dancingScript.variable} ${fraunces.variable} ${workSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
