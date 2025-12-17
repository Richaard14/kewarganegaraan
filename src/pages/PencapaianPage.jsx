import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ShowcasePage() {
  const [activeItem, setActiveItem] = useState(null);

  const showcaseItems = [
    {
      id: 1,
      icon: '🎙️',
      judul: 'Podcast',
      deskripsi:
        'Sebuah podcast yang membahas demo yang terjadi di Pati serta isu kenaikan pajak di daerah tersebut.',
      embed: 'https://www.youtube.com/embed/GoLvsIMBcgQ',
      modalText:
        'Podcast ini membahas dinamika sosial dan respons masyarakat terhadap kebijakan kenaikan pajak daerah di Kabupaten Pati.',
      websiteLink: 'https://youtu.be/GoLvsIMBcgQ',
      websiteText: 'Buka Podcast di YouTube'
    },
    {
      id: 2,
      icon: '📄',
      judul: 'Artikel Jurnal',
      deskripsi:
        'Artikel ilmiah yang menganalisis dampak kenaikan pajak daerah terhadap pertumbuhan ekonomi dan kesejahteraan masyarakat Pati pada 2025.',
      embed:
        'https://docs.google.com/document/d/1XcGNo3v2oBw6XuFftjuw4nSTw54znhM09lobSTUWmX8/preview',
      modalText:
        'Artikel ini disusun menggunakan pendekatan analisis kebijakan publik dan data sosial ekonomi sebagai bagian dari tugas akademik.',
      websiteLink:
        'https://docs.google.com/document/d/1XcGNo3v2oBw6XuFftjuw4nSTw54znhM09lobSTUWmX8/edit',
      websiteText: 'Buka Artikel di Google Docs'
    },
    {
      id: 3,
      icon: '📊',
      judul: 'Presentasi PPT',
      deskripsi:
        'Presentasi visual yang merangkum analisis dampak kenaikan pajak daerah Pati 2025 terhadap pertumbuhan ekonomi dan kesejahteraan masyarakat.',
      embed: 'https://www.canva.com/design/DAG4dFZ8yuM/view?embed',
      modalText:
        'Presentasi ini menyajikan poin-poin utama analisis dalam bentuk visual interaktif untuk memudahkan pemahaman.',
      websiteLink:
        'https://www.canva.com/design/DAG4dFZ8yuM/edit',
      websiteText: 'Buka Presentasi di Canva'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section
        className="py-5"
        style={{
          background: 'linear-gradient(135deg, #e0dedeff 0%, #000000ff 100%)',
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
            Bukti Nyata dari Pembelajaran dan Komitmen Saya dalam Mata Kuliah Kewarganegaraan
          </p>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {showcaseItems.map((item, idx) => (
              <div
                key={item.id}
                className="col-md-6 col-lg-4"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${0.1 + idx * 0.1}s both`
                }}
              >
                <div
                  className="card h-100 shadow-sm border-0"
                  style={{
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onClick={() => setActiveItem(item)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow =
                      '0 10px 30px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow =
                      '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
                  }}
                >
                  <div className="card-body text-center">
                    <div style={{ fontSize: '60px', marginBottom: '15px' }}>
                      {item.icon}
                    </div>
                    <h5 className="fw-bold mb-3">{item.judul}</h5>
                    <p className="text-muted mb-3">{item.deskripsi}</p>
                    <button className="btn btn-primary">
                      Lihat Karya
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL POP UP */}
      {activeItem && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={() => setActiveItem(null)}
        >
          <div
            className="modal-dialog modal-xl modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">
                  {activeItem.icon} {activeItem.judul}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setActiveItem(null)}
                />
              </div>

              <div className="modal-body">
                {/* TULISAN KHUSUS */}
                <p className="text-center text-muted mb-2">
                  {activeItem.modalText}
                </p>

                {/* LINK WEBSITE */}
                <p className="text-center mb-3">
                  <a
                    href={activeItem.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-semibold text-decoration-none"
                  >
                    {activeItem.websiteText} ↗
                  </a>
                </p>

                {/* PREVIEW */}
                <div className="ratio ratio-16x9">
                  <iframe
                    src={activeItem.embed}
                    title={activeItem.judul}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
