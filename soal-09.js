// ==========================================
// SOAL 9: Array of Objects
// ==========================================
console.log("\n--- SOAL 9: Array of Objects ---");

const mahasiswa = [
    { nama: "rima", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Citra", nilai: 90 },
    { nama: "Doni", nilai: 70 },
    { nama: "Eka", nilai: 95 }
];

const mhsLulus = mahasiswa.filter(m => m.nilai >= 75);
const mhsTidakLulus = mahasiswa.filter(m => m.nilai < 75);

console.log("Mahasiswa Lulus (>= 75):", mhsLulus);
console.log("Mahasiswa Tidak Lulus  :", mhsTidakLulus);
console.log("Jumlah Mahasiswa Lulus :", mhsLulus.length);

// Mengurutkan data berdasarkan nilai tertinggi (Descending)
const urutNilai = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
console.log("Urutan Nilai Tertinggi :", urutNilai);