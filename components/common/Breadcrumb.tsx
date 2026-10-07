import React from 'react';
import Link from 'next/link';
import { BreadcrumbData } from '@/types/templates.types';
import { FaAngleDoubleRight } from 'react-icons/fa';

export const Breadcrumb = ({ data }: { data?: BreadcrumbData }) => {
  if (!data) return null;

  return (
    <section 
      className="w-full relative py-20 md:py-28 lg:py-32 z-0 bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: `url('${data.bgImage || '/main logo/breadcrumb.webp'}')` }}
    >
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#051024]/90 via-[#051024]/70 to-[#051024]/90 z-0"></div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
          {data.title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-[15px] font-bold text-white tracking-wide">
          {data.paths?.map((path, index) => (
            <React.Fragment key={index}>
              {path.url ? (
                <Link href={path.url} className="hover:text-[var(--color-accent)] transition-colors drop-shadow-sm">
                  {path.label}
                </Link>
              ) : (
                <span className="drop-shadow-sm">{path.label}</span>
              )}
              {index < data.paths.length - 1 && (
                <FaAngleDoubleRight className="text-gray-300 mx-1 text-[11px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
