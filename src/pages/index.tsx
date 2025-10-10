import { Geist, Geist_Mono, Inter } from "next/font/google";
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
      <div className="py-6">
        <Navbar />
      </div>
    </div>
  );
}
