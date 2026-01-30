
import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  badge?: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  variant: 'vanguard' | 'executive' | 'council';
}

const CheckIcon = ({ color }: { color: string }) => (
  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, price, badge, features, buttonText, buttonLink, variant 
}) => {
  const isCouncil = variant === 'council';
  
  return (
    <div className={`relative flex flex-col p-10 h-full border transition-all duration-700 hover:translate-y-[-12px] group ${
      isCouncil 
        ? 'bg-midnightBlack border-summitGold border-[3px] shadow-[0_40px_80px_rgba(217,177,97,0.15)]' 
        : 'bg-white border-transparent text-midnightBlack shadow-2xl'
    }`}>
      {badge && (
        <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-midnightBlack text-white text-[10px] font-header font-bold uppercase tracking-[0.5em] whitespace-nowrap border border-summitGold/50 z-20 shadow-xl">
          {badge}
        </span>
      )}

      <header className="mb-10 pt-4">
        <h3 className={`text-xl md:text-2xl font-header font-bold mb-6 uppercase tracking-[0.2em] leading-tight ${isCouncil ? 'text-summitGold' : 'text-midnightBlack'}`}>
          {title}
        </h3>
        <div className={`text-5xl font-sans font-black tracking-tighter ${isCouncil ? 'text-summitGold' : 'text-midnightBlack'}`}>
          {price}
        </div>
      </header>

      <ul className="flex-grow space-y-5 mb-12">
        {features.map((feature, i) => (
          <li key={i} className={`flex items-start text-sm md:text-base font-sans font-medium leading-relaxed ${isCouncil ? 'text-white/90' : 'text-midnightBlack/80'}`}>
            <CheckIcon color={isCouncil ? '#d9b161' : '#0a0a0a'} />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-5 text-center font-header font-bold uppercase tracking-[0.4em] text-[11px] transition-all duration-500 transform active:scale-95 ${
          isCouncil 
            ? 'bg-summitGold text-midnightBlack hover:bg-white shadow-[0_0_20px_rgba(217,177,97,0.3)]' 
            : 'bg-midnightBlack text-white hover:bg-summitGold hover:text-midnightBlack'
        }`}
      >
        {buttonText}
      </a>
    </div>
  );
};

export const Pricing: React.FC = () => {
  const eventLink = "https://www.eventbrite.com/e/1981895827772?aff=oddtdtcreator";

  return (
    <section id="pricing" className="py-32 px-6 bg-midnightBlack">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-header font-bold text-center mb-28 text-white uppercase tracking-tight">
          Residency Investment
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-stretch">
          <PricingCard
            title="Vanguard Early Bird"
            price="$649.99"
            badge="the first 50 seats"
            variant="vanguard"
            buttonText="CLAIM VANGUARD SEAT"
            buttonLink={eventLink}
            features={[
              "Complete 2 day Residency",
              "Roadmap Binder included",
              "Boardroom Pod Access",
              "Shutter lift to the event",
              "Meals provided"
            ]}
          />

          <PricingCard
            title="Executive Resident"
            price="$1499.99"
            variant="executive"
            buttonText="Secure Position"
            buttonLink={eventLink}
            features={[
              "Complete 2 day Residency",
              "Roadmap Binder",
              "Boardroom Poad Access",
              "Shuttle pick",
              "Meals are provided"
            ]}
          />

          <PricingCard
            title="Architect’s Private Council"
            price="$3,599.00"
            variant="council"
            buttonText="Join the Council"
            buttonLink={eventLink}
            features={[
              "Complete 2-day Residency",
              "Roadmap Binder",
              "Boardroom Poad Access",
              "Council Driveway or Shuttle pick",
              "1 on 1 Strategy Session",
              "Audited Implementation Plan",
              "Exclusive Council Dinner",
              "Priority Boardroom Placement",
              "Meals are provided",
              "All executive Resident Perks"
            ]}
          />
        </div>
      </div>
    </section>
  );
};
