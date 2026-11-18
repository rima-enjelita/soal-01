// ==========================================
// SOAL 7: String Manipulation
// ==========================================
console.log("\n--- SOAL 7: String Manipulation ---");

const namaStr = "   muhammad rizki   ";

const namaTrimmed = namaStr.trim();             // Menghilangkan spasi awal dan akhir
const namaUpper = namaTrimmed.toUpperCase();   // Mengubah jadi huruf besar
const namaLower = namaTrimmed.toLowerCase();   // Mengubah jadi huruf kecil
const jumlahKarakter = namaTrimmed.length;     // Menghitung jumlah karakter setelah trim

console.log("Original String  :", JSON.stringify(namaStr));
console.log("Setelah di-trim  :", JSON.stringify(namaTrimmed));
console.log("Huruf Besar      :", namaUpper);
console.log("Huruf Kecil      :", namaLower);
console.log("Jumlah Karakter  :", jumlahKarakter);