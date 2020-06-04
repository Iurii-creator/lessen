const fs = require("fs");

let todos = JSON.parse(fs.readFileSync("todos.json"));

let newtodos = [];
let delet = 0;

for ( let i = 0; i < todos.length; ++i) {
    if ( todos[i].completed === false) {
        newtodos.push(todos[i])
    } else {
        delet += 1
    }
}
for (let i = 0; i < newtodos.length; ++i) {
    newtodos[i].number = i + 1
}

fs.writeFileSync("todos.json", JSON.stringify(newtodos));

console.log(delet + " " + "todos removed")

