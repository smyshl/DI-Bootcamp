import { useReducer, createContext } from "react";
import { v4 as uuid4 } from "uuid";

import TaskInput from "./TaskInput";
import TaskList from "./TaskList";


export const ADD_TASK = "add_task";
export const LIST_TASK = "list_task";
export const DELETE_TASK = "delete_task";

export const initialState = {
    tasks: [],
}

export const TasksContext = createContext();


export function tasksReducer (state, action) {
    switch (action.type) {
        case ADD_TASK:
            const all_tasks = [...state.tasks];
            all_tasks.push({id: uuid4(), name: action.payload, completed: false})
        return {...state, tasks: all_tasks};
    
        default:
            break;
    }
}


function Exercise_3() {

    const [state, dispatch] = useReducer(tasksReducer, initialState);

    return (
        <TasksContext.Provider value={{state, dispatch}}>
        <div>
            <h2 style={{ textDecoration: 'underline' }}>Exercise 3. Todo List</h2>
        </div>
        <TaskInput />
        <TaskList />


        </TasksContext.Provider>
    )
};

export default Exercise_3;