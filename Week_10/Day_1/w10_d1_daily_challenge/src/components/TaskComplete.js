import { useContext, useRef } from "react";
import { COMPLETE_TASK, TasksContext } from "./Exercise_3";


export default function TaskComplete ({props}) {

    const { dispatch } = useContext(TasksContext);

    const checkBoxRef = useRef();

    // inputRef.current.checked = props.completed;

    // console.log(props.completed);
    

    const completeTask = () => {
        // console.log(checkBoxRef.current.value);
        // setInterval(() => checkBoxRef.current.checked = !checkBoxRef.current.checked, 1000)
        // checkBoxRef.current.checked = !checkBoxRef.current.checked
        
        const taskStatus = checkBoxRef.current.checked;
        dispatch({ type: COMPLETE_TASK, payload: {id: props.id, completed: taskStatus} });
    };    

    return (
        <>
            <input type="checkbox" ref={checkBoxRef} onChange={completeTask}></input>            
        </>
    );
};