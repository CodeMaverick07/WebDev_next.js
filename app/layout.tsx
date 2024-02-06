import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from "@/context/ThemeProvider";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "DevFlow",
  icons: {
    icon: "./assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink:
                "primary-text-gradient hover:primary-text-gradient",
            },
          }}
        >
          <ThemeProvider>
            <NextTopLoader />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
