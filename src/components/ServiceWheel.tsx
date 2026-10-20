'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const hotspots = [
  {
    id: 'print',
    label: 'Print',
    href: '/services/print',
    x: '50%',
    y: '10.5%',
    spokeAngle: 270,
  },
  {
    id: 'telecoms',
    label: 'Telecoms',
    href: '/services/telecoms',
    x: '78%',
    y: '22%',
    spokeAngle: 315,
  },
  {
    id: 'security',
    label: 'Security',
    href: '/services/security',
    x: '89.5%',
    y: '50%',
    spokeAngle: 0,
  },
  {
    id: 'software',
    label: 'Software',
    href: '/services/software',
    x: '78%',
    y: '78%',
    spokeAngle: 45,
  },
  {
    id: 'it',
    label: 'I.T Managed Services',
    href: '/services/it',
    x: '50%',
    y: '89.5%',
    spokeAngle: 90,
  },
  {
    id: 'finance',
    label: 'Finance',
    href: '/services/finance',
    x: '22%',
    y: '78%',
    spokeAngle: 135,
  },
  {
    id: 'energy',
    label: 'Solar & Energy',
    href: '/services/energy',
    x: '10.5%',
    y: '50%',
    spokeAngle: 180,
  },
  {
    id: 'connectivity',
    label: 'Connectivity',
    href: '/services/connectivity',
    x: '22%',
    y: '22%',
    spokeAngle: 225,
  },
];

export default function ServiceWheel() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] select-none p-2 sm:p-4">
      {/* 1. Ambient Background Pulse Behind Center Hub */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-green-500/15 blur-[40px] animate-pulse pointer-events-none"
      />

      {/* 2. Rotating Outer Dashed Orbital Ring */}
      <div
        aria-hidden="true"
        className="absolute inset-[3.5%] overflow-hidden rounded-full pointer-events-none"
      >
        <div className="h-full w-full rounded-full border-2 border-dashed border-green-400/40 animate-[spin_50s_linear_infinite]" />
      </div>

      {/* 3. Concentric Counter-Spinning Faint Ring */}
      <div
        aria-hidden="true"
        className="absolute inset-[15%] overflow-hidden rounded-full pointer-events-none"
      >
        <div className="h-full w-full rounded-full border border-dashed border-green-300/30 animate-[spin_35s_linear_infinite_reverse]" />
      </div>

      {/* 4. Exact Main Artwork Image Provided by User */}
      <div className="relative z-10 w-full h-full">
        <Image
          src="/images/daisy_service_wheel_main.png"
          alt="Daisy Business Solutions - One partner. Every solution. 8 service divisions"
          fill
          priority
          className="object-contain drop-shadow-sm"
        />
      </div>

      {/* 5. Animated Moving Signal Particles Flowing Outward Along Spokes */}
      <svg
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {hotspots.map((spot, i) => {
          // Parse coordinates from percentages
          const targetX = parseFloat(spot.x);
          const targetY = parseFloat(spot.y);

          return (
            <g key={spot.id}>
              {/* Animated Light Pulse traveling outward from center (50, 50) */}
              <circle r="1" fill="#4ade80" opacity="0.85">
                <animateMotion
                  path={`M 50 50 L ${targetX} ${targetY}`}
                  dur={`${2.8 + (i % 3) * 0.4}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.35}s`}
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* 6. Expanding Center Radar Ring Animation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-15 w-32 h-32 rounded-full border border-green-400/50 animate-ping opacity-25"
        style={{ animationDuration: '4s' }}
      />

      {/* 7. Interactive Hotspot Overlays Over Each Division Node */}
      {hotspots.map((spot) => {
        const isHovered = activeNode === spot.id;

        return (
          <Link
            key={spot.id}
            href={spot.href}
            onMouseEnter={() => setActiveNode(spot.id)}
            onMouseLeave={() => setActiveNode(null)}
            style={{ left: spot.x, top: spot.y }}
            aria-label={`${spot.label} solutions`}
            className="group absolute z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full cursor-pointer focus:outline-none"
          >
            {/* Hover Indicator Ring */}
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                isHovered
                  ? 'bg-green-400/20 ring-4 ring-green-400/60 scale-110 shadow-[0_0_20px_rgba(74,222,128,0.6)]'
                  : 'group-hover:bg-green-300/10 group-hover:scale-105'
              }`}
            />

            {/* Hover Tooltip Pill */}
            {isHovered && (
              <span className="absolute -top-7 whitespace-nowrap rounded-md bg-green-950 px-2 py-0.5 text-[10px] font-bold text-white shadow-lg pointer-events-none animate-fadeIn border border-green-500/30">
                View {spot.label} &rarr;
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
