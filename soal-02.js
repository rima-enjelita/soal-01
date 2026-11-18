// ==========================================
// SOAL 2: Operator Aritmatika
// ==========================================
console.log("\n--- SOAL 2: Operator Aritmatika ---");

const hargaBarang = 25000;
const jumlahBarang = 4;
const diskonPersen = 10;

// Perhitungan
const totalSebelumDiskon = hargaBarang * jumlahBarang;
const besaranDiskon = totalSebelumDiskon * (diskonPersen / 100);
const totalPembayaran = totalSebelumDiskon - besaranDiskon;

console.log("Total Harga Sebelum Diskon : Rp" + totalSebelumDiskon);
console.log("Besaran Diskon (" + diskonPersen + "%)       : Rp" + besaranDiskon);
console.log("Total Pembayaran           : Rp" + totalPembayaran);