const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan angka yang diinginkan: ", (num) => {
    const hasil = parseInt(num) % 2 === 0 ? "genap" : "ganjil";

    console.log(`Angka yang anda masukkan adalah ${hasil}`);
    rl.close();
});
