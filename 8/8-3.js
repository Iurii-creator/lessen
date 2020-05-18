const readlineSync = require("readline-sync");

let str = readlineSync.question("Write a line\n> ");
let big = 0;
let small = 0;
let lower = "abcdefghijklmnopqrstuvwxyz"
let upper = lower.toUpperCase()

for ( let letter = 0; letter < str.length; ++letter) {
    if (upper.includes(str[letter]) ) {
        big = big + 1 ;
    } else if ( lower.includes(str[letter])) {
        small +=1 ;
    }
}
console.log( " big = " + big  + "\n" + "small = " + small);



