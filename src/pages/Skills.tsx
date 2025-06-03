import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const { t } = useLanguage();

  //Settings skills data here!
  //You can add more categories and skills as needed!
  const technicalSkills = [
    {
      category: t('language') === 'id' ? 'Pengembangan Frontend' : 'Frontend Development',
      skills: ['React', 'Javascript', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS/SCSS'],
      icon: '🎨'
    },
    {
      category: t('language') === 'id' ? 'Pengembangan Backend' : 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Python', 'C++'],
      icon: '⚙️'
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Linode', 'Google Cloud', 'Vercel', 'GitHub Actions', 'Nginx'],
      icon: '☁️'
    },
    {
      category: t('language') === 'id' ? 'Tools & Lainnya' : 'Tools & Others',
      skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Visual Studio 2022'],
      icon: '🛠️'
    }
  ];

  const softSkills = [
    t('language') === 'id' ? 'Pemecahan Masalah' : 'Problem Solving',
    t('language') === 'id' ? 'Kolaborasi Tim' : 'Team Collaboration',
    t('language') === 'id' ? 'Komunikasi' : 'Communication',
    t('language') === 'id' ? 'Pemikiran Kritis' : 'Critical Thinking',
    t('language') === 'id' ? 'Adaptabilitas' : 'Adaptability',
    t('language') === 'id' ? 'Manajemen Waktu' : 'Time Management',
    t('language') === 'id' ? 'Kepemimpinan' : 'Leadership',
    t('language') === 'id' ? 'Kreativitas' : 'Creativity',
    t('language') === 'id' ? 'Perhatian Detail' : 'Attention to Detail',
    t('language') === 'id' ? 'Pembelajaran Berkelanjutan' : 'Continuous Learning'
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/*Header*/}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('skills')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('language') === 'id' ? 'Teknologi dan keahlian yang saya bawa ke setiap proyek' : 'Technologies and expertise I bring to every project'}
          </p>
        </div>

        {/*Technical Skills*/}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center fade-in-up">
            {t('technicalSkills')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((category, index) => (
              <Card 
                key={category.category}
                className="hover-lift fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className="px-3 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium text-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/*Soft Skills*/}
        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('softSkills')}
          </h2>
          
          <Card className="hover-lift">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="text-center p-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/*Philosophy*/}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="hover-lift max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t('language') === 'id' ? 'Pendekatan Saya' : 'My Approach'}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('language') === 'id' ? 
                  'Saya percaya dalam menulis kode yang bersih dan mudah dipelihara serta tetap up-to-date dengan teknologi terbaru. Tujuan saya adalah menciptakan solusi efisien yang tidak hanya memenuhi kebutuhan saat ini tetapi juga scalable untuk pertumbuhan masa depan.' :
                  'I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. My goal is to create efficient solutions that not only meet current requirements but are also scalable for future growth.'
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
