const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));

for (let cas of todos) {
  let readStr;

  if (cas.completed) {
    readStr = "[x]";
  } else {
    readStr = "[ ]";
    console.log(  cas.number + ". " + cas.title);
  }
}