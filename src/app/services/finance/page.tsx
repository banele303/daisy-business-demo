import { ServiceHubTemplate } from '@/components/ServiceHubTemplate';

export const metadata = {
  title: 'Business Asset & Technology Finance | Daisy Business Solutions',
  description: 'Flexible technology equipment rentals, structured commercial leasing, and capital-preserving asset finance.',
};

export default function FinancePage() {
  return (
    <ServiceHubTemplate
      title="Business Finance"
      badge="Commercial Asset Financing"
      heroText="Preserve your bank credit facilities. Upgrade your IT, copiers, solar systems, and telecoms with customized operational leases."
      videoSrc="/videos/services/finance-scrub.mp4"
      subservices={[
        {
          title: 'Daisy Finance Solutions',
          desc: 'Internal asset finance specialized in office technology deployments with fast, friction-free approvals.',
          href: '/services/finance/daisy-finance',
        },
        {
          title: 'Structured Commercial Rentals',
          desc: 'Off-balance-sheet operating leases that treat equipment investments as tax-deductible operating expenses.',
          href: '/services/finance/business-finance-solutions',
        },
      ]}
      benefits={[
        'Preserve your primary banking facilities for core operational cashflow',
        'Built-in technology refresh clauses to prevent equipment obsolescence',
        '100% tax-deductible monthly operating expenses (OPEX)',
        'Fast credit turnaround within 24 to 48 hours',
        'Flexible payment structures matched to seasonal cash cycles',
        'No surprise balloon payments at term conclusion',
      ]}
    />
  );
}
