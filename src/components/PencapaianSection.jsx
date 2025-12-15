import React from 'react';

export default function PencapaianSection() {
  const achievements = [
    {
      icon: '📚',
      title: 'Pengetahuan Mendalam',
      description: 'Memahami teori civic disposition dan praktik penerapannya di masyarakat'
    },
    {
      icon: '🌱',
      title: 'Pertumbuhan Pribadi',
      description: 'Pengembangan sikap positif terhadap kehidupan bermasyarakat dan bernegara'
    },
    {
      icon: '🎯',
      title: 'Tujuan Jelas',
      description: 'Merumuskan visi jangka panjang sebagai warga negara yang berkomitmen'
    },
    {
      icon: '🤲',
      title: 'Kontribusi Nyata',
      description: 'Mengambil inisiatif dalam kegiatan sosial dan kemasyarakatan'
    }
  ];

  return (
    <section id="pencapaian" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Pencapaian dan Pertumbuhan Saya
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
