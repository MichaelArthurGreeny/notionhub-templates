'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Notion?',
    answer: 'Notion is an all-in-one workspace app that combines notes, databases, wikis, and project management. Our templates are designed to work seamlessly within Notion, helping you get organized faster.',
  },
  {
    question: 'How do I use a template after purchase?',
    answer: 'After purchasing, you\'ll receive a link to the Notion template. Simply click the link, then click "Duplicate" in the top-right corner to add it to your Notion workspace. It\'s that easy!',
  },
  {
    question: 'Do I need a paid Notion account?',
    answer: 'No! All our templates work perfectly with Notion\'s free plan. You don\'t need to pay for Notion to use our templates.',
  },
  {
    question: 'Can I customize the templates?',
    answer: 'Absolutely! Once you duplicate a template to your workspace, you own it and can customize it however you like. Change colors, add pages, modify databases – it\'s all up to you.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, contact us and we\'ll process a full refund.',
  },
  {
    question: 'Do templates include updates?',
    answer: 'Yes! When we update a template, you\'ll receive the updated version for free. We regularly improve our templates based on customer feedback.',
  },
  {
    question: 'Can I use templates for commercial purposes?',
    answer: 'You can use our templates for personal and internal business use. However, you cannot resell, redistribute, or share the templates with others.',
  },
  {
    question: 'How do I get support?',
    answer: 'If you have any questions or issues, simply reply to your purchase confirmation email or contact us through our website. We typically respond within 24 hours.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about our Notion templates.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
