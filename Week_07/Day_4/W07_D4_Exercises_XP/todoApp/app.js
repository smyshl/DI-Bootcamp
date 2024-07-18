import {TodoList} from "./todo.js";

let todo_list_1 = new TodoList;

todo_list_1.add_task("Solve Exercises XP");
todo_list_1.add_task("Finish updating CV");
todo_list_1.add_task("Buy food");
todo_list_1.add_task("Do exercises");

todo_list_1.mark_complete("Finish updating CV");

todo_list_1.list_all();