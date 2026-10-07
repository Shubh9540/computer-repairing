'use client';
import React from 'react';
import { ServiceDetailData } from '@/types/templates.types';
import Link from 'next/link';
import { FaAngleRight, FaPhoneAlt, FaCheck, FaCog, FaShieldAlt, FaBolt, FaWallet } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCog': return <FaCog />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaBolt': return <FaBolt />;
    case 'FaWallet': return <FaWallet />;
    default: return <FaCog />;
  }
};

export const ServiceDetailSection = ({ data }: { data?: ServiceDetailData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12 bg-white">
      <div className="max-w-[1250px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-8">

          {/* Main Content */}
          <div className="w-full flex flex-col gap-8">
            {/* Header, Features, and Images */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Text & Features */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div>
                  {data.subtitle && (
                    <div className="inline-flex items-center gap-2 bg-[#e6f0ff] text-[#007bff] px-3 py-1.5 rounded-full text-[13px] font-bold mb-4">
                      <FaCog className="text-[14px]" />
                      <span>{data.subtitle}</span>
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#051838] leading-tight tracking-tight">
                    {data.title1} <span className="text-[#007bff]">{data.title2}</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-4 text-[#4a5568] text-[15px] leading-relaxed">
                  {data.descriptions?.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                  {!data.descriptions && data.description && <p>{data.description}</p>}
                </div>

                {data.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {data.features.map((feat) => (
                      <div key={feat.id} className="flex items-start gap-3 bg-white border border-gray-100 shadow-sm p-4 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#007bff] flex-shrink-0 text-lg">
                          {renderIcon(feat.icon || '')}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#051838] text-[14px] mb-1">{feat.title}</h4>
                          <p className="text-gray-500 text-[12px] leading-snug">{feat.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Images */}
              {data.images && (
                <div className="w-full lg:w-1/2 flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden aspect-[4/3] w-full">
                    <img src={data.images.main} alt="Main" className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {data.images.small1 && (
                      <div className="rounded-lg overflow-hidden aspect-square">
                        <img src={data.images.small1} alt="Thumb 1" className="w-full h-full object-cover" />
                      </div>
                    )}
                    {data.images.small2 && (
                      <div className="rounded-lg overflow-hidden aspect-square">
                        <img src={data.images.small2} alt="Thumb 2" className="w-full h-full object-cover" />
                      </div>
                    )}
                    {data.images.small3 && (
                      <div className="rounded-lg overflow-hidden aspect-square">
                        <img src={data.images.small3} alt="Thumb 3" className="w-full h-full object-cover" />
                      </div>
                    )}
                    {data.images.small4 && (
                      <div className="rounded-lg overflow-hidden aspect-square">
                        <img src={data.images.small4} alt="Thumb 4" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Common Issues Section */}
            {data.commonIssuesTitle && data.commonIssues && (
              <div className="bg-[#f4f7fb] rounded-2xl p-8 mt-6 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-3/5 flex flex-col gap-6">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#051838]">
                    {data.commonIssuesTitle} <span className="text-[#007bff]">{data.commonIssuesTitleHighlight}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.commonIssues.map((issue, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#007bff] flex items-center justify-center text-white text-[10px] shrink-0">
                          <FaCheck />
                        </div>
                        <span className="text-[#4a5568] text-[14px] font-medium">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {data.commonIssuesImage && (
                  <div className="w-full md:w-2/5 flex justify-center">
                    <img src={data.commonIssuesImage} alt="Common Issues" className="w-full max-w-[300px] object-contain drop-shadow-xl" />
                  </div>
                )}
              </div>
            )}

            {data.typesTitle1 && data.types && (
              <>
                <h3 className="text-3xl md:text-[34px] font-extrabold text-[#051838] mt-4 mb-6">
                  {data.typesTitle1} <span className="text-[#007bff]">{data.typesTitle2}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.types.map((type) => (
                    <div key={type.id} className="flex flex-col bg-white rounded-[16px] overflow-hidden border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.04)] group">
                      <div className="w-full h-[220px] bg-gray-50 overflow-hidden p-4">
                        <img src={type.image} alt={type.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6 text-center">
                        <h4 className="font-bold text-[#051838] text-[18px] mb-2">{type.title}</h4>
                        <p className="text-gray-500 text-[14px] leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {data.processTitle && data.processSteps && (
              <div className="mt-8 mb-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#051838] mb-2">
                  {data.processTitle} <span className="text-[#007bff]">Process</span>
                </h3>
                {data.processSubtitle && (
                  <p className="text-gray-500 text-[15px] mb-8">{data.processSubtitle}</p>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {data.processSteps.map((step, idx) => (
                    <div key={step.id} className="flex flex-col items-center text-center relative group">
                      <div className="w-20 h-20 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#007bff] text-3xl font-bold mb-4 shadow-sm group-hover:bg-[#007bff] group-hover:text-white transition-colors duration-300 relative z-10">
                        {/* Fake icon or number */}
                        <span className="text-lg opacity-80 absolute top-2 right-2">{step.number}</span>
                        {idx === 0 ? <FaCog /> : idx === 1 ? <FaWallet /> : idx === 2 ? <FaShieldAlt /> : <FaCheck />}
                      </div>
                      
                      {idx !== data.processSteps!.length - 1 && (
                        <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] border-t-2 border-dashed border-gray-300 z-0"></div>
                      )}
                      
                      <h4 className="font-bold text-[#051838] text-[16px] mb-2">{step.title}</h4>
                      <p className="text-gray-500 text-[13px] leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.faqTitle && data.faqs && (
              <>
                <h3 className="text-3xl md:text-[34px] font-extrabold text-[#051838] mt-10 mb-6">
                  {data.faqTitle}
                </h3>
                <div className="flex flex-col gap-4">
                  {data.faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 rounded-[12px] p-5">
                      <h4 className="font-bold text-[#051838] text-[16px] mb-2">{faq.question}</h4>
                      <p className="text-gray-500 text-[14px] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
