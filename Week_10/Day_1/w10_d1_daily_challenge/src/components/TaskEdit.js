import { useContext, useState, useRef, useEffect } from "react";
import { EDIT_TASK, TasksContext } from "./Exercise_3";


export default function TaskEdit ({props}) {

    const { dispatch } = useContext(TasksContext);
    const [ edit, setEdit] = useState(false);
    const inputRef = useRef();

    const showEdit = () => {
        setEdit(true);
    };
    
    const updateTask =() => {
        const newTaskName = inputRef.current.value
        dispatch({ type: EDIT_TASK, payload: {id: props.id, name: newTaskName} });
        setEdit(false);
    }


    useEffect(() => {
        if (edit) inputRef.current.value = props.name;
    }, [edit])
    

    if (!edit) {
    return (
        <>
            <button onClick={showEdit}>Edit</button>     
        </>
    );
    } else {
        return (
            <>
            <input ref={inputRef}></input><br />
            <button onClick={updateTask}>Update</button>
            </>
        )
    }

};