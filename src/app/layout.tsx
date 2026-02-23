import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zach Shaw — Operational Leader & AI-Empowered Builder",
  description:
    "Two decades in sales. Three years in marketing. A lifelong builder. I use modern AI to turn front-line business experience into functional, problem-solving tools.",
  openGraph: {
    title: "Zach Shaw — Operational Leader & AI-Empowered Builder",
    description:
      "Two decades in sales. Three years in marketing. A lifelong builder.",
    url: "https://zachshaw.com",
    siteName: "Zach Shaw",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
