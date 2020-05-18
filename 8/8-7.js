const readlineSync = require("readline-sync");

let str = readlineSync.question("Write a line\n> ");
let lower = "abcdefghijklmnopqrstuvwxyz"
let upper = lower.toUpperCase()
let normstr = [];

for ( let letter = 0; letter < str.length; ++letter) {
    if (upper.includes(str[letter]) || lower.includes(str[letter] )) {
        normstr.push(str[letter]);
    } else if ( str[letter] = " " && normstr !== 0 && normstr[(normstr.length - 1)] !== " ") {
        normstr.push(str[letter]);
    }
} 
console.log(normstr.join(""));