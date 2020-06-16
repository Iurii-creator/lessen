const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));

const readlineSync = require("readline-sync");

let todo = {
    title: readlineSync.question(" todo ?\n> "),
    completed: false,
}

todos.push(todo);

fs.writeFileSync("todos.json", JSON.stringify(todos));

console.log("done!");