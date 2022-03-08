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
    let temp1 = null;
    let temp2 = null;

    for (let i = 0; i < angka; i++) {
        console.log(res);

        temp2 = temp1;
        temp1 = res;

        res = temp1 + (temp2 ?? 1);
    }
    rl.close();
};

main();
