import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingComponent from "@/components/loading";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        <Suspense fallback={<LoadingComponent />}>
          <Header />
          {children}
          <Footer/>
        </Suspense>
      </body>
    </html>
  );
}
