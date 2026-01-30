
import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center bg-midnightBlack overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(76,170,201,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* 1. Summit Logo */}
      <div className="mb-10 z-10 transition-all duration-1000 transform hover:scale-105">
        {!logoError ? (
          <img 
            src="Summit-logo.jpg" 
            alt="Hilton Head Leadership Summit 2026 Logo" 
            className="max-w-[280px] md:max-w-[400px] drop-shadow-[0_0_30px_rgba(217,177,97,0.3)]"
            onError={() => setLogoError(true)}
          />
        ) : (
          /* Visual Fallback mirroring the provided logo style */
          <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 rounded-full border-[6px] border-summitGold overflow-hidden bg-white/5 backdrop-blur-md shadow-[0_0_50px_rgba(217,177,97,0.2)]">
            <div className="absolute inset-2 border-2 border-dashed border-summitGold/30 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="z-10 text-center px-4">
              <div className="text-summitGold font-header text-xs md:text-sm font-bold leading-tight tracking-[0.3em]">
                HILTON HEAD<br/>
                <span className="text-white text-[10px] tracking-[0.5em] block my-2 opacity-80 uppercase">Leadership</span>
                <span className="text-summitBlue text-xl tracking-[0.2em] block">2026</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="z-10 max-w-6xl mx-auto px-4">
        {/* 2. Main Title - Using Syncopate for wide architectural look */}
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-header font-bold mb-14 tracking-tight text-white uppercase leading-[0.9] select-none drop-shadow-2xl">
          The 2026 <br className="hidden md:block" /> Mandate
        </h1>

        {/* 3. Description Paragraph - Using Cormorant Garamond for elite feel */}
        <p className="max-w-4xl mx-auto text-2xl md:text-4xl font-serif italic text-summitBlue leading-relaxed mb-16 tracking-tight">
          "A high-stakes residency for leaders who refuse to let technology out Pace their culture. 
          Master AI integration without sacrificing human excellence."
        </p>

        {/* 4. CTA Button */}
        <button
          onClick={scrollToPricing}
          className="px-16 py-7 bg-summitGold text-midnightBlack font-header font-bold text-sm md:text-base uppercase tracking-[0.5em] hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(217,177,97,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transform hover:scale-105 active:scale-95"
        >
          Join the Residency
        </button>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce flex flex-col items-center opacity-30">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
