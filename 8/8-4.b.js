const readlineSync = require("readline-sync");

let str = readlineSync.question("Write a line\n> ").split(" ");
 
let maxstr = 0;
let x = 0;

for (i = 0; i < str.length; ++i) {
    if ( x < str[i].length) {
        x = str[i].length;
        maxstr = str[i];
    }
}
console.log(maxstr);