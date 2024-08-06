import {
    ADD_TASK,
    LIST_TASK,
    DELETE_TASK,
    COMPLETE_TASK,
    EDIT_TASK
} from './actions.js';

const initialState = {
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
};


export const taskReducer = (state = initialState, action) => {
    let allTasks;
    let taskIndex;

    switch (action.type) {
        case ADD_TASK:            
            allTasks = [...state.tasks];
            allTasks.push(action.payload)
        return {...state, tasks: allTasks};
    
        default:
            break;
    }
};