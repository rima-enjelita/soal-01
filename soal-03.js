// ==========================================
// SOAL 3: Conditional Statement
// ==========================================
console.log("\n--- SOAL 3: Conditional Statement ---");

function tentukanPredikat(nilai) {
    // Validasi jika nilai di luar rentang 0 - 100
    if (nilai < 0 || nilai > 100) {
        return "Nilai tidak valid (Harus antara 0 - 100)";
    } else if (nilai >= 85) {
        return "A";
    } else if (nilai >= 75) {
        return "B";
    } else if (nilai >= 65) {
        return "C";
    } else if (nilai >= 50) {
        return "D";
    } else {
        return "E";
    }
}

console.log("Nilai 90 -> Predikat:", tentukanPredikat(90));
console.log("Nilai 78 -> Predikat:", tentukanPredikat(78));
console.log("Nilai 40 -> Predikat:", tentukanPredikat(40));
console.log("Nilai 105 ->", tentukanPredikat(105)); // Pengujian di luar rentang