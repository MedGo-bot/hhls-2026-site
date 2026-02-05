export default function Footer() {
  return (
    <footer className="py-16 px-5 text-center border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-2 text-gray-300">
          Questions? Contact the Concierge:
        </p>
        <a
          href="mailto:concierge@hiltonheadleadershipsummit.com"
          className="text-xl font-bold hover:opacity-80 transition-opacity"
          style={{ color: 'var(--gold)' }}
        >
          concierge@hiltonheadleadershipsummit.com
        </a>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Terms and Conditions</a>
          </p>
          <p className="text-sm text-gray-600 mt-4">
            © 2026 Hilton Head Leadership Summit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
