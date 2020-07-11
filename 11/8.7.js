const readlineSync = require("readline-sync");

let str = readlineSync.question("Write a line\n> ");


console.log(str.replace(/\s+/g, ' ').trim());
