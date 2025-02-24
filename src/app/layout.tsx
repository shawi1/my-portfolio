import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import Source Code Pro font
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} font-mono bg-[#131313] text-white flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-6 py-12">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
