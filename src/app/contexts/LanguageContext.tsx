import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  useEffect(() => {
    const metadata = {
      ru: {
        title: 'Андрей Кайсин — веб-разработчик, React, Next.js, Node.js и NestJS',
        description: 'Андрей Кайсин — senior fullstack-разработчик в Санкт-Петербурге. Разработка сайтов и веб-приложений на React, Next.js, Node.js, NestJS и TypeScript. Удалённая работа по России.',
      },
      en: {
        title: 'Andrey Kaysin — Full Stack Developer, React, Next.js, Node.js & NestJS',
        description: 'Andrey Kaysin is a senior full stack developer in Saint Petersburg with 6+ years of experience. Website development with React, Next.js, Node.js, NestJS, and TypeScript. Available remotely across Russia.',
      },
    }[language];

    document.documentElement.lang = language;
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
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
