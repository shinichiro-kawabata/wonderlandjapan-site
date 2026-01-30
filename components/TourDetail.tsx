
import React from 'react';
import { TourData, Language } from '../App';

interface TourDetailProps {
  tour: TourData;
  lang: Language;
  onClose: () => void;
}

export const TourDetail: React.FC<TourDetailProps> = ({ tour, lang, onClose }) => {
  const t = tour.content[lang];
  const labels = {
    en: { capacity: "Capacity", duration: "Duration", book: "BOOK NOW", back: "BACK", security: "Secure Payment via Stripe" },
    jp: { capacity: "定員", duration: "所要時間", book: "今すぐ予約", back: "戻る", security: "Stripeによる安全な決済" },
    cn: { capacity: "導覽人數", duration: "所需時間", book: "立即預約", back: "返回", security: "經由 Stripe 安全支付系統" }
  }[lang];

  return (
    <div className="fixed inset-0 z-[100] bg-[#FDFCF8] overflow-y-auto animate-in fade-in duration-500">
      <div className="max-w-screen-2xl mx-auto px-10 py-16">
        <button onClick={onClose} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] mb-16 hover:text-[#9D2A32] transition-colors">
          <i className="fa-solid fa-arrow-left"></i> {labels.back}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="aspect-[3/4] overflow-hidden shadow-2xl">
            <img src={tour.image} alt={t.title} className="w-full h-full object-cover" />
          </div>

          <div className="py-4">
            <span className="text-[#9D2A32] text-[12px] font-bold tracking-[0.5em] uppercase block mb-6">{t.tag}</span>
            <h2 className="font-luxury text-6xl md:text-7xl mb-12 leading-tight">{t.title}</h2>
            
            <div className="grid grid-cols-2 gap-12 border-y border-gray-100 py-10 mb-12">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{labels.duration}</p>
                <p className="text-2xl font-luxury">{tour.durations[lang]}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{labels.capacity}</p>
                <p className="text-2xl font-luxury">Up to {tour.maxPeople} guests</p>
              </div>
            </div>

            <p className="text-gray-500 text-xl font-light leading-relaxed italic mb-16">{t.description}</p>

            <div className="bg-white p-12 border border-gray-100 shadow-sm text-center lg:text-left">
               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Private Rate</p>
                    <p className="text-5xl font-luxury text-gray-900">{tour.prices}</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <a href={tour.stripeUrl} target="_blank" className="bg-[#9D2A32] text-white py-6 px-16 text-[12px] font-bold uppercase tracking-[0.4em] rounded-full shadow-xl hover:bg-[#7D1D25] transition-all transform hover:scale-105">
                      {labels.book}
                    </a>
                    <div className="flex items-center justify-center gap-4 opacity-30">
                       <i className="fa-brands fa-stripe text-3xl"></i>
                       <span className="text-[9px] font-bold uppercase tracking-widest">{labels.security}</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
