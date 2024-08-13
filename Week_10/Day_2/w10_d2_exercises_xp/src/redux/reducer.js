import { v4 as uuid4 } from "uuid";

import {
    ADD_TASK,
    LIST_TASK,
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
    let filteredTasks;

    switch (action.type) {
        case ADD_TASK:
            allTasks = [...state.tasks];
            allTasks.push({id: uuid4(), name: action.payload, completed: false})
        return {...state, tasks: allTasks};

        
        case FILTER_TASK_BY_NAME:
            return {...state, filterByName: action.payload}; 

        default:
            return state;
    }
};

export default taskReducer;