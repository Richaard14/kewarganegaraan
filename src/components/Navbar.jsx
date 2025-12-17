import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 👉 fungsi agar klik navbar selalu balik ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav
      className="navbar sticky-top"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #e5e5e5',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        padding: '1rem 0'
      }}
    >
      <div
        className="container-fluid px-4"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          width: '100%'
        }}
      >
        {/* Brand */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/"
          onClick={scrollToTop}
          style={{
            fontSize: '1.25rem',
            color: '#1a1a1a',
            margin: 0,
            whiteSpace: 'nowrap',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
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

        {/* Menu */}
        <div
          className="navbar-collapse"
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ul
            className="navbar-nav gap-1"
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: 0,
              alignItems: 'center'
            }}
          >
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
                    transition: 'all 0.3s ease',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    margin: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#667eea';
                    e.currentTarget.style.backgroundColor =
                      'rgba(102, 126, 234, 0.1)';
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

        {/* Hamburger (tidak diubah) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          style={{
            border: 'none',
            padding: '0.25rem 0.75rem',
            display: 'none'
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ backgroundColor: '#1a1a1a' }}
          />
        </button>
      </div>
    </nav>
  );
}
