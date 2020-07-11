const readlineSync = require("readline-sync");

let str = readlineSync.question("Write a line\n> ");

console.log(str.replace(/\b[a-z](?=[a-z]{2})/gi, (letter) => letter.toUpperCase()));
