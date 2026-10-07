import React from 'react';
import { ComputerRepairTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailSection } from '@/components/sections/ServiceDetailSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: ComputerRepairTemplateData = rawData as any;
  const sectionData = templateData?.categories?.['Computer Repair']?.sections;
  const commonData = templateData?.common;
  
  const idMap: Record<string, string> = {
    'laptop-repair': 'laptop',
    'desktop-repair': 'desktop',
    'screen-replacement': 'screen',
    'keyboard-replacement': 'keyboard',
    'battery-replacement': 'battery',
    'motherboard-repair': 'motherboard',
    'windows-installation': 'window',
    'software-troubleshooting': 'software',
    'virus-removal': 'virus',
    'data-recovery': 'data',
    'ssd-ram-upgrade': 'ssd',
    'cleaning': 'cleaning'
  };

  const mappedId = idMap[id] || 'laptop';
  const variantName = `Computer RepairServiceDetail${mappedId}`;
  
  let serviceData = null;
  const serviceVariants = sectionData?.ServiceDetail?.variants;
  
  if (serviceVariants) {
    serviceData = serviceVariants[variantName] || serviceVariants['Computer RepairServiceDetaillaptop'];
  }

  if (!sectionData || !commonData || !serviceData) return <div className="text-black p-10">{commonData?.globalUI?.loadingText || 'Loading Data...'}</div>;

  const breadcrumbData = {
    ...commonData.serviceDetailBreadcrumb,
    title: serviceData.title1 || 'Service Detail',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Services', url: '/services' },
      { label: serviceData.title1 || 'Service Detail' }
    ]
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.['Computer RepairTopBar1']} />
      <Header data={sectionData.Header?.variants?.['Computer RepairHeader1']} />
      <Breadcrumb data={breadcrumbData} />
      
      <ServiceDetailSection data={serviceData} />
      
      <Footer data={commonData.Footer} />
    </main>
  );
}
