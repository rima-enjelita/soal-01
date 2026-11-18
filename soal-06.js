// ==========================================
// SOAL 6: Array
// ==========================================
console.log("\n--- SOAL 6: Array ---");

const nilai = [80, 75, 90, 65, 85, 95, 70];

console.log("Seluruh Nilai    :", nilai.join(", "));

const nilaiTertinggi = Math.max(...nilai);
const nilaiTerendah = Math.min(...nilai);
const rataRata = nilai.reduce((acc, curr) => acc + curr, 0) / nilai.length;
const jumlahLulus = nilai.filter(n => n >= 75).length;

console.log("Nilai Tertinggi  :", nilaiTertinggi);
console.log("Nilai Terendah   :", nilaiTerendah);
console.log("Rata-rata        :", rataRata.toFixed(2));
console.log("Jumlah Mhs Lulus :", jumlahLulus);