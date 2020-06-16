const readlineSync = require("readline-sync");

let number = parseInt(readlineSync.question(" What kind of case number is needed ? \n> "))

const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));

let readStr;

if (todos.includes(todos[number - 1])) {
    todos.splice((number-1),1);
    fs.writeFileSync("todos.json", JSON.stringify(todos));
    console.log("done!");
} else {
    console.log("wrong number")
}

