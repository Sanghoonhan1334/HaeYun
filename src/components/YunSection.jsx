// src/components/YunSection.jsx
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations, englishTranslations } from '../translations';

export default function YunSection() {
  const { currentLang } = useContext(LanguageContext);
  const t = translations[currentLang];
  const en = englishTranslations;

  return (
    <section id="yun" className="min-h-screen flex items-center justify-center px-4 py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
          {t.yun.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                  {t.yun.subtitle}
                </h3>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t.yun.description}
                </p>
              </div>
              
              {/* English translation below */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <h4 className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  English
                </h4>
                <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {en.yun.description}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">삽입 사진</p>
              <div className="w-full h-64 bg-neutral-200 dark:bg-neutral-700 rounded overflow-hidden">
                <img 
                  src="/images/yun-section.jpg" 
                  alt="YUN 섹션 이미지" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">삽입 영상</p>
              <div className="w-full h-64 bg-neutral-200 dark:bg-neutral-700 rounded overflow-hidden relative group cursor-pointer">
                <img 
                  src="https://img.youtube.com/vi/gBE5Y4ga1fo/maxresdefault.jpg" 
                  alt="YUN YouTube 영상 썸네일" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <a 
                  href="https://youtu.be/gBE5Y4ga1fo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="YouTube 영상 보기"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
