const readlineSync = require("readline-sync");

let word = readlineSync.question("word?\n> ");
let revWord = "";

for (let i = word.length - 1; i >= 0; --i) {
    revWord += word[i];
  }
if ( revWord == word ) {
    console.log( true );
} else {
    console.log(false);
}


