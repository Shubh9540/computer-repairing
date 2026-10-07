"use client";
import React, { useState } from 'react';
import { FaqPageData } from '@/types/templates.types';
import { FaCog, FaPlus, FaMinus, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const FaqPageSection = ({ data }: { data?: FaqPageData }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  if (!data) return null;

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full py-16 bg-[#fdfdfd]">
      <div className="max-w-[1250px] mx-auto px-4 lg:px-8">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-16">
          {data.subtitle && (
            <div className="inline-flex items-center gap-2 bg-[#e6f0ff] text-[#007bff] px-4 py-1.5 rounded-full text-[13px] font-bold mb-4">
              <FaCog className="text-[14px]" />
              <span>{data.subtitle}</span>
            </div>
          )}
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#051838] mb-4 tracking-tight">
            {data.title1 && <span>{data.title1} </span>}
            {data.title2 && <span className="text-[#007bff]">{data.title2}</span>}
          </h2>
          
          {data.description && (
            <p className="text-[#4a5568] text-[16px] md:text-[18px] max-w-3xl mx-auto">
              {data.description}
            </p>
          )}
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col gap-12">
          
          {/* Top Row: First Category (left) + Support Box (right) */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-start">
            
            {/* First Category */}
            {data.categories && data.categories.length > 0 && (
              <div className="w-full lg:w-[55%] flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#007bff] rounded-sm"></div>
                  <h3 className="text-2xl font-extrabold text-[#051838]">
                    {data.categories[0].title1} <span className="text-[#007bff]">{data.categories[0].title2}</span>
                  </h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  {data.categories[0].faqs.map((faq) => (
                    <div key={faq.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                      <button 
                        onClick={() => toggleItem(faq.id)}
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                      >
                        <span className="font-bold text-[#051838] text-[16px] pr-4">{faq.question}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openItems[faq.id] ? 'bg-[#007bff] text-white' : 'bg-[#e6f0ff] text-[#007bff]'}`}>
                          {openItems[faq.id] ? <FaMinus className="text-[12px]" /> : <FaPlus className="text-[12px]" />}
                        </div>
                      </button>
                      {openItems[faq.id] && (
                        <div className="p-5 pt-0 text-[#4a5568] text-[15px] leading-relaxed border-t border-gray-50 mt-2">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Support Box */}
            {data.supportBox && (
              <div className="w-full lg:w-[45%] bg-[#f4f8ff] rounded-[24px] p-6 lg:p-8 flex flex-col sm:flex-row items-center relative shadow-sm">
                
                {/* Left Side: Text Content */}
                <div className="relative z-10 w-full sm:w-[55%] pr-0 sm:pr-4 mb-6 sm:mb-0">
                  <h3 className="text-2xl font-extrabold text-[#051838] mb-3">{data.supportBox.title}</h3>
                  <p className="text-[#4a5568] text-[13px] md:text-[14px] leading-relaxed mb-6">
                    {data.supportBox.description}
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007bff] flex items-center justify-center text-white shrink-0">
                        <FaPhoneAlt className="text-[12px]" />
                      </div>
                      <span className="text-[#4a5568] font-medium text-[13px]">{data.supportBox.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007bff] flex items-center justify-center text-white shrink-0">
                        <FaEnvelope className="text-[12px]" />
                      </div>
                      <span className="text-[#4a5568] font-medium text-[13px]">{data.supportBox.email}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007bff] flex items-center justify-center text-white shrink-0 mt-1">
                        <FaMapMarkerAlt className="text-[12px]" />
                      </div>
                      <span className="text-[#4a5568] font-medium text-[13px] leading-snug">{data.supportBox.address}</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Side: Image */}
                {data.supportBox.image && (
                  <div className="relative z-10 w-full sm:w-[45%] flex justify-end">
                     <div className="relative w-full rounded-[16px]">
                        {/* Blue background shape */}
                        <div className="absolute top-[-10px] right-[-10px] w-full h-full bg-[#cde2ff] rounded-[16px] z-0"></div>
                        
                        {/* Decorative Top Right Element */}
                        <div className="absolute -top-6 -right-4 w-12 h-12 z-0">
                          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 10 L15 20 M30 5 L25 15 M45 20 L35 25" stroke="#007bff" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                        </div>
                        
                        <img src={data.supportBox.image} alt="Support" className="relative z-10 w-full h-auto rounded-[16px] object-cover shadow-sm" style={{ aspectRatio: '3/4' }} />
                     </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Remaining Categories Grid */}
          {data.categories && data.categories.length > 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-4">
              {data.categories.slice(1).map((category) => (
                <div key={category.id} className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-[#007bff] rounded-sm"></div>
                    <h3 className="text-2xl font-extrabold text-[#051838]">
                      {category.title1} <span className="text-[#007bff]">{category.title2}</span>
                    </h3>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {category.faqs.map((faq) => (
                      <div key={faq.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <button 
                          onClick={() => toggleItem(faq.id)}
                          className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                        >
                          <span className="font-bold text-[#051838] text-[16px] pr-4">{faq.question}</span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openItems[faq.id] ? 'bg-[#007bff] text-white' : 'bg-[#e6f0ff] text-[#007bff]'}`}>
                            {openItems[faq.id] ? <FaMinus className="text-[12px]" /> : <FaPlus className="text-[12px]" />}
                          </div>
                        </button>
                        {openItems[faq.id] && (
                          <div className="p-5 pt-0 text-[#4a5568] text-[15px] leading-relaxed border-t border-gray-50 mt-2">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
