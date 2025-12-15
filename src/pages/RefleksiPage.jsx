import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RefleksiPage() {
  const [expandedId, setExpandedId] = useState(null);

  const refleksiData = [
    {
      id: 1,
      title: 'Kesadaran Diri sebagai Warga Negara',
      icon: '🧠',
      description: 'Pemahaman mendalam tentang peran dan tanggung jawab sebagai warga negara',
      details: [
        'Memahami hak dan kewajiban sebagai warga negara',
        'Mengenal pentingnya partisipasi aktif dalam demokrasi',
        'Kesadaran akan dampak pribadi terhadap komunitas',
        'Menghargai keberagaman dalam masyarakat'
      ]
    },
    {
      id: 2,
      title: 'Kebersamaan dan Gotong Royong',
      icon: '🤝',
      description: 'Nilai-nilai kolaborasi dan kerja sama untuk kepentingan bersama',
      details: [
        'Pentingnya kolaborasi dalam menyelesaikan masalah',
        'Menghargai kontribusi setiap individu',
        'Membangun komunitas yang solid dan saling mendukung',
        'Gotong royong sebagai fondasi masyarakat Indonesia'
      ]
    },
    {
      id: 3,
      title: 'Pengembangan Diri dan Pertumbuhan',
      icon: '🌱',
      description: 'Komitmen terhadap pembelajaran berkelanjutan dan peningkatan diri',
      details: [
        'Pembelajaran dari pengalaman dan refleksi',
        'Mengembangkan keterampilan kepemimpinan',
        'Adaptasi terhadap perubahan zaman',
        'Kontribusi positif untuk masa depan yang lebih baik'
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      {/* Header */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', animation: 'fadeInDown 0.8s ease-out' }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-3" style={{ animation: 'fadeInDown 0.8s ease-out 0.1s both' }}>Refleksi Pribadi</h1>
          <p className="lead" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>Perjalanan pemahaman tentang civic disposition</p>
        </div>
      </section>

      {/* Refleksi Cards */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {refleksiData.map((refleksi, idx) => (
              <div key={refleksi.id} className="col-lg-4" style={{ animation: `fadeInUp 0.8s ease-out ${0.1 + idx * 0.1}s both` }}>
                <div className="card h-100 shadow-sm border-0 cursor-pointer hover-shadow" 
                     onClick={() => toggleExpand(refleksi.id)}
                     style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <div className="card-body">
                    <div style={{ fontSize: '50px', marginBottom: '15px', textAlign: 'center' }}>
                      {refleksi.icon}
                    </div>
                    <h5 className="card-title fw-bold text-center mb-3">
                      {refleksi.title}
                    </h5>
                    <p className="card-text text-center text-muted mb-3">
                      {refleksi.description}
                    </p>
                    <div className="text-center">
                      <button className="btn btn-sm btn-outline-primary">
                        {expandedId === refleksi.id ? '▼ Tutup' : '▶ Baca Selengkapnya'}
                      </button>
                    </div>
                    {expandedId === refleksi.id && (
                      <div className="mt-4 pt-4 border-top">
                        <h6 className="fw-bold mb-3">Poin Utama:</h6>
                        <ul className="list-unstyled">
                          {refleksi.details.map((detail, idx) => (
                            <li key={idx} className="mb-2">
                              <span className="badge bg-primary me-2">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Reflection */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-5 fs-2" style={{ animation: 'fadeInDown 0.8s ease-out' }}>Ringkasan Refleksi Keseluruhan</h2>
          <div className="card border-0 shadow" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            <div className="card-body p-5">
              <p className="fs-5 text-muted mb-4">
                Melalui proses refleksi yang mendalam, saya telah memahami bahwa civic disposition bukan sekadar 
                konsep teoritis, tetapi praktik nyata yang mempengaruhi setiap aspek kehidupan bermasyarakat.
              </p>
              <p className="fs-5 text-muted mb-4">
                Kesadaran diri sebagai warga negara telah membuka mata saya tentang pentingnya partisipasi aktif. 
                Kebersamaan mengajarkan saya bahwa kekuatan sejati terletak pada kesatuan dan gotong royong. 
                Sementara itu, pengembangan diri terus mendorong saya untuk menjadi versi terbaik dari diri saya sendiri.
              </p>
              <p className="fs-5 text-muted">
                Dengan pemahaman ini, saya berkomitmen untuk terus belajar, berkontribusi, dan tumbuh sebagai 
                individu dan anggota masyarakat yang bertanggung jawab.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
