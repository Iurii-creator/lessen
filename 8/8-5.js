const readlineSync = require("readline-sync");

let str = readlineSync.question("Write a line\n> ");
let l = parseInt(readlineSync.question("length\n> "));
let p = parseInt(readlineSync.question("index\n> "));


console.log( str.slice( str, p ) + str.slice( p + l));