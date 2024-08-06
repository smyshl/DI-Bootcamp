import { useContext, useRef, useState, useEffect } from "react";
import { COMPLETE_TASK, TasksContext } from "./Exercise_3";


export default function TaskComplete ({props}) {

    const { dispatch } = useContext(TasksContext);
    const [ taskCompleted, setTaskCompleted ] = useState(props.completed)

    const checkBoxRef = useRef();
    
    const completeTask = () => {
        setTaskCompleted(checkBoxRef.current.checked);
        dispatch({ type: COMPLETE_TASK, payload: {id: props.id, completed: taskCompleted} });
    };

    useEffect(() => {
        checkBoxRef.current.checked = taskCompleted;
    }, [taskCompleted])

    return (
        <>
            <input type="checkbox" ref={checkBoxRef} onChange={completeTask}></input>            
        </>
    );
};