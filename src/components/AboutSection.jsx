// src/components/AboutSection.jsx
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations, englishTranslations } from '../translations';

export default function AboutSection() {
  const { currentLang } = useContext(LanguageContext);
  const t = translations[currentLang];
  const en = englishTranslations;

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
          {t.about.title}
        </h2>
        
        <div className="space-y-6 mb-8">
          {/* Selected language subtitle */}
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {t.about.subtitle}
          </p>
          
          {/* English translation below */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <h3 className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
              English
            </h3>
            <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {en.about.subtitle}
            </p>
          </div>
        </div>
        
        <div className="space-y-6 text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
          {t.about.features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-md dark:shadow-sm">
              <div className="space-y-4">
                {/* Selected language feature */}
                <p className="font-medium">{feature}</p>
                
                {/* English translation below */}
                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-600">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {en.about.features[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
