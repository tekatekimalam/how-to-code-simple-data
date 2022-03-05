const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan angka yang dicari: ", (num) => {
    const hasil = Math.sqrt(parseInt(num));

    console.log(
        `Hasil akar pangkat dua dari bilangan di atas adalah: ${hasil}`
    );

    rl.close();
});
