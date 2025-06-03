//Settings contact page here bro!
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Instagram, Twitter, MessageCircle, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactLinks = [
    {
      name: 'Gmail',
      icon: Mail,
      url: 'mailto:richardrizkyw@gmail.com',
      username: 'richardrizkyw@gmail.com',
      description: t('language') === 'id' ? 'Pertanyaan profesional' : 'Professional inquiries'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/0xCyrus',
      username: '@0xCyrus',
      description: t('language') === 'id' ? 'Lihat kode saya' : 'View my code'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/rcaddd_',
      username: '@rcaddd_',
      description: t('language') === 'id' ? 'Ikuti instagram saya' : 'Follow my instagram'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/rcaddd_',
      username: '@rcaddd_',
      description: t('language') === 'id' ? 'Ikuti twitter saya' : 'Follow my twitter'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/rcadd.',
      username: 'rcadd.',
      description: t('language') === 'id' ? 'Ikuti discord saya' : 'Follow my discord'
    },
    {
      name: 'Telegram',
      icon: Send,
      url: 'https://t.me/rcadd',
      username: '@rcadd',
      description: t('language') === 'id' ? 'Ikuti telegram saya' : 'Follow my telegram'
    }
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = ''; //Submit your link cv here bro
    link.click();
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/*Headerrr*/}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('contact')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('language') === 'id' ? 
              'Mari terhubung dan ciptakan sesuatu yang menakjubkan bersama!' : 
              'Let\'s connect and create something amazing together!'
            }
          </p>
        </div>

        {/*Contact Cards Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((contact, index) => (
            <Card 
              key={contact.name}
              className="hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary rounded-lg">
                    <contact.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {contact.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {contact.username}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {contact.description}
                    </p>
                  </div>
                  
                  <Button
                    asChild
                    className="w-full group"
                    variant="outline"
                  >
                    <a href={contact.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      {t('language') === 'id' ? 'Hubungkan' : 'Connect'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/*Download CV Sectionn*/}
        <div className="text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="hover-lift max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">
                    {t('downloadCV')}
                  </h2>
                  <p className="text-muted-foreground">
                    {t('language') === 'id' ? 
                      'Dapatkan gambaran detail tentang pengalaman, keterampilan, dan pencapaian saya' :
                      'Get a detailed overview of my experience, skills, and achievements'
                    }
                  </p>
                </div>
                
                <Button 
                  onClick={downloadCV}
                  size="lg"
                  className="group"
                >
                  <span className="flex items-center gap-2">
                    {t('downloadCV')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
