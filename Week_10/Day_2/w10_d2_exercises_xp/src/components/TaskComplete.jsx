import { useRef, useEffect } from "react";
import { connect } from "react-redux";

import { completeTask } from "../redux/actions.js";
// import { COMPLETE_TASK, TasksContext } from "./Exercise_3";


export function TaskComplete (props) {

    // const [ taskCompleted, setTaskCompleted ] = useState(props.props_complete.completed)

    const checkBoxRef = useRef();
    
    const completeTaskHandle = () => {
        // dispatch({ type: COMPLETE_TASK, payload: {id: props.id, completed: checkBoxRef.current.checked} });
        props.completeTask({id: props.props_complete.id, completed: checkBoxRef.current.checked})
    };


    // useEffect (() => {
    //     console.log("TaskComplete =>", props.props_complete);
    // }, [])

    useEffect(() => {
                // console.log("TaskComplete =>", props);
        checkBoxRef.current.checked = props.props_complete.completed;               
        // checkBoxRef.current.checked = taskCompleted;
    // }, [taskCompleted])
    }, [])

    return (
        <>
            <input type="checkbox" ref={checkBoxRef} onChange={completeTaskHandle}></input>            
        </>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        completeTask: (val) => dispatch(completeTask(val)),
    };
};


export default connect(null, mapDispatchToProps)(TaskComplete);