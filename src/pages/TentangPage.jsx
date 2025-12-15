import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TentangPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="container animate-fade-in-down">
          <h1 className="display-4 fw-bold mb-3">Tentang Saya</h1>
          <p className="lead">Kenali lebih dalam perjalanan pembelajaran saya</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 animate-fade-in-left">
              <div style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                color: 'white',
                padding: '40px',
                borderRadius: '15px',
                textAlign: 'center',
                fontSize: '80px'
              }} className="animate-float">
                👨‍🎓
              </div>
            </div>
            <div className="col-lg-7 animate-fade-in-right">
              <h2 className="fw-bold mb-4 fs-3">Profil Singkat</h2>
              <p className="fs-5 text-muted mb-3">
                Saya adalah seorang mahasiswa yang berkomitmen untuk memperdalam pemahaman mengenai civic disposition 
                dan peran saya sebagai warga negara yang bertanggung jawab. 
              </p>
              <p className="fs-5 text-muted mb-3">
                Portofolio ini merupakan dokumentasi perjalanan pembelajaran dan refleksi pribadi saya dalam memahami 
                nilai-nilai kewarganegaraan yang penting.
              </p>
              <p className="fs-5 text-muted">
                Melalui perkuliahan ini, saya telah belajar tidak hanya secara teoritis, tetapi juga melalui pengalaman 
                praktis yang bermakna. Saya berharap portofolio ini dapat menunjukkan komitmen saya terhadap pengembangan 
                diri dan kontribusi positif kepada masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 fs-2 animate-fade-in">Nilai-Nilai Utama Saya</h2>
          <div className="row g-4">
            <div className="col-md-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h3 className="card-title fw-bold mb-3">
                    <span style={{ fontSize: '30px', marginRight: '10px' }}>🤲</span>
                    Tanggung Jawab
                  </h3>
                  <p className="card-text text-muted">
                    Saya percaya bahwa setiap warga negara memiliki tanggung jawab untuk berkontribusi pada kemajuan masyarakat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h3 className="card-title fw-bold mb-3">
                    <span style={{ fontSize: '30px', marginRight: '10px' }}>🤝</span>
                    Kebersamaan
                  </h3>
                  <p className="card-text text-muted">
                    Melalui kolaborasi dan gotong royong, kita dapat mencapai tujuan bersama yang lebih besar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h3 className="card-title fw-bold mb-3">
                    <span style={{ fontSize: '30px', marginRight: '10px' }}>🌱</span>
                    Pengembangan
                  </h3>
                  <p className="card-text text-muted">
                    Pembelajaran berkelanjutan adalah kunci untuk tumbuh menjadi individu dan masyarakat yang lebih baik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 fs-2 animate-fade-in">Perjalanan Saya</h2>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="timeline">
                <div className="d-flex mb-5 animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
                  <div style={{ width: '40px', minWidth: '40px' }}>
                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" 
                         style={{ width: '40px', height: '40px', fontSize: '20px' }}>
                      📚
                    </div>
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold">Perkuliahan Dimulai</h5>
                    <p className="text-muted">Memulai perjalanan mempelajari civic disposition dan nilai-nilai kewarganegaraan</p>
                  </div>
                </div>
                <div className="d-flex mb-5 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                  <div style={{ width: '40px', minWidth: '40px' }}>
                    <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" 
                         style={{ width: '40px', height: '40px', fontSize: '20px' }}>
                      💭
                    </div>
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold">Refleksi Mendalam</h5>
                    <p className="text-muted">Melakukan refleksi tentang kesadaran, kebersamaan, dan pengembangan diri</p>
                  </div>
                </div>
                <div className="d-flex animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
                  <div style={{ width: '40px', minWidth: '40px' }}>
                    <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center" 
                         style={{ width: '40px', height: '40px', fontSize: '20px' }}>
                      🏆
                    </div>
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold">Pencapaian & Pertumbuhan</h5>
                    <p className="text-muted">Meraih pencapaian dan terus berkembang sebagai warga negara yang lebih baik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
