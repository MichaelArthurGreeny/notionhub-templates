'use client';

import { CreditCard, Download, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Choose Your Template',
    description: 'Browse our collection and find the perfect template for your needs.',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Complete Purchase',
    description: 'Secure checkout via Gumroad. Pay once, own forever.',
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Duplicate to Notion',
    description: 'Get instant access and duplicate the template to your Notion workspace.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with your new template in just 3 simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 pt-10 shadow-sm border border-gray-100">
                {/* Icon */}
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
