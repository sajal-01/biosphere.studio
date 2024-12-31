import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Biosphere.Studios",
  description:
    "Biosphere.Studios, unlock speed to market and space to innovate. We're an enteprise agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${GeistSans.variable} ${GeistMono.variable}  dark flex flex-col  min-h-screen bg-white dark:bg-black text-black dark:text-white`}
        >
          <Navbar />

          <main>{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
