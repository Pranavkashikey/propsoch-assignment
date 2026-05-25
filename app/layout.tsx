import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Propsoch — Bangalore's Smartest Real Estate Platform | Search, Buy & Sell Properties",
  description:
    "Buy your dream home confidently with Propsoch — Bangalore's smartest real estate service for home buyers to get expert advice, property insights & reports. Trusted by 1000+ intelligent homebuyers.",
  keywords: [
    "real estate",
    "Bangalore",
    "property",
    "home buying",
    "apartments",
    "flats for sale",
    "Propsoch",
  ],
  openGraph: {
    title: "Propsoch — Visit curated homes, negotiate smarter & buy intelligently",
    description:
      "Get end-to-end guidance from property wizards. 1000+ intelligent homebuyers trusted us with their biggest life decision.",
    url: "https://www.propsoch.com",
    siteName: "Propsoch",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
