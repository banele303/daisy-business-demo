import { ServiceHubTemplate } from '@/components/ServiceHubTemplate';

export const metadata = {
  title: 'Office Printers, Copiers & Fleet Management | Daisy Business Solutions',
  description: 'Multifunctional office copiers, month-to-month printer rentals, wide-format architectural plotters, and managed print services.',
};

export default function PrintPage() {
  return (
    <ServiceHubTemplate
      title="Print & Document"
      badge="Office Copiers & Managed Print Fleet"
      heroText="From heavy-duty colour departmental MFPs to flexible month-to-month printer rentals with toner replenishment included."
      videoSrc="/videos/services/print-scrub.mp4"
      subservices={[
        {
          title: 'Mono & Colour A3/A4 MFPs',
          desc: 'High-speed multifunction copiers that print, scan to email, and staple with minimal page-per-minute cost.',
          href: '/services/print/mono-and-colour-a3-a4',
        },
        {
          title: 'Month-2-Month Printer Rentals',
          desc: 'Flexible short-term rentals without being locked into long multi-year financing agreements.',
          href: '/services/print/month-2-month-printer-rentals',
        },
        {
          title: 'Print Fleet Management',
          desc: 'Automated toner ordering, device health monitoring, and user quotas to prevent paper waste.',
          href: '/services/print/print-fleet-management',
        },
        {
          title: 'Wide Format Plotters',
          desc: 'Engineering, CAD, and graphic-grade wide-format printers for technical drawings and banners.',
          href: '/services/print/wide-format',
        },
        {
          title: 'Refurbished Copiers',
          desc: 'Certified pre-owned commercial office copiers delivering enterprise performance at entry-level rates.',
          href: '/services/print/refurbished',
        },
      ]}
      benefits={[
        'All-inclusive cost-per-page agreements including toner and parts',
        'Automatic error reporting sends a technician before you run out of consumables',
        'Follow-me secure printing requiring swipe-card release',
        'High scanning speeds with OCR conversion to searchable PDFs',
        'Top brands including HP, Kyocera, and Konica Minolta',
        'Rapid technician dispatch from 56 branches nationwide',
      ]}
    />
  );
}
