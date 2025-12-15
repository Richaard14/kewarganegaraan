import React from 'react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="beranda" 
      className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-32 text-center"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
          Portofolio Refleksi Civic Disposition
        </h1>
        <p className="text-2xl mb-8 opacity-90 animate-fade-in-up">
          Perjalanan Pembelajaran dan Penguatan Sikap Warga Negara
        </p>
        <button 
          onClick={() => scrollToSection('refleksi')}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105 active:scale-95"
        >
          Mulai Membaca
        </button>
      </div>
    </section>
  );
}
