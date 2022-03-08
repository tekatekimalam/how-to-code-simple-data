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
    let res = 0;

    if (angka > 0) {
        for (let i = 1; i <= angka; i++) {
            res += i;
        }

        console.log(res);
    } else {
        console.log("Angka harus angka positive");
    }

    rl.close();
};

main();
