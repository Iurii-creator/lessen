const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));

const readlineSync = require("readline-sync");

let num = parseInt(readlineSync.question(" What kind of case number is needed ? "))

let readStr;

if (todos.includes(todos[num - 1])) {
    if (todos[num - 1].completed === true) {
        todos[num - 1].completed = false;
        readStr = "[ ]";
        fs.writeFileSync("todos.json", JSON.stringify(todos));
        console.log(readStr + " " + todos[num - 1].number + ". " + todos[num - 1].title);
    } else if (todos[num - 1].completed === false) {
        todos[num - 1].completed = true;
        readStr = "[x]";
        fs.writeFileSync("todos.json", JSON.stringify(todos));
        console.log(readStr + " " + todos[num - 1].number + ". " + todos[num - 1].title);
    }
} else {
    console.log("wrong number")
}
