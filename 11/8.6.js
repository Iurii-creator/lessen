const readlineSync = require("readline-sync");
const _ = require ('lodash');

let word = readlineSync.question("word?\n> ");
let revWord = word.split("").concat().reverse();
revWord = revWord.join("");
if ( revWord == word ) {
    console.log( true );
} else {
    console.log(false);
}