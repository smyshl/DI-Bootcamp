/*
Exercise 4: Todo List using ES6 module syntax
Instructions
    Create a directory named todoApp.
    Inside the todoApp directory, create two files: todo.js and app.js.
    In todo.js, define an ES6 module that exports a TodoList class.
    The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
    Export the TodoList class.
    In app.js, import the TodoList class from the todo.js module.
    Create an instance of the TodoList class.
    Add a few tasks, mark some as complete, and list all tasks.
    Run app.js and verify that the todo list operations are working correctly.
*/


export class TodoList{
    constructor () {
        this.all = [];
    };

    add_task(name){
        this.all.push({"name": name, "status": "ongoing"});
    };

    mark_complete(task_name){
        let task = this.all.find(item => item.name === task_name);
        task.status = "completed";
    };

    list_all(){
        console.log("List of all tasks:");
        console.table(this.all);
    }
};
