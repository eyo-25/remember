import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import AuthContext from "./context/AuthContext";
import SwrconfigContext from "./context/SwrconfigContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Remember",
    template: "Remember | %s",
  },
  description: "추억을 저장하는 플랫폼: Remember",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="relative flex flex-col items-center bg-neutral-50">
        <AuthContext>
          <Header />
          <main className="flex justify-center w-full min-h-full mt-16 grow">
            <div className="w-full px-6 max-w-8xl">
              <SwrconfigContext>{children}</SwrconfigContext>
            </div>
          </main>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}
