import React from 'react';
import { ComputerRepairTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { BrandsSection } from '@/components/sections/BrandsSection';
import { AchievementSection } from '@/components/sections/AchievementSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: ComputerRepairTemplateData = rawData;
  const sectionData = templateData?.categories?.['Computer Repair']?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{commonData?.globalUI?.loadingText || 'Loading Data...'}</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.['Computer RepairTopBar1']} />
      <Header data={sectionData.Header?.variants?.['Computer RepairHeader1']} />
      <HeroSection data={sectionData.Hero?.variants?.['Computer RepairHero1']} />
      <ServicesSection data={sectionData.Services?.variants?.['Computer RepairServices1']} />
      <AboutUsSection data={sectionData.AboutUs?.variants?.['Computer RepairAboutUs1']} />
      <ProcessSection data={sectionData.Process?.variants?.['Computer RepairProcess1']} />
      <BrandsSection data={sectionData.Brands?.variants?.['Computer RepairBrands1']} />
      <AchievementSection data={sectionData.Achievement?.variants?.['Computer RepairAchievement1']} />
      <TestimonialsSection data={sectionData.Testimonials?.variants?.['Computer RepairTestimonials1']} />
      {/* We will build the rest of the components here step by step */}
      <Footer data={commonData.Footer} />
    </main>
  );
}
