const readlineSync = require("readline-sync");

let str = readlineSync.question("Write an example: type ( x +-*/ y = z) \n> ");
let number = "0123456789"
let actions = "+-/*="
let num = "";
let num1 = [];
let act = [];

for ( let i = 0; i < str.length; ++i) {
    if ( number.includes(str[i])) {
        num = num + str[i];
    } if ( actions.includes(str[i]) || i == str.length - 1) {
        num1.push(parseInt(num))
        num = ""
    } if ( actions.includes(str[i]) ) {
        act.push(str[i])
    }
}
let x = num1[0]+act[0]+num1[1]
console.log(x)