'use client';

import { useState } from 'react';
import { Wrench, Phone, CheckCircle2 } from 'lucide-react';

export default function LogServiceCallPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col">
      <section className="bg-green-950 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-950/60 border border-orange-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Technical Support Desk
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Log a Service Call
          </h1>
          <p className="text-lg text-green-100 max-w-xl mx-auto leading-relaxed">
            Fast resolution for copier maintenance, network drops, or telephone issues backed by our nationwide SLA.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
                <h3 className="font-display font-bold text-2xl text-green-950">Ticket Successfully Logged</h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Your reference number is <strong className="text-gray-900">DSY-98241</strong>. An engineer has been notified and will be in contact based on your contract SLA.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-display font-bold text-xl text-green-950 mb-4">
                    Equipment / Service Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Machine Serial / Contract #</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. KYO-99124 or Account ID"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Category</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:ring-2 focus:ring-green-500 focus:outline-none">
                        <option>Office Printer / Copier Fault</option>
                        <option>Internet / Connectivity Issue</option>
                        <option>Telephone / PABX System</option>
                        <option>CCTV / Access Control Issue</option>
                        <option>Server or IT Outage</option>
                        <option>Consumables / Toner Request</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-display font-bold text-xl text-green-950 mb-4">
                    Company & Contact Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Company Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your company name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Contact Person</label>
                      <input
                        type="text"
                        required
                        placeholder="Person on site"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="support@company.co.za"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Contact Cell / Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="082 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Description of Issue</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe error codes, symptoms, or what happened..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base transition-colors shadow-lg"
                >
                  Submit Support Ticket
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
