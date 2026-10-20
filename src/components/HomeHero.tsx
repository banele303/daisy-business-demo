'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Wifi,
  PhoneCall,
  Server,
  CodeXml,
  Shield,
  Printer,
  Sun,
  Landmark,
  ChevronRight,
} from 'lucide-react';

const divisions = [
  { title: 'Connectivity', href: '/services/connectivity', icon: Wifi },
  { title: 'Telecoms', href: '/services/telecoms', icon: PhoneCall },
  { title: 'IT Managed Services', href: '/services/it', icon: Server },
  { title: 'Software', href: '/services/software', icon: CodeXml },
  { title: 'Business Security', href: '/services/security', icon: Shield },
  { title: 'Print & Document', href: '/services/print', icon: Printer },
  { title: 'Solar & Energy', href: '/services/energy', icon: Sun },
  { title: 'Business Finance', href: '/services/finance', icon: Landmark },
];

export default function HomeHero() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -9999, y: -9999 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#141414] pt-24 pb-16 lg:pt-36 lg:pb-28 overflow-hidden text-white"
    >
      {/* 1. Base Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0f3514] to-[#141414]"
      />

      {/* 2. Authentic Subtle Dot Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #66BB6A 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 3. Interactive Mouse Spotlight Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] transition-[background] duration-75"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(148,204,53,0.18), transparent 70%)`,
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
              One technology partner.{' '}
              <span className="text-green-400">Eight divisions.</span> Zero excuses.
            </h1>

            <p className="text-lg text-green-100 mb-8 max-w-xl leading-relaxed">
              Daisy Business Solutions connects, secures, powers and finances South African businesses - all under one SLA, one invoice, one contact.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50 relative bg-gradient-to-b from-green-400 to-green-600 text-white hover:text-white shadow-[0_2px_10px_rgba(148,204,53,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_8px_20px_rgba(148,204,53,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:translate-y-0 h-12 px-8 text-base"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50 relative bg-white/10 backdrop-blur-md border border-white/20 text-white hover:text-white hover:bg-white/20 hover:border-white/40 shadow-lg hover:-translate-y-0.5 active:translate-y-0 h-12 px-8 text-base gap-2"
              >
                <span>See Our Solutions</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Authentic 8-Division Grid (No images, pure clean glassmorphic cards with glowing green icons) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 grid-rows-2 auto-rows-fr gap-3">
            {divisions.map((div, i) => {
              const Icon = div.icon;
              return (
                <div key={i} className="h-full min-w-0">
                  <Link
                    href={div.href}
                    className="group relative h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(148,204,53,0.2)] transition-all duration-300 cursor-pointer"
                  >
                    <Icon className="w-7 h-7 text-green-400 mx-auto mb-2 group-hover:scale-110 group-hover:text-green-300 transition-transform" />
                    <div className="text-xs font-medium text-white/80 group-hover:text-white leading-tight">
                      {div.title}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
