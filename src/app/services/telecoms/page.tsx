import { ServiceHubTemplate } from '@/components/ServiceHubTemplate';

export const metadata = {
  title: 'Business Telecoms & Cloud Phone Systems | Daisy Business Solutions',
  description: 'Enterprise VoIP, Hosted Cloud PABX, video conferencing, and call center telephone systems.',
};

export default function TelecomsPage() {
  return (
    <ServiceHubTemplate
      title="Telecoms"
      badge="Voice & Unified Communications"
      heroText="Crystal clear voice, smart call routing, and seamless Microsoft Teams integration designed for distributed workforces."
      videoSrc="/videos/services/telecoms-scrub.mp4"
      subservices={[
        {
          title: 'Hosted & Premise based PABX',
          desc: 'Flexible business telephone systems on premise or hosted securely in the cloud with zero upfront server overhead.',
          href: '/services/telecoms/hosted-and-premise-based-pabx',
        },
        {
          title: 'VoIP Services',
          desc: 'Slash your monthly telephony bill with high-clarity voice over IP channels backed by low latency fibre connectivity.',
          href: '/services/telecoms/voip',
        },
        {
          title: 'Conference Systems',
          desc: 'Video conferencing bars, smart boardroom displays, and speakerphones for modern hybrid meetings.',
          href: '/services/telecoms/conference',
        },
        {
          title: 'Call Center Solutions',
          desc: 'Real-time agent queue monitoring, CRM integration, call recording, and detailed performance analytics.',
          href: '/services/telecoms/call-center',
        },
        {
          title: 'Mobile Apps with MS Teams',
          desc: 'Enable remote employees to make and receive business calls directly through their mobile smartphones and Teams apps.',
          href: '/services/telecoms/mobile-applications-with-ms-integration',
        },
        {
          title: 'Enterprise Handsets',
          desc: 'Feature-rich desk phones, wireless DECT handsets, and executive touchscreen models from top brands.',
          href: '/services/telecoms/handsets',
        },
      ]}
      benefits={[
        'Significant savings on branch and international call costs',
        'Keep your existing geographic numbers and switch seamlessly',
        'Automatic failover to mobile networks if a line goes down',
        'Scalable extensions added with a simple click',
        'Full unified messaging with voicemail-to-email',
        '24/7 technical helpdesk support nationwide',
      ]}
    />
  );
}
