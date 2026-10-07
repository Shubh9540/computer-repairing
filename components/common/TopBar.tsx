'use client';
import React from 'react';
import { HeaderData, TopBarData } from '@/types/templates.types';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const TopBar = ({ data, logoData }: { data?: TopBarData; logoData?: HeaderData }) => {
  if (!data) return null;

  return (
    <section className="hidden lg:flex justify-between items-center px-4 lg:px-12 py-3 bg-[var(--color-topbar)] text-white text-[14px] font-medium border-b border-white/10">
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-[#0d6efd] text-base" />
        <span>{data.addressValue}</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-[#0d6efd] text-base" />
          <span className="text-white/80">{data.phoneLabel}</span>
          <a href={`tel:${data.phoneValue?.replace(/[^0-9+]/g, '')}`} className="text-[#0d6efd] text-[15px] font-semibold hover:text-white transition-colors">
            {data.phoneValue}
          </a>
        </div>
        <div className="w-[1px] h-4 bg-white/20"></div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-[#0d6efd] text-base" />
          <a href={`mailto:${data.emailValue}`} className="hover:text-[#0d6efd] transition-colors">
            {data.emailValue}
          </a>
        </div>
      </div>
    </section>
  );
};
