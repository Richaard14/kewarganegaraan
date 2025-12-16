import React from 'react';

export default function PembelajaranSection() {
  const timelineData = [
    {
      period: 'Minggu 1-2',
      title: 'Pengenalan Civic Disposition',
      description: 'Memahami konsep dasar civic disposition dan bagaimana ia membentuk perilaku warga negara yang bertanggung jawab.'
    },
    {
      period: 'Minggu 3-4',
      title: 'Hak dan Kewajiban Warga Negara',
      description: 'Mempelajari hubungan antara hak dan kewajiban, serta implikasinya dalam kehidupan sehari-hari sebagai warga negara.'
    },
    {
      period: 'Minggu 5-6',
      title: 'Partisipasi dalam Demokrasi',
      description: 'Mengeksplorasi berbagai cara untuk berpartisipasi aktif dalam proses demokratis dan membuat perbedaan positif.'
    },
    {
      period: 'Minggu 7-8',
      title: 'Kepemimpinan dan Tanggung Jawab',
      description: 'Belajar tentang kualitas kepemimpinan dan bagaimana menunjukkan tanggung jawab dalam komunitas.'
    }
  ];

  return (
    <section id="pembelajaran" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Materi Pembelajaran Utama
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Left/Right content */}
                <div className="w-1/2 px-8">
                  <div 
                    className={`${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div className="font-bold text-blue-500 mb-2">{item.period}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="w-0 flex justify-center">
                  <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white absolute"></div>
                </div>

                {/* Right/Left placeholder */}
                <div className="w-1/2 px-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}