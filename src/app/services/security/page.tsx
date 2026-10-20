import { ServiceHubTemplate } from '@/components/ServiceHubTemplate';

export const metadata = {
  title: 'Business Security & CCTV Access Control | Daisy Business Solutions',
  description: 'AI-driven commercial surveillance cameras, biometrics, turnstiles, thermal cameras, and time & attendance.',
};

export default function SecurityPage() {
  return (
    <ServiceHubTemplate
      title="Business Security"
      badge="Commercial Surveillance & Biometrics"
      heroText="Safeguard your assets, warehouses, and offices with integrated CCTV cameras, intelligent access control, and smart biometrics."
      videoSrc="/videos/services/security-scrub.mp4"
      subservices={[
        {
          title: 'Commercial CCTV Surveillance',
          desc: 'High-definition 4K IP cameras with AI object tracking, license plate recognition, and perimeter intrusion alerts.',
          href: '/services/security/cctv',
        },
        {
          title: 'Biometric Access Control',
          desc: 'Facial recognition, fingerprint scanners, magnetic locks, and turnstiles to restrict entry to sensitive zones.',
          href: '/services/security/access-control',
        },
        {
          title: 'Time & Attendance',
          desc: 'Automated staff clocking systems linked directly to your payroll software to prevent time theft.',
          href: '/services/security/time-attendance',
        },
        {
          title: 'Intrusion Detection & Beams',
          desc: 'Reliable outdoor perimeter sensors and alarms connected directly to armed response monitoring.',
          href: '/services/security/intrusion-detection',
        },
        {
          title: 'Thermal Imaging Systems',
          desc: 'Advanced heat signature and fire prevention cameras designed for industrial plants and warehouses.',
          href: '/services/security/thermal',
        },
        {
          title: 'Retail Loss Prevention',
          desc: 'EAS security gates, overhead surveillance, and till-point integration to curb shrinkage.',
          href: '/services/security/retail',
        },
      ]}
      benefits={[
        'Real-time remote mobile app viewing from anywhere in the world',
        'Direct integration with Daisy off-site backup for footage archiving',
        'Robust vandal-resistant and weatherproof hardware',
        'Modular setups that expand as you add new physical branches',
        'Accurate automated timesheet generation for HR',
        'Certified technical installation conforming to South African regulations',
      ]}
    />
  );
}
