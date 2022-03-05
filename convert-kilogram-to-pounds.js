const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan nilai dalam kilogram: ", (kg) => {
    // 1 kg = 2.20462 lbs.

    const hasil = parseInt(kg) * 2.20462;

    console.log(`${kg} kg = ${hasil} lbs`);

    rl.close();
});
