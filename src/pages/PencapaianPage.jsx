import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PencapaianPage() {
  const achievements = [
    {
      id: 1,
      icon: '🏅',
      judul: 'Partisipasi Aktif',
      deskripsi: 'Berpartisipasi aktif dalam setiap diskusi kelas dan memberikan kontribusi pemikiran yang bermakna',
      bukti: 'Catatan partisipasi di setiap sesi pembelajaran, feedback dari instruktur'
    },
    {
      id: 2,
      icon: '💡',
      judul: 'Pemahaman Konseptual',
      deskripsi: 'Menguasai konsep-konsep utama civic disposition dan dapat mengaitkannya dengan kehidupan nyata',
      bukti: 'Hasil refleksi tertulis, analisis kasus yang mendalam'
    },
    {
      id: 3,
      icon: '🤝',
      judul: 'Kolaborasi Tim',
      deskripsi: 'Bekerja sama dengan efektif dalam proyek kelompok dan menunjukkan kepemimpinan yang konstruktif',
      bukti: 'Proyek kelompok yang berhasil, feedback dari rekan kerja'
    },
    {
      id: 4,
      icon: '📝',
      judul: 'Refleksi Mendalam',
      deskripsi: 'Melakukan refleksi kritis tentang pembelajaran dan implikasinya terhadap kehidupan pribadi dan sosial',
      bukti: 'Jurnal refleksi, esai pemikiran, presentasi reflektif'
    },
    {
      id: 5,
      icon: '🎯',
      judul: 'Perencanaan Aksi',
      deskripsi: 'Menyusun rencana aksi konkret untuk menerapkan pembelajaran dalam kehidupan sehari-hari',
      bukti: 'Rencana aksi tertulis, komitmen perilaku yang terobservasi'
    },
    {
      id: 6,
      icon: '🌟',
      judul: 'Pertumbuhan Holistik',
      deskripsi: 'Menunjukkan pertumbuhan nyata dalam kesadaran diri, kepemimpinan, dan tanggung jawab sosial',
      bukti: 'Penilaian holistik, umpan balik positif, perubahan perilaku yang terukur'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Pencapaian</h1>
          <p className="lead">Bukti nyata dari pembelajaran dan pertumbuhan</p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 hover-shadow" 
                     style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translateY(-5px)';
                       e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateY(0)';
                       e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
                     }}>
                  <div className="card-body">
                    <div style={{ fontSize: '60px', marginBottom: '15px', textAlign: 'center' }}>
                      {achievement.icon}
                    </div>
                    <h5 className="card-title fw-bold text-center mb-3">
                      {achievement.judul}
                    </h5>
                    <p className="card-text text-muted mb-3">
                      {achievement.deskripsi}
                    </p>
                    <div className="alert alert-light border border-primary">
                      <small className="text-muted">
                        <strong>📌 Bukti:</strong> {achievement.bukti}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-5 fs-2 text-center">Ringkasan Pencapaian</h2>
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="card border-0 bg-primary text-white shadow-sm">
                <div className="card-body py-5">
                  <h3 className="display-5 fw-bold">8</h3>
                  <p className="card-text">Minggu Pembelajaran</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-success text-white shadow-sm">
                <div className="card-body py-5">
                  <h3 className="display-5 fw-bold">6+</h3>
                  <p className="card-text">Pencapaian Utama</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-warning text-white shadow-sm">
                <div className="card-body py-5">
                  <h3 className="display-5 fw-bold">100%</h3>
                  <p className="card-text">Komitmen Penuh</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-info text-white shadow-sm">
                <div className="card-body py-5">
                  <h3 className="display-5 fw-bold">∞</h3>
                  <p className="card-text">Pertumbuhan Berkelanjutan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-5 fs-2 text-center">Refleksi Pencapaian</h2>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="card border-0 shadow">
                <div className="card-body p-5">
                  <p className="fs-5 text-muted mb-4">
                    "Setiap pencapaian dalam perjalanan ini bukan hanya tentang pengetahuan yang saya peroleh, 
                    tetapi tentang transformasi dalam cara saya memandang peran saya sebagai warga negara."
                  </p>
                  <p className="fs-5 text-muted mb-4">
                    Saya telah belajar bahwa civic disposition bukan sekadar konsep akademis, tetapi praktik 
                    hidup yang memerlukan kesadaran, komitmen, dan aksi nyata setiap hari.
                  </p>
                  <p className="fs-5 text-muted">
                    Dengan setiap pencapaian, saya semakin yakin bahwa saya dapat membuat perbedaan positif 
                    dalam komunitas saya, dan bahwa pertumbuhan pribadi saya adalah investasi untuk masa depan 
                    yang lebih baik bagi semua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
