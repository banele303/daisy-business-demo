import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '@/components/HomeHero';
import ServiceWheel from '@/components/ServiceWheel';
import ReviewsMarquee from '@/components/ReviewsMarquee';
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
  ArrowRight,
  Star,
  Quote,
  BadgeCheck,
  CheckCircle2,
  Building2,
  Users,
  Award,
} from 'lucide-react';

export const metadata = {
  title: 'Daisy Business Solutions | One Technology Partner. Eight Divisions. Zero Excuses.',
  description: 'Daisy Business Solutions connects, secures, powers and finances South African businesses - all under one SLA, one invoice, one contact.',
};

export default function HomePage() {
  const divisions = [
    { title: 'Connectivity', href: '/services/connectivity', icon: Wifi, image: '/services/connectivity_hero.jpg' },
    { title: 'Telecoms', href: '/services/telecoms', icon: PhoneCall, image: '/services/telecoms_hero.jpg' },
    { title: 'IT Managed Services', href: '/services/it', icon: Server, image: '/services/it_hero.jpg' },
    { title: 'Software', href: '/services/software', icon: CodeXml, image: '/services/software_hero.jpg' },
    { title: 'Business Security', href: '/services/security', icon: Shield, image: '/services/security_hero.jpg' },
    { title: 'Print & Document', href: '/services/print', icon: Printer, image: '/services/print_hero.jpg' },
    { title: 'Solar & Energy', href: '/services/energy', icon: Sun, image: '/services/energy_hero.jpg' },
    { title: 'Business Finance', href: '/services/finance', icon: Landmark, image: '/services/finance_hero.jpg' },
  ];

  const solutions = [
    {
      title: 'Connectivity',
      badge: null,
      desc: 'Fibre, licensed wireless, LTE, VSAT and SD-WAN.',
      highlight: 'Independent of any single network. Specified per site, not per contract.',
      href: '/services/connectivity',
      icon: Wifi,
    },
    {
      title: 'Telecoms',
      badge: 'Yeastar Titanium',
      desc: 'Hosted PABX, VoIP, Microsoft Teams integration, video conferencing, handsets.',
      highlight: 'Save on cross-branch calls. Keep your numbers. Never miss a customer call.',
      href: '/services/telecoms',
      icon: PhoneCall,
    },
    {
      title: 'IT Managed Services',
      badge: null,
      desc: 'End-user support, server management, cloud infrastructure, firewalls, and IT hardware.',
      highlight: 'One monthly retainer. Proactive monitoring. An IT department without the headcount.',
      href: '/services/it',
      icon: Server,
    },
    {
      title: 'Software',
      badge: null,
      desc: 'Document management, invoice processing, process automation, workflow digitisation.',
      highlight: 'Turn paper into searchable data. Automate approvals. End manual data entry.',
      href: '/services/software',
      icon: CodeXml,
    },
    {
      title: 'Business Security',
      badge: null,
      desc: 'CCTV surveillance, biometric access control, thermal cameras, time and attendance.',
      highlight: 'Control who enters, protect your stock, and keep automated audit logs of every movement.',
      href: '/services/security',
      icon: Shield,
    },
    {
      title: 'Print & Document',
      badge: 'Canon Partner of the Year',
      desc: 'Multifunctional devices, production copiers, fleet management, wide format.',
      highlight: 'Month-to-month rentals. Guaranteed response times. Automated toner replenishment.',
      href: '/services/print',
      icon: Printer,
    },
    {
      title: 'Solar & Energy',
      badge: null,
      desc: 'Commercial solar, rent-to-own solar, diesel generators, uninterruptible power supplies.',
      highlight: 'Keep the till ringing, the servers running, and the doors open through any outage.',
      href: '/services/energy',
      icon: Sun,
    },
    {
      title: 'Business Finance',
      badge: null,
      desc: 'Asset finance, technology rentals, structured payments, zero-balloon terms.',
      highlight: 'Preserve working capital. Get the equipment today and pay out of monthly operating income.',
      href: '/services/finance',
      icon: Landmark,
    },
  ];

  const caseStudies = [
    {
      industry: 'Manufacturing',
      title: 'Restonic Mattress',
      quote: 'Zero security incidents in 14 months after CCTV + biometrics installation across 3 national plants.',
      link: '/contact',
    },
    {
      industry: 'Retail & Hospitality',
      title: 'Famous Brands Franchisee',
      quote: 'Fibre with LTE failover kept all 12 stores processing card transactions during cable theft outages.',
      link: '/contact',
    },
    {
      industry: 'Legal & Professional',
      title: 'Werksmans Attorneys',
      quote: 'Document automation cut invoice and contract retrieval from 25 minutes down to 3 seconds.',
      link: '/contact',
    },
  ];

  const partners = [
    'Canon',
    'Hikvision',
    'Yeastar',
    'Fujifilm',
    'Microsoft',
    'Lenovo',
    'Samsung',
    'Dahua',
    'Liquid Intelligent Tech',
    'Openserve',
  ];

  const blogPosts = [
    {
      title: 'Canon Names Daisy 2026 Business Partner of the Year',
      date: 'April 2026',
      desc: 'Recognition for excellence in delivering commercial document solutions across South Africa.',
      href: '/about',
    },
    {
      title: 'Why Automatic Failover is Mandatory for SA Retailers in 2026',
      date: 'March 2026',
      desc: 'How redundant wireless and LTE links prevent millions in lost card transactions.',
      href: '/services/connectivity',
    },
    {
      title: 'The Real Cost of Running 5 Technology Vendors vs One Partner',
      date: 'February 2026',
      desc: 'A breakdown of administrative drag, vendor finger-pointing, and how SLA consolidation saves 28%.',
      href: '/services/managed-services',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. AUTHENTIC HERO SECTION WITH PROMINENT COVER MEDIA */}
      <HomeHero />

      {/* 2. STATS TICKER STRIP */}
      <section className="bg-green-800 py-4 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-white/90">
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-green-400 text-green-400" /> 40+ Years
            </span>
            <span className="hidden md:inline text-white/60">|</span>
            <span>Leading SA Businesses</span>
            <span className="hidden md:inline text-white/60">|</span>
            <span>Canon Partner of the Year 2026</span>
            <span className="hidden md:inline text-white/60">|</span>
            <span>Yeastar Titanium Partner</span>
          </div>
        </div>
      </section>

      {/* 3. VENDOR QUOTE PROPOSITION */}
      <section className="bg-green-950 py-12 border-b border-white/5 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="font-display font-semibold text-2xl text-white mb-2">
            &ldquo;Managing 5 vendors costs more than one. We&apos;ve done the maths.&rdquo;
          </p>
          <p className="text-sm text-green-200/70">
            The average South African SME uses <span className="text-green-400 font-bold">4.3 separate technology vendors</span>. Daisy replaces them all.
          </p>
        </div>
      </section>

      {/* 4. DAISY EXISTS TO MAKE GOOD TECHNOLOGY REACHABLE */}
      <section className="border-y border-green-100 bg-green-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-600">
                What Daisy is really about
              </p>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug tracking-tight text-green-950 mb-4">
                Daisy exists to make good technology reachable.
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6 font-medium">
                Most South African businesses know what they need. What stops them is the upfront cost, the complexity of buying it, and the worry about who picks up the phone when something breaks.
              </p>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  We solve all three. We take proven technology from the world&apos;s leading vendors and bring it to market the right way: matched to the business, specified by people who know the products properly, and delivered through infrastructure that reaches the whole country. We aren&apos;t tied to one manufacturer, so we recommend what actually fits rather than what we&apos;re obliged to sell.
                </p>
                <p>
                  Then we do the part most suppliers won&apos;t. We finance it, so a business can put the right technology in place today instead of waiting three budget cycles. And we stand behind it under a service level agreement, so the relationship starts at the sale rather than ending there.
                </p>
              </div>

              <p className="mt-8 border-t border-gray-200 pt-6 font-display text-xl font-bold text-green-950">
                One partner, eight ways to help, a national team who service what they sell.
              </p>
            </div>

            {/* Animated Circular Service Wheel Visual */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <ServiceWheel />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS MATRIX */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest mb-3 text-green-ink">Our Solutions</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-green-950">
              Everything your business needs. Nothing you don&apos;t.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group relative bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-green-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  {item.badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-green-600 text-white px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}

                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                    <Icon className="w-7 h-7 text-green-ink group-hover:text-white" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-green-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <p className="text-xs leading-relaxed text-green-950 mb-6 flex-1 border-l-2 border-green-600 pl-3">
                    {item.highlight}
                  </p>

                  <div className="flex items-center gap-1 text-xs font-bold text-green-ink group-hover:gap-2 transition-all mt-auto">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHY DAISY & VENDOR ACCOUNTABILITY */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3 text-green-ink">Why Daisy</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-green-950 mb-4">
            One partner. Total accountability.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            Eight divisions under one roof means you stop chasing vendors and start running your business.
          </p>
          <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Most businesses do not have an IT problem or a telecoms problem in isolation. They have a vendor problem sitting on top of it. When the network goes down, you cannot tell whether it is the ISP, the firewall vendor, or the security system eating your bandwidth. With Daisy, one team manages and monitors every component.
          </p>
        </div>
      </section>

      {/* 7. CASE STUDIES CARDS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest mb-3 text-green-ink">Case Studies</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-green-950">
              Real results for real SA businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-ink mb-3 block">
                    {cs.industry}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-green-950 mb-3">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed italic mb-6">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                </div>
                <Link
                  href={cs.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-green-ink hover:text-green-800"
                >
                  Read full story <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PARTNER BRAND TICKER */}
      <section className="py-12 bg-gray-50 border-y border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((p, idx) => (
              <span
                key={idx}
                className="font-display font-black text-xl md:text-2xl text-gray-400 hover:text-green-950 transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CLIENT REVIEWS MARQUEE SECTION */}
      <ReviewsMarquee />

      {/* 10. BLOG HIGHLIGHTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-end justify-between mb-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3 text-green-ink">Insights</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-green-950">
                Latest from the Blog
              </h2>
            </div>
            <Link href="/about" className="text-sm font-bold text-green-ink hover:underline">
              View All Posts →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-2xl border border-gray-100 hover:border-green-400 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="h-1.5 w-full bg-green-800" />
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-ink mb-2 block">
                      {post.date}
                    </span>
                    <h3 className="font-display font-bold text-lg text-green-950 mb-3 group-hover:text-green-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">
                      {post.desc}
                    </p>
                  </div>
                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-green-ink group-hover:gap-2 transition-all"
                  >
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL NATIONAL CALLOUT CTA */}
      <section className="py-24 bg-green-950 text-white relative overflow-hidden text-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #94CC35 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
            Join 30,000 South African businesses running on one partner.
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-xl mx-auto">
            Book an obligation-free technology and contract audit. One of our 56 branch teams will inspect your current costs and show you where you are leaking money.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-bold bg-green-500 hover:bg-green-400 text-green-950 px-8 py-3.5 text-base shadow-lg transition-all"
            >
              Request a Free Audit
            </Link>
            <a
              href="tel:0112445000"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-3.5 text-base transition-all"
            >
              Call 011 244 5000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
