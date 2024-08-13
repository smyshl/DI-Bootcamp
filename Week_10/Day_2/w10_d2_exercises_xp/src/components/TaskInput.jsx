import { useContext, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { addTask, filterTaskByName } from "../redux/actions";

// import { ADD_TASK, addTask } from "../redux/actions";
// import store from "../redux/store";

// console.log(store.getState().taskReducer.tasks);


export function TaskInput (props) {
    // console.log("TaskInput props:", props);
    // console.log(props.tasks);
   
    const inputRef = useRef();

    useEffect (() => {
        console.log("TaskInput =>", props);
        
    }, [props])

    // const _addTask = () => {
    //     console.log("TaskInput props:", props.tasks);
        
    //     props.dispatch(addTask())
        // const task_name = inputRef.current.value;
        // props.dispatch(addTask(task_name));
        // inputRef.current.value = '';
        // inputRef.current.focus();
    // };

    const addTask = () => {
        const task_name = inputRef.current.value;
        props.addTask(task_name)
        // dispatch({ type: ADD_TASK, payload: task_name });
        inputRef.current.value = '';
        filterTasksByName();        
        inputRef.current.focus();
    };

    const filterTasksByName = () =>  {
        const nameInput = inputRef.current.value;
        // dispatch({type: FILTER_TASK_BY_NAME, payload: nameInput})
        props.filterTaskByName(nameInput);
    };




    return (
        <>
            <h3>Add task</h3>

            <div><div>{props.tasks[0].name}</div></div>
            <input ref={inputRef} onChange={filterTasksByName}></input>
            <button onClick={addTask}>Add task</button>
        </>
    )
};


const mapStateToProps = (state) => {
    return {
      tasks: state.taskReducer.tasks,
    };
  };


const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (val) => dispatch(addTask(val)),
        filterTaskByName: (val) => dispatch(filterTaskByName(val))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);



// function mapStateToProps (state) {
//     return {
//         tasks: state.taskReducer.tasks,
//     }
// };

// const mapDispatchToProps = {

//         addTask,

// };

// export default connect(mapStateToProps)(TaskInput);



