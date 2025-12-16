import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ShowcasePage() {
  const showcaseItems = [
    {
      id: 1,
      icon: '🎙️',
      judul: 'Podcast',
      deskripsi: 'Sebuah podcast yang membahas demo yang terjadi di Pati serta isu kenaikan pajak di daerah tersebut.',
      link: 'https://youtu.be/GoLvsIMBcgQ?si=KwrCWzL_vQwbFKcZ',
      linkText: 'Dengarkan Podcast'
    },
    {
      id: 2,
      icon: '📄',
      judul: 'Artikel Jurnal',
      deskripsi: 'Artikel ilmiah yang menganalisis dampak kenaikan pajak daerah terhadap pertumbuhan ekonomi dan kesejahteraan masyarakat Pati pada 2025, beserta implikasi sosial dan respons masyarakat.',
      link: 'https://docs.google.com/document/d/1XcGNo3v2oBw6XuFftjuw4nSTw54znhM09lobSTUWmX8/edit?usp=sharing',
      linkText: 'Baca Artikel'
    },
    {
      id: 3,
      icon: '📊',
      judul: 'Presentasi PPT',
      deskripsi: 'Presentasi visual yang merangkum analisis dampak kenaikan pajak daerah Pati 2025 terhadap pertumbuhan ekonomi dan kesejahteraan masyarakat dalam bentuk slide interaktif.',
      link: 'https://www.canva.com/design/DAG4dFZ8yuM/xJvgtfpcTNaPm2aBh40_LA/edit?utm_content=DAG4dFZ8yuM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      linkText: 'Lihat PPT'
    }
  ];

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
            Showcase Karya
          </h1>
          <p className="lead" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            Kumpulan Karya Saya dalam Mata Kuliah Kewarganegaraan
          </p>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {showcaseItems.map((item, idx) => (
              <div key={item.id} className="col-md-6 col-lg-4" style={{ animation: `fadeInUp 0.8s ease-out ${0.1 + idx * 0.1}s both` }}>
                <div className="card h-100 shadow-sm border-0 hover-shadow" 
                     style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translateY(-5px)';
                       e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateY(0)';
                       e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
                     }}>
                  <div className="card-body text-center">
                    <div style={{ fontSize: '60px', marginBottom: '15px' }}>
                      {item.icon}
                    </div>
                    <h5 className="card-title fw-bold mb-3">{item.judul}</h5>
                    <p className="card-text text-muted mb-3">{item.deskripsi}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      {item.linkText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}