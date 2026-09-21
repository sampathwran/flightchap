'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const faqs = [
    {
      question: "How do I find the cheapest flights?",
      answer: "We compare prices from hundreds of airlines and travel agencies in real-time. Simply enter your destination and dates in the search box, and we'll show you the cheapest available options. You can also check our 'Flash Deals' section for limited-time offers."
    },
    {
      question: "Are there any hidden fees when booking?",
      answer: "No, FlightChap is completely free to use. The prices you see on our search results are exactly what the airlines or travel agents charge. We don&apos;t add any hidden fees or booking charges."
    },
    {
      question: "Can I change or cancel my flight?",
      answer: "Flight changes and cancellations depend entirely on the airline or travel agency you booked with and the type of ticket you purchased. You will need to contact them directly using the details provided in your booking confirmation email."
    },
    {
      question: "How do Flash Deals work?",
      answer: "Flash Deals are specially curated, highly discounted flight routes that are available for a very limited time. They are often updated daily and represent significant savings over regular fares."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg transition-colors ${openIndex === index ? 'border-blue-500 bg-blue-50/30' : 'border-slate-200 bg-white'}`}
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
