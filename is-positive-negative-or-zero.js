const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = new Promise((resolve, reject) => {
    rl.question("Masukkan angka: ", (angka) => {
        resolve(angka);
    });
});

const main = async () => {
    const angka = parseInt(await input);

    angka === 0
        ? console.log("Angka yang anda masukkan adalah kosong")
        : angka > 0
        ? console.log("Angka yang anda masukkan adalah bilangan positive")
        : console.log("Angka yang anda masukkan adalah bilangan negative");

    rl.close();
};

main();
