const readlineSync = require("readline-sync");

let str = readlineSync.question("Write a line\n> ");
let length = 0;
let max = 0;
let str1 = [];
let maxstr = [];

for( let i = 0; i < str.length; ++i) {
    if (str[i] !== " " ) {
        length = length + 1;
        str1.push(str[i]);
    } if ( length > max ) {
        max = length;
        maxstr = str1;
    } else if ( str[i]===" ") {
        length = 0;
        str1 = [];
    }
}

console.log(maxstr.join(""));