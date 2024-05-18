import type { Metadata } from "next";
import { AuthProvider } from "@/components/context/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import "../globals.css";

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
        <AuthProvider>
          <Topbar />
          {children}
          <Footer />
        </AuthProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
