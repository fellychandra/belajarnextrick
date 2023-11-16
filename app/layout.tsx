import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ReactQueryWrapper from "@/components/reactquery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick And Morty Fan Site",
  description:
    "Rick And Morty Fan Site. This is a fan site for Rick And Morty. It is built with Next.js and tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
}
