# 🚀 Panduan Deployment Website Civic Portfolio

## ✅ Status Sebelum Deploy
Website telah melalui semua tahap verifikasi dan **SIAP DEPLOY**:
- ✅ Semua route dan halaman berfungsi
- ✅ Navbar dengan menu navigasi berfungsi dengan baik
- ✅ Semua tombol dan form teruji
- ✅ Design responsif (mobile, tablet, desktop)
- ✅ Tidak ada error JSX/JavaScript
- ✅ Production build berhasil dibuat

## 📦 Build Output
- **Folder build**: `dist/`
- **Ukuran bundle**:
  - CSS: 234.96 KB (gzip: 32.73 KB)
  - JS: 266.02 KB (gzip: 79.76 KB)
  - HTML: 0.46 KB (gzip: 0.29 KB)
- **Build time**: 5.37s

## 🌐 Opsi Deployment

### **1. Vercel (Recommended)**
Paling mudah untuk proyek React/Vite.

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel
```
- Pilih folder project saat diminta
- Ikuti wizard untuk konfigurasi
- Build akan otomatis di-trigger

### **2. Netlify**
Juga sangat mudah dan cepat.

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy folder dist langsung
netlify deploy --prod --dir=dist
```

Atau gunakan drag-and-drop di https://app.netlify.com

### **3. GitHub Pages**
Gratis jika project sudah di GitHub.

Tambahkan ke `vite.config.js`:
```javascript
export default {
  base: '/kewarganegaraan/', // Ganti dengan nama repo
}
```

Kemudian:
```bash
npm run build
npm run deploy  # Jika sudah setup gh-pages
```

### **4. Server Sendiri (VPS/Hosting)**
Untuk kontrol penuh.

```bash
# Tahap 1: Build
npm run build

# Tahap 2: Upload folder dist ke server
# Gunakan FTP/SFTP atau git

# Tahap 3: Konfigurasi web server (Nginx/Apache)
# Redirect semua route ke index.html untuk React Router
```

**Contoh Nginx config**:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/kewarganegaraan/dist;
    
    location / {
        try_files $uri /index.html;
    }
}
```

## 📝 Checklist Pre-Deploy

- [ ] Semua halaman sudah ditest di development
- [ ] Tidak ada broken links
- [ ] Form contact berfungsi/sudah dikonfigurasi
- [ ] Metadata dan title sudah benar
- [ ] Assets/image sudah optimize
- [ ] Performance sudah ditest
- [ ] SEO basic sudah diterapkan

## 🔧 Configurasi Production

Pastikan di `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

## 📊 Monitoring After Deploy

1. **Check uptime**: Gunakan tools seperti UptimeRobot
2. **Monitor performance**: Google PageSpeed Insights
3. **Track errors**: Setup Sentry atau service sejenis
4. **Backups**: Setup automated backup jika di-host sendiri

## 🎯 Next Steps

1. **Register domain** (jika belum punya)
2. **Pilih deployment platform** (Vercel recommended)
3. **Connect GitHub repo** ke platform
4. **Setup environment variables** (jika ada)
5. **Deploy!**
6. **Konfigurasi email form** (jika menggunakan Vercel/Netlify, bisa pakai form services)

## 📞 Troubleshooting

**Masalah**: Pages tidak ditemukan (404)
- **Solusi**: Pastikan web server redirect semua route ke `index.html`

**Masalah**: CSS/JS tidak load
- **Solusi**: Cek `base` path di `vite.config.js`

**Masalah**: Build gagal
- **Solusi**: Jalankan `npm install` ulang dan `npm run build`

---

**Created**: December 15, 2025  
**Status**: ✅ READY FOR PRODUCTION DEPLOYMENT
