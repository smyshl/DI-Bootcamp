import { v4 as uuid4 } from "uuid";

import {
    ADD_TASK,
    DELETE_TASK,
    COMPLETE_TASK,
    EDIT_TASK,
    FILTER_TASK_BY_NAME,
    FILTER_TASK_BY_COMPLETED
} from './actions.js';

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
    filterByName: '',
    filterByCompleted: 'not'
}


const taskReducer = (state = initialState, action) => {
    let allTasks;
    let taskIndex;

    switch (action.type) {
        case ADD_TASK:
            // allTasks = [...state.tasks];

            allTasks = JSON.parse(JSON.stringify(state.tasks));

            allTasks.push({id: uuid4(), name: action.payload.name, completed: false})
            return {...state, tasks: allTasks};

        case DELETE_TASK:
            const notDeletedTasks = state.tasks.filter((item) => item.id !== action.payload.id);
            return {...state, tasks: notDeletedTasks}; 

        case EDIT_TASK:
            // allTasks = [...state.tasks];
            allTasks = JSON.parse(JSON.stringify(state.tasks));
            // console.log("TaskReducer-edit =>", allTasks);  

            taskIndex = allTasks.findIndex((item) => item.id === action.payload.id);
            allTasks[taskIndex].name = action.payload.name;
            return {...state, tasks: allTasks};


        case COMPLETE_TASK:
            // allTasks = [...state.tasks];
            // console.log("taskReducer =>", action.payload.id, action.payload.completed);

            allTasks = JSON.parse(JSON.stringify(state.tasks));
            // console.log("TaskReducer-complete =>", allTasks);            

            taskIndex = allTasks.findIndex((item) => item.id === action.payload.id);
            allTasks[taskIndex].completed = action.payload.completed;
            return {...state, tasks: allTasks}; 

        
        case FILTER_TASK_BY_NAME:
            // console.log("taskReducer filter by name=>", action.payload, state);
            return {...state, filterByName: action.payload.filterByName}; 

        case FILTER_TASK_BY_COMPLETED:
            return {...state, filterByCompleted: action.payload.filterByCompleted};      

        default:
            return state;
    }
};

export default taskReducer;