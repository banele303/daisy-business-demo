'use client';

import { useState } from 'react';
import { CircleCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col">
      <section className="bg-green-950 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-900/60 border border-green-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Custom Quotation & Audit
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Get a Fast, Custom Quote
          </h1>
          <p className="text-lg text-green-100 max-w-xl mx-auto leading-relaxed">
            Tell us about your requirements and receive a detailed, cost-transparent proposal within 24 to 48 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
                <h3 className="font-display font-bold text-2xl text-green-950">Quote Request Submitted</h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you! Your local branch commercial specialist is reviewing your requirements and will reach out with your custom solution.
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
                  <h3 className="font-display font-bold text-xl text-green-950 mb-1">
                    1. Select Solutions You Require
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">Select all that apply</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      'Connectivity',
                      'Telecoms',
                      'Managed IT',
                      'Business Security',
                      'Solar & Power',
                      'Office Copiers',
                      'Software & AP',
                      'Asset Finance',
                    ].map((label, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 hover:border-green-400 cursor-pointer text-xs font-semibold text-gray-800"
                      >
                        <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-display font-bold text-xl text-green-950 mb-4">
                    2. Company Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Contact Person</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Company Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Enterprises"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Business Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@acme.co.za"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="011 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">City / Nearest Branch</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Durban, Cape Town, JHB"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Number of Physical Sites</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:ring-2 focus:ring-green-500 focus:outline-none">
                        <option>1 Site (Head Office)</option>
                        <option>2 - 5 Sites</option>
                        <option>6 - 20 Sites</option>
                        <option>20+ Nationwide Branches</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Specific Needs or Questions</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about current providers, pain points, or timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 text-green-950 font-bold text-base transition-colors shadow-lg"
                >
                  Generate My Custom Proposal
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
