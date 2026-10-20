import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, MapPin, Building, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | 40+ Years of Business Technology | Daisy Solutions',
  description: 'Learn about Daisy Business Solutions, our 40-year heritage, nationwide footprint of 56 branches, and customer-first commitment.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-green-950 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-900/60 border border-green-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Our Story & Heritage
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            About Daisy Business Solutions
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            For over four decades, we have partnered with South African enterprises to deliver dependable office technology, reliable connectivity, and resilient power.
          </p>
        </div>
      </section>

      {/* Story & Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-green-ink mb-3">Our Legacy</p>
              <h2 className="font-display font-bold text-3xl text-green-950 mb-6">
                From Local Roots to Nationwide Technology Leader
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Daisy started with a clear belief: business technology should simplify operations, not complicate them. Over 40 years, we have grown from a local office automation provider into South Africa&apos;s foremost multi-discipline technology partner.
                </p>
                <p>
                  Today, with 56 branches across every province, we serve thousands of businesses ranging from law firms and schools to national retail franchises and heavy manufacturing plants.
                </p>
                <p>
                  Our unique advantage is our independence. We are not bound to a single telco or printer manufacturer. We evaluate your actual operational needs and design custom solutions that deliver true reliability.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                alt="Daisy culture"
                src="/images/culture/celebrate.jpg"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <Users className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-display font-bold text-lg text-green-950 mb-2">Customer First</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Dedicated regional support teams ensure you deal with specialists who understand your site&apos;s conditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <Building className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-display font-bold text-lg text-green-950 mb-2">56 Branches</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                A massive physical footprint ensuring rapid technician dispatch anywhere in South Africa.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <Award className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-display font-bold text-lg text-green-950 mb-2">Uncompromised Quality</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Tier-1 certified hardware and carrier-grade fiber backbones providing 99.8% guaranteed uptime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
