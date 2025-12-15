import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PembelajaranPage() {
  const timelineData = [
    {
      minggu: 'Minggu 1',
      judul: 'Pengenalan Civic Disposition',
      deskripsi: 'Memahami konsep dasar civic disposition dan relevansinya dengan kehidupan modern',
      hasil: 'Pemahaman awal tentang hak dan kewajiban warga negara'
    },
    {
      minggu: 'Minggu 2',
      judul: 'Partisipasi Demokratis',
      deskripsi: 'Mempelajari bentuk-bentuk partisipasi dalam sistem demokratis',
      hasil: 'Kesadaran akan pentingnya suara aktif dalam pembuatan keputusan'
    },
    {
      minggu: 'Minggu 3',
      judul: 'Keadilan Sosial',
      deskripsi: 'Eksplorasi tentang keadilan sosial dan hak asasi manusia',
      hasil: 'Pemahaman tentang kesetaraan dan perlakuan adil bagi semua'
    },
    {
      minggu: 'Minggu 4',
      judul: 'Kepemimpinan dan Tanggung Jawab',
      deskripsi: 'Mengembangkan keterampilan kepemimpinan dan tanggung jawab komunitas',
      hasil: 'Kesadaran akan kapasitas pribadi untuk memimpin perubahan'
    },
    {
      minggu: 'Minggu 5',
      judul: 'Keberlanjutan dan Lingkungan',
      deskripsi: 'Memahami tanggung jawab warga negara terhadap lingkungan',
      hasil: 'Komitmen terhadap praktik berkelanjutan'
    },
    {
      minggu: 'Minggu 6',
      judul: 'Integrasi Sosial',
      deskripsi: 'Menghargai keberagaman dan integrasi dalam masyarakat multikultural',
      hasil: 'Apresiasi yang lebih dalam terhadap perbedaan budaya'
    },
    {
      minggu: 'Minggu 7',
      judul: 'Refleksi dan Evaluasi',
      deskripsi: 'Merenungkan pembelajaran dan pertumbuhan pribadi',
      hasil: 'Identifikasi area untuk pertumbuhan lebih lanjut'
    },
    {
      minggu: 'Minggu 8',
      judul: 'Komitmen untuk Masa Depan',
      deskripsi: 'Merencanakan kontribusi berkelanjutan sebagai warga negara yang bertanggung jawab',
      hasil: 'Visi jelas untuk peran aktif dalam masyarakat'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Pembelajaran 8 Minggu</h1>
          <p className="lead">Perjalanan belajar yang mengubah perspektif</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {timelineData.map((item, idx) => (
                <div key={idx} className="mb-5">
                  <div className="row">
                    {idx % 2 === 0 ? (
                      <>
                        <div className="col-md-6">
                          <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                              <span className="badge bg-primary mb-3">{item.minggu}</span>
                              <h5 className="card-title fw-bold">{item.judul}</h5>
                              <p className="card-text text-muted mb-3">{item.deskripsi}</p>
                              <div className="alert alert-info mb-0">
                                <strong>📊 Hasil:</strong> {item.hasil}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                          <div style={{ 
                            width: '60px', 
                            height: '60px', 
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '24px',
                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                          }}>
                            📚
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-md-6 d-flex justify-content-center align-items-center order-md-last">
                          <div style={{ 
                            width: '60px', 
                            height: '60px', 
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '24px',
                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                          }}>
                            ✨
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                              <span className="badge bg-success mb-3">{item.minggu}</span>
                              <h5 className="card-title fw-bold">{item.judul}</h5>
                              <p className="card-text text-muted mb-3">{item.deskripsi}</p>
                              <div className="alert alert-info mb-0">
                                <strong>📊 Hasil:</strong> {item.hasil}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-5 fs-2 text-center">Kesimpulan Pembelajaran</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>📈</div>
                  <h5 className="card-title fw-bold">Pertumbuhan Pribadi</h5>
                  <p className="card-text text-muted">
                    Pembelajaran yang konsisten membawa pertumbuhan yang signifikan dalam pemahaman dan perspektif
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>🎯</div>
                  <h5 className="card-title fw-bold">Tujuan yang Jelas</h5>
                  <p className="card-text text-muted">
                    Setiap minggu pembelajaran membawa kami lebih dekat dengan pemahaman penuh tentang civic disposition
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>🚀</div>
                  <h5 className="card-title fw-bold">Aksi Nyata</h5>
                  <p className="card-text text-muted">
                    Pembelajaran diterjemahkan menjadi aksi nyata dan komitmen untuk perubahan positif
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
