import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });
  const [status, setStatus] = useState('');

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
    if (!formData.nama || !formData.email || !formData.pesan) {
      setStatus({ type: 'error', message: 'Mohon isi semua field terlebih dahulu!' });
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus({ type: 'error', message: 'Email tidak valid!' });
      return;
    }

    // Simulasi pengiriman
    setStatus({ type: 'success', message: 'Terima kasih! Pesan Anda telah diterima. Saya akan segera merespons.' });
    setFormData({ nama: '', email: '', pesan: '' });

    // Hapus pesan setelah 5 detik
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Hubungi Saya
        </h2>

        <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="nama" className="block text-slate-900 font-bold mb-2">
              Nama:
            </label>
            <input 
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-slate-900 font-bold mb-2">
              Email:
            </label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="pesan" className="block text-slate-900 font-bold mb-2">
              Pesan:
            </label>
            <textarea 
              id="pesan"
              name="pesan"
              rows="5"
              value={formData.pesan}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Kirim Pesan
          </button>

          {status && (
            <div className={`mt-4 p-4 rounded-lg text-center font-bold ${
              status.type === 'success' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
