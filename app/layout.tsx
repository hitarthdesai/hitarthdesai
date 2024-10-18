import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hitarth Desai",
  description: "Portfolio of Hitarth Desai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} flex h-dvh flex-col pb-4`}>
        <SiteHeader />
        <div className="grow">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
