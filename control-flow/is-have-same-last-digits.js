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
    const angka1 = await input("Masukkan angka pertama: ");
    const angka2 = await input("Masukkan angka kedua: ");
    const angka3 = await input("Masukkan angka ketiga: ");

    const lastAngka1 = angka1[angka1.length - 1];
    const lastAngka2 = angka2[angka2.length - 1];
    const lastAngka3 = angka3[angka3.length - 1];

    const isTrue =
        lastAngka1 === lastAngka2 &&
        lastAngka1 === lastAngka3 &&
        lastAngka2 === lastAngka3;

    isTrue
        ? console.log(
              `${angka1}, ${angka2}, dan angka ${angka3} memiliki angka terakhir yang sama`
          )
        : console.log(
              `${angka1}, ${angka2}, dan angka ${angka3} tidak memiliki angka terakhir yang sama`
          );

    rl.close();
};

main();
