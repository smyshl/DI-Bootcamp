import { v4 as uuid4 } from 'uuid';

export const ADD_TASK = "add_task";
export const LIST_TASK = "list_task";
export const DELETE_TASK = "delete_task";
export const COMPLETE_TASK = "complete_task";
export const EDIT_TASK = "edit_task";


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