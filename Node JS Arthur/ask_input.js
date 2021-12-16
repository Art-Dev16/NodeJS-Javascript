const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Question : ", function (answer) {
    console.log(`Input saved. Answer = ${answer}`);
    r1.close();
});

