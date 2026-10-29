/**
 * Logika Interaktivitas Web Portofolio Mahasiswa
 * Dibuat menggunakan JavaScript murni (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi ikon Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ================= 1. AUTO UPDATE TAHUN FOOTER =================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ================= 2. NAVBAR TOGGLE (MOBILE) =================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });

        // Tutup menu otomatis jika salah satu link navigasi ditekan
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });
    }

    // ================= 3. SCROLL EFFECT NAVBAR =================
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg', 'shadow-black/20');
        } else {
            navbar.classList.remove('shadow-lg', 'shadow-black/20');
        }
    });

    // ================= 4. FORMULIR KONTAK =================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('sender-name')?.value || 'Teman';
            const email = document.getElementById('sender-email')?.value || '';
            const subject = document.getElementById('subject')?.value || '';
            const message = document.getElementById('message')?.value || '';

            // Tampilkan notifikasi toast interaktif
            showToast(`Terima kasih ${name}! Pesan Anda telah dicatat. Membuka aplikasi email...`);

            // Membuka email client (mailto) sebagai aksi fallback nyata
            setTimeout(() => {
                const mailtoUrl = `mailto:emailanda@student.ac.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`;
                window.location.href = mailtoUrl;
                contactForm.reset();
            }, 1200);
        });
    }

    // Fungsi pembantu untuk membuat dan menampilkan Toast Notification
    function showToast(messageText) {
        const existingToast = document.getElementById('custom-toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.id = 'custom-toast';
        toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 border border-emerald-500/50 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce transition-all duration-300';
        toast.innerHTML = `
            <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <p class="text-xs sm:text-sm font-medium text-slate-200">${messageText}</p>
        `;

        document.body.appendChild(toast);

        // Hilangkan toast setelah 4 detik
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }
});

