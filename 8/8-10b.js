const readlineSync = require("readline-sync");

let str = readlineSync.question("Write an example: type ( x +-*/ y = z) \n> ");
console.log(Number(str))