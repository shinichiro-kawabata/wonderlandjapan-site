
import React from 'react';
import { TourData, Language } from '../App';

interface TourCardProps {
  tour: TourData;
  lang: Language;
  onClick: () => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, lang, onClick }) => {
  const t = tour.content[lang];
  const comingSoonLabel = { en: "Coming Soon", jp: "準備中", cn: "準備中" }[lang];

  return (
    <div 
      onClick={tour.isComingSoon ? undefined : onClick}
      className={`group relative overflow-hidden transition-all duration-700 ${tour.isComingSoon ? 'cursor-default opacity-60' : 'cursor-pointer hover:bg-[#FDFCF8]'}`}
    >
      <div className="aspect-[4/3] overflow-hidden relative mb-10">
        <img src={tour.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
        <div className={`absolute top-6 right-6 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.4em] text-white shadow-xl ${tour.isComingSoon ? 'bg-gray-800' : 'bg-[#9D2A32]'}`}>
            {tour.isComingSoon ? comingSoonLabel : t.tag}
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-center gap-6 mb-6">
          <span className="text-[10px] font-bold text-[#C8A660] tracking-widest uppercase">{t.location}</span>
          <span className="h-[1px] w-8 bg-gray-100"></span>
          <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">{tour.durations[lang]}</span>
        </div>
        <h3 className="font-luxury text-3xl md:text-4xl text-gray-900 mb-6 group-hover:text-[#9D2A32] transition-colors">{t.title}</h3>
        <p className="text-gray-400 text-sm font-light italic">{tour.prices}</p>
      </div>
    </div>
  );
};
