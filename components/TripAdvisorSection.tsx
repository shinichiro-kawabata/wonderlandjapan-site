
import React, { useEffect } from 'react';

interface TripAdvisorSectionProps {
  lang: 'en' | 'jp' | 'cn';
}

const content = {
  en: {
    status: "Verified 5-Star Experience",
    title: "Global Excellence in Hospitality",
    desc: "Our dedication to the art of Omotenashi has earned us a worldwide reputation. Experience the touch of a certified 5-star host.",
    cta: "View Reviews on TripAdvisor"
  },
  jp: {
    status: "公認5つ星ホスト",
    title: "世界が認めるおもてなし",
    desc: "『おもてなし』の精神への献身が、世界的な評価に繋がりました。5つ星ホストによる洗練された体験を。",
    cta: "TripAdvisorで確認"
  },
  cn: {
    status: "認證五星級房東",
    title: "全球矚目的頂級待客標竿",
    desc: "我們對「極致待客之道」的堅持與承諾，贏得了全球性的讚譽。感受五星級房東的尊榮服務。",
    cta: "前往 TripAdvisor 查看完整評價"
  }
};

export const TripAdvisorSection: React.FC<TripAdvisorSectionProps> = ({ lang }) => {
  const t = content[lang];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.jscache.com/wejs?wtype=rated&uniq=102&locationId=33984848&lang=en_US&display_version=2";
    script.async = true;
    script.setAttribute('data-loadtrk', '');
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-white py-32 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-7/12">
            <span className="text-[#9D2A32] text-[11px] font-bold uppercase tracking-[0.5em] block mb-6">{t.status}</span>
            <h2 className="font-luxury text-5xl md:text-6xl text-gray-900 mb-10">{t.title}</h2>
            <p className="text-gray-500 text-xl font-light leading-relaxed mb-12 italic">"{t.desc}"</p>
            <a href="https://www.tripadvisor.com/Attraction_Review-g298564-d33984848-Reviews-WonderlandJapan-Kyoto_Kyoto_Prefecture_Kinki.html" target="_blank" className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-black pb-2 hover:text-[#9D2A32] hover:border-[#9D2A32] transition-all">
              {t.cta}
            </a>
          </div>
          <div className="lg:w-5/12">
            <div className="bg-[#FDFCF8] p-12 border border-gray-100 shadow-xl text-center rounded-sm">
                <div id="TA_rated102" className="TA_rated scale-125 md:scale-150 py-10">
                  <ul id="I13WLlzVnbg" className="TA_links p8S95p">
                    <li id="COczfPUWg" className="1qYKZNVEJLaD">
                      <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g298564-d33984848-Reviews-WonderlandJapan-Kyoto_Kyoto_Prefecture_Kinki.html">
                        <img src="https://www.tripadvisor.com/img/cdsi/img2/badges/ollie-11424-2.gif" alt="TripAdvisor" />
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
