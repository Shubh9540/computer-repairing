"use client";
import React from 'react';
import { ContactData } from '@/types/templates.types';
import { FaHeadphonesAlt, FaUser, FaEnvelope, FaPhoneAlt, FaCheckSquare, FaShieldAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const ContactPageSection = ({ data }: { data?: ContactData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 md:py-12 bg-white relative overflow-hidden">
      {/* Decorative Dots Background */}
      <div className="absolute top-12 left-12 opacity-30 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5H7V7H5V5Z" fill="#007bff" />
          <path d="M15 5H17V7H15V5Z" fill="#007bff" />
          <path d="M25 5H27V7H25V5Z" fill="#007bff" />
          <path d="M35 5H37V7H35V5Z" fill="#007bff" />
          <path d="M45 5H47V7H45V5Z" fill="#007bff" />
          <path d="M5 15H7V17H5V15Z" fill="#007bff" />
          <path d="M15 15H17V17H15V15Z" fill="#007bff" />
          <path d="M25 15H27V17H25V15Z" fill="#007bff" />
          <path d="M35 15H37V17H35V15Z" fill="#007bff" />
          <path d="M45 15H47V17H45V15Z" fill="#007bff" />
          <path d="M5 25H7V27H5V25Z" fill="#007bff" />
          <path d="M15 25H17V27H15V25Z" fill="#007bff" />
          <path d="M25 25H27V27H25V25Z" fill="#007bff" />
          <path d="M35 25H37V27H35V25Z" fill="#007bff" />
          <path d="M45 25H47V27H45V25Z" fill="#007bff" />
        </svg>
      </div>
      <div className="absolute top-12 right-12 opacity-30 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5H7V7H5V5Z" fill="#007bff" />
          <path d="M15 5H17V7H15V5Z" fill="#007bff" />
          <path d="M25 5H27V7H25V5Z" fill="#007bff" />
          <path d="M35 5H37V7H35V5Z" fill="#007bff" />
          <path d="M45 5H47V7H45V5Z" fill="#007bff" />
          <path d="M5 15H7V17H5V15Z" fill="#007bff" />
          <path d="M15 15H17V17H15V15Z" fill="#007bff" />
          <path d="M25 15H27V17H25V15Z" fill="#007bff" />
          <path d="M35 15H37V17H35V15Z" fill="#007bff" />
          <path d="M45 15H47V17H45V15Z" fill="#007bff" />
          <path d="M5 25H7V27H5V25Z" fill="#007bff" />
          <path d="M15 25H17V27H15V25Z" fill="#007bff" />
          <path d="M25 25H27V27H25V25Z" fill="#007bff" />
          <path d="M35 25H37V27H35V25Z" fill="#007bff" />
          <path d="M45 25H47V27H45V25Z" fill="#007bff" />
        </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 lg:px-8 relative z-10">

        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          {data.subtitle && (
            <div className="inline-flex items-center gap-2 bg-white text-[#007bff] border border-blue-100 px-5 py-2 rounded-full text-[13px] font-bold mb-4 shadow-sm">
              <FaHeadphonesAlt className="text-[14px]" />
              <span>{data.subtitle}</span>
            </div>
          )}

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#051838] mb-4 tracking-tight leading-tight">
            {data.title1 && <span>{data.title1} </span>}
            {data.title2 && <span className="text-[#007bff]">{data.title2}</span>}
          </h2>

          {data.description && (
            <p className="text-[#4a5568] text-[15px] md:text-[16px] leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* Top Section: Image & Form */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">

          {/* Left: Image Card */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px]">
            <div className="absolute left-0 top-6 bottom-6 w-[80%] bg-[#007bff] rounded-[32px] rounded-bl-none z-0">
              {/* Left edge dots decoration */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {[1, 2, 3, 4, 5].map((i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white opacity-60"></div>)}
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 left-6 lg:left-8 py-6 rounded-[24px] z-10 overflow-hidden shadow-lg h-full">
              <img src={data.image.url} alt="Contact Support" className="w-full h-full object-cover rounded-[24px]" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-12 left-0 lg:-left-4 bg-white rounded-xl p-5 shadow-xl max-w-[280px] z-20 border border-gray-50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#007bff] flex items-center justify-center text-white shrink-0 shadow-md">
                <FaShieldAlt className="text-[22px]" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#051838] text-[15px] leading-tight mb-1">{data.image.floatingTitle}</h4>
                <p className="text-[12px] text-[#4a5568] leading-snug">{data.image.floatingDesc}</p>
              </div>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="w-full lg:w-1/2 bg-white rounded-[24px] p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-2xl md:text-[28px] font-extrabold text-[#051838] mb-2">
              {data.form.title1} <span className="text-[#007bff]">{data.form.title2}</span>
            </h3>
            <p className="text-[#4a5568] text-[14px] mb-8">{data.form.subtitle}</p>

            <form className="flex flex-col gap-5 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaUser />
                  </div>
                  <input type="text" placeholder="Your Name *" className="w-full bg-white border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-[14px] text-gray-700 outline-none focus:border-[#007bff] transition-all" />
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input type="email" placeholder="Your Email *" className="w-full bg-white border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-[14px] text-gray-700 outline-none focus:border-[#007bff] transition-all" />
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaPhoneAlt />
                  </div>
                  <input type="tel" placeholder="Your Phone Number *" className="w-full bg-white border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-[14px] text-gray-700 outline-none focus:border-[#007bff] transition-all" />
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaCheckSquare />
                  </div>
                  <select className="w-full bg-white border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-[14px] text-gray-700 outline-none focus:border-[#007bff] transition-all appearance-none cursor-pointer">
                    <option value="">Select Service</option>
                    <option value="screen">Screen Replacement</option>
                    <option value="battery">Battery Repair</option>
                    <option value="other">Other Issue</option>
                  </select>
                </div>
              </div>

              <div className="relative mt-2 flex-grow">
                <textarea rows={5} placeholder="Your Message *\nTell us about your issue or service requirement..." className="w-full h-full bg-white border border-gray-200 rounded-lg py-4 px-4 text-[14px] text-gray-700 outline-none focus:border-[#007bff] transition-all resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-[#007bff] text-white font-bold text-[16px] py-4 rounded-lg hover:bg-[#0056b3] transition-colors mt-4 shadow-md flex justify-center items-center gap-2">
                {data.form.buttonText} <span>→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Contact Info & Map */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left: Contact Information Grid */}
          <div className="w-full lg:w-1/2 bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-2xl font-extrabold text-[#051838] mb-6">
              {data.contactInfo.title1} <span className="text-[#007bff]">{data.contactInfo.title2}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
              {/* Call Us */}
              <div className="bg-[#f8faff] rounded-xl p-5 border border-blue-50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#007bff] flex items-center justify-center text-white shrink-0 mt-1 shadow-sm">
                  <FaPhoneAlt className="text-[18px]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#051838] text-[15px] mb-1">{data.contactInfo.phoneLabel}</h4>
                  <p className="font-bold text-[#051838] text-[16px] mb-1">{data.contactInfo.phone}</p>
                  <p className="text-[12px] text-[#4a5568]">{data.contactInfo.phoneDesc}</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="bg-[#f8faff] rounded-xl p-5 border border-blue-50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#007bff] flex items-center justify-center text-white shrink-0 mt-1 shadow-sm">
                  <FaEnvelope className="text-[18px]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#051838] text-[15px] mb-1">{data.contactInfo.emailLabel}</h4>
                  <p className="font-bold text-[#051838] text-[15px] mb-1 truncate w-[130px] sm:w-auto">{data.contactInfo.email}</p>
                  <p className="text-[12px] text-[#4a5568]">{data.contactInfo.emailDesc}</p>
                </div>
              </div>

              {/* Visit Store */}
              <div className="bg-[#f8faff] rounded-xl p-5 border border-blue-50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#007bff] flex items-center justify-center text-white shrink-0 mt-1 shadow-sm">
                  <FaMapMarkerAlt className="text-[18px]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#051838] text-[15px] mb-1">{data.contactInfo.storeLabel}</h4>
                  <p className="text-[13px] text-[#051838] font-medium leading-snug mb-1">{data.contactInfo.storeDesc}</p>
                  <p className="text-[12px] text-[#4a5568]">{data.contactInfo.storeSub}</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-[#f8faff] rounded-xl p-5 border border-blue-50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#007bff] flex items-center justify-center text-white shrink-0 mt-1 shadow-sm">
                  <FaClock className="text-[18px]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#051838] text-[15px] mb-1">{data.contactInfo.hoursLabel}</h4>
                  <p className="text-[13px] text-[#051838] font-medium leading-snug mb-1">{data.contactInfo.hoursDesc}</p>
                  <p className="text-[12px] text-[#4a5568]">{data.contactInfo.hoursSub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map Grid */}
          <div className="w-full lg:w-1/2 bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-2xl font-extrabold text-[#051838] mb-1">
              {data.map.title1} <span className="text-[#007bff]">{data.map.title2}</span>
            </h3>
            <p className="text-[#4a5568] text-[14px] mb-4">{data.map.description}</p>

            <div className="w-full flex-grow bg-gray-100 rounded-[16px] overflow-hidden min-h-[250px]">
              <iframe
                title="Google Map"
                src={data.map.url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
