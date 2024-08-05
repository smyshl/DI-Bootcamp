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
            const allTasks = [...state.tasks];
            allTasks.push({id: uuid4(), name: action.payload, completed: false})
        return {...state, tasks: allTasks};

        case DELETE_TASK:
            const notDeletedTasks = state.tasks.filter((item) => item.id !== action.payload);
            return {...state, tasks: notDeletedTasks}; 
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
            <TaskList />
        </TasksContext.Provider>
    )
};

export default Exercise_3;