import { ServiceHubTemplate } from '@/components/ServiceHubTemplate';

export const metadata = {
  title: 'All-In-One Managed Services | Daisy Business Solutions',
  description: 'Unify connectivity, IT, security, telecoms, copiers, and power under one comprehensive contract and nationwide SLA.',
};

export default function ManagedServicesPage() {
  return (
    <ServiceHubTemplate
      title="Managed Services"
      badge="Unified Operations & Vendor Consolidation"
      heroText="Stop juggling a dozen vendor invoices and support numbers. Bring your entire office technology stack under one SLA, one invoice, and one partner."
      videoSrc="/videos/services/it-scrub.mp4"
      subservices={[
        {
          title: 'Complete Office Tech Bundle',
          desc: 'Seamlessly combine fibre internet, cloud phones, office copiers, and managed IT in one monthly fee.',
          href: '/services/managed-services',
        },
        {
          title: 'Managed Branch Deployments',
          desc: 'Rapid turnkey branch rollouts including cabling, access control, Wi-Fi, and workstations.',
          href: '/services/it/managed-network-services',
        },
        {
          title: 'Unified Helpdesk & SLA Support',
          desc: '24/7 priority ticket escalation across 56 service centers across South Africa.',
          href: '/contact',
        },
      ]}
      benefits={[
        'Single monthly consolidated invoice across all branches and systems',
        'One dedicated Key Account Manager who knows your business history',
        'Zero vendor disputes: if something goes down, we resolve it immediately',
        'Significant bulk bundling discounts across hardware and data links',
        'Proactive quarterly business technology reviews (QBRs)',
        'Full national coverage from major metros to outlying regional towns',
      ]}
    />
  );
}
