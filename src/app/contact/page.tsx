'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col">
      <section className="bg-green-950 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-green-100 max-w-xl mx-auto leading-relaxed">
            Speak directly with a technology specialist at your nearest branch or send us an enquiry.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="font-display font-bold text-2xl text-green-950 mb-4">
                  National Headquarters
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Supporting 56 branch offices across Gauteng, Western Cape, KwaZulu-Natal, Eastern Cape, Free State, Mpumalanga, and Limpopo.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <Phone className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Central Switchboard</p>
                    <a href="tel:0112445000" className="text-base font-bold text-green-950 hover:text-green-600">
                      011 244 5000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <Mail className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email Enquiries</p>
                    <a href="mailto:info@daisy.co.za" className="text-base font-bold text-green-950 hover:text-green-600">
                      info@daisy.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Head Office Address</p>
                    <p className="text-sm font-semibold text-gray-800">
                      16 Peter Place, Bryanston, Johannesburg, 2191
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <Clock className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Operating Hours</p>
                    <p className="text-sm font-semibold text-gray-800">
                      Monday – Friday: 08:00 – 17:00 (24/7 SLA Helpdesk)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-md">
                <h3 className="font-display font-bold text-2xl text-green-950 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Fill in your details below and a regional consultant will reply within 2 business hours.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h4 className="font-display font-bold text-lg text-green-950 mb-1">Thank You!</h4>
                    <p className="text-sm text-green-800">Your message has been received. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">First & Last Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Johan Smith"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Company Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acme Logistics"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="johan@company.co.za"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="082 123 4567"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Primary Interest</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm bg-white">
                        <option>Business Connectivity & Fibre</option>
                        <option>Telecoms & Cloud PABX</option>
                        <option>Managed IT Services</option>
                        <option>Commercial Security & CCTV</option>
                        <option>Solar & Energy Backup</option>
                        <option>Office Print & Copiers</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Message / Requirements</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your business sites and technology goals..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-base transition-colors shadow-md"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
