import { useContext, useRef } from "react"
import { connect } from "react-redux";

import { ADD_TASK, addTask } from "../redux/actions";



export function TaskInput(props){
    console.log("TaskInput props:", props);
    console.log(props.tasks);
    

    const inputRef = useRef();

    const _addTask = () => {
        console.log("TaskInput props:", props);        
        const task_name = inputRef.current.value;
        props.dispatch(addTask(task_name));
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return (
        <>
            <h3>Add task</h3>

            <input ref={inputRef}></input>
            <button onClick={_addTask}>Add task</button>
        </>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        tasks: state.taskReducer.tasks,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask,
    };
};

export default connect(mapDispatchToProps, mapStateToProps)(TaskInput);



