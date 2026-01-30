'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  positioning?: string;
  summary: string;
  highlights: string[];
  chips: string[];
  projectUrl: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProjectCard({
  title,
  category,
  positioning,
  summary,
  highlights,
  chips,
  projectUrl,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const whatsappLink = `https://wa.me/918882567801?text=Hi, I'm interested in a landing page similar to ${encodeURIComponent(title)}`;

  return (
    <>
      {/* Desktop Card - Horizontal Layout */}
      <div className="hidden md:flex bg-white rounded-2xl shadow-sm border border-[#E9D8C3] overflow-hidden hover:shadow-lg transition-all duration-300 group">
        {/* Thumbnail - Left Side */}
        <div
          className="w-[45%] min-h-[280px] relative cursor-pointer overflow-hidden bg-[#EEF1FF]"
          onClick={() => setIsModalOpen(true)}
        >
          {!imageError ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#EEF1FF] to-[#FFF6E8]">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-3 bg-[#1F2A6D]/10 rounded-xl flex items-center justify-center">
                  <ProjectIcon />
                </div>
                <p className="text-[#1F2A6D] font-medium text-sm">{title}</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-[#1F2A6D] px-4 py-2 rounded-lg font-medium text-sm transition-opacity">
              Click to Preview
            </span>
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="flex-1 p-6 flex flex-col">
          <div className="mb-3">
            <p className="text-xs text-[#1A1A1A]/50 uppercase tracking-wide mb-1">{category}</p>
            <h3 className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              {title}
            </h3>
            {positioning && (
              <p className="text-sm text-[#FF8A00] font-medium mt-1">{positioning}</p>
            )}
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mb-3">
            {chips.map((chip, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-[#EEF1FF] text-[#1F2A6D] text-xs font-medium rounded-full"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Summary */}
          <p className="text-[#1A1A1A]/70 text-sm mb-4 line-clamp-2">{summary}</p>

          {/* Highlights */}
          <div className="mb-4 flex-1">
            <ul className="space-y-1.5">
              {highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-[#1A1A1A]/80">
                  <span className="text-[#1F7A3A] mt-0.5">
                    <CheckIcon />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#FF8A00] hover:bg-[#F57C00] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-md flex items-center justify-center gap-2"
            >
              <ExternalLinkIcon />
              <span>View Live</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-[#1F2A6D] text-[#1F2A6D] hover:bg-[#EEF1FF] px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon />
              <span>Request Similar</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Card - Vertical Layout */}
      <div className="md:hidden bg-white rounded-2xl shadow-sm border border-[#E9D8C3] overflow-hidden">
        {/* Thumbnail - Top */}
        <div
          className="w-full h-48 relative cursor-pointer overflow-hidden bg-[#EEF1FF]"
          onClick={() => setIsModalOpen(true)}
        >
          {!imageError ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-top"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#EEF1FF] to-[#FFF6E8]">
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-2 bg-[#1F2A6D]/10 rounded-xl flex items-center justify-center">
                  <ProjectIcon />
                </div>
                <p className="text-[#1F2A6D] font-medium text-xs">{title}</p>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs text-[#1A1A1A]/50 uppercase tracking-wide mb-1">{category}</p>
          <h3 className="text-lg font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] mb-1">
            {title}
          </h3>
          {positioning && (
            <p className="text-sm text-[#FF8A00] font-medium mb-3">{positioning}</p>
          )}

          {/* Chips */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {chips.slice(0, 3).map((chip, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-[#EEF1FF] text-[#1F2A6D] text-xs font-medium rounded-full"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Summary */}
          <p className="text-[#1A1A1A]/70 text-sm mb-3 line-clamp-2">{summary}</p>

          {/* Highlights */}
          <ul className="space-y-1 mb-4">
            {highlights.slice(0, 2).map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#1A1A1A]/80">
                <span className="text-[#1F7A3A] mt-0.5">
                  <CheckIcon />
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Buttons - Stacked */}
          <div className="flex flex-col gap-2">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#FF8A00] hover:bg-[#F57C00] text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLinkIcon />
              <span>View Live</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-[#1F2A6D] text-[#1F2A6D] hover:bg-[#EEF1FF] px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon />
              <span>Request Similar</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#E9D8C3]">
              <h4 className="text-lg font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                {title}
              </h4>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#EEF1FF] transition-colors"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full h-[60vh] bg-[#EEF1FF]">
              {!imageError ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[#1A1A1A]/50">Preview not available</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 p-4 border-t border-[#E9D8C3]">
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#FF8A00] hover:bg-[#F57C00] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ExternalLinkIcon />
                <span>Open Live Site</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-[#1F2A6D] text-[#1F2A6D] hover:bg-[#EEF1FF] px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                <span>Request Similar</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-5 h-5 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg className="w-8 h-8 text-[#1F2A6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
