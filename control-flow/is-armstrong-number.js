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
    const angka = await input("Masukkan angka yang anda inginkan: ");
    let arrNum = angka.split("");
    let count = 0;
    let result = "armstrong";

    for (let i = 0; i < arrNum.length; i++) {
        count += Math.pow(arrNum[i], 3);
    }

    if (parseInt(angka) !== count) result = "bukan armstrong";

    console.log(`${angka} adalah bilangan ${result}`);

    rl.close();
};

main();
