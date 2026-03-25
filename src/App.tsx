import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { ProblemSolution } from "./components/ProblemSolution";
import { ScopeOfService } from "./components/ScopeOfService";
import { ProcessSection } from "./components/ProcessSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { PlansSection } from "./components/PlansSection";
import { UseCasesSection } from "./components/UseCasesSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#05070A] font-sans text-gray-200">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <ProblemSolution />
        <ScopeOfService />
        <ProcessSection />
        <ComparisonSection />
        <PlansSection />
        <UseCasesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
