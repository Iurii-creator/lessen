const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let words = str.split(" ");
let revWords = [];

for (let word of words) {
  let revWord = "";
  for (let i = word.length - 1; i >= 0; --i) {
    revWord += word[i];
  }
  revWords.push(revWord);
}

let revStr = revWords.join(" ");
console.log(revStr);
