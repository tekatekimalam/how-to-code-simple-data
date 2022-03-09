const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = new Promise((resolve, reject) => {
    rl.question("Masukkan angka yang anda inginkan: ", (angka) => {
        resolve(angka);
    });
});

const main = async () => {
    let angka = parseInt(await input);
    let rem = [];
    let times = 1;

    while (angka !== 0) {
        console.log(times, angka % 2);
        angka = Math.floor(angka / 2);

        times++;
    }

    rl.close();
};

main();
