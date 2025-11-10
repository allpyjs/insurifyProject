import { useState } from 'react';

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const footerSections = [
    {
      title: 'Compare',
      links: [
        { label: 'Compare Car Insurance', href: '/car-insurance/' },
        { label: 'Best Comparison Sites', href: '/car-insurance/the-best-and-worst-sites-to-compare-car-insurance-quotes/' },
        { label: 'Best Car Insurance', href: '/car-insurance/best-car-insurance/' },
        { label: 'Cheap Car Insurance', href: '/car-insurance/cheap-car-insurance/' },
        { label: 'No Deposit Car insurance', href: '/car-insurance/no-deposit/' },
      ]
    },
    {
      title: 'Trending Articles',
      links: [
        { label: 'Car Insurance with No License', href: '/car-insurance/driver/driving-record/suspended-license/' },
        { label: 'Car Insurance for Bad Records', href: '/car-insurance/bad-driving-record/' },
        { label: 'Hugo Car Insurance Review', href: '/car-insurance/companies/hugo/' },
        { label: "Reddit's Best Car Insurance", href: '/car-insurance/reddit-car-insurance/' },
        { label: 'Pay As You Go Car Insurance', href: '/car-insurance/coverage/pay-as-you-go/' },
      ]
    },
    {
      title: 'Learn More',
      links: [
        { label: 'Compare Home Insurance Quotes', href: '/homeowners-insurance/' },
        { label: 'Compare Pet Insurance Quotes', href: '/pet-insurance/' },
        { label: 'Compare Health Insurance Quotes', href: '/health-insurance/' },
        { label: 'Compare Renters Insurance Quotes', href: '/renters-insurance/' },
        { label: 'Compare Life Insurance Quotes', href: '/life-insurance/the-best-and-worst-sites-to-compare-life-insurance-quotes/' },
        { label: 'Compare Travel Insurance Quotes', href: '/travel-insurance/' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/company/about/' },
        { label: 'Contact Us', href: '/company/contact/' },
        { label: 'Licenses', href: '/company/licensing-info/' },
        { label: 'Privacy Policy', href: '/company/policy/' },
        { label: 'Do Not Sell My Data', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeDDJM4i6U4dZdi6LGlK8ye7Znyg7Xc8TZXU8vi7amqTAJzCA/viewform?usp=sf_link' },
        { label: 'Terms and Services', href: '/company/terms/' },
      ]
    }
  ];

  const popularLocations = [
    { label: 'Cheap Car Insurance Florida', href: '/car-insurance/florida/' },
    { label: 'Cheap Car Insurance Texas', href: '/car-insurance/texas/' },
    { label: 'Cheap Car Insurance Georgia', href: '/car-insurance/georgia/' },
    { label: 'Cheap Car Insurance California', href: '/car-insurance/california/' },
    { label: 'Cheap Car Insurance Ohio', href: '/car-insurance/ohio/' },
    { label: 'Cheap Car Insurance Houston', href: '/car-insurance/texas/houston/' },
    { label: 'Cheap Car Insurance Dallas', href: '/car-insurance/texas/dallas/' },
    { label: 'Cheap Car Insurance Long Island City', href: '/car-insurance/new-york/long-island-city/' },
    { label: 'Cheap Car Insurance San Antonio', href: '/car-insurance/texas/san-antonio/' },
    { label: 'Cheap Car Insurance Wichita', href: '/car-insurance/kansas/wichita/' },
    { label: 'Cheap Car Insurance Indiana', href: '/car-insurance/indiana/' },
    { label: 'Cheap Car Insurance Oklahoma', href: '/car-insurance/oklahoma/' },
    { label: 'Cheap Car Insurance Pennsylvania', href: '/car-insurance/pennsylvania/' },
    { label: 'Cheap Car Insurance Tennessee', href: '/car-insurance/tennessee/' },
    { label: 'Cheap Car Insurance Kentucky', href: '/car-insurance/kentucky/' },
    { label: 'Cheap Car Insurance Illinois', href: '/car-insurance/illinois/' },
    { label: 'Cheap Car Insurance North Carolina', href: '/car-insurance/north-carolina/' },
    { label: 'Cheap Car Insurance Alabama', href: '/car-insurance/alabama/' },
    { label: 'Cheap Car Insurance Nevada', href: '/car-insurance/nevada/' },
    { label: 'Cheap Car Insurance Michigan', href: '/car-insurance/michigan/' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title} className="lg:block">
              {/* Mobile: Collapsible */}
              <button
                onClick={() => toggleSection(section.title)}
                className="lg:hidden w-full flex justify-between items-center text-white font-semibold mb-4"
              >
                <span>{section.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedSections[section.title] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Desktop: Always visible */}
              <h4 className="hidden lg:block text-white font-semibold mb-4">{section.title}</h4>
              
              <ul className={`space-y-2 text-sm ${expandedSections[section.title] ? 'block' : 'hidden lg:block'}`}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular Locations */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('locations')}
            className="w-full md:w-auto flex justify-between items-center text-white font-semibold mb-4"
          >
            <span>Popular locations</span>
            <svg
              className={`w-5 h-5 transition-transform md:hidden ${expandedSections['locations'] ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm ${expandedSections['locations'] ? 'grid' : 'hidden md:grid'}`}>
            {popularLocations.map((location) => (
              <a
                key={location.label}
                href={location.href}
                className="hover:text-white transition-colors"
              >
                {location.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <img
                src="https://insurifycdn.com/ui/logo/InsurifyNew.svg"
                alt="Insurify"
                className="h-10 mb-4"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-white text-2xl font-bold mb-4">Insurify</div>
              <p className="text-sm text-gray-400">
                Insurify Insurance Agency is a{' '}
                <a href="/company/licensing-info/" className="text-blue-400 hover:text-blue-300">
                  licensed
                </a>{' '}
                insurance agency in 50 states and DC.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="md:col-span-1 flex justify-center md:justify-start gap-4">
              <a
                href="https://facebook.com/insurify/"
                aria-label="facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com/insurify/"
                aria-label="x"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/insurifyco/"
                aria-label="instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/insurify/"
                aria-label="linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* App Store Links */}
            <div className="md:col-span-1 flex justify-center md:justify-end gap-2">
              <a
                href="https://apps.apple.com/us/app/insurify-compare-car-insurance/id1608391891"
                aria-label="apple store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="w-32 h-10 bg-white rounded flex items-center justify-center text-xs font-semibold text-gray-900">
                  App Store
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.insurify.app"
                aria-label="google store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="w-32 h-10 bg-white rounded flex items-center justify-center text-xs font-semibold text-gray-900">
                  Google Play
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            <sup>†</sup>Average potential savings based on initial quotes received by 151,494 customers seeking insurance through Insurify. Actual savings may vary depending on state of residence, individual circumstances, coverage selections, and insurance provider. Savings and lowest rates do not reflect typical results.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Insurify, Inc. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="/company/terms/" className="hover:text-white">Terms of Service</a>
            <span>|</span>
            <a href="/company/policy/" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Your Privacy Choices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
