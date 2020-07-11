const readlineSync = require("readline-sync");
const fs = require("fs");

init();

while (true) {
    let str = readlineSync.question("> ");
    let words = str.split(" ");
    let command = words[0];

    if (command === "list-uncompleted") {
        list("uncompleted");
        //
    } else if (command === "list-all") {
        list("all");
        //
    } else if (command === "list-completed") {
        list("completed");
        //
    } else if (command === "add") {
        let title = words.slice(1).join(" ");
        add(title);
        //
    } else if (command === "remove") {
        let number = parseInt(words.slice(1).join(" "));
        remove(number);
        //
    } else if (command === "toggle") {
        let number = parseInt(words.slice(1).join(" "));
        toggle(number);
        //
    } else if (command === "clear") {
        clear();
        //
    } else if (command === "search") {
        let str = words.slice(1).join(" ");
        search(str);
        //
    } else if (command === "exit") {
        break;
        //
    } else {
        console.log("wrong command");
    }
}



function loadTodos() {
    return JSON.parse(fs.readFileSync("todos.json"));
}

function saveTodos(todos) {
    fs.writeFileSync("todos.json", JSON.stringify(todos));
}

function savenewTodos(newtodos) {
    fs.writeFileSync("todos.json", JSON.stringify(newtodos));
}

function init() {
    if (!fs.existsSync("todos.json")) {
        let todos = [
            {
                title: "feed cat",
                completed: true,
            },
            {
                title: "buy products",
                completed: false,
            },
            {
                title: "watch TV",
                completed: false,
            }

        ];

        saveTodos(todos)
    }
}

function list(type) {
    let todos = loadTodos()
    let num = 0;

    for (let cas of todos) {
        num = num + 1;
        if (type === "all" || (type === "uncompleted" && !cas.completed)) {

            console.log((type === "uncompleted" ? "" :
                              cas.completed ? "[x]" :
                                              "[ ]") + " " + num + ". " + cas.title);
        } else if (type === "completed" && cas.completed) {
            console.log(num + ". " + cas.title);
        }
    }
}

function add(title) {
    let todos = loadTodos()

    let todo = {
        title: title,
        completed: false,
    }

    todos.push(todo);

    saveTodos(todos);

    console.log("done!");
}

function remove(number) {

    let todos = loadTodos()

    let readStr;

    if (todos.includes(todos[number - 1])) {
        todos.splice((number - 1), 1);
        saveTodos(todos);
        console.log("done!");
    } else {
        console.log("wrong number")
    }

}

function clear() {

    let todos = loadTodos()
    let newtodos = todos.filter(todo => todo.completed === false);
    
    savenewTodos(newtodos)

    console.log(todos.filter(todo => todo.completed === true).length + " " + "todos removed")

}

function toggle(number) {

    let todos = loadTodos()
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

                console.log(readStr + " " + (i + 1) + "." + todos[i].title);
            }
        }
    }
    saveTodos(todos)
}

function search(str) {
    let todos = loadTodos()

    let re = new RegExp(str , "gi" )
   

    console.log( todos.replace(todos.title.filter(str => re === str) , chalk.red(todos.title.filter(str => re === str))));
    

    console.log("no matched todos");
}