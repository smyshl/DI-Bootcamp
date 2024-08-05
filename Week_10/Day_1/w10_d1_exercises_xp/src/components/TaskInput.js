import { useContext, useRef } from "react"
import { ADD_TASK, TasksContext } from "./Exercise_3"


export default function TaskInput(){

    const { dispatch } = useContext(TasksContext);
    const inputRef = useRef();

    console.log(dispatch);
    

    const addTask = () => {
        const task_name = inputRef.current.value;
        dispatch({ type: ADD_TASK, payload: task_name });
        inputRef.current.value = '';
    }


    return (
        <>
            <h3>Add task</h3>

            <input ref={inputRef}></input>
            <button onClick={addTask}>Add task</button>
        </>
    )
};