import { connect } from "react-redux";

import { deleteTask } from "../redux/actions.js";


export function TaskDelete (props) {

    const deleteTask = () => {
        console.log("TaskDelete =>", props);
        
        props.deleteTask(props.id);
    };    

    return (
        <>
            <button onClick={deleteTask}> - </button>            
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (val) => dispatch(deleteTask(val)),
    };
};


export default connect(null, mapDispatchToProps)(TaskDelete);


    // const deleteTask = () => {
    //     dispatch({ type: DELETE_TASK, payload: props.id });
    // };    

    // return (
    //     <>
    //         <button onClick={deleteTask}> - </button>            
    //     </>
    // );
// };