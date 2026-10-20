import Image from 'next/image';
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
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'All Solutions & Services | Daisy Business Solutions',
  description: 'Explore the full spectrum of Daisy technology solutions: Connectivity, Telecoms, IT, Software, Security, Print, Energy, and Finance.',
};

const servicesList = [
  {
    title: 'Connectivity',
    desc: 'Fibre, licensed wireless, LTE, VSAT and SD-WAN. Carrier-independent, specified per site for maximum uptime.',
    href: '/services/connectivity',
    icon: Wifi,
    features: ['Carrier-Independent Fibre', 'High-Capacity Wireless Failover', 'Managed SD-WAN Orchestration', '24/7/365 Proactive NOC Monitoring'],
  },
  {
    title: 'Telecoms & Cloud PBX',
    desc: 'Yeastar Titanium Partner. Cloud PBX, SIP trunking, Teams voice integration and call center suites.',
    href: '/services/telecoms',
    icon: PhoneCall,
    features: ['Yeastar Titanium Partner', 'MS Teams Direct Routing', 'Call Recording & Analytics', 'Mobile Extension Softphones'],
  },
  {
    title: 'IT Managed Services',
    desc: 'Microsoft Modern Workplace, cloud migrations, backup, cybersecurity and 24/7 proactive monitoring.',
    href: '/services/it',
    icon: Server,
    features: ['24/7 Helpdesk & Desktop Support', 'Microsoft 365 & Azure Migrations', 'Ransomware & Threat Defense', 'Guaranteed SLA Resolution Times'],
  },
  {
    title: 'Software Solutions',
    desc: 'Business intelligence, custom workflow automation, document management and ERP integration.',
    href: '/services/software',
    icon: CodeXml,
    features: ['Workflow Process Automation', 'Document Capture & Archiving', 'Cloud ERP & CRM Systems', 'Custom Data Dashboards'],
  },
  {
    title: 'Business Security',
    desc: 'AI-driven CCTV, access control, biometrics, turnstiles, number plate recognition and perimeter protection.',
    href: '/services/security',
    icon: Shield,
    features: ['AI License Plate Recognition', 'Biometric Access Control', 'Thermal & Perimeter Sensors', 'Off-site Monitoring Integration'],
  },
  {
    title: 'Print & Document Management',
    desc: 'Canon Diamond Partner of the Year. High-efficiency multifunction copiers, production print and paperless flow.',
    href: '/services/print',
    icon: Printer,
    features: ['Canon Diamond Partner of the Year', 'Automatic Toner Replenishment', 'Follow-Me Secure Printing', 'Flexible Cost-Per-Page Leasing'],
  },
  {
    title: 'Solar & Renewable Energy',
    desc: 'Commercial and industrial solar PV installations, hybrid inverters, battery storage and load-shedding immunity.',
    href: '/services/energy',
    icon: Sun,
    features: ['Tier-1 Solar Panels & Inverters', 'Custom Battery Storage Sizing', 'Zero Capex PPA & Rental Options', 'Real-time Generation Telemetry'],
  },
  {
    title: 'Business Asset Finance',
    desc: 'In-house asset rental and financing. Keep credit facilities clear and upgrade hardware seamlessly as technology evolves.',
    href: '/services/finance',
    icon: Landmark,
    features: ['Off-balance Sheet Asset Financing', 'Preserve Commercial Bank Lines', 'Seamless Mid-term Upgrades', '100% Tax Deductible OPEX'],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Services Hero */}
      <section className="bg-green-950 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-3">Enterprise Portfolio</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Our Solutions & Services
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Scalable technology designed to power modern South African business operations under one unified agreement.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-green-950 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-green-400" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-green-950 mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                    <ul className="space-y-2 mb-8 border-t border-gray-100 pt-4">
                      {svc.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-xs text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-gray-50 hover:bg-green-700 hover:text-white font-bold text-sm text-green-950 transition-all group"
                  >
                    <span>View {svc.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
