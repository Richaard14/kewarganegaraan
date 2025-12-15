import React from 'react';
import RefleksiCard from './RefleksiCard';

export default function RefleksiSection() {
  const refleksiData = [
    {
      icon: '🏛️',
      title: 'Kesadaran Kewarganegaraan',
      description: 'Melalui perkuliahan ini, saya memahami lebih mendalam tentang pentingnya kesadaran sebagai warga negara. Saya belajar bagaimana hak dan kewajiban saling berkaitan dalam sistem demokrasi yang sehat.',
      details: [
        {
          title: 'Memahami Konstitusi dan Hukum Dasar Negara',
          content: 'Saya belajar bahwa UUD 1945 adalah landasan fundamental dari negara kita. Memahami konstitusi berarti memahami hak-hak dan kewajiban yang telah ditetapkan untuk setiap warga negara.'
        },
        {
          title: 'Mengerti Peran Setiap Warga Negara dalam Demokrasi',
          content: 'Saya menyadari bahwa dalam sistem demokrasi, setiap suara penting. Partisipasi dalam pemilu, diskusi publik, dan kegiatan sosial adalah cara nyata untuk menjalankan peran sebagai warga negara.'
        },
        {
          title: 'Kesadaran Akan Pentingnya Partisipasi Aktif',
          content: 'Melalui diskusi kelas, saya melihat bahwa banyak masalah sosial bisa diselesaikan jika warga negara berpartisipasi aktif.'
        },
        {
          title: 'Tanggung Jawab Terhadap Masyarakat dan Lingkungan',
          content: 'Saya belajar bahwa tanggung jawab saya tidak terbatas pada diri sendiri. Saya bertanggung jawab pada keluarga, komunitas, bangsa, dan bahkan generasi mendatang.'
        }
      ]
    },
    {
      icon: '🤝',
      title: 'Nilai-Nilai Kebersamaan',
      description: 'Saya menyadari bahwa sebagai warga negara, saya memiliki tanggung jawab untuk membangun kebersamaan dan gotong royong. Pendekatan kolaboratif adalah kunci untuk kemajuan bersama.',
      details: [
        {
          title: 'Kegiatan Sosial dan Volunteer',
          content: 'Saya mengikuti kegiatan pengabdian masyarakat yang membuat saya menyadari dampak nyata dari kebersamaan.'
        },
        {
          title: 'Belajar Menghargai Keberagaman',
          content: 'Melalui interaksi dengan komunitas yang berbeda, saya memahami bahwa keberagaman adalah kekuatan, bukan kelemahan.'
        },
        {
          title: 'Membangun Keterampilan Komunikasi',
          content: 'Mendengarkan dan memahami perspektif orang lain adalah fondasi dari kebersamaan yang kuat.'
        },
        {
          title: 'Menemukan Passion dalam Kontribusi Sosial',
          content: 'Saya menemukan bahwa ada kepuasan tersendiri dalam membantu sesama dan berkontribusi pada masyarakat.'
        }
      ]
    },
    {
      icon: '💭',
      title: 'Pengembangan Karakter',
      description: 'Pembelajaran tidak hanya teoretis, tetapi juga membentuk karakter saya. Saya belajar untuk lebih empati, bertanggung jawab, dan berani mengambil inisiatif positif.',
      details: [
        {
          title: 'Peningkatan Empati Terhadap Sesama',
          content: 'Saya menjadi lebih peka terhadap kebutuhan dan perasaan orang lain di sekitar saya.'
        },
        {
          title: 'Lebih Berani Menyuarakan Pendapat dengan Bijak',
          content: 'Dalam forum diskusi, saya mulai aktif memberikan perspektif dengan menghormati pandangan orang lain.'
        },
        {
          title: 'Tanggung Jawab yang Lebih Besar',
          content: 'Saya menyadari bahwa setiap tindakan saya memiliki konsekuensi dan dampak pada komunitas saya.'
        },
        {
          title: 'Motivasi untuk Menjadi Agen Perubahan Positif',
          content: 'Saya termotivasi untuk tidak hanya menerima keadaan, tetapi aktif membuat perbedaan positif.'
        }
      ]
    }
  ];

  return (
    <section id="refleksi" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Refleksi Pembelajaran
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {refleksiData.map((refleksi, index) => (
            <RefleksiCard 
              key={index}
              icon={refleksi.icon}
              title={refleksi.title}
              description={refleksi.description}
              details={refleksi.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
