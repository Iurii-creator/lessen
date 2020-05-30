const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));

const readlineSync = require("readline-sync");

let todo = {
    number: todos[(todos.length-1)].number+1,
    title: readlineSync.question(" todo ? "),
    completed: false,
}

todos.push(todo);

fs.writeFileSync("todos.json", JSON.stringify(todos));

console.log("done!");