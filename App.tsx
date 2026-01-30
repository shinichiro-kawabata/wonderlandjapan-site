
import React, { useState, useEffect } from 'react';
import { TripAdvisorSection } from './components/TripAdvisorSection';
import { DisclosureSection } from './components/DisclosureSection';
import { TourCard } from './components/TourCard';
import { TourDetail } from './components/TourDetail';

export type Language = 'en' | 'jp' | 'cn';

export interface TourData {
  id: string;
  durations: { en: string; jp: string; cn: string };
  prices: string;
  image: string;
  isComingSoon?: boolean;
  maxPeople: number;
  stripeUrl?: string;
  content: {
    en: { title: string; location: string; tag: string; description: string };
    jp: { title: string; location: string; tag: string; description: string };
    cn: { title: string; location: string; tag: string; description: string };
  };
}

const translations = {
  en: {
    nav: ['Experiences', 'Philosophy', 'Compliance', 'Contact'],
    heroSubtitle: "The door to Japan opens here.",
    heroDesc: "The gateway to Japan's spiritual heritage, where the sea meets the soul.",
    explore: "VIEW JOURNEYS",
    toursTitle: "The Master Collection",
    toursTag: "Curated Tours",
  },
  jp: {
    nav: ['体験内容', '理念', '規約', '連絡'],
    heroSubtitle: "日本への扉が、ここから開く。",
    heroDesc: "海と魂が交差する、日本の精神的遺産への入り口。",
    explore: "旅を見る",
    toursTitle: "匠の体験コレクション",
    toursTag: "京都と大阪",
  },
  cn: {
    nav: ['深度旅程', '品牌理念', '合規披露', '聯絡我們'],
    heroSubtitle: "日本之門 從此開啟",
    heroDesc: "開啟日本靈性遺產的大門，在海天一色中遇見靈魂的歸宿。",
    explore: "查看旅程",
    toursTitle: "深度文化系列",
    toursTag: "京都與大阪",
  }
};

const tours: TourData[] = [
  {
    id: 'gion',
    durations: { en: '2 Hours', jp: '2時間', cn: '2 小時' },
    prices: '¥14,000',
    maxPeople: 15,
    stripeUrl: "https://buy.stripe.com/gion_prod",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070",
    content: {
      en: { title: "Spirits of Gion: Twilight Walk", location: "Kyoto", tag: "Heritage", description: "Wander through the narrow lanes of Gion as the sun dips below the horizon. A deep dive into the elusive world of Kyoto's traditional entertainment district." },
      jp: { title: "祇園の精霊：夕暮れ散策", location: "京都", tag: "伝統継承", description: "日が沈む祇園の小路を巡ります。京都の伝統的な花街の、掴みどころのない世界へと深く入り込みます。" },
      cn: { title: "祇園幽玄之靈：暮色漫步", location: "京都", tag: "經典傳承", description: "在夕陽西下時穿梭於祇園的小巷中。這是一場深入探索京都傳統花街幽玄世界的深度旅程。" }
    }
  },
  {
    id: 'arashiyama',
    durations: { en: '2 Hours', jp: '2時間', cn: '2 小時' },
    prices: '¥18,500',
    maxPeople: 15,
    stripeUrl: "https://buy.stripe.com/arashiyama_prod",
    image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=2574",
    content: {
      en: { title: "Arashiyama: The Zen Ritual", location: "Kyoto", tag: "Serenity", description: "Experience the profound peace of the bamboo forest and the spiritual architecture of Zen temples. A curated ritual of stillness and nature." },
      jp: { title: "嵐山：禅の儀式", location: "京都", tag: "静寂", description: "竹林の深い安らぎと禅寺の精神的建築を体験してください。静寂と自然が調和する、厳選された儀式のような旅です。" },
      cn: { title: "嵐山禪意祭儀：竹林密境", location: "京都", tag: "身心淨化", description: "體驗竹林深處的平和與禪宗寺院的建築美學。這是一場精心策劃、讓身心回歸大自然與靜謐的祭儀。" }
    }
  },
  {
    id: 'izakaya',
    durations: { en: '3 Hours', jp: '3時間', cn: '3 小時' },
    prices: '¥22,000',
    maxPeople: 15,
    stripeUrl: "https://buy.stripe.com/izakaya_prod",
    image: "https://images.unsplash.com/photo-1590559901309-a05d18a4d6f0?q=80&w=2670",
    content: {
      en: { title: "Osaka Soul: Izakaya Night Walk", location: "Osaka", tag: "Gastronomy", description: "Taste the vibrant energy of Osaka's night life. From hidden local favorites to the cheers of an authentic Izakaya, feel the city's pulse." },
      jp: { title: "大阪の魂：居酒屋巡り", location: "大阪", tag: "美食探訪", description: "大阪の夜の活気あるエネルギーを味わってください。地元の隠れた名店から本物の居酒屋の歓声まで、街の鼓動を感じてください。" },
      cn: { title: "大阪之魂：居酒屋深夜漫步", location: "大阪", tag: "地道美食", description: "品味大阪夜晚的充沛活力。從隱藏的當地名店到道地居酒屋的乾杯聲中，感受這座城市的深夜脈動。" }
    }
  },
  {
    id: 'streetfood',
    durations: { en: '2.5 Hours', jp: '2.5時間', cn: '2.5 小時' },
    prices: '¥16,000',
    maxPeople: 15,
    stripeUrl: "https://buy.stripe.com/streetfood_prod",
    image: "https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?q=80&w=2070",
    content: {
      en: { title: "Street Food Culture: Dotonbori", location: "Osaka", tag: "Culture", description: "Discover why Osaka is Japan's kitchen. A sensory journey through the neon-lit Dotonbori, exploring the rich heritage of street food." },
      jp: { title: "屋台文化：道頓堀散策", location: "大阪", tag: "文化体験", description: "大阪がなぜ日本の台所と呼ばれるのかを発見してください。ネオン輝く道頓堀を巡り、屋台フードの豊かな遺産を探求する旅です。" },
      cn: { title: "街頭小吃文化：道頓堀步行導覽", location: "大阪", tag: "深度人文", description: "探索大阪為何被譽為日本的廚房。漫步於霓虹閃爍的道頓堀，深入體會街頭美食背後的文化底蘊。" }
    }
  },
  {
    id: 'taiko',
    durations: { en: '1.5 Hours', jp: '1.5時間', cn: '1.5 小時' },
    prices: '¥7,000',
    maxPeople: 15,
    isComingSoon: true,
    image: "https://images.unsplash.com/photo-1574706501170-653920973a8f?q=80&w=2000",
    content: {
      en: { title: "Thunder of the Soul: The Taiko Ritual", location: "Kyoto/Osaka", tag: "Power", description: "A primitive call to your core. Feel the vibration of ancient drums as they strike the very center of your soul. Pure power, pure rhythm." },
      jp: { title: "魂の鼓動：太鼓の熱狂", location: "京都/大阪", tag: "情熱", description: "あなたの核に呼びかける根源的な響き。魂の真ん中を叩く古の太鼓の振動を感じてください。純粋な力、純粋なリズム。" },
      cn: { title: "靈魂震撼：太鼓祭儀 ‧ 響徹靈魂的節奏", location: "京都/大阪", tag: "震撼靈魂", description: "一場召喚內在根源的吶喊。感受古老太鼓如何震撼您的靈魂核心，那是純粹的力量，最原始的節奏。" }
    }
  },
  {
    id: 'kimono',
    durations: { en: '3 Hours', jp: '3時間', cn: '3 小時' },
    prices: '¥12,000',
    maxPeople: 15,
    isComingSoon: true,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070",
    content: {
      en: { title: "Stillness in Motion: Tea & Silk", location: "Kyoto", tag: "Elegance", description: "Step into a world of absolute Zen. The silent grace of traditional kimono silk paired with the meditative ceremony of ancient tea masters." },
      jp: { title: "動中の静：和服と茶道の極致", location: "京都", tag: "雅", description: "絶対的な『禅』の世界へ。伝統的な和服の静かな優雅さと、古の茶人による瞑想的な儀式の融合。" },
      cn: { title: "靜謐流光：和服與茶道禪心 ‧ 歲月靜好之美", location: "京都", tag: "深度禪意", description: "踏入絕對「禪」的世界。傳統和服絲綢的靜謐優雅，與古代茶道大師冥想般的祭儀交織，重現歲月靜好。" }
    }
  }
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('cn');
  const [selectedTour, setSelectedTour] = useState<TourData | null>(null);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${selectedTour ? 'overflow-hidden' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-1000 px-8 py-6 ${isScrolled ? 'bg-[#FDFCF8]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'}`}>
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="logo.png.png" alt="Wonderland Japan" className={`h-12 w-auto transition-all ${!isScrolled ? 'brightness-0 invert' : ''}`} />
          </div>
          <div className="flex items-center gap-12">
            <div className={`hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em] ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              {t.nav.map((item, idx) => (
                <a key={idx} href="#journeys" className="hover:text-[#9D2A32] transition-colors">{item}</a>
              ))}
            </div>
            <div className="flex gap-4 border-l border-white/20 pl-8">
              {(['en', 'jp', 'cn'] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold uppercase tracking-widest transition-all ${lang === l ? (isScrolled ? 'text-[#9D2A32]' : 'text-white') : (isScrolled ? 'text-gray-300' : 'text-gray-400 hover:text-white')}`}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 完美復刻海上鳥居 */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542931237-323a19592736?q=80&w=2070" 
            className="w-full h-full object-cover grayscale-[10%] contrast-[1.1]"
            alt="Sacred Coastal Torii Gate"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6 fade-in">
          <h1 className="font-luxury text-8xl md:text-[10rem] text-white mb-6 leading-none tracking-tight text-shadow-zen">Wonderland</h1>
          <p className="text-[#C8A660] text-xl md:text-2xl font-light tracking-[0.5em] mb-16 text-shadow-zen uppercase">{t.heroSubtitle}</p>
          
          <a href="#journeys" className="inline-block py-5 px-14 bg-[#9D2A32] text-white text-[12px] font-bold uppercase tracking-[0.4em] rounded-full hover:bg-[#7D1D25] transition-all transform hover:scale-105 shadow-2xl">
            {t.explore}
          </a>
        </div>
      </section>

      <TripAdvisorSection lang={lang} />

      <section id="journeys" className="py-40 px-10 max-w-screen-2xl mx-auto">
        <div className="mb-32 text-center">
            <span className="text-[#9D2A32] text-[12px] font-bold tracking-[0.5em] uppercase block mb-6">{t.toursTag}</span>
            <h2 className="font-luxury text-6xl md:text-7xl text-gray-900 mb-8">{t.toursTitle}</h2>
            <div className="w-24 h-[1px] bg-gray-200 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-32">
          {tours.map(tour => (
            <TourCard 
              key={tour.id} 
              tour={tour} 
              lang={lang} 
              onClick={() => setSelectedTour(tour)} 
            />
          ))}
        </div>
      </section>

      <DisclosureSection lang={lang} />

      {selectedTour && (
        <TourDetail 
          tour={selectedTour} 
          lang={lang} 
          onClose={() => setSelectedTour(null)} 
        />
      )}

      <footer className="bg-[#0A0A0A] text-white/30 py-24 px-10 border-t border-white/5 text-center">
         <img src="logo.png.png" alt="Wonderland Japan" className="h-10 mx-auto mb-10 brightness-0 invert opacity-40" />
         <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8">© 2025 WONDERLAND JAPAN CO., LTD.</p>
         <div className="flex justify-center gap-12 text-[9px] font-bold tracking-[0.4em] uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:info@wonderlandjapan.net" className="hover:text-white transition-colors">Contact</a>
         </div>
      </footer>
    </div>
  );
};

export default App;
