'use client';

import { useState } from 'react';
import { templates, categories } from '@/data/templates';
import TemplateCard from './TemplateCard';

export default function TemplatesSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTemplates = activeCategory === 'all'
    ? templates
    : templates.filter((t) => t.category === activeCategory);

  return (
    <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Browse Our Templates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of professionally designed Notion templates.
            Each template includes detailed documentation and lifetime updates.
          </p>
        </div>

        {/* Category Filter */}
        <div id="categories" className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No templates found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
