import { Geist, Geist_Mono, Inter } from "next/font/google";
import Image from "next/image";
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
      <div className="">
        <Image
          placeholder="blur"
          blurDataURL="/assets/hero-placeholder.png"
          src="/assets/hero.webp"
          alt="Hero"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full max-h-full object-cover object-bottom"
          priority
        />
      </div>
      {/* <Hero /> */}
    </div>
  );
}
