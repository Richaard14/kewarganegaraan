import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="text-white pt-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="container pb-5">
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <h5 className="fw-bold mb-4">Tentang Portofolio</h5>
            <p className="text-white-50">
              Dokumentasi perjalanan pembelajaran dan refleksi pribadi tentang civic disposition sebagai warga negara yang bertanggung jawab.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-4">Menu Navigasi</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none hover-effect">🏠 Home</Link></li>
              <li className="mb-2"><Link to="/tentang" className="text-white-50 text-decoration-none hover-effect">📖 Tentang Saya</Link></li>
              <li className="mb-2"><Link to="/refleksi" className="text-white-50 text-decoration-none hover-effect">💭 Refleksi</Link></li>
              <li className="mb-2"><Link to="/pembelajaran" className="text-white-50 text-decoration-none hover-effect">📚 Pembelajaran</Link></li>
              <li className="mb-2"><Link to="/pencapaian" className="text-white-50 text-decoration-none hover-effect">🏆 Pencapaian</Link></li>
              <li className="mb-2"><Link to="/kontak" className="text-white-50 text-decoration-none hover-effect">💌 Kontak</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-4">Hubungi Saya</h5>
            <p className="text-white-50 mb-2">
              📧 Email: your.email@example.com
            </p>
            <p className="text-white-50 mb-3">
              📱 Telepon: +62 XXX XXXX XXXX
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 text-decoration-none">Facebook</a>
              <a href="#" className="text-white-50 text-decoration-none">Twitter</a>
              <a href="#" className="text-white-50 text-decoration-none">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top border-white-50 py-4">
        <div className="container text-center text-white-50">
          <p className="mb-0">&copy; 2025 Portofolio Refleksi Civic Disposition. Semua hak dilindungi.</p>
          <p className="mb-0 small mt-2">Dibuat dengan komitmen untuk pendidikan dan pengembangan karakter warga negara 🇮🇩</p>
        </div>
      </div>
    </footer>
  );
}
