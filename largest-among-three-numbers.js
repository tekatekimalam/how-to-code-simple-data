const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = (pertanyaan) => {
    return new Promise((resolve, rejecct) => {
        rl.question(pertanyaan, (angka) => {
            resolve(angka);
        });
    });
};

const main = async () => {
    const angka1 = await input("Masukkan angka pertama: ");
    const angka2 = await input("Masukkan angka kedua: ");
    const angka3 = await input("Masukkan angka ketiga: ");

    console.log("\n");
    findLargestNumber(angka1, angka2, angka3);

    // Alternative solution
    // console.log(Math.max(angka1, angka2, angka3));

    rl.close();
};

main();

function findLargestNumber(angka1, angka2, angka3) {
    let largest = 0;

    if (angka1 > angka2 && angka1 > angka3) {
        largest = angka1;
        console.log(`Angka yang terbesar adalah angka ${angka1}`);
    } else if (angka2 > angka1 && angka2 > angka3) {
        largest = angka2;
        console.log(`Angka yang terbesar adalah angka ${angka2}`);
    } else {
        largest = angka3;
        console.log(`Angka yang terbesar adalah angka ${angka3}`);
    }
}
