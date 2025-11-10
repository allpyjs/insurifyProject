import { useState } from 'react';

export default function HeroSection() {
  const [selectedType, setSelectedType] = useState('AUTO');
  const [zipCode, setZipCode] = useState('');

  const insuranceTypes = [
    { id: 'AUTO', label: 'Auto', icon: '🚗' },
    { id: 'BUNDLE', label: 'Bundle', icon: '📦' },
    { id: 'HOME', label: 'Home', icon: '🏠' },
    { id: 'RENTERS', label: 'Renters', icon: '🏢' },
    { id: 'PET', label: 'Pet', icon: '🐾' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Starting quote flow:', { type: selectedType, zipCode });
    // Handle form submission
  };

  return (
    <header className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Compare Car Insurance Quotes in Real Time and Save
            </h1>
            
            {/* Insurance Type Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {insuranceTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    selectedType === type.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>

            {/* Zip Code Form */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="tel"
                  maxLength={5}
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter your ZIP code"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Compare quotes
                </button>
              </div>
            </form>

            {/* Trust Rating */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="font-semibold">Excellent</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>4.8/5 on Trustpilot</span>
            </div>

            {/* Been here before link */}
            <div className="mt-4 text-sm">
              <span className="text-gray-600">Been here before? </span>
              <a href="/save/get-quote-login-form/" className="text-blue-600 hover:underline">
                Get your quotes back.
              </a>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚗</div>
                <p className="text-gray-600">Insurance Quote Image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Company Logos */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center mb-4">Compare quotes from top providers:</p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <div className="text-sm font-semibold text-gray-700">State Farm</div>
            <div className="text-sm font-semibold text-gray-700">Progressive</div>
            <div className="text-sm font-semibold text-gray-700">Allstate</div>
            <div className="text-sm font-semibold text-gray-700">Liberty Mutual</div>
            <div className="text-sm font-semibold text-gray-700">USAA</div>
            <div className="text-sm font-semibold text-gray-700">The General</div>
            <div className="text-sm font-semibold text-gray-700">120+ more</div>
          </div>
        </div>
      </div>
    </header>
  );
}
