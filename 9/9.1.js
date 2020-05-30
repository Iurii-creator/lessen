const fs = require("fs");

let todos = [
    {
        number: 1, 
        title: "feed cat",
        completed: true,
    },
    {
        number: 2,
        title: "buy products",
        completed: false,
    },
    {
        number: 3,
        title: "watch TV",
        completed: false,
    }

];

fs.writeFileSync("todos.json", JSON.stringify(todos));