
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedLines from '@/components/AnimatedLines';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <ParticleBackground />
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
        {/*Hero Section*/}
        <div className="space-y-6 fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            RICHARD RIZKY WOWOR {/*Edit your name at home here bro!*/}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-purple-200 leading-relaxed">
            {t('intro')}
          </p>
        </div>

        {/*CTA Buttonss*/}
        <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-right" style={{ animationDelay: '0.3s' }}>
          <Button asChild size="lg" className="group bg-purple-600 hover:bg-purple-700">
            <Link to="/profile" className="flex items-center gap-2">
              {t('language') === 'id' ? 'Lihat Karya Saya!' : 'View My Work!'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="group border-purple-400 text-purple-600 dark:text-purple-300 hover:bg-purple-600 hover:text-white dark:hover:text-white">
            <Link to="/contact" className="flex items-center gap-2">
              {t('language') === 'id' ? 'Hubungi Saya!' : 'Get In Touch!'}
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </div>

        {/*Animated Linesss*/}
        <AnimatedLines />
      </div>
    </div>
  );
};

export default Home;
