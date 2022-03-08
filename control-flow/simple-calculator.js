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
    const operand1 = parseInt(await input("Masukkan angka: "));
    const operator = await input("Masukkan operator ( +  -  *  / ): ");
    const operand2 = parseInt(await input("Masukkan angka: "));

    let res = 0;

    switch (operator) {
        case "+":
            res = operand1 + operand2;
            console.log(
                `hasil dari ${operand1} ${operator} ${operand2} adalah ${res}`
            );
            break;
        case "-":
            res = operand1 - operand2;
            console.log(
                `hasil dari ${operand1} ${operator} ${operand2} adalah ${res}`
            );
            break;
        case "*":
            res = operand1 * operand2;
            console.log(
                `hasil dari ${operand1} ${operator} ${operand2} adalah ${res}`
            );
            break;
        case "/":
            res = operand1 / operand2;
            console.log(
                `hasil dari ${operand1} ${operator} ${operand2} adalah ${res}`
            );
            break;
        default:
            console.log("Anda salah memasukkan input");
    }

    rl.close();
};

main();
