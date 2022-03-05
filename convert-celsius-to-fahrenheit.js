const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan suhu dalam satuan celcius: ", (celcius) => {
    // fahrenheit = celsius * 1.8 + 32

    const hasil = parseInt(celcius) * 1.8 + 32;

    console.log(`${celcius} celcius = ${hasil} fahrenheit`);

    rl.close();
});
