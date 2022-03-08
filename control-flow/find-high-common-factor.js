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
    const angka1 = parseInt(await input("Masukkan angka pertama: "));
    const angka2 = parseInt(await input("Masukkan angka pertama: "));
    const limit = angka1 < angka2 ? angka1 : angka2;

    let res = 0;

    for (let i = 1; i <= limit; i++) {
        if (angka1 % i === 0 && angka2 % i === 0) {
            res = i;
        }
    }

    console.log(
        `Faktor persekutuan terbesar dari ${angka1} dan angka ${angka2} adalah ${res}`
    );

    rl.close();
};

main();
