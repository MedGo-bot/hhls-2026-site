import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "The Physical Asset",
      content: "You will not leave with 'notes'—you will leave with an audited, 12-month operational blueprint. This binder is the physical manifestation of your 2026 strategy, containing your specific milestones, your 'Direct Accountability' maps, and the financial triggers needed to hit your $100k+ profit pools. It is the only asset you'll need on your desk Monday morning."
    },
    {
      title: "Collaborative Architecture",
      content: "We’ve eliminated 'Networking.' In our Boardroom Pods, we use Collaborative Architecture to dismantle the specific friction points currently stalling your growth. These are closed-door, high-trust sessions where 5-6 peers act as your temporary Board of Directors. We don’t swap business cards; we solve $100k problems in real-time."
    },
    {
      title: "Faculty Council",
      content: "Direct, un-gated access to the 'Amazing 7 Faculty.' These are not keynote speakers who leave after the applause. These are world-class practitioners in AI Integration, High-Stakes Negotiation, and Human Capital. They are in the mansion with you, sitting at the dinner table, and auditing your Roadmap Binder to ensure your 2026 trajectory is mathematically sound."
    }
  ];

  return (
    <section className="py-32 px-6 bg-midnightBlack relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-summitGold/20 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col space-y-24">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="flex items-center justify-center w-full mb-10">
                <div className="h-px flex-grow bg-gradient-to-r from-transparent to-summitGold/20" />
                <h3 className="px-8 text-2xl md:text-3xl font-header font-bold text-white uppercase tracking-[0.4em] whitespace-nowrap">
                  {feature.title}
                </h3>
                <div className="h-px flex-grow bg-gradient-to-l from-transparent to-summitGold/20" />
              </div>
              
              <p className="text-summitGold leading-relaxed text-lg md:text-xl font-sans font-normal max-w-3xl opacity-90">
                {feature.content}
              </p>

              {idx < features.length - 1 && (
                <div className="mt-24 w-1.5 h-1.5 rounded-full bg-summitGold/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
