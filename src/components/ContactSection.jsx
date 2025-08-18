// src/components/ContactSection.jsx
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function ContactSection() {
  const { currentLang } = useContext(LanguageContext);
  const t = translations[currentLang];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
          {t.contact.title}
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          {t.contact.subtitle}
        </p>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
          {t.contact.description}
        </p>
        
        <div className="space-y-6 text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-md dark:shadow-sm">
            <p className="font-medium">{t.contact.email}</p>
          </div>
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-md dark:shadow-sm">
            <p className="font-medium">{t.contact.phone}</p>
          </div>
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-md dark:shadow-sm">
            <p className="font-medium">{t.contact.address}</p>
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {t.contact.social}
          </p>
        </div>
      </div>
    </section>
  );
}
