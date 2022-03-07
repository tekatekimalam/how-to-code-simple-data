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
    const angka = parseInt(await input("Masukkan angka minimal: "));
    let temp = 0;

    for (let i = 1; i <= 10; i++) {
        console.log(`${angka} * ${i} = ${angka * i}`);
    }
    rl.close();
};

main();
