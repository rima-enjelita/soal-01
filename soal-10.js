// ==========================================
// SOAL 10: MINI PROJECT – SISTEM KASIR SEDERHANA
// ==========================================
console.log("\n--- SOAL 10: Sistem Kasir Sederhana ---");

// Data produk master menggunakan Array of Objects
const daftarProduk = [
    { nama: "Mouse", harga: 50000 },
    { nama: "Keyboard", harga: 100000 },
    { nama: "Monitor", harga: 1500000 },
    { nama: "Headset", harga: 200000 }
];

// Simulasi keranjang belanja pilihan pengguna (sesuai contoh soal)
const keranjangBelanja = [
    { nama: "Mouse", jumlah: 2 },
    { nama: "Keyboard", jumlah: 1 },
    { nama: "Headset", jumlah: 1 }
];

function simulasiKasir(keranjang, masterProduk) {
    let subtotalKeseluruhan = 0;
    let detailTransaksi = [];

    // Proses pencocokan produk dan perhitungan subtotal
    for (let item of keranjang) {
        let produkDitemukan = masterProduk.find(p => p.nama.toLowerCase() === item.nama.toLowerCase());
        if (produkDitemukan) {
            let subtotal = produkDitemukan.harga * item.jumlah;
            subtotalKeseluruhan += subtotal;
            detailTransaksi.push({
                nama: produkDitemukan.nama,
                jumlah: item.jumlah,
                subtotal: subtotal
            });
        }
    }

    // Ketentuan Diskon: Jika total belanja > Rp500.000, berikan diskon 10%
    let diskonNominal = 0;
    if (subtotalKeseluruhan > 500000) {
        diskonNominal = subtotalKeseluruhan * 0.10;
    }

    let totalPembayaran = subtotalKeseluruhan - diskonNominal;

    // Helper untuk format rupiah teks
    function formatRupiah(angka) {
        return "Rp" + angka.toLocaleString("id-ID");
    }

    // Menampilkan Struk Pembelian
    console.log("========= STRUK PEMBELIAN =========");
    for (let item of detailTransaksi) {
        let spasiNama = item.nama.padEnd(10, " ");
        console.log(`${spasiNama} x${item.jumlah}    ${formatRupiah(item.subtotal)}`);
    }
    console.log("----------------------------------");
    console.log(`Subtotal        ${formatRupiah(subtotalKeseluruhan)}`);
    console.log(`Diskon          ${formatRupiah(diskonNominal)}`);
    console.log(`Total           ${formatRupiah(totalPembayaran)}`);
    console.log("===================================");
    console.log("Terima kasih!");
}

// Menjalankan fungsi kasir
simulasiKasir(keranjangBelanja, daftarProduk);