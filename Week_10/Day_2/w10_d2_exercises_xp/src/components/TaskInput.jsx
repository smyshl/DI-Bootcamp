import { useContext, useRef } from "react"



export default function TaskInput(){

    const { dispatch } = useContext(TasksContext);
    const inputRef = useRef();

    const addTask = () => {
        const task_name = inputRef.current.value;
        dispatch({ type: ADD_TASK, payload: task_name });
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return (
        <>
            <h3>Add task</h3>

            <input ref={inputRef}></input>
            <button onClick={addTask}>Add task</button>
        </>
    )
};