import React from 'react';
import { Navbar } from './components/Navbar';
import { LiveTicker } from './components/LiveTicker';
import { Hero } from './components/Hero';
import { PlatformTrust } from './components/PlatformTrust';
import { HowItWorks } from './components/HowItWorks';
import { InvestmentPlans } from './components/InvestmentPlans';
import { InvestmentCalculator } from './components/InvestmentCalculator';
import { PlatformFeatures } from './components/PlatformFeatures';
import { TechnologyDiagram } from './components/TechnologyDiagram';
import { DashboardPreview } from './components/DashboardPreview';
import { PerformanceSection } from './components/PerformanceSection';
import { ReferralJoinSection } from './components/ReferralJoinSection';
import { FAQSection } from './components/FAQSection';
import { RiskDisclosure } from './components/RiskDisclosure';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col relative selection:bg-blue-600 selection:text-white">
      {/* Top Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Live Market Ticker */}
        <LiveTicker />

        {/* 3. Trust / Platform Introduction */}
        <PlatformTrust />

        {/* 4. How It Works (4 Steps) */}
        <HowItWorks />

        {/* 5. Investment Plans */}
        <InvestmentPlans />

        {/* 6. Interactive Calculator */}
        <InvestmentCalculator />

        {/* 7. Platform Features (Why Explore VyRobot?) */}
        <PlatformFeatures />

        {/* 8. Technology Behind Automated Trading */}
        <TechnologyDiagram />

        {/* 9. Dashboard Preview (Demo Interface) */}
        <DashboardPreview />

        {/* 10. Performance / Trading Analytics */}
        <PerformanceSection />

        {/* 11. Referral / Join Call to Action */}
        <ReferralJoinSection />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. Important Risk Disclosure */}
        <RiskDisclosure />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA & Quick Jump */}
      <FloatingCTA />
    </div>
  );
}
