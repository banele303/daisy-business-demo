import { ServiceHubTemplate } from '@/components/ServiceHubTemplate';

export const metadata = {
  title: 'Workflow Automation & Document Management | Daisy Business Solutions',
  description: 'Intelligent document management, accounts payable automation, digital signatures, and robotic process automation.',
};

export default function SoftwarePage() {
  return (
    <ServiceHubTemplate
      title="Software"
      badge="Workflow Digitisation & Document Management"
      heroText="Eliminate manual filing, paper approvals, and invoice data entry. Digitize your company's records with cloud-based workflows."
      videoSrc="/videos/services/software-scrub.mp4"
      subservices={[
        {
          title: 'Electronic Document Management',
          desc: 'Centralized cloud document repositories with instant keyword search and role-based permissions.',
          href: '/services/software/electronic-document-management',
        },
        {
          title: 'Accounts Payable Automation',
          desc: 'Capture invoice data automatically with AI and match against purchase orders with zero human entry.',
          href: '/services/software/accounts-payable-automation',
        },
        {
          title: 'Process Automation & RPA',
          desc: 'Eliminate repetitive manual tasks by automating data movement between your ERP and accounting systems.',
          href: '/services/software/process-automation-and-workflows',
        },
        {
          title: 'Digital Forms & Electronic Approvals',
          desc: 'Replace physical carbon-copy forms with mobile-friendly digital forms and digital signatures.',
          href: '/services/software/digital-forms-and-approvals',
        },
        {
          title: 'Contract Lifecycle Management',
          desc: 'Track renewal deadlines, vendor agreements, and non-disclosure documents with automated alerts.',
          href: '/services/software/contract-lifecycle-management',
        },
      ]}
      benefits={[
        'Find any archived invoice or contract in under 3 seconds',
        'Cut accounts payable processing cycles from weeks to hours',
        'Ensure 100% compliance with POPIA retention mandates',
        'Audit trails showing who viewed, edited, or approved any document',
        'Direct integrations with Sage, Xero, SAP, and Microsoft Dynamics',
        'Secure cloud hosting with redundant regional backups',
      ]}
    />
  );
}
