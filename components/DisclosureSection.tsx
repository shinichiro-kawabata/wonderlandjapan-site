
import React from 'react';
import { Language } from '../App';

export const DisclosureSection: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <section className="bg-white py-40 border-t border-gray-100 px-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h3 className="font-luxury text-4xl mb-12 text-gray-900">COMMERCIAL DISCLOSURE</h3>
          <div className="space-y-8 text-sm leading-relaxed">
            <div>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Business Name</p>
              <p className="font-bold">Wonderland Japan Co., Ltd. (ワンダーランドジャパン株式会社)</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Registered Address</p>
              <p>2365 Oshikuma-cho, Nara-shi, Nara, Japan</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Business Type</p>
              <p>Guided tours and cultural experiences in Japan</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Contact</p>
              <p>Email: info@wonderlandjapan.net<br/>Phone: +81 07017482960<br/>Support hours: 09:00–18:00 (JST)</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Payments</p>
              <div className="flex items-center gap-4">
                <i className="fa-brands fa-stripe text-4xl text-gray-400"></i>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Processed via Stripe</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-luxury text-4xl mb-12 text-gray-900">REFUND & CANCELLATION</h3>
          <div className="bg-[#FDFCF8] p-10 border border-gray-100">
            <ul className="space-y-6 text-sm mb-12">
              <li className="flex justify-between border-b border-gray-100 pb-4">
                <span className="font-bold">24+ hours before start</span>
                <span className="text-[#9D2A32] font-bold">Full refund</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-4">
                <span className="opacity-60">Within 24 hours</span>
                <span className="opacity-60">No refund</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-4">
                <span className="opacity-60">No-show</span>
                <span className="opacity-60">No refund</span>
              </li>
            </ul>
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4">How to request</p>
            <p className="text-xs italic leading-relaxed text-gray-500">
              Email info@wonderlandjapan.net with your name and booking date. Refunds are processed within 5 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
