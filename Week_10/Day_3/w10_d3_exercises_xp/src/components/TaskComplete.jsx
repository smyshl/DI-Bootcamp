import { useRef, useEffect } from "react";
import { connect } from "react-redux";

import { completeTask } from "../redux/actions.js";


export function TaskComplete (props) {

    const checkBoxRef = useRef();
    
    const completeTaskHandle = () => {
        props.completeTask({id: props.props_complete.id, completed: checkBoxRef.current.checked})
    };

    useEffect(() => {
        checkBoxRef.current.checked = props.props_complete.completed;               
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