const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan nilai dalam kilometer: ", (km) => {
    // 1 km = 0.621371 miles.

    const hasil = parseInt(km) * 0.621371;

    console.log(`${km} km = ${hasil} miles`);

    rl.close();
});
