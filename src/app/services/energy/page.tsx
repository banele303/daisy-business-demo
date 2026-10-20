import { ServiceHubTemplate } from '@/components/ServiceHubTemplate';

export const metadata = {
  title: 'Commercial Solar & Backup Energy Solutions | Daisy Business Solutions',
  description: 'Industrial solar panel installations, rent-to-own solar, diesel generators, and heavy-duty UPS systems for load shedding.',
};

export default function EnergyPage() {
  return (
    <ServiceHubTemplate
      title="Solar & Energy"
      badge="Resilient Power & Renewable Energy"
      heroText="Never let load shedding interrupt your revenue. Engineered solar arrays, battery inverters, generators, and seamless UPS changeover."
      videoSrc="/videos/services/energy-scrub.mp4"
      subservices={[
        {
          title: 'Commercial Solar Solutions',
          desc: 'Custom-engineered rooftop photovoltaic solar setups that drastically cut operational electricity expenses.',
          href: '/services/energy/solar-solutions',
        },
        {
          title: 'Rent-to-Own Solar',
          desc: 'Adopt green energy with zero capital outlay and affordable monthly operational payments.',
          href: '/services/energy/rent-to-own-solar',
        },
        {
          title: 'Diesel Backup Generators',
          desc: 'Industrial generators with automatic transfer switches (ATS) that turn on immediately during grid cuts.',
          href: '/services/energy/generators',
        },
        {
          title: 'UPS Backup Systems',
          desc: 'Continuous uninterruptible power supplies to protect your servers, routers, and POS terminals from surges.',
          href: '/services/energy/ups-backup',
        },
      ]}
      benefits={[
        'Full immunity from Eskom load shedding cycles',
        'Tax incentive maximization under Section 12B allowances',
        'Remote cloud telemetry tracking real-time kilowatt production',
        'Tier-1 panels, inverters, and lithium-iron-phosphate (LiFePO4) storage',
        'Complete turnkey project engineering from approvals to commissioning',
        'Ongoing preventive maintenance and cleaning schedules',
      ]}
    />
  );
}
