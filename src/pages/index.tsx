import { Geist, Geist_Mono, Inter } from "next/font/google";
import Image from "next/image";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${inter.className} font-sans min-h-screen`}>
      <div className="">
        <Navbar />
      </div>
      <Hero />
    </div>
  );
}
