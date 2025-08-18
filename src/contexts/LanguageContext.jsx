import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'ko';
  });

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('selectedLanguage', langCode);
  };

  useEffect(() => {
    localStorage.setItem('selectedLanguage', currentLang);
  }, [currentLang]);

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { LanguageContext };
