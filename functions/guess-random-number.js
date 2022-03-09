const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = new Promise((resolve, reject) => {
    rl.question("Masukkan tebakan anda: ", (angka) => {
        resolve(angka);
    });
});

const main = async () => {
    let chance = 5;

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    for (let i = 0; i < chance; i++) {
        let guess = parseInt(await input);
    }
    rl.close();
};

main();
