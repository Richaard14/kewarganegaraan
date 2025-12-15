import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Tentang Saya</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Saya adalah seorang mahasiswa yang berkomitmen untuk memperdalam pemahaman mengenai civic disposition 
            dan peran saya sebagai warga negara yang bertanggung jawab. Portofolio ini merupakan dokumentasi 
            perjalanan pembelajaran dan refleksi pribadi saya.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Melalui perkuliahan ini, saya telah belajar tidak hanya secara teoritis, tetapi juga melalui pengalaman 
            praktis yang bermakna. Saya berharap portofolio ini dapat menunjukkan komitmen saya terhadap pengembangan 
            diri dan kontribusi positif kepada masyarakat.
          </p>
        </div>
      </div>
    </section>
  );
}
