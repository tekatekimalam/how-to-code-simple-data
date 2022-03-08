const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan nama depan: ", (firstName) => {
    rl.question("Masukkan nama belakang: ", (lastName) => {
        let temp;

        temp = firstName;
        firstName = lastName;
        lastName = temp;

        console.log(`${firstName} ${lastName}`);

        rl.close();
    });
});
