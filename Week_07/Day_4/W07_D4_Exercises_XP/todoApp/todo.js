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
