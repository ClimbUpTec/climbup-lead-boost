
import { Hero } from "@/components/Hero";
import { SolutionFlow } from "@/components/SolutionFlow";
import { StatisticsSection } from "@/components/StatisticsSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { RemarketingSection } from "@/components/RemarketingSection";
import { CaseStudy } from "@/components/CaseStudy";
import { WhatsAppAdvantages } from "@/components/WhatsAppAdvantages";
import { CompanyInfo } from "@/components/CompanyInfo";
import { LossIndicators } from "@/components/LossIndicators";
import { VideoDemo } from "@/components/VideoDemo";
import { Comparison } from "@/components/Comparison";
import { APIConfiguration } from "@/components/APIConfiguration";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQ } from "@/components/FAQ";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Hero />
      <SolutionFlow />
      <StatisticsSection />
      <ProblemsSection />
      <RemarketingSection />
      <CaseStudy />
      <WhatsAppAdvantages />
      <CompanyInfo />
      <LossIndicators />
      <VideoDemo />
      <Comparison />
      <APIConfiguration />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <FAQ />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
