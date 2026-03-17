import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import BannerCTA from './components/BannerCTA';
import ProcessTimeline from './components/ProcessTimeline';
import PricingPlans from './components/PricingPlans';
import ROISection from './components/ROISection';
import ComparisonTable from './components/ComparisonTable';
import PreventativeMaintenance from './components/PreventativeMaintenance';
import ConsequencesSection from './components/ConsequencesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-brand-dark bg-white overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <BannerCTA />
      <ProcessTimeline />
      <PricingPlans />
      <ROISection />
      <ComparisonTable />
      <PreventativeMaintenance />
      <ConsequencesSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
