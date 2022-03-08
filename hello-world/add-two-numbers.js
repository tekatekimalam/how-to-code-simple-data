const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan angka pertama: ", (num1) => {
    rl.question("Masukkan angka kedua: ", (num2) => {
        const hasil = parseInt(num1) + parseInt(num2);

        console.log(`Hasil dari penjumlahan adalah: ${hasil}`);

        rl.close();
    });
});
