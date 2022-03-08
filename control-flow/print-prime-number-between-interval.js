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
    const angkaMin = parseInt(await input("Masukkan angka minimal: "));
    const angkaMax = parseInt(await input("Masukkan angka maksimal: "));

    if (angkaMin >= angkaMax) console.log("Angka yang anda masukkan salah.");

    for (let i = angkaMin; i <= angkaMax; i++) {
        if (i === 1 || i === 2 || i === 3) {
            console.log(i);
        } else if (i > 3) {
            if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
                continue;
            } else {
                console.log(i);
            }
        } else {
            console.log("Angka harus bilangan positive");
        }
    }
    rl.close();
};

main();
