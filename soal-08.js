// ==========================================
// SOAL 8: Object
// ==========================================
console.log("\n--- SOAL 8: Object ---");

const produk = {
    nama: "Laptop",
    harga: 7500000,
    stok: 10,
    kategori: "Elektronik"
};

// Menampilkan nama dan harga produk
console.log("Nama Produk  :", produk.nama);
console.log("Harga Produk :", produk.harga);

// Mengubah stok menjadi 5 dan menambahkan properti merek
produk.stok = 5;
produk.merek = "Lenovo";

// Menampilkan seluruh properti object terbaru
console.log("Seluruh Properti Object:", produk);