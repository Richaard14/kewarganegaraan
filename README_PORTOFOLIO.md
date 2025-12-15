# Portofolio Refleksi Civic Disposition - React + Vite

Website portofolio refleksi pribadi berbasis **React.js** dan **Vite** untuk mempresentasikan pembelajaran mengenai Civic Disposition.

## 🚀 Fitur

- ✅ Responsive design dengan Tailwind CSS
- ✅ Komponen React yang modular dan reusable
- ✅ Smooth navigation dan scroll effects
- ✅ Form kontak dengan validasi
- ✅ Timeline pembelajaran interaktif
- ✅ Refleksi cards dengan expand/collapse
- ✅ Fast performance dengan Vite

## 📂 Struktur Proyek

```
src/
├── components/
│   ├── Navbar.jsx               - Navigation bar
│   ├── Hero.jsx                 - Hero section
│   ├── AboutSection.jsx         - About section
│   ├── RefleksiSection.jsx      - Refleksi pembelajaran
│   ├── RefleksiCard.jsx         - Refleksi card component
│   ├── PembelajaranSection.jsx  - Timeline pembelajaran
│   ├── PencapaianSection.jsx    - Achievements section
│   ├── KesimpulanSection.jsx    - Conclusion section
│   ├── ContactSection.jsx       - Contact form
│   └── Footer.jsx               - Footer
├── App.jsx                      - Main app component
├── App.css                      - App styles
├── index.css                    - Global styles
└── main.jsx                     - Entry point
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 16+
- npm atau yarn

### Instalasi

```bash
cd "d:\Richard Matana\Pemogramanweb\kewarganegaraan"
npm install
```

## 🚀 Menjalankan Project

### Development Mode
```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📝 Customization

### Edit Konten

Setiap section dapat di-customize dengan mengedit file komponen:

- **Hero Title**: Edit `src/components/Hero.jsx`
- **Refleksi**: Edit `src/components/RefleksiSection.jsx`
- **Timeline**: Edit `src/components/PembelajaranSection.jsx`
- **Achievements**: Edit `src/components/PencapaianSection.jsx`
- **Contact Form**: Edit `src/components/ContactSection.jsx`

### Mengubah Warna Tema

Edit `tailwind.config.js` untuk customize color scheme.

## 🎨 Komponen Utama

### Navbar
- Sticky navigation dengan smooth scroll
- Links untuk semua sections

### Hero
- Eye-catching banner dengan gradient
- CTA button untuk mulai membaca

### RefleksiCard
- Expandable card untuk refleksi
- Icon, title, description, dan details

### PembelajaranSection
- Timeline visualization
- Week-by-week learning progress

### PencapaianSection
- Grid layout untuk achievements
- Icon-based display

### ContactSection
- Form dengan validasi
- Success/error message feedback

## 📦 Dependencies

- **React**: UI library
- **Vite**: Build tool
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processor
- **Autoprefixer**: Browser prefix support

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

- Desktop: 1280px+
- Tablet: 768px - 1279px
- Mobile: < 768px

---

**Last Updated**: December 5, 2025

**Dibuat dengan ❤️ untuk Portofolio Refleksi Civic Disposition**
