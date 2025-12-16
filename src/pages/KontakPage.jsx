import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi
    if (!formData.nama || !formData.email || !formData.subjek || !formData.pesan) {
      setStatus({ type: 'error', message: '⚠️ Mohon isi semua field!' });
      return;
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus({ type: 'error', message: '❌ Format email tidak valid!' });
      return;
    }

    // Jika valid
    setStatus({ type: 'success', message: '✅ Pesan Anda telah dikirim! Terima kasih atas kontak Anda.' });
    setFormData({ nama: '', email: '', subjek: '', pesan: '' });

    // Hapus notifikasi setelah 5 detik
    setTimeout(() => setStatus(null), 5000);
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
            Hubungi Saya
          </h1>
          <p className="lead" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            Saya siap mendengar dari Anda! Jangan ragu untuk menghubungi saya melalui formulir di bawah ini.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-4" style={{ animation: 'fadeInLeft 0.8s ease-out 0.2s both' }}>
              <h2 className="fw-bold mb-5">Informasi Kontak</h2>

              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    <span style={{ fontSize: '24px', marginRight: '10px' }}>📧</span>
                    Email
                  </h5>
                  <p className="card-text text-muted">
                    <a href="mailto:your.email@example.com" className="text-decoration-none">
                      richardtewuu1@gamail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    <span style={{ fontSize: '24px', marginRight: '10px' }}>📱</span>
                    Telepon
                  </h5>
                  <p className="card-text text-muted">
                    +62 812 5265 2569
                  </p>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    <span style={{ fontSize: '24px', marginRight: '10px' }}>📍</span>
                    Lokasi
                  </h5>
                  <p className="card-text text-muted">
                    Tangerang, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8" style={{ animation: 'fadeInRight 0.8s ease-out 0.2s both' }}>
              <div className="card border-0 shadow">
                <div className="card-body p-5">
                  <h2 className="card-title fw-bold mb-4">Kirim Pesan</h2>

                  {status && (
                    <div className={`alert alert-${status.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`} role="alert">
                      {status.message}
                      <button type="button" className="btn-close" onClick={() => setStatus(null)}></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="nama" className="form-label fw-bold">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        placeholder="Masukkan nama Anda"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="subjek" className="form-label fw-bold">
                        Subjek
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="subjek"
                        name="subjek"
                        value={formData.subjek}
                        onChange={handleChange}
                        placeholder="Subjek pesan Anda"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="pesan" className="form-label fw-bold">
                        Pesan
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="pesan"
                        name="pesan"
                        rows="6"
                        value={formData.pesan}
                        onChange={handleChange}
                        placeholder="Tuliskan pesan Anda di sini..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">
                      Kirim Pesan 📬
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5" style={{ animation: 'fadeInDown 0.8s ease-out' }}>Terhubung di Media Sosial</h2>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="#" className="btn btn-outline-primary btn-lg rounded-circle" 
               style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
              f
            </a>
            <a href="#" className="btn btn-outline-info btn-lg rounded-circle" 
               style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
              𝕏
            </a>
            <a href="#" className="btn btn-outline-danger btn-lg rounded-circle" 
               style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
              📷
            </a>
            <a href="#" className="btn btn-outline-dark btn-lg rounded-circle" 
               style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
              💼
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
