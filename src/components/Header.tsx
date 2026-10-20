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
} from 'lucide-react';

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

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
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
                  href="/about/culture"
                  className="block px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-green-50 hover:text-green-950 rounded-lg"
                >
                  Our Culture
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium hover:text-green-400 transition-colors rounded-md"
          >
            Contact
          </Link>

          <div className="relative group">
            <Link
              href="/franchise"
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-green-400 transition-colors rounded-md"
            >
              Franchise
            </Link>
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
            href="/services"
            className="block font-medium py-1 text-green-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            All Solutions & Services
          </Link>
          <Link
            href="/services/connectivity"
            className="block font-medium py-1 hover:text-green-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Connectivity
          </Link>
          <Link
            href="/services/telecoms"
            className="block font-medium py-1 hover:text-green-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Telecoms
          </Link>
          <Link
            href="/services/it"
            className="block font-medium py-1 hover:text-green-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            IT Managed Services
          </Link>
          <Link
            href="/services/security"
            className="block font-medium py-1 hover:text-green-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Security
          </Link>
          <Link
            href="/services/energy"
            className="block font-medium py-1 hover:text-green-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Solar & Energy
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
  );
}
