// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Dapatkan elemen tombol dan pesan
    const tombol = document.getElementById('tombol-salam');
    const pesan = document.getElementById('pesan-js');

    // Tambahkan event listener untuk merespons klik
    tombol.addEventListener('click', () => {
        pesan.textContent = 'Halo! Anda berhasil menjalankan JavaScript di GitHub Pages!';
    });
});
