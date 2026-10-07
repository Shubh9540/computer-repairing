import React from 'react';
import { ServicesData } from '@/types/templates.types';
import Link from 'next/link';

export const ServicesSection = ({ data, hideButton = false }: { data?: ServicesData, hideButton?: boolean }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#fdfaf6] py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 xl:px-8">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-10">
          {data.subtitle && (
            <div className="inline-block border border-[#0d6efd] rounded-full px-5 py-1.5 mb-4">
              <span className="text-[#031b33] text-[12px] font-bold tracking-[0.1em] uppercase">
                {data.subtitle}
              </span>
            </div>
          )}
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#031b33] mb-4">
            {data.title1 && <span>{data.title1} </span>}
            {data.titleHighlight && <span className="text-[#0d6efd]">{data.titleHighlight}</span>}
          </h2>
          
          {data.description && (
            <p className="text-gray-600 text-[15px] md:text-[16px] max-w-2xl mx-auto">
              {data.description}
            </p>
          )}
        </div>

        {/* Services Grid (6 columns) */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6 ${hideButton ? '' : 'mb-12'}`}>
          {data.services.map((service) => (
            <Link 
              key={service.id} 
              href={service.url}
              className="flex flex-col items-center bg-white border border-gray-100 rounded-xl p-2 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="w-full aspect-[4/3] mb-3 overflow-hidden rounded-md">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-[14px] md:text-[15px] font-bold text-[#031b33] text-center leading-snug group-hover:text-[#0d6efd] transition-colors">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        {data.button && !hideButton && (
          <div className="flex justify-center">
            <Link 
              href={data.button.url}
              className="inline-flex items-center gap-2 bg-[#0d6efd] text-white px-8 py-3 rounded-md font-bold text-[15px] hover:bg-blue-600 transition-colors shadow-lg"
            >
              {data.button.text}
            </Link>
          </div>
        )}
        
      </div>
    </section>
  );
};
