export default function Pricing() {
  const eventbriteUrl = 'https://www.eventbrite.com/e/1981895827772?aff=oddtdtcreator';

  return (
    <section id="pricing" className="py-20 px-5 text-center" style={{ background: 'var(--dark)' }}>
      <h2 className="text-4xl md:text-5xl mb-4 font-bold" style={{ color: 'var(--gold)' }}>
        Residency Investment
      </h2>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
        Choose the level of engagement that matches your commitment to transformation
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto items-stretch">
        <div
          className="w-full md:w-80 p-8 rounded-lg flex flex-col justify-between relative"
          style={{ background: 'white', color: 'var(--dark)', border: '1px solid #ddd' }}
        >
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
            FIRST 50 SEATS
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 mt-2">Vanguard Early Bird</h3>
            <div className="text-5xl font-bold my-6">$649.99</div>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Complete 2-Day Residency</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Roadmap Binder Included</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Boardroom Pod Access</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Founding Member Status</span>
              </li>
            </ul>
          </div>

          <a
            href={eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-6 font-bold rounded-md transition-all hover:opacity-90"
            style={{ background: '#1a252f', color: 'white' }}
          >
            SECURE POSITION
          </a>
        </div>

        <div
          className="w-full md:w-80 p-8 rounded-lg flex flex-col justify-between"
          style={{ background: 'white', color: 'var(--dark)', border: '1px solid #ddd' }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Executive Resident</h3>
            <div className="text-5xl font-bold my-6">$1,499.00</div>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Complete 2-Day Residency</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Roadmap Binder Included</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Boardroom Pod Access</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>All Faculty Keynotes</span>
              </li>
            </ul>
          </div>

          <a
            href={eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-6 font-bold rounded-md transition-all hover:opacity-90"
            style={{ background: '#1a252f', color: 'white' }}
          >
            CLAIM YOUR SEAT
          </a>
        </div>

        <div
          className="w-full md:w-80 p-8 rounded-lg flex flex-col justify-between relative transform md:scale-105"
          style={{ background: 'var(--navy)', color: 'white', border: '2px solid var(--gold)' }}
        >
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
            LIMITED TO 100
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 mt-2" style={{ color: 'var(--gold)' }}>
              Architect's Private Council
            </h3>
            <div className="text-5xl font-bold my-6" style={{ color: 'var(--gold)' }}>
              $3,599.00
            </div>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>1-on-1 Strategy Session</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Audited Implementation Plan</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Exclusive Council Dinner</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Priority Boardroom Placement</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>All Executive Resident Perks</span>
              </li>
            </ul>
          </div>

          <a
            href={eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-6 font-bold rounded-md transition-all hover:opacity-90"
            style={{ background: 'var(--gold)', color: 'var(--dark)' }}
          >
            JOIN THE COUNCIL
          </a>
        </div>
      </div>

      <p className="text-xs text-gray-600 mt-12">
        *Pricing includes applicable state sales tax and processing fees.
      </p>
    </section>
  );
}
