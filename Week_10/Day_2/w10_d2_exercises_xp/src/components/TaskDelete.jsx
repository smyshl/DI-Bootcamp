import { connect } from "react-redux";

import { deleteTask } from "../redux/actions.js";


export function TaskDelete (props) {

    const deleteTask = () => {        
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