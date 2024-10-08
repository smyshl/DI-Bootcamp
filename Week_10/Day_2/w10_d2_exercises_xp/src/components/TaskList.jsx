import { connect } from "react-redux";

import TaskDelete from "./TaskDelete.jsx";
import TaskComplete from "./TaskComplete.jsx";
import TaskEdit from "./TaskEdit.jsx";


const filterByName = (_tasks, _name) => {
    const filteredTasks = _tasks.filter((item) => item.name.toLowerCase().includes(_name.toLowerCase()));
    return filteredTasks; 
};


const filterByCompleted = (_tasks, _status) => {
    const filteredTasks = _tasks.filter((item) => item.completed === _status);
    return filteredTasks; 
};


export function TaskList(props){

    let filteredTasks = [...props.tasks];

    if (props.filterByName !== '') filteredTasks = filterByName(filteredTasks, props.filterByName)

    if (props.filterByCompleted !== 'not') filteredTasks = filterByCompleted(filteredTasks, props.filterByCompleted)

    return (
        <div id="taskListWrapper">

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th id="tableHeaderName">Name</th>
                        <th>Completed</th>
                        <th id="tableHeaderEdit">Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                {
                filteredTasks.map((item, index) => {
                    return (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td className="tableNameCol">{item.name}</td>
                        <td><TaskComplete props_complete={{id: item.id, completed: item.completed}} /></td>
                        <td><TaskEdit props_edit={{id: item.id, name: item.name}}/></td>
                        <td><TaskDelete id={item.id}/></td>
                    </tr>                    
                )})
                }

                </tbody>
            </table>

        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer.tasks,
        filterByName: state.taskReducer.filterByName,
        filterByCompleted: state.taskReducer.filterByCompleted,
    };
  };


export default connect(mapStateToProps)(TaskList);