const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = new Promise((resolve, rejecct) => {
    rl.question("Masukkan angka yang: ", (angka) => {
        resolve(angka);
    });
});

async function main() {
    const angka = await input;

    factorial(angka);

    rl.close();
}

main();

function factorial(angka) {
    if (parseInt(angka) < 0) {
        console.log("Angka yang dimasukkan harus berupa angka positive");
    } else if (parseInt(angka) === 0) {
        console.log(1);
    } else {
        let count = 1;
        for (let i = 1; i <= parseInt(angka); i++) {
            count *= i;
        }
        console.log(count);
    }
}
