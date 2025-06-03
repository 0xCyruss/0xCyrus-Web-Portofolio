import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Profile = () => {
  const { t } = useLanguage();

  //Setinngs data profile here!
  const experiences = [
    {
      title: 'Praktek Kerja Lapangan (PKL)',
      company: 'CV. Seroja Printing',
      period: 'Januari 2023 - Maret 2023',
      description: t('language') === 'id' ? 'Mengoperasikan mesin CTP (Computer to Plate) dan Mesin cetak offset. Berkolaborasi dengan pegawai magang lain untuk bertukar pikiran supaya bisa menerapkan ide-ide pencetakan/ilustrasi, dan Meningkatkan efisiensi produk.' : 'Operate CTP (Computer to Plate) machines and offset printing machines. Collaborate with other interns to brainstorm in order to implement printing/illustration ideas, and Improve product efficiency.'
    },
    {
      title: 'Staff Gudang',
      company: 'Shope Xpress',
      period: 'Juni 2024 - September 2024',
      description: t('language') === 'id' ? 'Melakukan pengemasan dan pengecekan barang masuk dan barang keluar yang akan dikirim ke tempat tujuan. Mengatur barang di area muat dengan aman & efisien. Mengikuti peraturan SOP yang telah diberitahu. Memberikan arahan kepada pekerja lain untuk selalu semangat dan fokus terhadap yang dikerjakannya.' : 'Carrying out packaging and checking of incoming and outgoing goods to be sent to the destination. Arranging goods in the loading area safely & efficiently. Following the SOP regulations that have been notified. Providing direction to other workers to always be enthusiastic and focused on what they are doing.'
    },
    {
      title: 'Helper Gudang',
      company: 'SI Cepat Ekspres',
      period: 'Oktober 2024 - Desember 2024',
      description: t('language') === 'id' ? 'Mengatur barang di area muat dengan aman & efisien. Melakukan pengemasan barang. Melakukan pengecekan barang masuk dan barang keluar yang akan di kirim ke tempat tujuan. Mengikuti peraturan SOP yang telah di beritahu.' : 'Arrange goods in the loading area safely & efficiently. Pack goods. Check incoming and outgoing goods that will be sent to the destination. Follow the SOP regulations that have been notified.'
    },
    {
      title: 'Freelance Web & App Developer',
      company: 'Freelance, Self-Employed and StartUp Innovations',
      period: 'Desember 2024 - Now...',
      description: t('language') === 'id' ? 'Membangun aplikasi web & app dan mendapatkan pengalaman dalam framework pengembangan modern.' : 'Built web & app applications and gained experience in modern development frameworks.'
    }
  ];

  //Settings data education here!
  const education = [
    {
      title: t('language') === 'id' ? 'Jurusan Multimedia' : 'Multimedia Department',
      institution: 'SMK VOCTECH 1 TANGERANG',
      period: '2021 - 2024',
      description: t('language') === 'id' ? 'Menjabat sebagai ketua kelas selama 2 tahun dan menjabat sebagai wakil ketua kelas selama 1 tahun. Menjadi murid terbaik dalam bidang praktek bahasa pemrograman komputer.' : 'Served as class president for 2 years and as vice president for 1 year. Became the best student in the field of computer programming practice.'
    },
    {
      title: t('language') === 'id' ? 'Sekolah Menengah Pertama' : 'Junior High School',
      institution: 'SMP YPP SOBANG',
      period: '2018 - 2021',
      description: t('language') === 'id' ? 'Pendidikan umum dengan fokus pada teknologi dan sains.' : 'General education with a focus on technology and science.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/*Header*/}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('profile')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('language') === 'id' ? 'Pengembang yang passionate dengan kecintaan untuk menciptakan solusi digital inovatif.' : 'Passionate developer with a love for creating innovative digital solutions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/*About Me*/}
          <div className="lg:col-span-2 space-y-8 fade-in-up">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  {t('about')}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {t('aboutText')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/*Quick Stats*/}
          <div className="space-y-6 slide-in-right">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {t('language') === 'id' ? 'Statistik Cepat' : 'Quick Stats'}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('language') === 'id' ? 'Proyek' : 'Projects'}</span>
                    <span className="font-semibold text-foreground">7+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('language') === 'id' ? 'Pengalaman' : 'Experience'}</span>
                    <span className="font-semibold text-foreground">1+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('language') === 'id' ? 'Teknologi' : 'Technologies'}</span>
                    <span className="font-semibold text-foreground">8+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('language') === 'id' ? 'Kepuasan' : 'Satisfaction'}</span>
                    <span className="font-semibold text-foreground">100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/*Experience Section*/}
        <div className="mt-20 fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('experience')}
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/*Education Section*/}
        <div className="mt-20 fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('education')}
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{edu.title}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
