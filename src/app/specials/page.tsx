import Image from 'next/image';
import Link from 'next/link';
import { Tag, Sparkles, Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Current Deals & Specials | Daisy Business Solutions',
  description: 'Limited-time business technology packages: discounted office copier rentals, bundled CCTV systems, and cloud PBX specials.',
};

const deals = [
  {
    title: 'Commercial CCTV Kit',
    tag: 'Security Special',
    desc: '4K Ultra HD IP 8-camera kit with 2TB NVR recording storage and remote mobile view setup included.',
    price: 'From R999 / mo',
    img: '/specials/cctv-kit.png',
  },
  {
    title: 'Cloud PBX & VoIP Bundle',
    tag: 'Telecoms Special',
    desc: '10-Extension hosted cloud telephone system with free mobile smartphone apps and unlimited internal branch calls.',
    price: 'From R1,499 / mo',
    img: '/specials/pbx.png',
  },
  {
    title: 'Multifunctional A3/A4 Copier',
    tag: 'Print Special',
    desc: 'Full-colour network MFP with copy, scan, and email plus toner maintenance on flexible monthly rental.',
    price: 'From R899 / mo',
    img: '/specials/mfp-a3.png',
  },
  {
    title: 'High-Speed Dedicated Fibre + LTE Failover',
    tag: 'Connectivity Special',
    desc: 'Uncapped business-grade fibre link with automatic secondary LTE router failover and 99.8% SLA.',
    price: 'From R1,899 / mo',
    img: '/specials/connectivity.png',
  },
];

export default function SpecialsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-green-950 text-white py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-900/60 border border-green-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Exclusive Packages
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Limited-Time Technology Deals
          </h1>
          <p className="text-lg text-green-100 max-w-xl mx-auto leading-relaxed">
            Upgrade your office systems with cost-cutting package specials tailored for growing South African companies.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {deals.map((deal, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      {deal.tag}
                    </span>
                    <span className="text-lg font-extrabold text-green-950 font-display">
                      {deal.price}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-green-950 mb-3">
                    {deal.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {deal.desc}
                  </p>

                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-6 flex items-center justify-center p-4">
                    <Image
                      alt={deal.title}
                      src={deal.img}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>

                <Link
                  href="/get-a-quote"
                  className="w-full text-center py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm transition-colors shadow-sm"
                >
                  Claim This Special Deal
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
