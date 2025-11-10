export default function ContentSections() {
  const serviceOptions = [
    {
      title: 'Do it yourself',
      description: 'Compare quotes, choose your policy, and get same-day coverage in a few clicks.',
      buttonText: 'Compare quotes online',
      buttonLink: '/sqaf/',
    },
    {
      title: 'Live agent assistance',
      description: 'Review your quotes online, then get tailored advice from a licensed insurance agent.',
      buttonText: 'See my quotes',
      buttonLink: '/sqaf/',
    },
    {
      title: 'Full service',
      description: 'Send us your current policy, and our agents will find a better fit for you.',
      buttonText: 'Connect with an expert',
      buttonLink: '/sqaf/',
    },
  ];

  const stats = [
    {
      number: 'No. 1',
      title: 'insurance comparison platform',
      description: 'According to Trustpilot, Shopper Approved, and the BBB',
    },
    {
      number: '145M+',
      title: 'quotes offered',
      description: 'Our customers have compared 130 million+ car insurance quotes to unlock their best rates',
    },
    {
      number: '$44M',
      title: 'in savings',
      description: 'Insurify shoppers lowered their annual premiums by up to $1,100 for a combined $44 million in savings',
    },
    {
      number: '70,000+',
      title: 'verified user reviews',
      description: 'We collect hundreds of reviews weekly from verified drivers to find the best insurers for you',
    },
    {
      number: 'No. 1',
      title: 'most customer reviews collected',
      description: 'When compared to competing insurance-comparison sites',
    },
    {
      number: '120+',
      title: 'insurance companies reviewed',
      description: 'Our insurance experts dig in to give you the best insight into top insurers',
    },
  ];

  const articles = [
    {
      title: 'Compare Car Insurance Rates All-in-One Place',
      description: 'Get real-time car insurance quotes with no risk of spam and no fees.',
      date: 'November 5, 2025',
      href: '/car-insurance/',
    },
    {
      title: '7 of the Best Car Insurance Companies',
      description: 'We collected 55,000 reviews of more than 100 insurers to determine the best car insurance companies.',
      date: 'November 5, 2025',
      href: '/car-insurance/best-car-insurance/',
    },
    {
      title: 'Top 10 Cheap Car Insurance Quotes',
      description: 'COUNTRY Financial, Auto-Owners, and USAA offer the cheapest car insurance rates as of August 2025.',
      date: 'November 5, 2025',
      href: '/car-insurance/cheap-car-insurance/',
    },
    {
      title: 'Compare Home Insurance Quotes',
      description: 'Learn how to compare home insurance quotes side by side to find the cheapest rate for you and ensure your property and belongings are protected.',
      date: 'October 16, 2025',
      href: '/homeowners-insurance/',
    },
    {
      title: 'Car Insurance Calculator: Estimate Your Monthly Costs',
      description: "Get accurate estimates of your car insurance costs with Insurify's car insurance calculator.",
      date: 'November 1, 2025',
      href: '/car-insurance/calculator/',
    },
    {
      title: 'Best Companies for Home and Auto Insurance Bundles',
      description: 'State Farm, Allstate, and Nationwide are the best insurers for home and auto insurance bundling.',
      date: 'September 8, 2025',
      href: '/car-insurance/coverage/home-and-auto/',
    },
  ];

  return (
    <>
      {/* Do it yourself or with expert help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Do it yourself or with expert help
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you prefer to buy online or want expert guidance, Insurify makes it easy to find your perfect policy. No spam. No fees. Just better insurance and bigger savings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h4>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <a
                  href={option.buttonLink}
                  className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                  {option.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real stories, real savings */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real stories, real savings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See what our customers said (and saved) after comparing quotes with Insurify.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-50 rounded-lg p-8 w-full max-w-4xl">
              <p className="text-center text-gray-600 mb-4">Trustpilot Reviews Widget</p>
              <div className="flex justify-center items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">4.8/5 on Trustpilot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redefining insurance shopping */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Redefining insurance shopping for more than 10 years
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For more than a decade, Insurify has lived up to its mission: Make it quick and easy to compare quotes and find the best price on auto, home, renters, and pet insurance. Our extensive database of user reviews and proprietary, in-depth scoring process help you research the insurer that makes the most sense for you and your family.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {stats.slice(0, 3).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h5>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.slice(3).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h5>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
          {/* Featured in section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6">Insurify has been featured in</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              {['CBS', 'Business Insider', 'CNBC', 'Entrepreneur', 'Investopedia', 'Fortune', 'NPR', 'The New York Times', 'The Washington Post', 'The Wall Street Journal', 'Yahoo'].map((name) => (
                <div key={name} className="text-sm font-semibold text-gray-700">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* On the spot assistance */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💼</div>
                  <p className="text-gray-600">Expert Advisor Image</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                On the spot assistance from expert advisors
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Support doesn't end after you find your best rate. We're here to help whenever you need advice, from navigating claims to adjusting coverage after big life events.
              </p>
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-semibold text-gray-900 mb-2">Knowledgeable agents</h5>
                  <p className="text-gray-600">Let our pros decode the policy jargon so you're always confident you have the financial protection you need.</p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold text-gray-900 mb-2">Expert advice</h5>
                  <p className="text-gray-600">Our experienced insurance agents provide impartial policy advice and personalized recommendations.</p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold text-gray-900 mb-2">Real-time support</h5>
                  <p className="text-gray-600">Have questions? We're here to help. Support from a licensed insurance agent is just a call or email away.</p>
                </div>
              </div>
              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <div className="font-semibold text-gray-900 mb-2">Ready to talk? Our agents are here to help.</div>
                <ul className="space-y-1 text-gray-600 text-sm mb-4">
                  <li>(888) 866-0849</li>
                  <li>Monday – Friday: 8:00AM – 11:00PM ET</li>
                  <li>Saturday: 10:00AM – 7:00PM ET</li>
                </ul>
                <a
                  href="tel:8888660849"
                  className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance knowledge without the jargon */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insurance knowledge without the jargon
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Need a crash course in insurance basics? Our experts compiled the most interesting insights, tips, and news.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.href}
                className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 h-48 flex items-center justify-center">
                  <div className="text-4xl">📄</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                  <div className="text-sm text-gray-500">{article.date}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/car-insurance/knowledge/"
              className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              View all
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

