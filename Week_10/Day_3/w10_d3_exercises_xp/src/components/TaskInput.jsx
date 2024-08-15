import { useRef } from "react";
import { connect } from "react-redux";
import { addTask, filterTaskByName } from "../redux/actions.js";


export function TaskInput (props) {
   
    const inputRef = useRef();

    const addTask = () => {
        const task_name = inputRef.current.value;
        props.addTask(task_name)
        inputRef.current.value = '';
        filterTasksByName();        
        inputRef.current.focus();
    };

    const filterTasksByName = () =>  {
        const nameInput = inputRef.current.value;
        props.filterTaskByName(nameInput);
    };


    return (
        <>
            <h3>Add task</h3>
            <input ref={inputRef} onChange={filterTasksByName}></input>
            <button onClick={addTask}>Add task</button>
        </>
    )
};


const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer.tasks,
        filterByName: state.taskReducer.filterByName,
        filterByCompleted: state.taskReducer.filterByCompleted,
    };
  };


const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (val) => dispatch(addTask(val)),
        filterTaskByName: (val) => dispatch(filterTaskByName(val))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);