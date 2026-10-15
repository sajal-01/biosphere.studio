import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import FloatingMeetButton from "@/components/buttons/floating-meet";

export const metadata: Metadata = {
  title: "Biosphere Studio",
  description:
    "Biosphere Studio specializes in custom web solutions, mobile apps, e-commerce platforms, SaaS products, and marketing dashboards. Empowering businesses with innovative software for a strong digital presence.",
  keywords:
    "Biosphere Studio, digital agency, web solutions, custom websites, mobile apps, e-commerce platforms, SaaS products, marketing dashboards, digital innovation",
  authors: [{ name: "Biosphere.Studio" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Biosphere Studio",
    description:
      "Biosphere Studio offers cutting-edge web and software solutions to empower businesses in the digital era.",
    url: "https://biospherestudio.vercel.app",
    type: "website",
    images: [
      {
        url: "https://biospherestudio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Biosphere Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biosphere Studio",
    description:
      "Biosphere Studio specializes in custom web and software solutions for businesses aiming to thrive online.",
    images: ["https://biospherestudio.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable}  dark flex flex-col overflow-x-hidden  min-h-screen bg-white dark:bg-black text-black dark:text-white [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full  [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-gray-500`}
      >
        <Toaster />
        <Navbar />
        <main className="bg-black">{children}</main>
        <FloatingMeetButton />

        <Footer />
      </body>
    </html>
  );
}
