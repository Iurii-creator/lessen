const readlineSync = require("readline-sync");

let num = parseInt(readlineSync.question(" What kind of case number is needed ? "))

const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));

let readStr;

if (todos.includes(todos[num - 1])) {
    todos.splice((num-1),1);
    for (let i = num-1; i < todos.length; ++i) {
        todos[i].number = todos[i].number - 1
    }
    fs.writeFileSync("todos.json", JSON.stringify(todos));
    console.log("done!");
} else {
    console.log("wrong number")
}

