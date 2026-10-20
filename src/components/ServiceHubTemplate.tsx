import Link from 'next/link';
import { ShieldCheck, Phone, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceHubProps {
  title: string;
  badge: string;
  heroText: string;
  videoSrc?: string;
  subservices: {
    title: string;
    desc: string;
    href: string;
  }[];
  benefits: string[];
}

export function ServiceHubTemplate({
  title,
  badge,
  heroText,
  videoSrc,
  subservices,
  benefits,
}: ServiceHubProps) {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-green-950 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-900/60 border border-green-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
                {badge}
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
                Business <span className="text-green-400">{title}</span> Solutions
              </h1>
              <p className="text-lg text-green-100 mb-8 max-w-xl leading-relaxed">
                {heroText}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="bg-green-500 hover:bg-green-400 text-green-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  Build your {title.toLowerCase()} solution
                </Link>
                <a
                  href="tel:0112445000"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-green-400" />
                  011 244 5000
                </a>
              </div>
            </div>

            {videoSrc && (
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden border border-green-800 shadow-2xl aspect-[4/3]">
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subservices List */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-green-ink mb-3">Our Offerings</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-green-950 mb-4">
              Explore Our {title} Portfolio
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Tailored specifically to scale with your branch network and commercial operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subservices.map((sub, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <h3 className="font-display font-bold text-xl text-green-950 mb-3">
                    {sub.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {sub.desc}
                  </p>
                </div>
                <Link
                  href={sub.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-green-ink hover:text-green-800 transition-colors"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display font-bold text-3xl text-green-950 mb-8 text-center">
            Key Advantages with Daisy {title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-green-50/50 border border-green-100">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-800 leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
