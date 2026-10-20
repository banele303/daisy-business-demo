import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-950 text-white pt-16 pb-8 border-t border-green-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                alt="Daisy Business Solutions"
                src="/logo.png"
                width={148}
                height={42}
                className="w-[148px] h-auto"
              />
            </Link>
            <p className="text-sm text-green-100 mb-6 max-w-sm leading-relaxed">
              One technology partner for connectivity, IT, print, security, solar, and finance - no juggling vendors.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/connectivity" className="text-sm text-green-100 hover:text-white transition-colors">
                  Connectivity
                </Link>
              </li>
              <li>
                <Link href="/services/telecoms" className="text-sm text-green-100 hover:text-white transition-colors">
                  Telecoms
                </Link>
              </li>
              <li>
                <Link href="/services/it" className="text-sm text-green-100 hover:text-white transition-colors">
                  IT Managed Services
                </Link>
              </li>
              <li>
                <Link href="/services/software" className="text-sm text-green-100 hover:text-white transition-colors">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/services/security" className="text-sm text-green-100 hover:text-white transition-colors">
                  Business Security
                </Link>
              </li>
              <li>
                <Link href="/services/print" className="text-sm text-green-100 hover:text-white transition-colors">
                  Print & Document
                </Link>
              </li>
              <li>
                <Link href="/services/energy" className="text-sm text-green-100 hover:text-white transition-colors">
                  Solar & Energy
                </Link>
              </li>
              <li>
                <Link href="/services/finance" className="text-sm text-green-100 hover:text-white transition-colors">
                  Business Finance
                </Link>
              </li>
              <li>
                <Link href="/services/managed-services" className="text-sm text-green-100 hover:text-white transition-colors">
                  Managed Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-green-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/culture" className="text-sm text-green-100 hover:text-white transition-colors">
                  Our Culture
                </Link>
              </li>
              <li>
                <Link href="/company-profile" className="text-sm text-green-100 hover:text-white transition-colors">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-sm text-green-100 hover:text-white transition-colors">
                  Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link href="/specials" className="text-sm text-green-100 hover:text-white transition-colors">
                  Specials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-green-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/get-a-quote" className="text-sm text-green-100 hover:text-white transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href="tel:0112445000"
                  className="flex items-center gap-3 text-sm text-green-100 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-green-400 shrink-0" />
                  011 244 5000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@daisy.co.za"
                  className="flex items-center gap-3 text-sm text-green-100 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-green-400 shrink-0" />
                  info@daisy.co.za
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-green-100">
                <MapPin className="w-4 h-4 text-green-400 shrink-0" />
                16 Peter Place, Bryanston, 2191
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-green-800 flex flex-col md:flex-row items-center justify-between text-xs text-green-100">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Daisy Business Solutions (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              PAIA Manual
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
