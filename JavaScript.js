// Contoh: Smooth scrolling untuk navigasi
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Anda bisa menambahkan JavaScript lain di sini, misalnya untuk:
// - Efek fade-in saat scroll
// - Validasi form (jika ada form, tapi kita tidak pakai database jadi tidak ada form)
// - Carousel gambar produk (jika Anda ingin lebih dinamis)