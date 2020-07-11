const readlineSync = require("readline-sync");
let str = readlineSync.question("Write an example: type ( x +-*/ y = z) \n> ");

const re = /^(\d+)([*/+\-])(\d+)=(\d+)$/;

let number = re.exec(str)

let result = parseInt(number[4]);
let num1 = parseInt(number[1]);
let num2 = parseInt(number[3]);
let x = 0;

(number[2] === "+") ? x = (num1 + num2) :
(number[2] === "-") ? x = (num1 - num2) :
(number[2] === "*") ? x = (num1 * num2) :
                      x = (num1 / num2) ;
                      
 console.log(x === result ? "true" : "false");