const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));

const readlineSync = require("readline-sync");

let number = parseInt(readlineSync.question(" What kind of case number is needed ? \n>"))

let readStr;


if (number > todos.length) {
    console.log("wrong number");
} else {
    for (let i = 0; i < todos.length; ++i) {
        
        if (number - 1 === i) {
            todos[i].completed = !todos[i].completed
            
            if (todos[i].completed) {
                readStr = "[x]";
            } else {
                readStr = "[ ]";
            }

            console.log(readStr + " " +(i + 1) + "." + todos[i].title);
        }
    }
}
fs.writeFileSync("todos.json", JSON.stringify(todos));