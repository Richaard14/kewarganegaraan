import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar sticky-top shadow-sm" style={{ background: '#ffffff', borderBottom: '1px solid #e5e5e5', padding: '1rem 0', zIndex: 999 }}>
      <div className="container-fluid px-4 d-flex align-items-center justify-content-between flex-wrap">

        {/* Brand */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/"
          onClick={scrollToTop}
          style={{
            fontSize: '1.25rem',
            color: '#1a1a1a',
            whiteSpace: 'nowrap',
            transition: 'all 0.3s ease'
          }}
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{
              width: '31px',
              height: '28px',
              marginRight: '0.5rem',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          PORTOFOLIO RICHARD
        </Link>

        {/* Menu - selalu tampil */}
        <ul className="navbar-nav d-flex flex-row gap-1 flex-wrap" style={{ margin: 0, alignItems: 'center' }}>
          {[
            { to: '/', label: 'Home' },
            { to: '/tentang', label: 'Tentang Saya' },
            { to: '/refleksi', label: 'Refleksi' },
            { to: '/pembelajaran', label: 'Pembelajaran' },
            { to: '/pencapaian', label: 'Showcase Karya' },
            { to: '/kontak', label: 'Kontak' }
          ].map((item) => (
            <li className="nav-item" key={item.to}>
              <Link
                className="nav-link"
                to={item.to}
                onClick={scrollToTop}
                style={{
                  color: '#1a1a1a',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#1a1a1a';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
