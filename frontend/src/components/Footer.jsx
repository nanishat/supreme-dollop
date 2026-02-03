export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* About Section - left */}
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-3">About</h3>
            <p className="text-sm leading-relaxed">
              TaroWorks Troubleshooting Form - A comprehensive platform for reporting and tracking issues across the Skills Development Programme, Brac.
            </p>
          </div>

          {/* Contact Section - right on desktop, left on mobile */}
          <div className="flex-1 text-left md:text-right">
            <h3 className="text-white font-bold text-lg mb-3">Contact</h3>
            <p className="text-sm">
              <span className="block mb-2">Email: <a href="mailto:support@brac.net" className="hover:text-primary-400 transition">support@brac.net</a></span>
              <span className="block">Phone: +880 (1000) 000-000</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div>
          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
            <p>&copy; {currentYear} Product & Data Team. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
