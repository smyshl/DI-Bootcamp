import { connect } from 'react-redux';

import TaskInput from "./TaskInput.jsx";
import TaskList from "./TaskList.jsx";
import TaskCompleteFilter from './TaskCompleteFilter.jsx';


export function TaskApp (props) {

    return (
        <>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>Basic Todo List with React-Redux and Redux Toolkit</h2>
            </div>
            <div>
                <TaskInput />
                <TaskCompleteFilter />
            </div>
            
            <div id="table">
                <TaskList />
            </div>


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

export default connect(mapStateToProps)(TaskApp);