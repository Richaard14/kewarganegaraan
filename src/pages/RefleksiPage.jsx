import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RefleksiPage() {
  const [expandedId, setExpandedId] = useState(null);

  const refleksiData = [
    {
      id: 1,
      title: 'Pemahaman Pancasila dan Kewarganegaraan',
      icon: '🧭',
      description: 'Pancasila sebagai pedoman hidup dan pendidikan kewarganegaraan membentuk kesadaran warga negara',
      details: [
        'Pancasila bukan sekadar simbol, tetapi nilai-nilai luhur bangsa yang membimbing perilaku',
        'Pendidikan Kewarganegaraan membentuk kesadaran hak, kewajiban, dan tanggung jawab terhadap negara',
        'Aktif dalam pembelajaran untuk memahami hubungan warga–negara secara mendalam'
      ]
    },
    {
      id: 2,
      title: 'Identitas Nasional dan Nasionalisme',
      icon: '🇮🇩',
      description: 'Kesadaran kolektif dan sejarah membentuk identitas dan rasa cinta tanah air',
      details: [
        'Identitas nasional lahir dari kesadaran kolektif, pengalaman dijajah, dan tekad bersama',
        'Sumpah Pemuda sebagai tonggak pembentukan kesadaran kebangsaan',
        'Memahami sejarah kolonialisme menumbuhkan rasa cinta tanah air dan persatuan'
      ]
    },
    {
      id: 3,
      title: 'Hubungan Rakyat, Negara, dan Hukum',
      icon: '⚖️',
      description: 'Rakyat, negara, dan hukum terkait melalui kontrak sosial dan kesadaran hak politik',
      details: [
        'Kekuasaan negara berasal dari rakyat dan harus dilegitimasi melalui hukum',
        'Rakyat memiliki hak dan tanggung jawab untuk memastikan negara melaksanakan kontrak sosial',
        'Memahami teori kontrak sosial (Hobbes, Locke, Rousseau) memperkuat kesadaran kritis'
      ]
    },
    {
      id: 4,
      title: 'Ideologi dan Pandangan Hidup',
      icon: '📚',
      description: 'Pancasila sebagai ideologi terbuka membimbing tindakan dan sistem sosial-politik',
      details: [
        'Ideologi memengaruhi cara berpikir, bertindak, dan membentuk sistem sosial-politik',
        'Pancasila sebagai panduan hidup yang mempersatukan keberagaman',
        'Memahami berbagai ideologi dunia untuk menilai sistem sosial-politik secara kritis'
      ]
    },
    {
      id: 5,
      title: 'Konstitusi dan Demokrasi',
      icon: '🗳️',
      description: 'Konstitusi dan demokrasi Pancasila menekankan hak, musyawarah, dan partisipasi aktif',
      details: [
        'Konstitusi melindungi hak, membatasi kekuasaan, dan menjamin stabilitas negara',
        'Demokrasi Pancasila menekankan musyawarah, pemilu adil, dan perlindungan hak minoritas',
        'Partisipasi aktif warga negara penting untuk menjaga kualitas demokrasi substantif'
      ]
    },
    {
      id: 6,
      title: 'Fungsi dan Peran Negara',
      icon: '🏛️',
      description: 'Negara berperan membangun kesejahteraan, pendidikan, keamanan, dan keadilan',
      details: [
        'Negara tidak hanya menegakkan hukum tetapi juga membangun kesejahteraan dan keadilan',
        'Kebijakan publik harus berbasis etika, transparansi, partisipasi, responsivitas, supremasi hukum, efisiensi, dan keadilan'
      ]
    },
    {
      id: 7,
      title: 'Multikulturalisme dan Toleransi',
      icon: '🌏',
      description: 'Mengelola keberagaman dengan prinsip inklusivitas, toleransi, dan nilai Pancasila',
      details: [
        'Indonesia adalah negara multikultural yang harus dikelola dengan prinsip inklusivitas dan kesetaraan',
        'Nilai Pancasila menjadi dasar etis dalam mengelola keberagaman',
        'Mahasiswa perlu berperan aktif menciptakan lingkungan toleran dan menghargai perbedaan'
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      {/* Header */}
<section
        className="py-5"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          animation: 'fadeInDown 0.8s ease-out'
        }}
      >
        <div className="container text-center">
          <h1
            className="display-4 fw-bold mb-3"
            style={{ animation: 'fadeInDown 0.8s ease-out 0.1s both' }}
          >
            Refleksi Pribadi
          </h1>
          <p className="lead" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            Menyusun pemahaman dan pengalaman selama mempelajari mata kuliah Kewarganegaraan
          </p>
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
          <h2 className="fw-bold mb-5 fs-2" style={{ animation: 'fadeInDown 0.8s ease-out' }}>Kesimpulan Refleksi Pribadi</h2>
          <div className="card border-0 shadow" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            <div className="card-body p-5">
              <p className="fs-5 text-muted mb-4">
                Mata kuliah Pendidikan Kewarganegaraan membentuk kesadaran berbangsa sekaligus menumbuhkan sikap kritis terhadap kekuasaan, sekaligus membantu mahasiswa memahami peran aktif sebagai warga negara dalam menjaga demokrasi, keadilan, dan persatuan. Mata kuliah ini menekankan nilai Pancasila sebagai panduan hidup, dasar negara, dan kerangka etis dalam kehidupan sosial, sekaligus membuka pemikiran tentang pentingnya toleransi, multikulturalisme, dan kepedulian sosial sebagai kewajiban moral setiap warga negara.
              </p>
              <p className="fs-5 text-muted mb-4">
                Jadi Refleksi singkat Saya:
              </p>
              <p className="fs-5 text-muted mb-4">
                Selama delapan pertemuan, saya belajar pentingnya memahami hak dan kewajiban sebagai warga negara serta berpartisipasi aktif dalam membangun kesadaran berbangsa. Identitas nasional, Pancasila, dan kontrak sosial rakyat–negara membimbing saya untuk hidup inklusif, menghargai keberagaman, dan mematuhi hukum. Demokrasi dan konstitusi menjadi kerangka untuk pemerintahan yang adil dan akuntabel, sementara multikulturalisme menegaskan perlunya toleransi, persatuan, dan harmoni di tengah keragaman Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
