"use client";
import React from 'react';
import { ThankYouData } from '@/types/templates.types';
import { FaCheck, FaRegCalendarAlt, FaClock, FaHeadset, FaPaperPlane } from 'react-icons/fa';

export const ThankYouSection = ({ data }: { data?: ThankYouData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 md:py-12 bg-white relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Decorative Confetti Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-60">
        <div className="absolute top-[20%] left-[25%] w-2 h-4 bg-[#007bff] rotate-45 rounded-sm"></div>
        <div className="absolute top-[30%] right-[30%] w-3 h-3 bg-[#00cc66] rounded-full"></div>
        <div className="absolute top-[40%] left-[35%] w-3 h-3 bg-[#ffcc00] rounded-sm -rotate-12"></div>
        <div className="absolute top-[25%] right-[25%] w-2 h-5 bg-[#ff4d4d] rotate-12 rounded-sm"></div>
        <div className="absolute top-[15%] left-[45%] w-2 h-6 bg-[#00cc66] rounded-sm"></div>
        <div className="absolute top-[35%] left-[40%] w-2 h-2 bg-[#ffcc00] rounded-full"></div>
        
        {/* Paper Plane Decoration */}
        <div className="absolute top-[20%] right-[15%] hidden md:block">
           <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M10 50 C 30 50, 50 30, 80 15" stroke="#a0aec0" strokeWidth="2" strokeDasharray="4 4" fill="none" strokeLinecap="round" />
             <g transform="translate(80, 5) rotate(15)">
               <path d="M0 20 L25 5 L5 25 Z" fill="#007bff" />
               <path d="M25 5 L15 15 L20 25 Z" fill="#0056b3" />
             </g>
           </svg>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Checkmark Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#e6ffe6] rounded-full scale-150 z-0"></div>
          <div className="absolute inset-0 bg-[#ccffcc] rounded-full scale-125 z-0"></div>
          <div className="relative z-10 w-24 h-24 bg-[#00cc66] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#00cc66]/30">
            <FaCheck className="text-4xl" />
          </div>
          {/* Tick marks around the circle */}
          <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-1 h-4 bg-[#00cc66] rounded-sm"></div>
          <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-1 h-4 bg-[#00cc66] rounded-sm"></div>
          <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-4 h-1 bg-[#00cc66] rounded-sm"></div>
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-4 h-1 bg-[#00cc66] rounded-sm"></div>
        </div>

        {/* Headings */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#051838] mb-4 tracking-tight">
          {data.title1} <span className="text-[#007bff]">{data.title2}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#051838] mb-6">
          {data.subtitle}
        </h2>
        
        <p className="text-[#4a5568] text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed mb-12">
          {data.description}
        </p>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 bg-white rounded-[24px] shadow-sm border border-gray-100 mb-12 divide-y md:divide-y-0 md:divide-x divide-gray-100 overflow-hidden">
          {data.cards.map((card, idx) => {
            let Icon = FaCheck;
            if (card.icon === 'calendar') Icon = FaRegCalendarAlt;
            if (card.icon === 'clock') Icon = FaClock;
            if (card.icon === 'headset') Icon = FaHeadset;

            const iconColor = card.icon === 'clock' ? 'text-[#00cc66]' : 'text-[#007bff]';
            const iconBg = card.icon === 'clock' ? 'bg-[#e6ffe6]' : 'bg-[#e6f0ff]';

            return (
              <div key={card.id} className="p-8 md:p-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${iconBg} ${iconColor} flex items-center justify-center mb-6`}>
                  <Icon className="text-2xl" />
                </div>
                <h3 className="font-extrabold text-[#051838] text-[17px] mb-2">{card.title}</h3>
                <p className="text-[14px] text-[#4a5568] leading-relaxed">
                  {card.description}
                  {card.phone && (
                    <>
                      <br />
                      <span className="font-bold text-[#007bff] mt-1 block">{card.phone}</span>
                    </>
                  )}
                </p>
              </div>
            );
          })}
        </div>

        {/* Back to Home Button */}
        <a href={data.buttonUrl} className="inline-flex items-center justify-center gap-2 bg-[#007bff] text-white font-bold text-[16px] py-4 px-10 rounded-full hover:bg-[#0056b3] transition-colors shadow-lg shadow-[#007bff]/20">
          {data.buttonText} <span>→</span>
        </a>

      </div>
    </section>
  );
};
