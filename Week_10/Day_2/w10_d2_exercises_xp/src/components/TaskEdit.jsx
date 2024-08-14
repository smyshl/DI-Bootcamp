import { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import { editTask } from "../redux/actions.js";



export function TaskEdit (props) {


    const [ edit, setEdit] = useState(false);
    const inputRef = useRef();

    const showEdit = () => {
        // console.log(inputRef);
        
        
        setEdit(true);
    };
    
    const updateTask =() => {
        const newTaskName = inputRef.current.value
     
        props.editTask( {id: props.props_edit.id, name: newTaskName} );
        setEdit(false);
    }

    // useEffect(() => {
    //     console.log("TaskEdit =>", props);
    // }, [])



    useEffect(() => {
        if (edit) {
            inputRef.current.value = props.props_edit.name;
            inputRef.current.focus();
        };             
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


const mapDispatchToProps = (dispatch) => {
    return {
        editTask: (val) => dispatch(editTask(val)),
    };
};


export default connect(null, mapDispatchToProps)(TaskEdit);



    // const { dispatch } = useContext(TasksContext);
    // const [ edit, setEdit] = useState(false);
    // const inputRef = useRef();

    // const showEdit = () => {
    //     setEdit(true);
    // };
    
    // const updateTask =() => {
    //     const newTaskName = inputRef.current.value
    //     dispatch({ type: EDIT_TASK, payload: {id: props.id, name: newTaskName} });
    //     setEdit(false);
    // }


    // useEffect(() => {
    //     if (edit) inputRef.current.value = props.name;
    // }, [edit])
    

    // if (!edit) {
    // return (
    //     <>
    //         <button onClick={showEdit}>Edit</button>     
    //     </>
    // );
    // } else {
    //     return (
    //         <>
    //         <input ref={inputRef}></input><br />
    //         <button onClick={updateTask}>Update</button>
    //         </>
    //     )
    // }

// };