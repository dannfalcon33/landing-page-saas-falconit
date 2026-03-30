import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import About from "./pages/About";
import PlansPage from "./pages/PlansPage";
import ServicesDetail from "./pages/ServicesDetail";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
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
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black font-sans text-gray-200 flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/services" element={<ServicesDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
