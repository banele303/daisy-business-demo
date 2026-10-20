'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  Wifi,
  PhoneCall,
  Server,
  CodeXml,
  Shield,
  Printer,
  Sun,
  Landmark,
  ChevronRight,
  Zap,
  HardDrive,
  CircleAlert,
  ArrowRight,
  Network,
  Globe,
  Radio,
  Star,
  Quote,
  BadgeCheck,
  CircleCheck,
  Mail,
  MapPin,
} from 'lucide-react';

export default function ConnectivityPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navSolutions = [
    {
      title: 'Connectivity',
      href: '/services/connectivity',
      icon: Wifi,
      items: [
        { label: 'SD-WAN', href: '/services/connectivity/sd-wan' },
        { label: 'Fibre', href: '/services/connectivity/fibre' },
        { label: 'LTE', href: '/services/connectivity/lte' },
        { label: 'Voice', href: '/services/connectivity/voice' },
        { label: 'Wireless', href: '/services/connectivity/wireless' },
      ],
    },
    {
      title: 'Telecoms',
      href: '/services/telecoms',
      icon: PhoneCall,
      items: [
        { label: 'Hosted & Premise based PABX', href: '/services/telecoms/hosted-and-premise-based-pabx' },
        { label: 'Conference', href: '/services/telecoms/conference' },
        { label: 'Mobile applications with MS integration', href: '/services/telecoms/mobile-applications-with-ms-integration' },
        { label: 'Handsets', href: '/services/telecoms/handsets' },
        { label: 'Call Center', href: '/services/telecoms/call-center' },
        { label: 'VoIP', href: '/services/telecoms/voip' },
      ],
    },
    {
      title: 'IT Managed Services',
      href: '/services/it',
      icon: Server,
      items: [
        { label: 'Managed User Services', href: '/services/it/managed-user-services' },
        { label: 'Managed Server Services', href: '/services/it/managed-server-services' },
        { label: 'Managed Cloud Services', href: '/services/it/managed-cloud-services' },
        { label: 'Managed Network Services', href: '/services/it/managed-network-services' },
        { label: 'Managed Firewall Services', href: '/services/it/managed-firewall-services' },
        { label: 'Managed Assessment Services', href: '/services/it/managed-assessment-services' },
        { label: 'IT Hardware', href: '/services/it/it-hardware' },
      ],
    },
    {
      title: 'Software',
      href: '/services/software',
      icon: CodeXml,
      items: [
        { label: 'Document Management', href: '/services/software/electronic-document-management' },
        { label: 'Process Automation', href: '/services/software/process-automation-and-workflows' },
        { label: 'Intelligent Data Capture', href: '/services/software/ai-rpa' },
        { label: 'Print Management', href: '/services/software/print-management-software' },
        { label: 'AP Automation', href: '/services/software/accounts-payable-automation' },
        { label: 'Employee Onboarding', href: '/services/software/employee-onboarding-offboarding' },
        { label: 'Contract Management', href: '/services/software/contract-lifecycle-management' },
        { label: 'Digital Forms', href: '/services/software/digital-forms-and-approvals' },
      ],
    },
    {
      title: 'Business Security',
      href: '/services/security',
      icon: Shield,
      items: [
        { label: 'CCTV', href: '/services/security/cctv' },
        { label: 'Access Control', href: '/services/security/access-control' },
        { label: 'Thermal', href: '/services/security/thermal' },
        { label: 'Intrusion Detection', href: '/services/security/intrusion-detection' },
        { label: 'Time & Attendance', href: '/services/security/time-attendance' },
        { label: 'Retail', href: '/services/security/retail' },
      ],
    },
    {
      title: 'Print & Document',
      href: '/services/print',
      icon: Printer,
      items: [
        { label: 'Mono and Colour A3 A4', href: '/services/print/mono-and-colour-a3-a4' },
        { label: 'Month-2-Month Printer Rentals', href: '/services/print/month-2-month-printer-rentals' },
        { label: 'Multifunctional Print Devices', href: '/services/print/multifunctional-mono-and-colour-print-devices' },
        { label: 'Print Fleet Management', href: '/services/print/print-fleet-management' },
        { label: 'Wide Format', href: '/services/print/wide-format' },
        { label: 'Refurbished', href: '/services/print/refurbished' },
      ],
    },
    {
      title: 'Solar & Energy',
      href: '/services/energy',
      icon: Sun,
      items: [
        { label: 'Solar Solutions', href: '/services/energy/solar-solutions' },
        { label: 'Rent to Own Solar', href: '/services/energy/rent-to-own-solar' },
        { label: 'Generators', href: '/services/energy/generators' },
        { label: 'UPS Backup', href: '/services/energy/ups-backup' },
      ],
    },
    {
      title: 'Business Finance',
      href: '/services/finance',
      icon: Landmark,
      items: [
        { label: 'Daisy Finance', href: '/services/finance/daisy-finance' },
        { label: 'Business Finance Solutions', href: '/services/finance/business-finance-solutions' },
      ],
    },
  ];

  const connectivityOptions = [
    {
      num: '01',
      title: 'Fibre',
      desc: 'Most reliable and fastest option where available; fibre cuts or outages require professional intervention for physical restoration.',
    },
    {
      num: '02',
      title: 'Wireless and LTE',
      desc: 'Licensed wireless and LTE are reliable backups and solid alternatives, especially where fibre is not yet available.',
    },
    {
      num: '03',
      title: 'VSAT',
      desc: 'Satellite connectivity for remote sites where fibre will never arrive; available everywhere but weather-dependent.',
    },
    {
      num: '04',
      title: 'SD-WAN and MPLS',
      desc: 'Manage multiple sites as one coherent, monitored network rather than as separate, siloed connections.',
    },
    {
      num: '05',
      title: 'Dedicated Internet Access',
      desc: 'Guaranteed bandwidth with Service Level Agreements; digital voice lines deliver consistent performance.',
    },
    {
      num: '06',
      title: 'Point-to-Point links',
      desc: 'Site-to-site connections where dedicated links between offices make sense, with or without fibre.',
    },
  ];

  const howItWorksSteps = [
    {
      num: '01',
      title: 'Site assessment',
      desc: 'We physically assess your business sites to see what is available at each location (fibre reach, line-of-sight for wireless, existing infrastructure). We compare your current usage to what you are paying for on paper.',
    },
    {
      num: '02',
      title: 'Design',
      desc: 'We deliver a proposed setup per site, built around redundancy where it matters and cost-efficiency where it does not. Not every site needs the same solution; a head office and a small satellite branch have different risk profiles.',
    },
    {
      num: '03',
      title: 'Install and cutover',
      desc: 'Setting you up is timed to avoid disrupting live operations, with overlap between old and new connections rather than a hard cutoff.',
    },
    {
      num: '04',
      title: 'Ongoing monitoring',
      desc: 'Proactive alerts signal when a line degrades or drops, backed by the 24/7 helpdesk, so you find out from us before your team realise at a till point that goes offline.',
    },
  ];

  const faqItems = [
    {
      q: 'Is automatic failover included?',
      a: 'Failover is designed and quoted per site rather than included by default on every product. Not every site needs it, and the cost should sit where the risk actually is. The site assessment is where we tell you which of your sites genuinely warrant it.',
    },
    {
      q: 'How long does an installation take?',
      a: 'Standard fibre installs take 30 to 40 days. Where civil works are required, expect closer to 120 days. Wireless and LTE are typically faster, which is often why they are used as an interim link.',
    },
    {
      q: 'Are you tied to one network?',
      a: 'No. We partner with and supply across the major South African providers including Liquid, Openserve, DFA, Frogfoot, MetroFibre, Octotel and ECN, and specify per site rather than per contract.',
    },
    {
      q: 'What is the SLA on fibre connections?',
      a: 'Our enterprise fibre lines carry a 99.8% uptime SLA with priority 24/7 proactive monitoring, so issues are picked up and escalated before you notice them.',
    },
    {
      q: 'Can we upgrade our bandwidth later?',
      a: 'Yes. We manage the network end to end and hold the partner relationships with the underlying providers, so line speeds can be scaled up or down as your requirements change without you renegotiating separately with each network.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Thank you Shivek for outstanding service. The service was fast, friendly, and exactly what I needed. They really went above and beyond, Loving my new PBX system',
      author: 'Window & Door Specialist',
      location: 'Pietermaritzburg',
    },
    {
      quote:
        'It has been a pleasure dealing with Michael Bright for our telephone system and office copy machines. Highly recommend.',
      author: 'Adrian Schultz',
      location: 'Cape Town',
    },
    {
      quote:
        'A big thanks to Kirsten and Warren from Daisy for all the assistance on our new telephone system. We are extremely happy with the great service and would certainly recommend Daisy to our clients.',
      author: 'Megan Jane Coleman',
      location: 'Cape Town',
    },
    {
      quote:
        'Thank you Cuan Weir for your efficient response and excellent service delivery. You have surely convinced us that this telephone system is the best and most cost saving option. Keep up the good work!!',
      author: 'Kulsum Davids',
      location: 'Cape Town',
    },
    {
      quote:
        'Dale Maharage has delivered excellent service in getting our telephone system up and running from the very first moment he made contact with us. Even after installation he has been in touch with us to establish that everything is running smoothly. Keep up the good work Dale.',
      author: 'Shahid Sonday',
      location: 'Cape Town',
    },
    {
      quote:
        'Excellent, efficient service from Zaheer Sing and his team of Daisy Solutions. Thank you guys for sorting out our telephone issues.',
      author: 'Pamela Naidoo',
      location: 'Westville',
    },
  ];

  const solutionsGrid = [
    {
      title: 'Business SD-WAN Solutions',
      desc: 'At Daisy all of our SD-WAN offerings can be designed and implemented for any company, no matter the size or location across South Africa.',
      href: '/services/connectivity/sd-wan',
      icon: Network,
    },
    {
      title: 'Business Fibre Solutions',
      desc: "Daisy Business Solutions provides high-speed, enterprise-grade fibre connectivity tailored to your organisation's operational demands.",
      href: '/services/connectivity/fibre',
      icon: Globe,
    },
    {
      title: 'Business LTE Solutions',
      desc: 'Daisy Business Solutions offers a wide range of connectivity solutions, such as business LTE solutions. Contact us for more info today.',
      href: '/services/connectivity/lte',
      icon: Radio,
    },
    {
      title: 'Voice Connectivity',
      desc: "Our voice connectivity solutions provide crystal clear communication for all staff members, whether you're a small team or large corporation.",
      href: '/services/connectivity/voice',
      icon: PhoneCall,
    },
    {
      title: 'Wireless Connectivity Solutions',
      desc: 'The most common examples of wireless connectivity solutions are GSM, 4G & 5G, Wifi, Point to Point, and Point to Multipoint Microwave.',
      href: '/services/connectivity/wireless',
      icon: Wifi,
    },
  ];

  return (
    <div className="min-h-full flex flex-col font-sans bg-white selection:bg-green-400 selection:text-green-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-green-950 text-white h-20 shadow-lg">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              alt="Daisy Business Solutions"
              src="/logo.png"
              width={148}
              height={42}
              className="h-auto w-[148px]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors text-white hover:text-green-400"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                Solutions
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    solutionsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mega Menu Dropdown */}
              <div
                className={`absolute top-full -left-20 w-[92vw] max-w-6xl bg-white shadow-2xl border-t border-gray-100 z-50 rounded-2xl p-6 transition-all duration-200 ${
                  solutionsOpen
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="grid grid-cols-4 lg:grid-cols-8 gap-x-3 gap-y-6">
                  {navSolutions.map((sol, idx) => {
                    const Icon = sol.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col border-l border-gray-200 first:border-l-0 pl-3 first:pl-0"
                      >
                        <Link
                          href={sol.href}
                          className="flex flex-col items-start gap-2.5 mb-3 group"
                        >
                          <div className="w-8 h-8 rounded bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                            <Icon className="w-4 h-4 text-green-ink" />
                          </div>
                          <span className="text-xs font-bold leading-snug text-gray-950 group-hover:text-green-950 transition-colors">
                            {sol.title}
                          </span>
                        </Link>
                        <ul className="space-y-1.5">
                          {sol.items.map((item, i) => (
                            <li key={i}>
                              <Link
                                href={item.href}
                                className="text-[11px] font-medium leading-snug text-gray-600 hover:text-green-950 transition-colors block py-0.5"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 border-t border-gray-100 pt-4 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href="/services/managed-services"
                    className="text-xs font-bold text-gray-950 hover:text-green-950 transition-colors"
                  >
                    Managed Services
                    <span className="ml-2 font-medium text-gray-600">
                      Everything above, under one contract and one SLA
                    </span>
                  </Link>
                  <Link
                    href="/services"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-green-50 text-gray-800 hover:text-green-950 transition-all"
                  >
                    View All Solutions & Services
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/specials"
              className="px-4 py-2 text-sm font-medium hover:text-green-400 transition-colors rounded-md"
            >
              Specials
            </Link>

            <div className="relative group">
              <Link
                href="/about"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-green-400 transition-colors rounded-md"
              >
                About
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-0 pt-2 w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-green-50 hover:text-green-950 rounded-lg"
                  >
                    About Daisy
                  </Link>
                  <Link
                    href="/company-profile"
                    className="block px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-green-50 hover:text-green-950 rounded-lg"
                  >
                    Company Profile
                  </Link>
                  <Link
                    href="/about/daisy-cares"
                    className="block px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-green-50 hover:text-green-950 rounded-lg"
                  >
                    Daisy Cares
                  </Link>
                  <Link
                    href="/about/culture"
                    className="block px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-green-50 hover:text-green-950 rounded-lg"
                  >
                    Our Culture
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium hover:text-green-400 transition-colors rounded-md"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium hover:text-green-400 transition-colors rounded-md"
            >
              Contact
            </Link>

            <div className="relative group">
              <Link
                href="/careers"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-green-400 transition-colors rounded-md"
              >
                Join Daisy
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-0 pt-2 w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                  <Link
                    href="/careers"
                    className="block px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-green-50 hover:text-green-950 rounded-lg"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/franchise"
                    className="block px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-green-50 hover:text-green-950 rounded-lg"
                  >
                    Franchise Opportunities
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:0112445000"
              className="flex items-center text-sm font-medium hover:text-green-400 transition-colors mr-2"
            >
              <Phone className="w-4 h-4 mr-2 text-green-400" />
              011 244 5000
            </a>

            <Link
              href="/log-a-service-call"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold text-white px-4 py-2 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_2px_10px_rgba(234,88,12,0.35)] hover:shadow-[0_4px_16px_rgba(234,88,12,0.45)] hover:-translate-y-0.5 transition-all"
            >
              Report an Issue
            </Link>

            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold text-green-950 px-5 py-2 bg-gradient-to-b from-green-400 to-green-500 shadow-[0_2px_10px_rgba(148,204,53,0.3)] hover:shadow-[0_4px_16px_rgba(148,204,53,0.4)] hover:-translate-y-0.5 transition-all font-bold"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-green-400 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-green-950 border-t border-green-800 text-white px-4 py-6 space-y-4">
            <Link
              href="/services/connectivity"
              className="block font-medium py-1 text-green-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connectivity Solutions
            </Link>
            <Link
              href="/specials"
              className="block font-medium py-1 hover:text-green-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Specials
            </Link>
            <Link
              href="/about"
              className="block font-medium py-1 hover:text-green-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Daisy
            </Link>
            <Link
              href="/blog"
              className="block font-medium py-1 hover:text-green-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block font-medium py-1 hover:text-green-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-green-800 flex flex-col gap-3">
              <a href="tel:0112445000" className="flex items-center gap-2 text-sm text-green-300">
                <Phone className="w-4 h-4" /> 011 244 5000
              </a>
              <Link
                href="/get-a-quote"
                className="w-full text-center py-2.5 rounded-xl bg-green-500 font-bold text-green-950"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Breadcrumb Bar */}
        <div className="bg-green-950 py-3.5 border-b border-green-800/80">
          <div className="container mx-auto px-4">
            <nav className="flex items-center text-xs font-medium text-green-100">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 mx-2 opacity-50" />
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3 h-3 mx-2 opacity-50" />
              <span className="text-white">Business Connectivity</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-green-950 overflow-hidden text-white py-16 md:py-24 lg:py-28">
          {/* Subtle glow effect */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-green-600/10 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-green-500/10 rounded-full blur-[120px] translate-y-1/4 pointer-events-none"
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.08] text-white">
                  <span className="text-green-400 capitalize">Business Connectivity</span> for South African Businesses
                </h1>

                <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
                  We connect, secure, and power your business with enterprise-grade connectivity infrastructure. One SLA across connectivity, IT, print, security, solar and finance.
                </p>

                <div className="flex flex-wrap gap-4 items-center mb-10">
                  <Link
                    href="/get-a-quote"
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-400 text-green-950 font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(148,204,53,0.45)] text-lg"
                  >
                    Build your connectivity solution
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-bold text-green-300 uppercase tracking-widest bg-green-600/10 border border-green-600/30 px-3.5 py-1.5 rounded-full">
                    Fibre, Wireless, LTE & VSAT
                  </span>
                  <span className="text-xs font-bold text-green-300 uppercase tracking-widest bg-green-600/10 border border-green-600/30 px-3.5 py-1.5 rounded-full">
                    SD-WAN Multi-Site
                  </span>
                  <span className="text-xs font-bold text-green-300 uppercase tracking-widest bg-green-600/10 border border-green-600/30 px-3.5 py-1.5 rounded-full">
                    Nationwide Coverage
                  </span>
                </div>
              </div>

              {/* Right Hero Media */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-green-800 shadow-2xl aspect-[4/3] lg:aspect-[4/4.5] group">
                  <video
                    src="/videos/services/connectivity-scrub.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs font-bold text-green-400 uppercase tracking-widest bg-green-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-green-600/30">
                      Enterprise Connectivity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Section Subnav */}
        <section className="bg-white/95 backdrop-blur-xl py-20 -mt-10 relative z-20 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-gray-100">
          <div className="sticky top-20 z-40 border-y border-green-800/60 bg-green-950 backdrop-blur-md mb-16 py-2 shadow-sm">
            <nav aria-label="Page sections" className="container mx-auto max-w-6xl px-4">
              <div className="flex items-stretch gap-2 overflow-x-auto py-1 scrollbar-none">
                <a
                  href="#overview"
                  className="flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold bg-green-600/25 text-white ring-1 ring-green-400/60 transition-colors"
                >
                  <span className="font-mono text-[10px] tabular-nums text-green-300">01</span>
                  <span>Connectivity is three decisions</span>
                </a>
                <a
                  href="#why-daisy"
                  className="flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-green-100/85 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <span className="font-mono text-[10px] tabular-nums text-green-100/85">02</span>
                  <span>Why this is a Daisy conversation</span>
                </a>
                <a
                  href="#how-it-works"
                  className="flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-green-100/85 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <span className="font-mono text-[10px] tabular-nums text-green-100/85">03</span>
                  <span>How it works</span>
                </a>
                <a
                  href="#wondering"
                  className="flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-green-100/85 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <span className="font-mono text-[10px] tabular-nums text-green-100/85">04</span>
                  <span>What you are probably wondering</span>
                </a>
                <a
                  href="#site-assessment"
                  className="flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-green-100/85 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <span className="font-mono text-[10px] tabular-nums text-green-100/85">05</span>
                  <span>Get a site assessment</span>
                </a>
                <a
                  href="#watch"
                  className="flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-green-100/85 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <span className="font-mono text-[10px] tabular-nums text-green-100/85">06</span>
                  <span>Watch</span>
                </a>
              </div>
            </nav>
          </div>

          {/* Overview Content */}
          <div id="overview" className="container mx-auto px-4 max-w-5xl">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest mb-3 text-green-ink">Overview</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight text-green-950">
                Scale your business with Daisy Business Connectivity
              </h2>
            </div>

            <p className="mb-12 flex flex-wrap items-center gap-x-3 gap-y-1 border-l-2 border-green-600 pl-4 text-sm text-gray-600">
              <span className="font-semibold uppercase tracking-[0.14em] text-green-950">40+ years</span>
              <span>supplying connectivity to South African businesses, from 56 branches nationwide.</span>
            </p>

            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7 text-gray-700 leading-relaxed space-y-5 text-base sm:text-lg">
                <p>
                  Most businesses do not choose their connectivity. They inherit it: a{' '}
                  <strong className="text-gray-950">fibre contract</strong> signed three years ago, a second site on{' '}
                  <strong className="text-gray-950">LTE</strong> because fibre was not available then, a third site on whatever the last vendor recommended. Nobody looks back until the moment a power outage or a fibre cut takes down a branch for six hours.
                </p>
                <p>
                  That is when &quot;we are connected&quot; and &quot;we are reliably connected&quot; turn out to be two very different promises.
                </p>
                <p>
                  Daisy Connectivity starts with your sites, not a product catalogue. We assess what is available at each location, what you are currently paying for, and where the actual pain shows up. Then we build a network from fibre, licensed wireless, LTE, VSAT, SD-WAN, hosting, and backup. Whatever combination your business genuinely needs, not what is easiest to sell.
                </p>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 relative group aspect-[4/5]">
                  <Image
                    alt="Business Connectivity visualization"
                    src="/services/connectivity_hero.jpg"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>

            {/* Three Decisions */}
            <div className="max-w-3xl mx-auto my-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-green-950 mb-4">
                Connectivity is three decisions, not one
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your network&apos;s resilience and cost profile are shaped by three independent choices. Most service providers only discuss the first. Daisy&apos;s Connectivity Director, Duane O&apos;Bryan, explains:
              </p>

              <blockquote className="border-l-4 border-green-500 pl-4 py-2 italic text-gray-800 bg-green-50/50 rounded-r-xl mb-6">
                &quot;Connectivity isn&apos;t a single decision, it&apos;s three, and most providers only talk to you about the first.&quot;
              </blockquote>

              <p className="text-gray-700 leading-relaxed mb-8">
                These three decisions determine everything about your network: how you connect your sites, how you secure that network, and where and how you host and back up your data.
              </p>

              {/* 3 Step Icons Diagram */}
              <div className="my-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-600 flex items-center justify-center mb-3 shadow-sm">
                    <Zap className="w-10 h-10 text-green-ink" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 text-center leading-tight max-w-[120px]">
                    How you connect
                  </p>
                </div>

                <div className="text-green-ink text-2xl font-bold hidden sm:block">→</div>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-600 flex items-center justify-center mb-3 shadow-sm">
                    <Shield className="w-10 h-10 text-green-ink" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 text-center leading-tight max-w-[120px]">
                    How you secure your network
                  </p>
                </div>

                <div className="text-green-ink text-2xl font-bold hidden sm:block">→</div>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-600 flex items-center justify-center mb-3 shadow-sm">
                    <HardDrive className="w-10 h-10 text-green-ink" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 text-center leading-tight max-w-[120px]">
                    How you host and backup
                  </p>
                </div>
              </div>

              {/* Six Options Grid */}
              <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2 my-12">
                {connectivityOptions.map((opt, i) => (
                  <div key={i} className="border-t-2 border-green-950 pt-4 pb-2">
                    <span className="font-mono text-xs font-bold tabular-nums text-green-ink">
                      {opt.num}
                    </span>
                    <h3 className="font-display font-bold leading-snug text-green-950 mt-1 text-lg">
                      {opt.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {opt.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Security Details */}
              <div className="space-y-4 my-8">
                <h3 className="font-display font-bold text-xl text-green-950">
                  How you secure your network
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In many organisations, cyber security is concentrated at head or regional offices while smaller branches run undefended. This creates a vulnerability: a site that looks insignificant from head office can become the entry point to your entire network.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Branch security should match head office security, not lag three versions behind it. That means deploying equivalent firewalls, endpoint detection and response, and intrusion prevention at every site. A single compromised branch can expose sensitive corporate data or customer information to cybercriminals. Connectivity and security should be planned together, not bolted on afterwards.
                </p>
              </div>

              {/* 3-2-1 Backup Banner */}
              <div className="my-8 p-6 rounded-2xl border bg-orange-50 border-orange-200">
                <div className="flex items-center gap-3 mb-2">
                  <CircleAlert className="w-6 h-6 text-orange-500 shrink-0" />
                  <h4 className="font-display font-bold text-orange-950 text-lg">
                    The 3-2-1 Backup Rule
                  </h4>
                </div>
                <div className="text-sm sm:text-base text-orange-900 leading-relaxed">
                  <strong>3</strong> copies of your data / <strong>2</strong> different storage media / <strong>1</strong> off-site backup. Off-site redundancy means your data survives a site going down.
                </div>
              </div>

              {/* Hosting & Backup Details */}
              <div className="space-y-4 my-8">
                <h3 className="font-display font-bold text-xl text-green-950">
                  How you host, backup and secure your data
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Where your servers and data live determines how fast you can recover from a site failure. The choice is not binary: on-premises, cloud, or hybrid setups each have different failure modes and recovery costs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For on-premises deployments, off-site backup is essential. When a site goes down due to power loss or a physical disaster, your servers are unreachable but your data survives because a third copy exists elsewhere. Cloud deployments automatically distribute data across multiple zones and sites, but you still need a validated restoration process and a second point of backup outside the primary cloud region. Hybrid setups add complexity but can be cost-effective: critical systems in the cloud for uptime, less critical systems on-premises, with backups spanning both. The question is not which model is best, but which matches your business&apos;s actual failure tolerance and budget.
                </p>
              </div>
            </div>

            {/* Why This is a Daisy Conversation */}
            <div id="why-daisy" className="max-w-3xl mx-auto my-16 pt-8 border-t border-gray-100">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-green-950 mb-4">
                Why this is a Daisy conversation, not a telco one
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p className="font-semibold text-gray-950">
                  An ISP sells you their product. Daisy is not tied to just one network or service provider.
                </p>
                <p>
                  With 40 years in South African business technology and 56 branches nationwide, we have built connectivity for sites where fibre works perfectly and sites where it will never arrive, sometimes for the same client in the same month. We understand each site&apos;s constraints and can design around them. That is the difference between a provider recommending what they sell and a partner recommending what your business will truly benefit from.
                </p>
                <p>
                  For a retail group running 60 stores nationally, we implemented SD-WAN with automatic wireless and LTE failover at every site. When their Johannesburg head office&apos;s primary fibre connection went down due to cable theft in March, the backup switched over immediately. All 60 stores stayed connected and functioning. Not one sale was lost because we specified the failover in advance, tested it, and configured it to switch automatically.
                </p>
                <p className="font-medium text-gray-900">
                  That is what business-grade connectivity means: the fallback is already configured, tested, and switching over on its own, not hidden in a box gathering dust.
                </p>
              </div>
            </div>

            {/* How It Works Timeline */}
            <div id="how-it-works" className="max-w-3xl mx-auto my-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-green-950 mb-8">
                How it works
              </h2>
              <ol className="relative list-none rounded-3xl bg-green-950 p-8 md:p-12 flex flex-col space-y-8">
                {howItWorksSteps.map((step, idx) => (
                  <li key={idx} className="relative flex gap-5">
                    {idx < howItWorksSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-6 top-12 bottom-0 w-px -translate-x-1/2 bg-green-600/30"
                      />
                    )}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 font-display text-sm font-bold tabular-nums text-green-950">
                      {step.num}
                    </div>
                    <div className="min-w-0 pt-2">
                      <h3 className="font-display text-lg font-semibold leading-snug text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-green-100">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Failover note banner */}
              <div className="my-8 p-6 rounded-2xl border bg-orange-50 border-orange-200">
                <div className="flex items-center gap-3 mb-2">
                  <CircleAlert className="w-6 h-6 text-orange-500 shrink-0" />
                  <h4 className="font-display font-bold text-orange-950 text-lg">
                    Failover is specified, not assumed
                  </h4>
                </div>
                <div className="text-sm sm:text-base text-orange-900 leading-relaxed">
                  Failover should not be accidental. A properly configured backup connection that has never been tested is not redundancy, it is a box gathering dust. We design, configure, and test the switchover before your primary line is touched, so when it fails, your network stays up.
                </div>
              </div>
            </div>

            {/* What you are probably wondering */}
            <div id="wondering" className="max-w-3xl mx-auto my-16 border-t-2 border-green-950 pt-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-green-950 mb-8">
                What you are probably wondering
              </h2>
              <div className="space-y-6">
                <div className="grid gap-x-10 gap-y-3 border-b border-gray-200 pb-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                  <div className="flex gap-4">
                    <span className="font-mono text-xs font-bold tabular-nums text-green-ink">01</span>
                    <h4 className="font-display text-base font-bold text-green-950">
                      We already have fibre. What would you actually change?
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Often we do not touch the primary line at all. The missing piece is usually properly configured failover, consolidated visibility across sites, or a hosting and backup setup. The assessment tells you honestly if your current setup is already sound. We will not manufacture a problem in order to sell a solution.
                  </p>
                </div>

                <div className="grid gap-x-10 gap-y-3 border-b border-gray-200 pb-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                  <div className="flex gap-4">
                    <span className="font-mono text-xs font-bold tabular-nums text-green-ink">02</span>
                    <h4 className="font-display text-base font-bold text-green-950">
                      How disruptive is switching providers?
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    We plan cutovers around your live line staying up until the new one is proven, not the other way around. The goal is zero visible downtime for your team.
                  </p>
                </div>

                <div className="grid gap-x-10 gap-y-3 border-b border-gray-200 pb-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                  <div className="flex gap-4">
                    <span className="font-mono text-xs font-bold tabular-nums text-green-ink">03</span>
                    <h4 className="font-display text-base font-bold text-green-950">
                      What if fibre genuinely is not available at our site?
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    That is exactly why our teams are licensed to install wireless, LTE and VSAT. Well-configured licensed wireless with proper redundancy performs close enough to fibre that the difference does not meaningfully affect most operations.
                  </p>
                </div>

                <div className="grid gap-x-10 gap-y-3 border-b border-gray-200 pb-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                  <div className="flex gap-4">
                    <span className="font-mono text-xs font-bold tabular-nums text-green-ink">04</span>
                    <h4 className="font-display text-base font-bold text-green-950">
                      Can you handle multiple sites as one network, or is it site by site?
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    SD-WAN is built for exactly this. It treats a multi-site business as one managed network rather than a collection of separate connections.
                  </p>
                </div>
              </div>
            </div>

            {/* Site Assessment CTA */}
            <div id="site-assessment" className="max-w-3xl mx-auto my-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-green-950 mb-4">
                Get a site assessment, not a sales pitch
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Send us the details of your current setup: how many sites, what you are running now, and where the pain actually shows up, whether that is drops, slow failover or no visibility. We will tell you whether your connectivity needs rebuilding or just one or two fixes. If it is the latter, that is what we will say.
              </p>
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6 sm:p-7">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-4 font-display text-base font-bold text-green-950 shadow-[0_0_40px_-12px_rgba(148,204,53,0.6)] transition-all"
                >
                  Get a connectivity review
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Per-site assessment across fibre, wireless, LTE and SD-WAN.
                </p>
              </div>
            </div>

            {/* Watch Section */}
            <div id="watch" className="max-w-3xl mx-auto my-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-green-950 mb-6">
                Watch
              </h2>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/rf1GIEt7ImM"
                  title="Daisy Business Connectivity"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Solutions Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-green-950 mb-4">
                Our Business Connectivity Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Select a specialised solution below to discover how we can transform your business infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {solutionsGrid.map((sol, idx) => {
                const Icon = sol.icon;
                return (
                  <Link key={idx} href={sol.href} className="block group h-full">
                    <div className="relative bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between hover:-translate-y-1">
                      <div>
                        <div className="w-14 h-14 bg-green-950 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300 shadow-md">
                          <Icon className="w-7 h-7 text-green-400" />
                        </div>
                        <h3 className="font-display font-bold text-xl text-green-950 mb-3 group-hover:text-green-700 transition-colors">
                          {sol.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-6">
                          {sol.desc}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-sm font-bold text-green-ink group-hover:gap-2.5 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="py-24 bg-green-950 text-white relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-bold uppercase tracking-widest mb-3 text-green-400">Client Reviews</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                What our clients say
              </h2>
              <p className="text-base sm:text-lg text-green-100 leading-relaxed">
                Real reviews from South African businesses that trust Daisy every day - not a word of it written by us.
              </p>

              {/* Overall badge */}
              <div className="inline-flex flex-wrap items-center justify-center gap-4 mt-8 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-extrabold text-white">1,600+</span>
                  <div className="flex flex-col items-start">
                    <div className="flex gap-0.5 text-green-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
                      ))}
                    </div>
                    <span className="text-xs text-white/75 mt-0.5">real customer reviews</span>
                  </div>
                </div>
                <div className="hidden sm:block h-8 w-px bg-white/10" />
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-green-400" />
                  <span className="text-xs sm:text-sm text-white/80">
                    Real 4- & 5-star reviews across South Africa
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <figure
                  key={idx}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl hover:border-green-400/60 transition-all hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-white/15" />
                    </div>
                    <blockquote className="text-sm sm:text-base leading-relaxed text-white/90">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-bold text-white text-sm">{t.author}</span>
                      <BadgeCheck className="w-4 h-4 text-green-400 shrink-0" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold text-white/60">
                      {t.location}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Alongside Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display font-bold text-2xl text-green-950 mb-8 text-center">
              Solutions That Work Alongside Business Connectivity
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link
                href="/services/telecoms"
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/60 p-6 transition-all hover:border-green-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-green-950 group-hover:text-green-700 transition-colors">
                    Business Telecoms
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                    Business fibre and LTE failover are what your cloud phone system and VoIP actually run on.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </Link>

              <Link
                href="/services/it"
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/60 p-6 transition-all hover:border-green-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-green-950 group-hover:text-green-700 transition-colors">
                    Managed IT Services
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                    Connectivity is the foundation everything else - cloud, backups, VoIP - depends on staying up.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-widest mb-3 text-green-ink">FAQ</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight text-green-950">
                Common questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-display font-bold text-green-950 text-base">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-green-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-5 sm:p-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final Audit CTA Banner */}
        <section className="py-24 bg-green-950 text-white relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #94CC35 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
            <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-3">
              Get Started
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Upgrade your Business Connectivity today
            </h2>
            <p className="text-green-100 mb-6 text-lg">
              40+ years · 56 branches · one account manager. No excuses.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-sm text-green-200">
              <span className="flex items-center gap-1.5">
                <CircleCheck className="w-4 h-4 text-green-400 shrink-0" /> No obligation audit
              </span>
              <span className="flex items-center gap-1.5">
                <CircleCheck className="w-4 h-4 text-green-400 shrink-0" /> Personal response, not a call centre
              </span>
              <span className="flex items-center gap-1.5">
                <CircleCheck className="w-4 h-4 text-green-400 shrink-0" /> Custom proposal in 48hrs
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-bold bg-green-500 hover:bg-green-400 text-green-950 px-8 py-3.5 text-base shadow-[0_2px_10px_rgba(148,204,53,0.3)] hover:-translate-y-0.5 transition-all"
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
      </main>

      {/* Comprehensive Footer */}
      <footer className="bg-green-950 text-white pt-16 pb-8 border-t border-green-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  alt="Daisy Business Solutions"
                  src="/logo.png"
                  width={148}
                  height={42}
                  className="w-[148px] h-auto"
                />
              </Link>
              <p className="text-sm text-green-100 mb-6 max-w-sm leading-relaxed">
                One technology partner for connectivity, IT, print, security, solar, and finance - no juggling vendors.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/connectivity" className="text-sm text-green-100 hover:text-white transition-colors">
                    Connectivity
                  </Link>
                </li>
                <li>
                  <Link href="/services/telecoms" className="text-sm text-green-100 hover:text-white transition-colors">
                    Telecoms
                  </Link>
                </li>
                <li>
                  <Link href="/services/it" className="text-sm text-green-100 hover:text-white transition-colors">
                    IT Managed Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/software" className="text-sm text-green-100 hover:text-white transition-colors">
                    Software
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" className="text-sm text-green-100 hover:text-white transition-colors">
                    Business Security
                  </Link>
                </li>
                <li>
                  <Link href="/services/print" className="text-sm text-green-100 hover:text-white transition-colors">
                    Print & Document
                  </Link>
                </li>
                <li>
                  <Link href="/services/energy" className="text-sm text-green-100 hover:text-white transition-colors">
                    Solar & Energy
                  </Link>
                </li>
                <li>
                  <Link href="/services/finance" className="text-sm text-green-100 hover:text-white transition-colors">
                    Business Finance
                  </Link>
                </li>
                <li>
                  <Link href="/services/managed-services" className="text-sm text-green-100 hover:text-white transition-colors">
                    Managed Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-green-100 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about/culture" className="text-sm text-green-100 hover:text-white transition-colors">
                    Our Culture
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-green-100 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/franchise" className="text-sm text-green-100 hover:text-white transition-colors">
                    Franchise Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-green-100 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-green-100 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/get-a-quote" className="text-sm text-green-100 hover:text-white transition-colors">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg mb-4 text-white">Contact Us</h4>
              <ul className="space-y-4 mb-8">
                <li>
                  <a
                    href="tel:0112445000"
                    className="flex items-center gap-3 text-sm text-green-100 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-green-400 shrink-0" />
                    011 244 5000
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@daisy.co.za"
                    className="flex items-center gap-3 text-sm text-green-100 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-green-400 shrink-0" />
                    info@daisy.co.za
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-green-100">
                  <MapPin className="w-4 h-4 text-green-400 shrink-0" />
                  16 Peter Place, Bryanston, 2191
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-green-800 flex flex-col md:flex-row items-center justify-between text-xs text-green-100">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Daisy Business Solutions (Pty) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/info/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/info/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/info/paia-manual" className="hover:text-white transition-colors">
                PAIA Manual
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
