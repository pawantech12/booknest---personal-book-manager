import CTASection from "@/components/landing/CTASection";
import DashboardPreview from "@/components/landing/DashboardPreview";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import ReadingStatusSection from "@/components/landing/ReadingStatusSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ReadingStatusSection />
      <HowItWorks />
      <DashboardPreview />
      <CTASection />
    </main>
  );
}
