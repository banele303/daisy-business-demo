import { ServiceHubTemplate } from '@/components/ServiceHubTemplate';

export const metadata = {
  title: 'IT Managed Services & Cloud Infrastructure | Daisy Business Solutions',
  description: 'Proactive IT support, server management, Microsoft 365, cyber security firewalls, and hardware for South African companies.',
};

export default function ITPage() {
  return (
    <ServiceHubTemplate
      title="IT Managed Services"
      badge="Enterprise IT & Cyber Security"
      heroText="Complete end-to-end IT support and managed services. Protect your servers, cloud assets, and endpoints with 24/7 proactive monitoring."
      videoSrc="/videos/services/it-scrub.mp4"
      subservices={[
        {
          title: 'Managed User Services',
          desc: 'Fast desktop and remote support for your staff, software provisioning, and day-to-day IT troubleshooting.',
          href: '/services/it/managed-user-services',
        },
        {
          title: 'Managed Server Services',
          desc: 'High availability virtualization, patch management, routine audits, and disaster recovery replication.',
          href: '/services/it/managed-server-services',
        },
        {
          title: 'Managed Cloud Services',
          desc: 'Azure, AWS, and Microsoft 365 migrations, licensing optimization, and cloud tenant management.',
          href: '/services/it/managed-cloud-services',
        },
        {
          title: 'Managed Firewall & Cyber Security',
          desc: 'Next-generation firewalls, endpoint detection and response (EDR), threat mitigation, and phishing protection.',
          href: '/services/it/managed-firewall-services',
        },
        {
          title: 'Managed Network Services',
          desc: 'Switching, structured cabling, Wi-Fi 6 access point deployments, and VLAN segmentation.',
          href: '/services/it/managed-network-services',
        },
        {
          title: 'Enterprise IT Hardware',
          desc: 'Laptops, desktops, monitors, server racks, and network gear from HP, Dell, Lenovo, and Cisco.',
          href: '/services/it/it-hardware',
        },
      ]}
      benefits={[
        'Predictable monthly operational expenditure with zero surprise repair bills',
        'Guaranteed response times with certified network engineers',
        'Proactive monitoring identifies issues before staff experience downtime',
        'Full compliance support with POPIA and ISO security guidelines',
        'Daily off-site cloud backup verification',
        'Hardware procurement and asset lifecycle retirement',
      ]}
    />
  );
}
