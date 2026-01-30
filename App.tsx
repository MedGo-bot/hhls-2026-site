import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Sponsorship } from './components/Sponsorship';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-summitGold/30 selection:text-summitGold">
      <Hero />
      <Features />
      <Pricing />
      <Sponsorship />
      <Footer />
    </div>
  );
}

export default App;
