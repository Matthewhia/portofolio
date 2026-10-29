# Web Portofolio Mahasiswa Semester 1 🚀

Template website portofolio modern bertema **Dark Mode** yang dirancang khusus untuk mahasiswa tingkat awal / semester 1. Ringan, cepat, responsif di HP & Laptop, serta mudah dikustomisasi tanpa perlu instalasi tools yang rumit.

---

## 📁 Struktur Berkas

```
web portofolio/
├── index.html            # Halaman utama portofolio (semua seksi)
├── assets/
│   └── js/
│       └── script.js     # Interaktivitas (menu HP, smooth scroll, form kirim pesan)
└── README.md             # Panduan pengeditan & publikasi
```

---

## 🛠️ Cara Menjalankan & Melihat Tampilan Web

1. Cukup klik ganda file [index.html](file:///c:/Users/hafid/Downloads/hia/matt/web%20portofolio/index.html) untuk langsung membukanya di browser (Google Chrome, Edge, Firefox, dll.).
2. Atau jika menggunakan ekstensi **Live Server** di VS Code: klik kanan pada `index.html` → pilih **"Open with Live Server"**.

---

## ✏️ Panduan Kustomisasi Data Diri

Buka file [index.html](file:///c:/Users/hafid/Downloads/hia/matt/web%20portofolio/index.html) di editor teks (seperti VS Code atau Notepad), lalu cari bagian berikut untuk diganti:

1. **Nama & Gelar / Jurusan:**
   - Cari kata `"Nama Anda"` lalu ubah menjadi nama lengkap Anda.
   - Sesuaikan nama program studi / jurusan dan nama universitas pada seksi Hero dan Pendidikan.
2. **Foto Profil:**
   - Simpan foto Anda di folder baru, misal `assets/img/foto.jpg`.
   - Ganti placeholder ikon user di seksi Hero dengan tag:
     ```html
     <img src="assets/imaj/foto new.png" alt="Foto Profil" class="w-full h-full object-cover rounded-xl">
     ```
3. **Akun Media Sosial & Kontak:**
   - Ubah tautan `https://github.com`, `https://linkedin.com`, dan `https://instagram.com` ke URL profil asli Anda.
   - Ubah email pada `mailto:emailanda@student.ac.id` dan nomor WhatsApp di bagian kontak.
4. **Proyek & Karya:**
   - Tambahkan tugas kuliah atau program latihan mandiri Anda pada seksi `#proyek`.
   - Perbarui tautan GitHub repositori untuk tiap proyek yang dibuat.

---

## 🌐 Cara Mempublikasikan Gratis ke Internet

### Opsi A: Menggunakan GitHub Pages (Sangat Direkomendasikan untuk Mahasiswa IT)
1. Buat akun di [GitHub](https://github.com) jika belum punya.
2. Buat repositori publik baru dengan nama: `username.github.io` atau `portofolio`.
3. Unggah seluruh file (`index.html`, folder `assets/`, dan `README.md`) ke repositori tersebut.
4. Masuk ke tab **Settings** → **Pages** → pada *Branch* pilih `main` dan folder `/ (root)` → klik **Save**.
5. Dalam 1-2 menit, website Anda sudah aktif dan bisa diakses publik melalui tautan `https://username.github.io`!

### Opsi B: Menggunakan Netlify Drop
1. Buka [Netlify Drop](https://app.netlify.com/drop).
2. Tarik (*drag-and-drop*) folder `web portofolio` ini ke browser.
3. Website akan langsung aktif dalam hitungan detik dengan domain gratis.

