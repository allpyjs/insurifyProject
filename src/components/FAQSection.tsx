import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Insurify?',
      answer: 'Insurify is a digital insurance agent that provides real-time quotes from 120+ insurers including GEICO, Allstate, and Progressive, enabling shoppers to compare policies and save up to $1,100†.',
    },
    {
      question: 'How does Insurify work?',
      answer: 'With Insurify, you fill out a simple form, and our AI-powered comparison tool will pull your personalized quotes from our insurer partners. After you compare rates and choose a quote, you can buy your policy online or through one of our licensed insurance agents.',
    },
    {
      question: 'Is my personal information protected and secure with Insurify?',
      answer: "Our strict no-spam policy ensures that your personal details are always secure and private. We'll never sell your data, so you won't get spam emails or unwanted phone calls from shopping with Insurify.",
    },
    {
      question: 'Is Insurify an insurance carrier?',
      answer: "We're not an insurance carrier. But we do partner with 120+ insurers. Insurify is a digital insurance agent. We provide impartial information and the most accurate quotes so you can pick the insurance company that best fits your needs.",
    },
    {
      question: 'Is Insurify a licensed insurance agency?',
      answer: 'We are! Insurify is a licensed agency in all 50 states. All our helpful agents are licensed too, so they can provide expert policy advice to customers across the U.S.',
    },
    {
      question: 'How does Insurify make money?',
      answer: "Like other comparison platforms, we earn a commission if you buy a policy through a quote we showed you on our website. We may also make money if you click on an ad on our website. But we don't make money by selling your data.",
    },
    {
      question: "What's the highest-rated insurance-comparison platform?",
      answer: 'Insurify has a higher rating, from more reviews, than any other insurance-comparison site. Insurify has the highest rating on both Trustpilot, the most popular independent review platform, and the Better Business Bureau.',
    },
    {
      question: 'What info do you need to compare car insurance quotes?',
      answer: 'To show you the most accurate auto insurance quotes, Insurify asks for the following information: Address (ZIP codes as a rating factor), Type of car (make, model, and year), Credit score, and Level of education.',
    },
    {
      question: 'Why is it important to compare car insurance?',
      answer: 'Insurance companies base your rates on some common factors, like your age, gender, location, and driving history. But how they weigh those factors can vary a lot. Two separate insurers may serve up very different quotes for the same driver.',
    },
    {
      question: 'What affects car insurance rates?',
      answer: 'Nationwide, the average cost of car insurance is $177 per month for full coverage and $100 for liability-only insurance, according to Insurify data. But your costs may be more or less than average, based on factors like your driving record, age and gender, vehicle make and model, credit history, where you live, and deductible amount.',
    },
    {
      question: 'What type of car insurance policy do I need?',
      answer: "The type of car insurance coverage you need depends on your lender and state's requirements and the coverage limits you want. The two main types of auto policies are: Liability coverage and Full coverage.",
    },
    {
      question: "What's the best way to shop for car insurance?",
      answer: "The fastest, easiest way to start shopping for car insurance is to use an online quote-comparison tool like Insurify. You'll be able to view quotes from multiple companies without the hassle of visiting each insurer's website to get a quote.",
    },
    {
      question: 'What is the best or cheapest car insurance company?',
      answer: 'The best, cheapest, and most widely available car insurance companies are State Farm, Allstate, and USAA, according to Insurify data. State Farm has an Insurify Quality (IQ) Score of 9.3 out of 10, with average national rates of $109 per month for full-coverage policies and $56 for liability-only coverage.',
    },
    {
      question: 'Is car insurance cheaper for homeowners?',
      answer: 'Homeowners may pay less for car insurance than other drivers for multiple reasons, including: Bundling discounts, Multi-vehicle discounts, and Credit history (homeowners generally have better credit than renters).',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

