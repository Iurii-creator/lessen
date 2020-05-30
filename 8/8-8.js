const readlineSync = require("readline-sync");

let str = readlineSync.question("Write a line\n> ");
let lower = "abcdefghijklmnopqrstuvwxyz"
let normstr = [];

for (let i = 0; i < str.length; ++i) {
    if (i == 0 && lower.includes(str[i])) {
        normstr.push(str[i].toUpperCase())
    } else if (str[i - 1] == " ") {
        normstr.push(str[i].toUpperCase())
    } else {
        normstr.push(str[i])
    }
}
console.log(normstr.join(""));
