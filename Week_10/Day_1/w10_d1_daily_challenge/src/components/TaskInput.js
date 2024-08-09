import { useContext, useRef } from "react"
import { ADD_TASK, FILTER_TASK_BY_NAME, TasksContext } from "./Exercise_3"


export default function TaskInput(){

    const { dispatch } = useContext(TasksContext);
    const inputRef = useRef();

    const addTask = () => {
        const task_name = inputRef.current.value;
        dispatch({ type: ADD_TASK, payload: task_name });
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    const filterTasksByName = () =>  {
        const nameInput = inputRef.current.value;
        console.log("from InputComponent", nameInput, typeof nameInput);

    }


    return (
        <>
            <h3>Add task</h3>

            <input ref={inputRef} onChange={filterTasksByName}></input>
            <button onClick={addTask}>Add task</button>
        </>
    )
};