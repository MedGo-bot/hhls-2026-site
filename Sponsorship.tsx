
import React from 'react';

export const Sponsorship: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#0f0f0f] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-summitBlue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-header font-bold mb-8 text-summitGold tracking-[0.2em] uppercase">Sponsorship</h2>
        <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed font-sans font-light tracking-wide max-w-2xl mx-auto">
          Align your brand with the architects of the next economy. 
          Limited partnership availability for the 2026 Mandate.
        </p>
        <div className="inline-block p-[1px] bg-gradient-to-r from-summitBlue/40 via-summitGold to-summitBlue/40 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <a 
            href="mailto:concierge@hiltonheadleadershipsummit.com"
            className="block px-10 py-4 bg-midnightBlack rounded-full text-white font-sans font-semibold tracking-wider hover:text-summitGold transition-colors"
          >
            concierge@hiltonheadleadershipsummit.com
          </a>
        </div>
      </div>
    </section>
  );
};
