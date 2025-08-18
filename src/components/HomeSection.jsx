// src/components/HomeSection.jsx
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations, englishTranslations } from '../translations';

export default function HomeSection() {
  const { currentLang } = useContext(LanguageContext);
  const t = translations[currentLang];
  const en = englishTranslations;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* HAEYUN 글자 로고 */}
        <div className="mb-1">
          <img
            src="/images/haeyun/haeyun-word-kr-light.png"
            className="block dark:hidden h-64 md:h-80 w-auto mx-auto"
            alt="HAEYUN"
          />
          <img
            src="/images/haeyun/haeyun-word-kr-dark.png"
            className="hidden dark:block h-64 md:h-80 w-auto mx-auto"
            alt="HAEYUN"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
          <div className="mb-2 whitespace-pre-line">{t.home.title}</div>
        </h1>
        
        <div className="space-y-6">
          {/* Selected language subtitle */}
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {t.home.subtitle}
          </p>
          
          {/* English translation below */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {en.home.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
