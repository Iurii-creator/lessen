const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));
let num = 0;
for (let cas of todos) {
  let readStr;
  num = num + 1;
  if (cas.completed) {
    readStr = "[x]";
  } else {
    readStr = "[ ]";
  }

  console.log(readStr+ " " + num + ". " + cas.title);
}