// src/App.jsx
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProofSection from "./components/ProofSection";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import SelectedWork from "./components/SelectedWork";
import Experience from "./components/Experience";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <ProofSection />
        <Capabilities />
        {/* <SelectedWork /> */}
        <CaseStudies />
        <About />

        {/* <Experience /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
