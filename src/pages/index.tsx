import { Geist, Geist_Mono, Inter } from "next/font/google";
import Image from "next/image";
import FaqSection from "~/components/FaqSection";
import FeatureSection from "~/components/FeatureSection";
import Hero from "~/components/Hero";
import Testimonials from "~/components/marketing/Testimonials";
import Navbar from "~/components/Navbar";
import StartBuildingNow from "~/components/StartBuildingNow";
import TrustedBy from "~/components/TrustedBy";

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
      {/* <Navbar /> */}
      <Hero />

      <TrustedBy />
      <FeatureSection />
      <Testimonials />
      <FaqSection />
      <StartBuildingNow />
    </div>
  );
}
