import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fleeb",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "z-0 font-montserrat"}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
