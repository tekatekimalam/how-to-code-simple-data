const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (angka) => {
            resolve(angka);
        });
    });
};

const main = async () => {
    const angka = parseInt(await input("Masukkan angka yang anda inginkan: "));

    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            res = i;
            console.log(i);
        }
    }

    rl.close();
};

main();
