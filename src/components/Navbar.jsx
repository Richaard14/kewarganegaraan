import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky-top" style={{ 
      background: '#ffffff', 
      borderBottom: '1px solid #e5e5e5',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      padding: '1rem 0'
    }}>
      <div className="container-fluid px-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', width: '100%' }}>
        {/* Brand - Left */}
        <Link className="navbar-brand fw-bold" to="/" style={{ 
          fontSize: '1.25rem', 
          color: '#1a1a1a',
          margin: 0,
          whiteSpace: 'nowrap',
          transition: 'all 0.3s ease'
        }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
          🎓 Civic Portfolio
        </Link>

        {/* Menu Navigation - Center */}
        <div className="navbar-collapse" id="navbarNav" style={{ 
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ul className="navbar-nav gap-1" style={{ display: 'flex', flexDirection: 'row', margin: 0, alignItems: 'center' }}>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: '#1a1a1a', fontWeight: '500', transition: 'all 0.3s ease', padding: '0.5rem 1rem', borderRadius: '6px', margin: 0 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#667eea'; e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tentang" style={{ color: '#1a1a1a', fontWeight: '500', transition: 'all 0.3s ease', padding: '0.5rem 1rem', borderRadius: '6px', margin: 0 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#667eea'; e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Tentang Saya
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/refleksi" style={{ color: '#1a1a1a', fontWeight: '500', transition: 'all 0.3s ease', padding: '0.5rem 1rem', borderRadius: '6px', margin: 0 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#667eea'; e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Refleksi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pembelajaran" style={{ color: '#1a1a1a', fontWeight: '500', transition: 'all 0.3s ease', padding: '0.5rem 1rem', borderRadius: '6px', margin: 0 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#667eea'; e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Pembelajaran
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pencapaian" style={{ color: '#1a1a1a', fontWeight: '500', transition: 'all 0.3s ease', padding: '0.5rem 1rem', borderRadius: '6px', margin: 0 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#667eea'; e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Pencapaian
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kontak" style={{ color: '#1a1a1a', fontWeight: '500', transition: 'all 0.3s ease', padding: '0.5rem 1rem', borderRadius: '6px', margin: 0 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#667eea'; e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isOpen}
          style={{ border: 'none', padding: '0.25rem 0.75rem', display: 'none' }}
        >
          <span className="navbar-toggler-icon" style={{ backgroundColor: '#1a1a1a' }}></span>
        </button>
      </div>
    </nav>
  );
}
