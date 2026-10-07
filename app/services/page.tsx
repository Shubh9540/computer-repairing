import React from 'react';
import { ComputerRepairTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { BrandsSection } from '@/components/sections/BrandsSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: ComputerRepairTemplateData = rawData as any;
  const sectionData = templateData?.categories?.['Computer Repair']?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.['Computer RepairTopBar1']} />
      <Header data={sectionData.Header?.variants?.['Computer RepairHeader1']} />

      <Breadcrumb data={commonData.servicesBreadcrumb} />

      <ServicesSection data={sectionData.Services?.variants?.['Computer RepairServices1']} hideButton={true} />
      
      <ProcessSection data={sectionData.Process?.variants?.['Computer RepairProcess1']} />
      
      <BrandsSection data={sectionData.Brands?.variants?.['Computer RepairBrands1']} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
