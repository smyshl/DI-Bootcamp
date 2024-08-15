import { v4 as uuid4 } from 'uuid';

export const ADD_TASK = "add_task";
export const DELETE_TASK = "delete_task";
export const COMPLETE_TASK = "complete_task";
export const EDIT_TASK = "edit_task";
export const FILTER_TASK_BY_NAME = "filter_task_by_name";
export const FILTER_TASK_BY_COMPLETED = "filter_task_by_completed";


export const addTask = (val) => {
    return {
        type: ADD_TASK,
        payload: {
            id: uuid4(),
            name: val,
            completed: false,
        },
    };
};


export const filterTaskByName = (val) => {
    return {
        type: FILTER_TASK_BY_NAME,
        payload: {
            filterByName: val,
        },
    };
};


export const completeTask = (val) => {
    return {
        type: COMPLETE_TASK,
        payload: {
            id: val.id,
            completed: val.completed,
        },
    };
};


export const editTask = (val) => {
    return {
        type: EDIT_TASK,
        payload: {
            id: val.id,
            name: val.name,
        },
    };
};


export const deleteTask = (val) => {
    return {
        type: DELETE_TASK,
        payload: {
            id: val,
        },
    };
};


export const filterTaskByCompleted = (val) => {
    return {
        type: FILTER_TASK_BY_COMPLETED,
        payload: {
            filterByCompleted: val,
        },
    };
};
