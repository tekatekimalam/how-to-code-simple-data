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

    let count = angka1 > angka2 ? angka1 : angka2;

    while (true) {
        if (count % angka1 === 0 && count % angka2 === 0) {
            console.log(
                `Kelipatan persekutuan terkecil dari angka ${angka1} dan angka ${angka2} adalah: ${count}`
            );
            break;
        }

        count++;
    }

    rl.close();
};

main();
