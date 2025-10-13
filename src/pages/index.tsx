import { Inter } from "next/font/google";
import Head from "next/head";
import FaqSection from "~/components/FaqSection";
import FeatureSection from "~/components/FeatureSection";
import Hero from "~/components/Hero";
import Testimonials from "~/components/marketing/Testimonials";
import StartBuildingNow from "~/components/StartBuildingNow";
import TrustedBy from "~/components/TrustedBy";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div className={`${inter.className} font-sans min-h-screen`}>
      {/* <Navbar /> */}
      <Head>
        <title>
          Rocket.new | Build Web & Mobile Apps 10x Faster Without Code
        </title>
      </Head>
      <Hero />
      <TrustedBy />
      <FeatureSection />
      <Testimonials />
      <FaqSection />
      <StartBuildingNow />
    </div>
  );
}
