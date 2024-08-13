import { connect } from 'react-redux';

import { useEffect } from 'react';

import TaskInput from "./TaskInput.jsx";
// import { TaskList } from "./TaskList.jsx";


export function TaskApp (props) {


    useEffect (() => {
        console.log('TaskApp =>', props.tasks[0].name);
        
    }, [])

    return (
        <>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>Basic Todo List with React-Redux</h2>
            </div>
            <div>{props.tasks[0].name}</div>
            <div>
                <TaskInput />
                {/* <TaskCompleteFilter /> */}
            </div>
            
            <div id="table">
                {/* <TaskList /> */}
            </div>


        </>
    )
};


const mapStateToProps = (state) => {
    return {
      tasks: state.taskReducer.tasks,
    };
  };

export default connect(mapStateToProps)(TaskApp);