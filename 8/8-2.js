const readlineSync = require("readline-sync");

let namber = parseInt(readlineSync.question("word count?\n> "));
let words = [];

for ( let i = 0; i < namber; ++i) {
    let word = readlineSync.question("word ?\n> ");
    words.push(word);
}
console.log(words.join(","));