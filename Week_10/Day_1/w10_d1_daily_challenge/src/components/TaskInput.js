import { useContext, useRef } from "react"
import { ADD_TASK, FILTER_TASK_BY_NAME, TasksContext } from "./Exercise_3"


export default function TaskInput(){

    const { state, dispatch } = useContext(TasksContext);
    const inputRef = useRef();

    const addTask = () => {
        const task_name = inputRef.current.value;
        dispatch({ type: ADD_TASK, payload: task_name });
        inputRef.current.value = '';
        filterTasksByName();        
        inputRef.current.focus();
    };

    const filterTasksByName = () =>  {
        const nameInput = inputRef.current.value;
        dispatch({type: FILTER_TASK_BY_NAME, payload: nameInput})
    };

    return (
        <>
            <h3>Add task</h3>

            <input ref={inputRef} onChange={filterTasksByName}></input>
            <button onClick={addTask}>Add task</button>
        </>
    )
};