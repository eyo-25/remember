import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remember",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en" className={openSans.className}>
        <body className="relative flex flex-col items-center">
          <Header />
          <main className="w-full px-6 mx-auto mt-16 grow max-w-7xl">
            {children}
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}