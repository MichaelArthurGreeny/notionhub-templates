'use client';

import { ArrowRight, Star } from 'lucide-react';
import { stats } from '@/data/templates';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-8">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium">Trusted by 2,500+ creators</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Premium Notion Templates
          <br />
          <span className="gradient-text">for Peak Productivity</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Stop building from scratch. Our professionally designed templates help you
          organize your life, finances, business, and studies in minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#templates"
            className="btn-primary inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800"
          >
            Browse Templates
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-colors"
          >
            How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
