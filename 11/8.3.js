const readlineSync = require("readline-sync");
const _ = require ('lodash');

let str = readlineSync.question("Write a line\n> ");
let re = /([a-z])/g
let reAp = /([A-Z])/g
let big = str.match(reAp).length;
let small = str.match(re).length;
console.log( " big = " + big  + "\n" + "small = " + small);



