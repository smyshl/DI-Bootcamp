import { useReducer, createContext } from "react";
import { v4 as uuid4 } from "uuid";

import TaskInput from "./TaskInput";
import TaskList from "./TaskList";


export const ADD_TASK = "add_task";
export const LIST_TASK = "list_task";
export const DELETE_TASK = "delete_task";
export const COMPLETE_TASK = "complete_task";
export const EDIT_TASK = "edit_task";

export const initialState = {
    tasks: [
        {
            id: 1,
            name: "To do Exercises XP",
            completed: true,
        },
        {
            id: 2,
            name: "To do Daily Challenge",
            completed: false,
        },
    ],
}

export const TasksContext = createContext();


export function tasksReducer (state, action) {
    let allTasks;
    let taskIndex;

    switch (action.type) {
        case ADD_TASK:
            allTasks = [...state.tasks];
            allTasks.push({id: uuid4(), name: action.payload, completed: false})
        return {...state, tasks: allTasks};

        case DELETE_TASK:
            const notDeletedTasks = state.tasks.filter((item) => item.id !== action.payload);
            return {...state, tasks: notDeletedTasks}; 

        case COMPLETE_TASK:
            allTasks = [...state.tasks];
            taskIndex = allTasks.findIndex((item) => item.id === action.payload.id);
            allTasks[taskIndex].completed = action.payload.completed;
            return {...state, tasks: allTasks}; 

        case EDIT_TASK:
            allTasks = [...state.tasks];
            taskIndex = allTasks.findIndex((item) => item.id === action.payload.id);
            allTasks[taskIndex].name = action.payload.name;
            return {...state, tasks: allTasks};             

    }
}


function Exercise_3() {

    const [state, dispatch] = useReducer(tasksReducer, initialState);

    return (
        <TasksContext.Provider value={{state, dispatch}}>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>Enhanced Task Manager</h2>
            </div>
            <TaskInput />
            <div id="table">
                <TaskList />
            </div>

        </TasksContext.Provider>
    )
};

export default Exercise_3;