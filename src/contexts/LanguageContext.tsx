import React, { createContext, useContext, useState } from 'react';

type Language = 'id' | 'en';

interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}

const translations: Translations = {
  home: { id: 'Beranda', en: 'Home' },
  profile: { id: 'Profil', en: 'Profile' },
  skills: { id: 'Kemampuan', en: 'Skills' },
  contact: { id: 'Kontak', en: 'Contact' },
  welcome: { id: 'Selamat Datang', en: 'Welcome' },
  intro: { id: 'Saya adalah seseorang lulusan dari SMK VOCTECH 1 TANGERANG dan Seorang basic web & apps developer yang masih berkembang untuk menciptakan sebuah keajaiban inovatif dan lain-lain.', en: 'I am a graduate of SMK VOCTECH 1 TANGERANG and a basic web & apps developer who is still developing to create a magical and innovative masterpiece and so on.' },
  about: { id: 'Tentang Saya', en: 'About Me' },
  aboutText: { id: 'Saya lulusan SMK VOCTECH 1 TANGERANG. Memiliki niat, bakat dan minat yang sungguh-sungguh dalam bidang pekerjaan nya. Mencari kesempatan untuk berkembang lebih baik dan memperluas wawasan. Dapat berkolaborasi dengan tim dan Siap berkontribusi.', en: 'I am a graduate of SMK VOCTECH 1 TANGERANG. I have a strong commitment, talent, and passion for my work. I am seeking opportunities to grow and broaden my horizons. I am open to collaborating with a team and am eager to contribute.' },
  experience: { id: 'Pengalaman Kerja', en: 'Work Experience' },
  education: { id: 'Pendidikan', en: 'Education' },
  technicalSkills: { id: 'Kemampuan Teknis', en: 'Technical Skills' },
  softSkills: { id: 'Kemampuan Non-Teknis', en: 'Soft Skills' },
  getInTouch: { id: 'Mari Terhubung', en: 'Get In Touch' },
  contactText: { id: 'Saya terbuka untuk diskusi tentang proyek atau peluang kolaborasi.', en: 'I\'m open to discussing projects or collaboration opportunities.' },
  downloadCV: { id: 'Unduh CV', en: 'Download CV' },
  viewProject: { id: 'Lihat Proyek', en: 'View Project' },
  backToHome: { id: 'Kembali ke Beranda', en: 'Back to Home' },
  pageNotFound: { id: 'Halaman tidak ditemukan', en: 'Page not found' },
  language: { id: 'id', en: 'en' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
