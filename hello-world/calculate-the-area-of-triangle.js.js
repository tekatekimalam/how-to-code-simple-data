const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan nilai alas segitiga: ", (base) => {
    rl.question("Masukkan tinggi segitiga: ", (height) => {
        const hasil = (parseInt(base) * parseInt(height)) / 2;

        console.log(
            `Luas dari segitiga dengan alas = ${base} dan tinggi = ${height} adalah: ${hasil}`
        );

        rl.close();
    });
});
