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

    if (angka === 1 || angka === 2 || angka === 3) {
        console.log("Angka yang anda masukkan adalah bilangan prima.");
    } else if (angka > 3) {
        if (angka % 2 === 0 || angka % 3 === 0) {
            console.log("Ini bukan angka prima");
        } else {
            console.log("Ini bilangan prima");
        }
    } else {
        console.log("Angka harus bilangan positive");
    }
    rl.close();
};

main();
