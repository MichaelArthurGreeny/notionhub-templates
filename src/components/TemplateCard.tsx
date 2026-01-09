'use client';

import { ExternalLink, Eye } from 'lucide-react';
import { Template } from '@/data/templates';

interface TemplateCardProps {
  template: Template;
}

const categoryColors = {
  productivity: 'bg-blue-100 text-blue-700',
  finance: 'bg-green-100 text-green-700',
  business: 'bg-purple-100 text-purple-700',
  student: 'bg-orange-100 text-orange-700',
};

const categoryIcons = {
  productivity: '⚡',
  finance: '💰',
  business: '💼',
  student: '📚',
};

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="template-card bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-6xl">{categoryIcons[template.category]}</div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {template.popular && (
            <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full">
              Popular
            </span>
          )}
          {template.new && (
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
          )}
        </div>

        {/* Preview Button */}
        <a
          href={template.notionPreviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-lg hover:bg-white transition-colors"
          title="Preview Template"
        >
          <Eye className="w-4 h-4 text-gray-700" />
        </a>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category Badge */}
        <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${categoryColors[template.category]}`}>
          {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
        </span>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-2">{template.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Features Preview */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {template.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {feature.length > 25 ? feature.substring(0, 25) + '...' : feature}
            </span>
          ))}
          {template.features.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
              +{template.features.length - 3} more
            </span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">${template.price}</span>
            {template.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                ${template.originalPrice}
              </span>
            )}
          </div>
          <a
            href={template.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-black text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors"
          >
            Get Template
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
