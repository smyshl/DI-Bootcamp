import { v4 as uuid4 } from 'uuid';

export const ADD_TASK = "add_task";
export const LIST_TASK = "list_task";
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
            name: val,
        },
    };
};






// export default addTask;