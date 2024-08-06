import { useContext } from "react";



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