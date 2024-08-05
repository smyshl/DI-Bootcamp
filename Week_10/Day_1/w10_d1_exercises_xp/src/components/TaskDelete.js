import { useContext } from "react";
import { DELETE_TASK, TasksContext } from "./Exercise_3";


export default function TaskDelete (props) {

    const { dispatch } = useContext(TasksContext);

    const deleteTask = () => {
        dispatch({ type: DELETE_TASK, payload: props.id });
    };    

    return (
        <>
            <button onClick={deleteTask}> - </button>            
        </>
    );
};