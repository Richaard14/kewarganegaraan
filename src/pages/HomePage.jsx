import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 animate-fade-in-left">
              <h1 className="display-4 fw-bold mb-4">Selamat Datang!</h1>
              <p className="lead mb-4">
                Portofolio ini mendokumentasikan pembelajaran dan refleksi saya dalam mata kuliah Kewarganegaraan di Matana University, serta pemahaman tentang peran dan tanggung jawab sebagai warga negara.
              </p>
              <p className="fs-5 mb-5">
                Portofolio ini menunjukkan komitmen saya dalam mengembangkan kewarganegaraan dan berkontribusi bagi masyarakat.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/tentang" className="btn btn-light btn-lg px-4 py-3">
                  📚 Mulai Membaca
                </Link>
              </div>
            </div>
            <div className="col-lg-6 animate-fade-in-right">
              <div className="text-center">
                <div style={{ fontSize: '120px', marginBottom: '20px' }} className="hero-emoji">🎓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold fs-2 animate-fade-in">Apa yang Anda Temukan di Sini</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div style={{ fontSize: '50px', marginBottom: '15px' }} className="animate-float">💭</div>
                  <h5 className="card-title fw-bold">Refleksi</h5>
                  <p className="card-text text-muted">
                    Refleksi tentang kesadaran, kebersamaan, dan pengembangan diri
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div style={{ fontSize: '50px', marginBottom: '15px', animationDelay: '0.3s' }} className="animate-float">📖</div>
                  <h5 className="card-title fw-bold">Modul Pembelajaran</h5>
                  <p className="card-text text-muted">
                    Perjalanan pembelajaran selama 8 minggu dengan insight berharga
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div style={{ fontSize: '50px', marginBottom: '15px', animationDelay: '0.6s' }} className="animate-float">🖼️</div>
                  <h5 className="card-title fw-bold">Showcase Karya</h5>
                  <p className="card-text text-muted">
                    Capaian dan bukti nyata dari pembelajaran dan komitmen saya
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div style={{ fontSize: '50px', marginBottom: '15px', animationDelay: '0.9s' }} className="animate-float">🤝</div>
                  <h5 className="card-title fw-bold">Koneksi</h5>
                  <p className="card-text text-muted">
                    Mari terhubung dan berbagi pengalaman tentang civic disposition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)', color: 'white' }}>
        <div className="container text-center animate-fade-in">
          <h2 className="fw-bold mb-4">Siap untuk Memulai?</h2>
          <p className="fs-5 mb-4">
            Jelajahi portofolio saya dan pelajari lebih lanjut tentang perjalanan civic disposition saya
          </p>
          <Link to="/tentang" className="btn btn-light btn-lg px-5 py-3 fw-bold">
            Eksplorasi Sekarang →
          </Link>
        </div>
      </section>
    </div>
  );
}
